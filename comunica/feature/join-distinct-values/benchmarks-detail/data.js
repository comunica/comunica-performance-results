window.BENCHMARK_DATA = {
  "lastUpdate": 1793529641581,
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
          "id": "d80c3141b2785d5d688237f032ff823c95243798",
          "message": "Count distinct subjects in RDF/JS sources and keep distinct values through joins\n\nQuerySourceRdfJs now also counts the distinct subjects of a pattern with a\nfixed predicate, cached per query execution, and caps distinct value counts\nat the pattern's cardinality. Join results keep the distinct values of their\nvariables instead of dropping them, so that join cardinalities further up in\na plan can still be estimated from them.\n\nWithout distinct subject counts, a subject variable was assumed to take a\ndifferent value in every binding, so one-to-many joins such as forums with\ntheir members or posts with their tags were estimated to not multiply their\ninput. This made LDBC SNB BI7 time out, and BI9 run out of memory.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_012cgUi7SRsskNRaXEatKfnw",
          "timestamp": "2026-10-31T00:39:02Z",
          "tree_id": "0b562de8edba4fe8ce81f047a838947b9eae7d05",
          "url": "https://github.com/comunica/comunica/commit/d80c3141b2785d5d688237f032ff823c95243798"
        },
        "date": 1793408162264,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File - C1",
            "value": 26,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - C2",
            "value": 24,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - C3",
            "value": 282,
            "unit": "ms",
            "extra": "Results: [48802,48802,48802,48802,48802]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F1",
            "value": 3,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F2",
            "value": 3,
            "unit": "ms",
            "extra": "Results: [0,0,1,1,1]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F3",
            "value": 3,
            "unit": "ms",
            "extra": "Results: [2,2,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F4",
            "value": 3,
            "unit": "ms",
            "extra": "Results: [0,0,12,12,12]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F5",
            "value": 5,
            "unit": "ms",
            "extra": "Results: [32,32,40,56,22]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L1",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [1,5,5,1,5]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L2",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [3,3,3,40,3]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L3",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [69,33,12,12,69]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L4",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [6,7,6,6,6]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L5",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [1,4,4,22,1]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S1",
            "value": 3,
            "unit": "ms",
            "extra": "Results: [4,0,7,4,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S2",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [2,1,1,2,1]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S3",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S4",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S5",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S6",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [1,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S7",
            "value": 1,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - failed queries",
            "value": 0,
            "unit": "failed instantiations",
            "extra": "None"
          },
          {
            "name": "WatDiv-TPF - C1",
            "value": 762,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [940,940,940,940,940]"
          },
          {
            "name": "WatDiv-TPF - C2",
            "value": 2253,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [2191,2191,2191,2191,2191]"
          },
          {
            "name": "WatDiv-TPF - C3",
            "value": 13495,
            "unit": "ms",
            "extra": "Results: [48802,48802,48802,48802,48802]; Error: [false,false,false,false,false]; HTTP Requests: [20454,20454,20454,20454,20454]"
          },
          {
            "name": "WatDiv-TPF - F1",
            "value": 50,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [43,43,43,43,43]"
          },
          {
            "name": "WatDiv-TPF - F2",
            "value": 253,
            "unit": "ms",
            "extra": "Results: [0,0,1,1,1]; Error: [false,false,false,false,false]; HTTP Requests: [444,84,381,381,381]"
          },
          {
            "name": "WatDiv-TPF - F3",
            "value": 169,
            "unit": "ms",
            "extra": "Results: [2,2,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [274,274,19,229,190]"
          },
          {
            "name": "WatDiv-TPF - F4",
            "value": 208,
            "unit": "ms",
            "extra": "Results: [0,0,12,12,12]; Error: [false,false,false,false,false]; HTTP Requests: [305,305,296,296,296]"
          },
          {
            "name": "WatDiv-TPF - F5",
            "value": 324,
            "unit": "ms",
            "extra": "Results: [32,32,40,56,22]; Error: [false,false,false,false,false]; HTTP Requests: [338,338,400,594,189]"
          },
          {
            "name": "WatDiv-TPF - L1",
            "value": 53,
            "unit": "ms",
            "extra": "Results: [1,5,5,1,5]; Error: [false,false,false,false,false]; HTTP Requests: [42,44,56,40,56]"
          },
          {
            "name": "WatDiv-TPF - L2",
            "value": 27,
            "unit": "ms",
            "extra": "Results: [3,3,3,40,3]; Error: [false,false,false,false,false]; HTTP Requests: [10,10,10,15,10]"
          },
          {
            "name": "WatDiv-TPF - L3",
            "value": 44,
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
            "value": 30,
            "unit": "ms",
            "extra": "Results: [1,4,4,22,1]; Error: [false,false,false,false,false]; HTTP Requests: [10,10,10,15,10]"
          },
          {
            "name": "WatDiv-TPF - S1",
            "value": 286,
            "unit": "ms",
            "extra": "Results: [4,0,7,4,0]; Error: [false,false,false,false,false]; HTTP Requests: [410,346,1003,410,794]"
          },
          {
            "name": "WatDiv-TPF - S2",
            "value": 63,
            "unit": "ms",
            "extra": "Results: [2,1,1,2,1]; Error: [false,false,false,false,false]; HTTP Requests: [155,80,80,155,80]"
          },
          {
            "name": "WatDiv-TPF - S3",
            "value": 18,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [7,7,7,7,7]"
          },
          {
            "name": "WatDiv-TPF - S4",
            "value": 273,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [90,90,9,90,90]"
          },
          {
            "name": "WatDiv-TPF - S5",
            "value": 16,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [7,7,7,7,7]"
          },
          {
            "name": "WatDiv-TPF - S6",
            "value": 15,
            "unit": "ms",
            "extra": "Results: [1,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [96,4,18,14,6]"
          },
          {
            "name": "WatDiv-TPF - S7",
            "value": 8,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [4,4,4,4,10]"
          },
          {
            "name": "WatDiv-TPF - failed queries",
            "value": 0,
            "unit": "failed instantiations",
            "extra": "None"
          },
          {
            "name": "BSBM-File - 1",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [0.4]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 2",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [19.93]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 3",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [0.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 4",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [0]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 5",
            "value": 13,
            "unit": "ms",
            "extra": "Results: [2.97]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 6",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [undefined]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 7",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [9.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 8",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [4.67]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 9",
            "value": 1,
            "unit": "ms",
            "extra": "Results: [629.72]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 10",
            "value": 3,
            "unit": "ms",
            "extra": "Results: [2.43]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 11",
            "value": 1,
            "unit": "ms",
            "extra": "Results: [10]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 12",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [1123.93]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - failed queries",
            "value": 0,
            "unit": "failed instantiations",
            "extra": "None"
          },
          {
            "name": "BSBM-File-10k - 1",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [1.3]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 2",
            "value": 3,
            "unit": "ms",
            "extra": "Results: [21]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 3",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [0.8]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 4",
            "value": 3,
            "unit": "ms",
            "extra": "Results: [0.9]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 5",
            "value": 59,
            "unit": "ms",
            "extra": "Results: [4.85]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 6",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [undefined]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 7",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [15.28]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 8",
            "value": 3,
            "unit": "ms",
            "extra": "Results: [3.95]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 9",
            "value": 1,
            "unit": "ms",
            "extra": "Results: [630.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 10",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [2.05]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 11",
            "value": 1,
            "unit": "ms",
            "extra": "Results: [10]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 12",
            "value": 1,
            "unit": "ms",
            "extra": "Results: [1142]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - failed queries",
            "value": 0,
            "unit": "failed instantiations",
            "extra": "None"
          },
          {
            "name": "BSBM-TPF - 1",
            "value": 21,
            "unit": "ms",
            "extra": "Results: [0.4]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 2",
            "value": 56,
            "unit": "ms",
            "extra": "Results: [19.93]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 3",
            "value": 32,
            "unit": "ms",
            "extra": "Results: [0.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 4",
            "value": 39,
            "unit": "ms",
            "extra": "Results: [0]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 5",
            "value": 511,
            "unit": "ms",
            "extra": "Results: [2.97]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 6",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [undefined]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 7",
            "value": 154,
            "unit": "ms",
            "extra": "Results: [9.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 8",
            "value": 136,
            "unit": "ms",
            "extra": "Results: [4.67]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 9",
            "value": 11,
            "unit": "ms",
            "extra": "Results: [629.72]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 10",
            "value": 130,
            "unit": "ms",
            "extra": "Results: [2.43]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 11",
            "value": 9,
            "unit": "ms",
            "extra": "Results: [10]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 12",
            "value": 20,
            "unit": "ms",
            "extra": "Results: [1123.93]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - failed queries",
            "value": 0,
            "unit": "failed instantiations",
            "extra": "None"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-1",
            "value": 3045,
            "unit": "ms",
            "extra": "Results: [0,4]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-10",
            "value": 10935,
            "unit": "ms",
            "extra": "Results: [10,10]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-11",
            "value": 101,
            "unit": "ms",
            "extra": "Results: [0,0]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-12",
            "value": 26,
            "unit": "ms",
            "extra": "Results: [1,1]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-13",
            "value": 606,
            "unit": "ms",
            "extra": "Results: [1,1]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-2",
            "value": 687,
            "unit": "ms",
            "extra": "Results: [20,20]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-4",
            "value": 212,
            "unit": "ms",
            "extra": "Results: [3,3]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-5",
            "value": 7301,
            "unit": "ms",
            "extra": "Results: [0,20]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-6",
            "value": 104,
            "unit": "ms",
            "extra": "Results: [10,10]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-7",
            "value": 3379,
            "unit": "ms",
            "extra": "Results: [20,20]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-8",
            "value": 164,
            "unit": "ms",
            "extra": "Results: [20,20]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-short-1",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [1,1]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-short-2",
            "value": 247,
            "unit": "ms",
            "extra": "Results: [6,10]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-short-3",
            "value": 7,
            "unit": "ms",
            "extra": "Results: [10,10]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-short-4",
            "value": 3,
            "unit": "ms",
            "extra": "Results: [1,1]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-short-5",
            "value": 3,
            "unit": "ms",
            "extra": "Results: [1,1]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-short-6",
            "value": 5,
            "unit": "ms",
            "extra": "Results: [1,1]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-short-7",
            "value": 5,
            "unit": "ms",
            "extra": "Results: [0,0]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - failed queries",
            "value": 0,
            "unit": "failed instantiations",
            "extra": "None"
          },
          {
            "name": "Web - dbpedia/airports-italy",
            "value": 867,
            "unit": "ms",
            "extra": "Results: [19]; Error: [false]; HTTP Requests: [22]"
          },
          {
            "name": "Web - dbpedia/artists-york-filter",
            "value": 6397,
            "unit": "ms",
            "extra": "Results: [32]; Error: [false]; HTTP Requests: [516]"
          },
          {
            "name": "Web - dbpedia/artists-york",
            "value": 6566,
            "unit": "ms",
            "extra": "Results: [32]; Error: [false]; HTTP Requests: [516]"
          },
          {
            "name": "Web - dbpedia/authors-books",
            "value": 399,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [7.666666666666667]"
          },
          {
            "name": "Web - dbpedia/bands-queen",
            "value": 495,
            "unit": "ms",
            "extra": "Results: [9]; Error: [false]; HTTP Requests: [17]"
          },
          {
            "name": "Web - dbpedia/belgian-software",
            "value": 3635,
            "unit": "ms",
            "extra": "Results: [13]; Error: [false]; HTTP Requests: [142]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-inlaws-pp",
            "value": 486,
            "unit": "ms",
            "extra": "Results: [8]; Error: [false]; HTTP Requests: [9]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-pp",
            "value": 2242,
            "unit": "ms",
            "extra": "Results: [633]; Error: [false]; HTTP Requests: [81]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-service",
            "value": 2471,
            "unit": "ms",
            "extra": "Results: [43]; Error: [false]; HTTP Requests: [123]"
          },
          {
            "name": "Web - dbpedia/brad-pitt",
            "value": 2191,
            "unit": "ms",
            "extra": "Results: [43]; Error: [false]; HTTP Requests: [122]"
          },
          {
            "name": "Web - dbpedia/bruce-willis-pp",
            "value": 379,
            "unit": "ms",
            "extra": "Results: [3]; Error: [false]; HTTP Requests: [8]"
          },
          {
            "name": "Web - dbpedia/carpenters-crucifixion",
            "value": 189,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [3]"
          },
          {
            "name": "Web - dbpedia/common-jesus",
            "value": 26943,
            "unit": "ms",
            "extra": "Results: [1000]; Error: [false]; HTTP Requests: [1851]"
          },
          {
            "name": "Web - dbpedia/desserts-plants",
            "value": 18144,
            "unit": "ms",
            "extra": "Results: [168]; Error: [false]; HTTP Requests: [732]"
          },
          {
            "name": "Web - dbpedia/events-trentino",
            "value": 28504,
            "unit": "ms",
            "extra": "Results: [29]; Error: [false]; HTTP Requests: [1839]"
          },
          {
            "name": "Web - dbpedia/indian-dishes",
            "value": 2793,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [201]"
          },
          {
            "name": "Web - dbpedia/michael-jackson",
            "value": 2278,
            "unit": "ms",
            "extra": "Results: [26]; Error: [false]; HTTP Requests: [118]"
          },
          {
            "name": "Web - dbpedia/natalie-portman",
            "value": 958,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [34]"
          },
          {
            "name": "Web - dbpedia/os-raspberrypi",
            "value": 379,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [8]"
          },
          {
            "name": "Web - dbpedia/people-cambridge-pairs-orderby-nolimit",
            "value": 2074,
            "unit": "ms",
            "extra": "Results: [86142]; Error: [false]; HTTP Requests: [4]"
          },
          {
            "name": "Web - dbpedia/people-cambridge-pairs-orderby",
            "value": 1542,
            "unit": "ms",
            "extra": "Results: [10]; Error: [false]; HTTP Requests: [4]"
          },
          {
            "name": "Web - dbpedia/women-mythology",
            "value": 7268,
            "unit": "ms",
            "extra": "Results: [102]; Error: [false]; HTTP Requests: [712]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit-filter",
            "value": 5874,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [348]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit-service",
            "value": 5940,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [236.66666666666666]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit",
            "value": 5696,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [344.6666666666667]"
          },
          {
            "name": "Web - heterogeneous/lindas-rhea-identifiers",
            "value": 4476,
            "unit": "ms",
            "extra": "Results: [11]; Error: [false]; HTTP Requests: [19.333333333333332]"
          },
          {
            "name": "Web - other/bruce-willis-pp-cartesian",
            "value": 664,
            "unit": "ms",
            "extra": "Results: [57]; Error: [false]; HTTP Requests: [13]"
          },
          {
            "name": "Web - other/ruben-knows-zero-or-more",
            "value": 604,
            "unit": "ms",
            "extra": "Results: [434]; Error: [false]; HTTP Requests: [3]"
          },
          {
            "name": "Web - other/ruben-knows-zero-or-one",
            "value": 238,
            "unit": "ms",
            "extra": "Results: [434]; Error: [false]; HTTP Requests: [3]"
          },
          {
            "name": "Web - other/ruben-predicates",
            "value": 160,
            "unit": "ms",
            "extra": "Results: [44]; Error: [false]; HTTP Requests: [3]"
          },
          {
            "name": "Web - other/rubens-articles",
            "value": 7199,
            "unit": "ms",
            "extra": "Results: [111]; Error: [false]; HTTP Requests: [58]"
          },
          {
            "name": "Web - failed queries",
            "value": 1,
            "unit": "failed instantiations",
            "extra": "heterogeneous/wikidata-dbpedia-cats: 1/1 failed"
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
          "id": "d18ef9f32a3270b5e371409f8609be64bbb13417",
          "message": "Count distinct subjects in RDF/JS sources and keep distinct values through joins\n\nQuerySourceRdfJs now also counts the distinct subjects of a pattern with a\nfixed predicate, cached per query execution, and caps distinct value counts\nat the pattern's cardinality. Join results keep the distinct values of their\nvariables instead of dropping them, so that join cardinalities further up in\na plan can still be estimated from them.\n\nWithout distinct subject counts, a subject variable was assumed to take a\ndifferent value in every binding, so one-to-many joins such as forums with\ntheir members or posts with their tags were estimated to not multiply their\ninput. This made LDBC SNB BI7 time out, and BI9 run out of memory.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_012cgUi7SRsskNRaXEatKfnw",
          "timestamp": "2026-11-01T10:00:34Z",
          "tree_id": "31e1036f40f51560d5668b71de935498acbe4f34",
          "url": "https://github.com/comunica/comunica/commit/d18ef9f32a3270b5e371409f8609be64bbb13417"
        },
        "date": 1793529640495,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File - C1",
            "value": 25,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - C2",
            "value": 25,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - C3",
            "value": 286,
            "unit": "ms",
            "extra": "Results: [48802,48802,48802,48802,48802]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F1",
            "value": 3,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F2",
            "value": 3,
            "unit": "ms",
            "extra": "Results: [0,0,1,1,1]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F3",
            "value": 3,
            "unit": "ms",
            "extra": "Results: [2,2,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F4",
            "value": 3,
            "unit": "ms",
            "extra": "Results: [0,0,12,12,12]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F5",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [32,32,40,56,22]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L1",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [1,5,5,1,5]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L2",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [3,3,3,40,3]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L3",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [69,33,12,12,69]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L4",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [6,7,6,6,6]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L5",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [1,4,4,22,1]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S1",
            "value": 3,
            "unit": "ms",
            "extra": "Results: [4,0,7,4,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S2",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [2,1,1,2,1]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S3",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S4",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S5",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S6",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [1,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S7",
            "value": 1,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - failed queries",
            "value": 0,
            "unit": "failed instantiations",
            "extra": "None"
          },
          {
            "name": "WatDiv-TPF - C1",
            "value": 1047,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [940,940,940,940,940]"
          },
          {
            "name": "WatDiv-TPF - C2",
            "value": 3025,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [2191,2191,2191,2191,2191]"
          },
          {
            "name": "WatDiv-TPF - C3",
            "value": 17520,
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
            "value": 334,
            "unit": "ms",
            "extra": "Results: [0,0,1,1,1]; Error: [false,false,false,false,false]; HTTP Requests: [444,84,381,381,381]"
          },
          {
            "name": "WatDiv-TPF - F3",
            "value": 226,
            "unit": "ms",
            "extra": "Results: [2,2,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [274,274,19,229,190]"
          },
          {
            "name": "WatDiv-TPF - F4",
            "value": 272,
            "unit": "ms",
            "extra": "Results: [0,0,12,12,12]; Error: [false,false,false,false,false]; HTTP Requests: [305,305,296,296,296]"
          },
          {
            "name": "WatDiv-TPF - F5",
            "value": 420,
            "unit": "ms",
            "extra": "Results: [32,32,40,56,22]; Error: [false,false,false,false,false]; HTTP Requests: [338,338,400,594,189]"
          },
          {
            "name": "WatDiv-TPF - L1",
            "value": 68,
            "unit": "ms",
            "extra": "Results: [1,5,5,1,5]; Error: [false,false,false,false,false]; HTTP Requests: [42,44,56,40,56]"
          },
          {
            "name": "WatDiv-TPF - L2",
            "value": 30,
            "unit": "ms",
            "extra": "Results: [3,3,3,40,3]; Error: [false,false,false,false,false]; HTTP Requests: [10,10,10,15,10]"
          },
          {
            "name": "WatDiv-TPF - L3",
            "value": 53,
            "unit": "ms",
            "extra": "Results: [69,33,12,12,69]; Error: [false,false,false,false,false]; HTTP Requests: [35,34,48,48,35]"
          },
          {
            "name": "WatDiv-TPF - L4",
            "value": 17,
            "unit": "ms",
            "extra": "Results: [6,7,6,6,6]; Error: [false,false,false,false,false]; HTTP Requests: [5,5,5,5,5]"
          },
          {
            "name": "WatDiv-TPF - L5",
            "value": 34,
            "unit": "ms",
            "extra": "Results: [1,4,4,22,1]; Error: [false,false,false,false,false]; HTTP Requests: [10,10,10,15,10]"
          },
          {
            "name": "WatDiv-TPF - S1",
            "value": 324,
            "unit": "ms",
            "extra": "Results: [4,0,7,4,0]; Error: [false,false,false,false,false]; HTTP Requests: [410,346,1003,410,794]"
          },
          {
            "name": "WatDiv-TPF - S2",
            "value": 79,
            "unit": "ms",
            "extra": "Results: [2,1,1,2,1]; Error: [false,false,false,false,false]; HTTP Requests: [155,80,80,155,80]"
          },
          {
            "name": "WatDiv-TPF - S3",
            "value": 19,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [7,7,7,7,7]"
          },
          {
            "name": "WatDiv-TPF - S4",
            "value": 316,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [90,90,9,90,90]"
          },
          {
            "name": "WatDiv-TPF - S5",
            "value": 19,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [7,7,7,7,7]"
          },
          {
            "name": "WatDiv-TPF - S6",
            "value": 19,
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
            "name": "WatDiv-TPF - failed queries",
            "value": 0,
            "unit": "failed instantiations",
            "extra": "None"
          },
          {
            "name": "BSBM-File - 1",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [0.4]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 2",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [19.93]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 3",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [0.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 4",
            "value": 3,
            "unit": "ms",
            "extra": "Results: [0]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 5",
            "value": 12,
            "unit": "ms",
            "extra": "Results: [2.97]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 6",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [undefined]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 7",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [9.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 8",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [4.67]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 9",
            "value": 1,
            "unit": "ms",
            "extra": "Results: [629.72]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 10",
            "value": 3,
            "unit": "ms",
            "extra": "Results: [2.43]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 11",
            "value": 1,
            "unit": "ms",
            "extra": "Results: [10]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 12",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [1123.93]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - failed queries",
            "value": 0,
            "unit": "failed instantiations",
            "extra": "None"
          },
          {
            "name": "BSBM-File-10k - 1",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [1.3]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 2",
            "value": 6,
            "unit": "ms",
            "extra": "Results: [21]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 3",
            "value": 8,
            "unit": "ms",
            "extra": "Results: [0.8]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 4",
            "value": 5,
            "unit": "ms",
            "extra": "Results: [0.9]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 5",
            "value": 101,
            "unit": "ms",
            "extra": "Results: [4.85]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 6",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [undefined]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 7",
            "value": 7,
            "unit": "ms",
            "extra": "Results: [15.28]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 8",
            "value": 6,
            "unit": "ms",
            "extra": "Results: [3.95]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 9",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [630.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 10",
            "value": 5,
            "unit": "ms",
            "extra": "Results: [2.05]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 11",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [10]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 12",
            "value": 3,
            "unit": "ms",
            "extra": "Results: [1142]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - failed queries",
            "value": 0,
            "unit": "failed instantiations",
            "extra": "None"
          },
          {
            "name": "BSBM-TPF - 1",
            "value": 28,
            "unit": "ms",
            "extra": "Results: [0.4]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 2",
            "value": 74,
            "unit": "ms",
            "extra": "Results: [19.93]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 3",
            "value": 42,
            "unit": "ms",
            "extra": "Results: [0.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 4",
            "value": 53,
            "unit": "ms",
            "extra": "Results: [0]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 5",
            "value": 695,
            "unit": "ms",
            "extra": "Results: [2.97]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 6",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [undefined]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 7",
            "value": 204,
            "unit": "ms",
            "extra": "Results: [9.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 8",
            "value": 167,
            "unit": "ms",
            "extra": "Results: [4.67]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 9",
            "value": 12,
            "unit": "ms",
            "extra": "Results: [629.72]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 10",
            "value": 179,
            "unit": "ms",
            "extra": "Results: [2.43]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 11",
            "value": 10,
            "unit": "ms",
            "extra": "Results: [10]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 12",
            "value": 27,
            "unit": "ms",
            "extra": "Results: [1123.93]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - failed queries",
            "value": 0,
            "unit": "failed instantiations",
            "extra": "None"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-1",
            "value": 2420,
            "unit": "ms",
            "extra": "Results: [0,4]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-10",
            "value": 8920,
            "unit": "ms",
            "extra": "Results: [10,10]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-11",
            "value": 76,
            "unit": "ms",
            "extra": "Results: [0,0]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-12",
            "value": 19,
            "unit": "ms",
            "extra": "Results: [1,1]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-13",
            "value": 470,
            "unit": "ms",
            "extra": "Results: [1,1]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-2",
            "value": 489,
            "unit": "ms",
            "extra": "Results: [20,20]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-4",
            "value": 164,
            "unit": "ms",
            "extra": "Results: [3,3]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-5",
            "value": 5832,
            "unit": "ms",
            "extra": "Results: [0,20]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-6",
            "value": 76,
            "unit": "ms",
            "extra": "Results: [10,10]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-7",
            "value": 2476,
            "unit": "ms",
            "extra": "Results: [20,20]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-8",
            "value": 112,
            "unit": "ms",
            "extra": "Results: [20,20]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-short-1",
            "value": 3,
            "unit": "ms",
            "extra": "Results: [1,1]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-short-2",
            "value": 185,
            "unit": "ms",
            "extra": "Results: [6,10]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-short-3",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [10,10]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-short-4",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [1,1]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-short-5",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [1,1]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-short-6",
            "value": 3,
            "unit": "ms",
            "extra": "Results: [1,1]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-short-7",
            "value": 3,
            "unit": "ms",
            "extra": "Results: [0,0]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - failed queries",
            "value": 0,
            "unit": "failed instantiations",
            "extra": "None"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-1",
            "value": 27351,
            "unit": "ms",
            "extra": "Results: [18]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-10",
            "value": 193,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-11",
            "value": 5111,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-12",
            "value": 5140,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-13",
            "value": 703,
            "unit": "ms",
            "extra": "Results: [29]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-15",
            "value": 18845,
            "unit": "ms",
            "extra": "Results: [4]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-17",
            "value": 2767,
            "unit": "ms",
            "extra": "Results: [1]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-18",
            "value": 83209,
            "unit": "ms",
            "extra": "Results: [60]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-2",
            "value": 17701,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-20",
            "value": 32617,
            "unit": "ms",
            "extra": "Results: [6]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-21",
            "value": 9313,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-22",
            "value": 38129,
            "unit": "ms",
            "extra": "Results: [8]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-23",
            "value": 218,
            "unit": "ms",
            "extra": "Results: [31]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-24",
            "value": 4336,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-3",
            "value": 16591,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-4",
            "value": 73,
            "unit": "ms",
            "extra": "Results: [8]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-6",
            "value": 84,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-7",
            "value": 7174,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-8",
            "value": 1007,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - failed queries",
            "value": 1,
            "unit": "failed instantiations",
            "extra": "bi-14: 1/1 failed"
          },
          {
            "name": "Web - dbpedia/airports-italy",
            "value": 1191,
            "unit": "ms",
            "extra": "Results: [19]; Error: [false]; HTTP Requests: [22]"
          },
          {
            "name": "Web - dbpedia/artists-york-filter",
            "value": 9691,
            "unit": "ms",
            "extra": "Results: [32]; Error: [false]; HTTP Requests: [516]"
          },
          {
            "name": "Web - dbpedia/artists-york",
            "value": 9817,
            "unit": "ms",
            "extra": "Results: [32]; Error: [false]; HTTP Requests: [516]"
          },
          {
            "name": "Web - dbpedia/authors-books",
            "value": 554,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [7.333333333333333]"
          },
          {
            "name": "Web - dbpedia/bands-queen",
            "value": 691,
            "unit": "ms",
            "extra": "Results: [9]; Error: [false]; HTTP Requests: [17]"
          },
          {
            "name": "Web - dbpedia/belgian-software",
            "value": 5166,
            "unit": "ms",
            "extra": "Results: [13]; Error: [false]; HTTP Requests: [142]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-inlaws-pp",
            "value": 684,
            "unit": "ms",
            "extra": "Results: [8]; Error: [false]; HTTP Requests: [9]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-pp",
            "value": 3166,
            "unit": "ms",
            "extra": "Results: [633]; Error: [false]; HTTP Requests: [81]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-service",
            "value": 3716,
            "unit": "ms",
            "extra": "Results: [43]; Error: [false]; HTTP Requests: [123]"
          },
          {
            "name": "Web - dbpedia/brad-pitt",
            "value": 3161,
            "unit": "ms",
            "extra": "Results: [43]; Error: [false]; HTTP Requests: [122]"
          },
          {
            "name": "Web - dbpedia/bruce-willis-pp",
            "value": 546,
            "unit": "ms",
            "extra": "Results: [3]; Error: [false]; HTTP Requests: [8]"
          },
          {
            "name": "Web - dbpedia/carpenters-crucifixion",
            "value": 273,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [3]"
          },
          {
            "name": "Web - dbpedia/common-jesus",
            "value": 38543,
            "unit": "ms",
            "extra": "Results: [1000]; Error: [false]; HTTP Requests: [1851]"
          },
          {
            "name": "Web - dbpedia/events-trentino",
            "value": 41274,
            "unit": "ms",
            "extra": "Results: [29]; Error: [false]; HTTP Requests: [1839]"
          },
          {
            "name": "Web - dbpedia/indian-dishes",
            "value": 4644,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [201]"
          },
          {
            "name": "Web - dbpedia/michael-jackson",
            "value": 3518,
            "unit": "ms",
            "extra": "Results: [26]; Error: [false]; HTTP Requests: [118]"
          },
          {
            "name": "Web - dbpedia/natalie-portman",
            "value": 1456,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [34]"
          },
          {
            "name": "Web - dbpedia/os-raspberrypi",
            "value": 581,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [8]"
          },
          {
            "name": "Web - dbpedia/people-cambridge-pairs-orderby-nolimit",
            "value": 1880,
            "unit": "ms",
            "extra": "Results: [86142]; Error: [false]; HTTP Requests: [4]"
          },
          {
            "name": "Web - dbpedia/people-cambridge-pairs-orderby",
            "value": 1401,
            "unit": "ms",
            "extra": "Results: [10]; Error: [false]; HTTP Requests: [4]"
          },
          {
            "name": "Web - dbpedia/women-mythology",
            "value": 10488,
            "unit": "ms",
            "extra": "Results: [102]; Error: [false]; HTTP Requests: [712]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit-filter",
            "value": 15116,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [346.3333333333333]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit-service",
            "value": 8972,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [238.66666666666666]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit",
            "value": 8890,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [344.3333333333333]"
          },
          {
            "name": "Web - heterogeneous/lindas-rhea-identifiers",
            "value": 5483,
            "unit": "ms",
            "extra": "Results: [11]; Error: [false]; HTTP Requests: [19.666666666666668]"
          },
          {
            "name": "Web - other/bruce-willis-pp-cartesian",
            "value": 965,
            "unit": "ms",
            "extra": "Results: [57]; Error: [false]; HTTP Requests: [13]"
          },
          {
            "name": "Web - other/ruben-knows-zero-or-more",
            "value": 631,
            "unit": "ms",
            "extra": "Results: [434]; Error: [false]; HTTP Requests: [3]"
          },
          {
            "name": "Web - other/ruben-knows-zero-or-one",
            "value": 220,
            "unit": "ms",
            "extra": "Results: [434]; Error: [false]; HTTP Requests: [3]"
          },
          {
            "name": "Web - other/ruben-predicates",
            "value": 198,
            "unit": "ms",
            "extra": "Results: [44]; Error: [false]; HTTP Requests: [3]"
          },
          {
            "name": "Web - other/rubens-articles",
            "value": 11424,
            "unit": "ms",
            "extra": "Results: [111]; Error: [false]; HTTP Requests: [58]"
          },
          {
            "name": "Web - failed queries",
            "value": 2,
            "unit": "failed instantiations",
            "extra": "dbpedia/desserts-plants: 1/1 failed; heterogeneous/wikidata-dbpedia-cats: 1/1 failed"
          }
        ]
      }
    ]
  }
}