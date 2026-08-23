window.BENCHMARK_DATA = {
  "lastUpdate": 1787491257656,
  "repoUrl": "https://github.com/comunica/comunica",
  "entries": {
    "Benchmarks detailed results": [
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
        "date": 1787491256163,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File - C1",
            "value": 227,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - C2",
            "value": 2543,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - C3",
            "value": 1981,
            "unit": "ms",
            "extra": "Results: [48802,48802,48802,48802,48802]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F1",
            "value": 13,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F2",
            "value": 33,
            "unit": "ms",
            "extra": "Results: [0,0,1,1,1]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F3",
            "value": 72,
            "unit": "ms",
            "extra": "Results: [2,2,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F4",
            "value": 30,
            "unit": "ms",
            "extra": "Results: [0,0,12,12,12]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F5",
            "value": 74,
            "unit": "ms",
            "extra": "Results: [32,32,40,56,22]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L1",
            "value": 12,
            "unit": "ms",
            "extra": "Results: [1,5,5,1,5]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L2",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [3,3,3,40,3]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L3",
            "value": 8,
            "unit": "ms",
            "extra": "Results: [69,33,12,12,69]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L4",
            "value": 3,
            "unit": "ms",
            "extra": "Results: [6,7,6,6,6]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L5",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [1,4,4,22,1]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S1",
            "value": 28,
            "unit": "ms",
            "extra": "Results: [4,0,7,4,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S2",
            "value": 8,
            "unit": "ms",
            "extra": "Results: [2,1,1,2,1]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S3",
            "value": 25,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S4",
            "value": 26,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S5",
            "value": 3,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S6",
            "value": 3,
            "unit": "ms",
            "extra": "Results: [1,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S7",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-TPF - C1",
            "value": 1004,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [940,940,940,940,940]"
          },
          {
            "name": "WatDiv-TPF - C2",
            "value": 2885,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [2191,2191,2191,2191,2191]"
          },
          {
            "name": "WatDiv-TPF - C3",
            "value": 17124,
            "unit": "ms",
            "extra": "Results: [48802,48802,48802,48802,48802]; Error: [false,false,false,false,false]; HTTP Requests: [20454,20454,20454,20454,20454]"
          },
          {
            "name": "WatDiv-TPF - F1",
            "value": 64,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [43,43,43,43,43]"
          },
          {
            "name": "WatDiv-TPF - F2",
            "value": 338,
            "unit": "ms",
            "extra": "Results: [0,0,1,1,1]; Error: [false,false,false,false,false]; HTTP Requests: [444,84,381,381,381]"
          },
          {
            "name": "WatDiv-TPF - F3",
            "value": 219,
            "unit": "ms",
            "extra": "Results: [2,2,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [274,274,19,229,190]"
          },
          {
            "name": "WatDiv-TPF - F4",
            "value": 268,
            "unit": "ms",
            "extra": "Results: [0,0,12,12,12]; Error: [false,false,false,false,false]; HTTP Requests: [305,305,296,296,296]"
          },
          {
            "name": "WatDiv-TPF - F5",
            "value": 398,
            "unit": "ms",
            "extra": "Results: [32,32,40,56,22]; Error: [false,false,false,false,false]; HTTP Requests: [338,338,400,594,189]"
          },
          {
            "name": "WatDiv-TPF - L1",
            "value": 67,
            "unit": "ms",
            "extra": "Results: [1,5,5,1,5]; Error: [false,false,false,false,false]; HTTP Requests: [42,44,56,40,56]"
          },
          {
            "name": "WatDiv-TPF - L2",
            "value": 28,
            "unit": "ms",
            "extra": "Results: [3,3,3,40,3]; Error: [false,false,false,false,false]; HTTP Requests: [10,10,10,15,10]"
          },
          {
            "name": "WatDiv-TPF - L3",
            "value": 54,
            "unit": "ms",
            "extra": "Results: [69,33,12,12,69]; Error: [false,false,false,false,false]; HTTP Requests: [35,34,48,48,35]"
          },
          {
            "name": "WatDiv-TPF - L4",
            "value": 16,
            "unit": "ms",
            "extra": "Results: [6,7,6,6,6]; Error: [false,false,false,false,false]; HTTP Requests: [5,5,5,5,5]"
          },
          {
            "name": "WatDiv-TPF - L5",
            "value": 32,
            "unit": "ms",
            "extra": "Results: [1,4,4,22,1]; Error: [false,false,false,false,false]; HTTP Requests: [10,10,10,15,10]"
          },
          {
            "name": "WatDiv-TPF - S1",
            "value": 315,
            "unit": "ms",
            "extra": "Results: [4,0,7,4,0]; Error: [false,false,false,false,false]; HTTP Requests: [410,346,1003,410,794]"
          },
          {
            "name": "WatDiv-TPF - S2",
            "value": 74,
            "unit": "ms",
            "extra": "Results: [2,1,1,2,1]; Error: [false,false,false,false,false]; HTTP Requests: [155,80,80,155,80]"
          },
          {
            "name": "WatDiv-TPF - S3",
            "value": 17,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [7,7,7,7,7]"
          },
          {
            "name": "WatDiv-TPF - S4",
            "value": 26,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [14,14,79,14,14]"
          },
          {
            "name": "WatDiv-TPF - S5",
            "value": 18,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [7,7,7,7,7]"
          },
          {
            "name": "WatDiv-TPF - S6",
            "value": 20,
            "unit": "ms",
            "extra": "Results: [1,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [96,4,18,14,6]"
          },
          {
            "name": "WatDiv-TPF - S7",
            "value": 9,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [4,4,4,4,10]"
          },
          {
            "name": "BSBM-File - 1",
            "value": 5,
            "unit": "ms",
            "extra": "Results: [0.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 2",
            "value": 18,
            "unit": "ms",
            "extra": "Results: [19.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 3",
            "value": 8,
            "unit": "ms",
            "extra": "Results: [0.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 4",
            "value": 9,
            "unit": "ms",
            "extra": "Results: [0]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 5",
            "value": 174,
            "unit": "ms",
            "extra": "Results: [3.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 6",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [undefined]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 7",
            "value": 39,
            "unit": "ms",
            "extra": "Results: [9.38]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 8",
            "value": 25,
            "unit": "ms",
            "extra": "Results: [5.05]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 9",
            "value": 22,
            "unit": "ms",
            "extra": "Results: [629.48]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 10",
            "value": 26,
            "unit": "ms",
            "extra": "Results: [2.8]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 11",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [10]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 12",
            "value": 6,
            "unit": "ms",
            "extra": "Results: [1120.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 1",
            "value": 34,
            "unit": "ms",
            "extra": "Results: [0.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 2",
            "value": 88,
            "unit": "ms",
            "extra": "Results: [19.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 3",
            "value": 51,
            "unit": "ms",
            "extra": "Results: [0.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 4",
            "value": 67,
            "unit": "ms",
            "extra": "Results: [0]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 5",
            "value": 773,
            "unit": "ms",
            "extra": "Results: [3.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 6",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [undefined]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 7",
            "value": 250,
            "unit": "ms",
            "extra": "Results: [9.38]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 8",
            "value": 218,
            "unit": "ms",
            "extra": "Results: [5.05]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 9",
            "value": 16,
            "unit": "ms",
            "extra": "Results: [629.48]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 10",
            "value": 234,
            "unit": "ms",
            "extra": "Results: [2.8]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 11",
            "value": 12,
            "unit": "ms",
            "extra": "Results: [10]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 12",
            "value": 30,
            "unit": "ms",
            "extra": "Results: [1120.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "Web - dbpedia/airports-italy",
            "value": 837,
            "unit": "ms",
            "extra": "Results: [19]; Error: [false]; HTTP Requests: [22.333333333333332]"
          },
          {
            "name": "Web - dbpedia/artists-york-filter",
            "value": 6846,
            "unit": "ms",
            "extra": "Results: [32]; Error: [false]; HTTP Requests: [516.3333333333334]"
          },
          {
            "name": "Web - dbpedia/artists-york",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [32]; Error: [true]; HTTP Requests: [516]"
          },
          {
            "name": "Web - dbpedia/authors-books",
            "value": 559,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [7.333333333333333]"
          },
          {
            "name": "Web - dbpedia/bands-queen",
            "value": 472,
            "unit": "ms",
            "extra": "Results: [9]; Error: [false]; HTTP Requests: [17]"
          },
          {
            "name": "Web - dbpedia/belgian-software",
            "value": 4182,
            "unit": "ms",
            "extra": "Results: [13]; Error: [false]; HTTP Requests: [142]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-inlaws-pp",
            "value": 559,
            "unit": "ms",
            "extra": "Results: [8]; Error: [false]; HTTP Requests: [9]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-pp",
            "value": 2553,
            "unit": "ms",
            "extra": "Results: [633]; Error: [false]; HTTP Requests: [81]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-service",
            "value": 2705,
            "unit": "ms",
            "extra": "Results: [43]; Error: [false]; HTTP Requests: [122]"
          },
          {
            "name": "Web - dbpedia/brad-pitt",
            "value": 2566,
            "unit": "ms",
            "extra": "Results: [43]; Error: [false]; HTTP Requests: [122]"
          },
          {
            "name": "Web - dbpedia/bruce-willis-pp",
            "value": 444,
            "unit": "ms",
            "extra": "Results: [3]; Error: [false]; HTTP Requests: [8]"
          },
          {
            "name": "Web - dbpedia/carpenters-crucifixion",
            "value": 222,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [3]"
          },
          {
            "name": "Web - dbpedia/common-jesus",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [1000]; Error: [true]; HTTP Requests: [1851]"
          },
          {
            "name": "Web - dbpedia/desserts-plants",
            "value": 20581,
            "unit": "ms",
            "extra": "Results: [168]; Error: [false]; HTTP Requests: [732]"
          },
          {
            "name": "Web - dbpedia/events-trentino",
            "value": 32511,
            "unit": "ms",
            "extra": "Results: [29]; Error: [false]; HTTP Requests: [1839]"
          },
          {
            "name": "Web - dbpedia/indian-dishes",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [0]; Error: [true]; HTTP Requests: [201]"
          },
          {
            "name": "Web - dbpedia/michael-jackson",
            "value": 2534,
            "unit": "ms",
            "extra": "Results: [26]; Error: [false]; HTTP Requests: [118]"
          },
          {
            "name": "Web - dbpedia/natalie-portman",
            "value": 1062,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [34]"
          },
          {
            "name": "Web - dbpedia/os-raspberrypi",
            "value": 420,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [8]"
          },
          {
            "name": "Web - dbpedia/women-mythology",
            "value": 7325,
            "unit": "ms",
            "extra": "Results: [102]; Error: [false]; HTTP Requests: [712]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit-filter",
            "value": 7089,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [346.6666666666667]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit-service",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [0]; Error: [true]; HTTP Requests: []"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit",
            "value": 6678,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [344.6666666666667]"
          },
          {
            "name": "Web - heterogeneous/lindas-rhea-identifiers",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [0]; Error: [true]; HTTP Requests: []"
          },
          {
            "name": "Web - heterogeneous/wikidata-dbpedia-cats",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [0]; Error: [true]; HTTP Requests: []"
          },
          {
            "name": "Web - other/bruce-willis-pp-cartesian",
            "value": 773,
            "unit": "ms",
            "extra": "Results: [57]; Error: [false]; HTTP Requests: [475.3333333333333]"
          },
          {
            "name": "Web - other/ruben-knows-zero-or-more",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [377]; Error: [true]; HTTP Requests: [223.33333333333334]"
          },
          {
            "name": "Web - other/ruben-knows-zero-or-one",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [377]; Error: [true]; HTTP Requests: [90.66666666666667]"
          },
          {
            "name": "Web - other/ruben-predicates",
            "value": 192,
            "unit": "ms",
            "extra": "Results: [41]; Error: [false]; HTTP Requests: [46]"
          },
          {
            "name": "Web - other/rubens-articles",
            "value": 6995,
            "unit": "ms",
            "extra": "Results: [110]; Error: [false]; HTTP Requests: [536.6666666666666]"
          }
        ]
      }
    ]
  }
}