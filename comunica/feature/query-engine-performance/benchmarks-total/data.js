window.BENCHMARK_DATA = {
  "lastUpdate": 1787496653616,
  "repoUrl": "https://github.com/comunica/comunica",
  "entries": {
    "Benchmarks total results": [
      {
        "commit": {
          "author": {
            "email": "noreply@anthropic.com",
            "name": "Claude",
            "username": "claude"
          },
          "committer": {
            "email": "noreply@anthropic.com",
            "name": "Claude",
            "username": "claude"
          },
          "distinct": true,
          "id": "f36df92f5609d8a85818c4450ec751fa9811b04a",
          "message": "Dispatch on RDF terms directly when transforming them for evaluation\n\n`TermTransformer#transformRDFTermUnsafe` wrapped every RDF term in a freshly\nallocated term expression object (`{ term, type, subType }`) only to have\n`transformTerm` immediately unwrap it and switch on `term.term.termType`. It is\ncalled for every term of every solution that reaches an expression -- FILTER,\nBIND, ORDER BY key extraction and the term comparator all go through it -- so\nthat is one throwaway object per term per solution.\n\nThe switch is now on the RDF term itself. `transformTerm` keeps its own\nvalidation and error behaviour, and `transformRDFTermUnsafe` still reports an\n`InvalidExpression` for a missing term, materialising the wrapper object only\non that error path.\n\nMeasured on a local in-memory store (rdf-stores), 20k people, median of 5 runs\nx 4 alternating A/B rounds:\n\n  SELECT ?s ?n WHERE { ?s :name ?n FILTER(STRSTARTS(?n,\"Name 1\")) }  155ms -> 135ms (-13%)\n  SELECT ?s ?a ?n WHERE { ... } ORDER BY ?a ?n                       858ms -> 763ms (-11%)\n  SELECT ?s ?n WHERE { ?s :name ?n } ORDER BY ?n ?s DESC(?n)         435ms -> 394ms ( -9%)\n  SELECT ?s ?n WHERE { ?s :name ?n } ORDER BY ?n                     229ms -> 208ms ( -9%)\n  SELECT ?s ?a WHERE { ?s :age ?a FILTER(?a > 30 && ?a < 60) }       232ms -> 216ms ( -7%)\n  SELECT ?c (COUNT(?s) AS ?cnt) WHERE { ?s :city ?c } GROUP BY ?c    344ms -> 324ms ( -6%)\n\nORDER BY benefits most because its term comparator transforms both operands of\nevery comparison, i.e. O(n log n) times per query.",
          "timestamp": "2026-08-23T12:57:46Z",
          "tree_id": "24b84b1a09ade8015f0c49f683795b7c7eb6d20e",
          "url": "https://github.com/comunica/comunica/commit/f36df92f5609d8a85818c4450ec751fa9811b04a"
        },
        "date": 1787491259242,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 5099,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 22976,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 334,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1773,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 108105,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "noreply@anthropic.com",
            "name": "Claude",
            "username": "claude"
          },
          "committer": {
            "email": "noreply@anthropic.com",
            "name": "Claude",
            "username": "claude"
          },
          "distinct": true,
          "id": "63773b4a7ef1f0aa248d1f5dae95f52a90bca751",
          "message": "Reuse one super type provider instead of one per expression evaluator\n\n`prepareEvaluatorActionContext` ran\n\n    context.setDefault(KeysExpressionEvaluator.superTypeProvider, {\n      cache: new LRUCache({ max: 1_000 }),\n      discoverer: () => 'term',\n    })\n\nwhich constructs a 1000-entry LRU cache (several typed arrays) on *every*\ncall, whether or not the value ends up being used. It is called once per\nexpression evaluator, and evaluators are created per aggregator, per ORDER BY\nkey, per FILTER, and per term comparator, so a GROUP BY with many groups builds\ntens of thousands of them.\n\nThe provider is now created once per factory actor and passed in, and it is\nonly constructed at all when the context does not already carry one. Sharing it\nis safe -- and is the point, since it is a cache: the default discoverer maps\nevery unknown datatype to 'term' regardless of context, and any caller that\nneeds different behaviour supplies its own provider through the context. It\nmirrors how `ActorContextPreprocessSetDefaults` already shares one\n`functionArgumentsCache` across queries.\n\nMeasured on a local in-memory store (rdf-stores), 20k people, median of 5 runs\nx 3 alternating A/B rounds:\n\n  SELECT ?s (COUNT(?n) AS ?cnt) WHERE { ?s :name ?n } GROUP BY ?s   2419ms -> 1571ms (-35%)\n  SELECT ?s ?x WHERE { ... BIND(CONCAT(...) AS ?x) }                 532ms ->  429ms (-19%)\n  SELECT ?s ?a ?n WHERE { ... } ORDER BY ?a ?n                       871ms ->  736ms (-16%)\n  SELECT ?s ?a WHERE { ?s :age ?a FILTER(?a > 30 && ?a < 60) }       250ms ->  214ms (-15%)\n  ... (COUNT, MIN, MAX over a 2-pattern join) ... GROUP BY ?c        675ms ->  610ms (-10%)\n  SELECT ?s WHERE { ?s :name ?n FILTER EXISTS { ?s :nick ?x } }     1520ms -> 1391ms ( -9%)\n\nBefore this change, constructing and collecting these caches accounted for 15%\nof the samples of the GROUP BY query above, on top of its 38% garbage\ncollection share.",
          "timestamp": "2026-08-23T14:33:41Z",
          "tree_id": "ed83063ae48a186365ec78ad3baa5f0b929f3797",
          "url": "https://github.com/comunica/comunica/commit/63773b4a7ef1f0aa248d1f5dae95f52a90bca751"
        },
        "date": 1787496652244,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 4664,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 26717,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 571,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1575,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 130611,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}