window.BENCHMARK_DATA = {
  "lastUpdate": 1787491260675,
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
      }
    ]
  }
}