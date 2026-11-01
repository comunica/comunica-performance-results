window.BENCHMARK_DATA = {
  "lastUpdate": 1793530314080,
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
          "id": "93147810cce566afb2b2576bdf4c1b3782add916",
          "message": "Look up arbitrary length paths in index nested loop joins\n\nPaths over a single (inverse) predicate are walked synchronously from\ntheir bound subject or object, instead of being evaluated unbound and\njoined afterwards, which for ZeroOrMore paths enumerates every node.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_012cgUi7SRsskNRaXEatKfnw",
          "timestamp": "2026-10-30T15:13:05Z",
          "tree_id": "5a1720614255b9052d05d9ddb1fe03529f6214b3",
          "url": "https://github.com/comunica/comunica/commit/93147810cce566afb2b2576bdf4c1b3782add916"
        },
        "date": 1793374330373,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File - C1",
            "value": 5,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - C2",
            "value": 12,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - C3",
            "value": 278,
            "unit": "ms",
            "extra": "Results: [48802,48802,48802,48802,48802]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F1",
            "value": 2,
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
            "value": 4,
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
            "value": 3,
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
            "value": 831,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [940,940,940,940,940]"
          },
          {
            "name": "WatDiv-TPF - C2",
            "value": 2290,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [2191,2191,2191,2191,2191]"
          },
          {
            "name": "WatDiv-TPF - C3",
            "value": 14168,
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
            "value": 274,
            "unit": "ms",
            "extra": "Results: [0,0,1,1,1]; Error: [false,false,false,false,false]; HTTP Requests: [444,84,381,381,381]"
          },
          {
            "name": "WatDiv-TPF - F3",
            "value": 183,
            "unit": "ms",
            "extra": "Results: [2,2,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [274,274,19,229,190]"
          },
          {
            "name": "WatDiv-TPF - F4",
            "value": 228,
            "unit": "ms",
            "extra": "Results: [0,0,12,12,12]; Error: [false,false,false,false,false]; HTTP Requests: [305,305,296,296,296]"
          },
          {
            "name": "WatDiv-TPF - F5",
            "value": 354,
            "unit": "ms",
            "extra": "Results: [32,32,40,56,22]; Error: [false,false,false,false,false]; HTTP Requests: [338,338,400,594,189]"
          },
          {
            "name": "WatDiv-TPF - L1",
            "value": 56,
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
            "value": 41,
            "unit": "ms",
            "extra": "Results: [69,33,12,12,69]; Error: [false,false,false,false,false]; HTTP Requests: [35,34,48,48,35]"
          },
          {
            "name": "WatDiv-TPF - L4",
            "value": 15,
            "unit": "ms",
            "extra": "Results: [6,7,6,6,6]; Error: [false,false,false,false,false]; HTTP Requests: [5,5,5,5,5]"
          },
          {
            "name": "WatDiv-TPF - L5",
            "value": 31,
            "unit": "ms",
            "extra": "Results: [1,4,4,22,1]; Error: [false,false,false,false,false]; HTTP Requests: [10,10,10,15,10]"
          },
          {
            "name": "WatDiv-TPF - S1",
            "value": 268,
            "unit": "ms",
            "extra": "Results: [4,0,7,4,0]; Error: [false,false,false,false,false]; HTTP Requests: [410,346,1003,410,794]"
          },
          {
            "name": "WatDiv-TPF - S2",
            "value": 60,
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
            "value": 272,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [90,90,9,90,90]"
          },
          {
            "name": "WatDiv-TPF - S5",
            "value": 17,
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
            "value": 3,
            "unit": "ms",
            "extra": "Results: [0.4]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 2",
            "value": 6,
            "unit": "ms",
            "extra": "Results: [19.93]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 3",
            "value": 5,
            "unit": "ms",
            "extra": "Results: [0.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 4",
            "value": 5,
            "unit": "ms",
            "extra": "Results: [0]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 5",
            "value": 18,
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
            "value": 6,
            "unit": "ms",
            "extra": "Results: [9.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 8",
            "value": 5,
            "unit": "ms",
            "extra": "Results: [4.67]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 9",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [629.72]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 10",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [2.43]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 11",
            "value": 2,
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
            "value": 3,
            "unit": "ms",
            "extra": "Results: [1.3]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 2",
            "value": 5,
            "unit": "ms",
            "extra": "Results: [21]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 3",
            "value": 5,
            "unit": "ms",
            "extra": "Results: [0.8]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 4",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [0.9]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 5",
            "value": 76,
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
            "value": 5,
            "unit": "ms",
            "extra": "Results: [15.28]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 8",
            "value": 4,
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
            "value": 3,
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
            "value": 2,
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
            "value": 27,
            "unit": "ms",
            "extra": "Results: [0.4]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 2",
            "value": 73,
            "unit": "ms",
            "extra": "Results: [19.93]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 3",
            "value": 43,
            "unit": "ms",
            "extra": "Results: [0.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 4",
            "value": 54,
            "unit": "ms",
            "extra": "Results: [0]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 5",
            "value": 704,
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
            "value": 166,
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
            "value": 177,
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
            "value": 26,
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
            "value": 2170,
            "unit": "ms",
            "extra": "Results: [0,4]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-10",
            "value": 7953,
            "unit": "ms",
            "extra": "Results: [10,10]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-11",
            "value": 61,
            "unit": "ms",
            "extra": "Results: [0,0]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-12",
            "value": 20,
            "unit": "ms",
            "extra": "Results: [1,1]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-13",
            "value": 427,
            "unit": "ms",
            "extra": "Results: [1,1]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-2",
            "value": 413,
            "unit": "ms",
            "extra": "Results: [20,20]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-4",
            "value": 142,
            "unit": "ms",
            "extra": "Results: [3,3]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-5",
            "value": 4609,
            "unit": "ms",
            "extra": "Results: [0,20]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-6",
            "value": 69,
            "unit": "ms",
            "extra": "Results: [10,10]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-7",
            "value": 2096,
            "unit": "ms",
            "extra": "Results: [20,20]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-8",
            "value": 89,
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
            "value": 157,
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
            "value": 8,
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
            "value": 748,
            "unit": "ms",
            "extra": "Results: [19]; Error: [false]; HTTP Requests: [22]"
          },
          {
            "name": "Web - dbpedia/artists-york-filter",
            "value": 6326,
            "unit": "ms",
            "extra": "Results: [32]; Error: [false]; HTTP Requests: [516]"
          },
          {
            "name": "Web - dbpedia/artists-york",
            "value": 6708,
            "unit": "ms",
            "extra": "Results: [32]; Error: [false]; HTTP Requests: [516]"
          },
          {
            "name": "Web - dbpedia/authors-books",
            "value": 375,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [7]"
          },
          {
            "name": "Web - dbpedia/bands-queen",
            "value": 470,
            "unit": "ms",
            "extra": "Results: [9]; Error: [false]; HTTP Requests: [17]"
          },
          {
            "name": "Web - dbpedia/belgian-software",
            "value": 3455,
            "unit": "ms",
            "extra": "Results: [13]; Error: [false]; HTTP Requests: [142]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-inlaws-pp",
            "value": 461,
            "unit": "ms",
            "extra": "Results: [8]; Error: [false]; HTTP Requests: [9]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-pp",
            "value": 2141,
            "unit": "ms",
            "extra": "Results: [633]; Error: [false]; HTTP Requests: [81]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-service",
            "value": 2385,
            "unit": "ms",
            "extra": "Results: [43]; Error: [false]; HTTP Requests: [123]"
          },
          {
            "name": "Web - dbpedia/brad-pitt",
            "value": 2131,
            "unit": "ms",
            "extra": "Results: [43]; Error: [false]; HTTP Requests: [122]"
          },
          {
            "name": "Web - dbpedia/bruce-willis-pp",
            "value": 369,
            "unit": "ms",
            "extra": "Results: [3]; Error: [false]; HTTP Requests: [8]"
          },
          {
            "name": "Web - dbpedia/carpenters-crucifixion",
            "value": 184,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [3]"
          },
          {
            "name": "Web - dbpedia/common-jesus",
            "value": 26382,
            "unit": "ms",
            "extra": "Results: [1000]; Error: [false]; HTTP Requests: [1851]"
          },
          {
            "name": "Web - dbpedia/desserts-plants",
            "value": 17376,
            "unit": "ms",
            "extra": "Results: [168]; Error: [false]; HTTP Requests: [732]"
          },
          {
            "name": "Web - dbpedia/events-trentino",
            "value": 27917,
            "unit": "ms",
            "extra": "Results: [29]; Error: [false]; HTTP Requests: [1839]"
          },
          {
            "name": "Web - dbpedia/indian-dishes",
            "value": 2600,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [201]"
          },
          {
            "name": "Web - dbpedia/michael-jackson",
            "value": 2222,
            "unit": "ms",
            "extra": "Results: [26]; Error: [false]; HTTP Requests: [118]"
          },
          {
            "name": "Web - dbpedia/natalie-portman",
            "value": 925,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [34]"
          },
          {
            "name": "Web - dbpedia/os-raspberrypi",
            "value": 368,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [8]"
          },
          {
            "name": "Web - dbpedia/people-cambridge-pairs-orderby-nolimit",
            "value": 2076,
            "unit": "ms",
            "extra": "Results: [86142]; Error: [false]; HTTP Requests: [4]"
          },
          {
            "name": "Web - dbpedia/people-cambridge-pairs-orderby",
            "value": 1508,
            "unit": "ms",
            "extra": "Results: [10]; Error: [false]; HTTP Requests: [4]"
          },
          {
            "name": "Web - dbpedia/women-mythology",
            "value": 7033,
            "unit": "ms",
            "extra": "Results: [102]; Error: [false]; HTTP Requests: [712]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit-filter",
            "value": 5750,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [349.6666666666667]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit-service",
            "value": 5628,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [237.33333333333334]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit",
            "value": 5464,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [345.6666666666667]"
          },
          {
            "name": "Web - heterogeneous/lindas-rhea-identifiers",
            "value": 4829,
            "unit": "ms",
            "extra": "Results: [11]; Error: [false]; HTTP Requests: [19.666666666666668]"
          },
          {
            "name": "Web - other/bruce-willis-pp-cartesian",
            "value": 534,
            "unit": "ms",
            "extra": "Results: [57]; Error: [false]; HTTP Requests: [19.666666666666668]"
          },
          {
            "name": "Web - other/ruben-knows-zero-or-more",
            "value": 505,
            "unit": "ms",
            "extra": "Results: [434]; Error: [false]; HTTP Requests: [7]"
          },
          {
            "name": "Web - other/ruben-knows-zero-or-one",
            "value": 205,
            "unit": "ms",
            "extra": "Results: [434]; Error: [false]; HTTP Requests: [3]"
          },
          {
            "name": "Web - other/ruben-predicates",
            "value": 172,
            "unit": "ms",
            "extra": "Results: [44]; Error: [false]; HTTP Requests: [11]"
          },
          {
            "name": "Web - other/rubens-articles",
            "value": 7369,
            "unit": "ms",
            "extra": "Results: [111]; Error: [false]; HTTP Requests: [63]"
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
          "id": "08c85a81711274b0c71ba6aebf5ec49abf8e9a51",
          "message": "Look up arbitrary length paths in index nested loop joins\n\nPaths over a single (inverse) predicate are walked synchronously from\ntheir bound subject or object, instead of being evaluated unbound and\njoined afterwards, which for ZeroOrMore paths enumerates every node.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_012cgUi7SRsskNRaXEatKfnw",
          "timestamp": "2026-11-01T10:00:33Z",
          "tree_id": "f11ccc22fc0d2290fffdc31bdac9baf6f1dada39",
          "url": "https://github.com/comunica/comunica/commit/08c85a81711274b0c71ba6aebf5ec49abf8e9a51"
        },
        "date": 1793530313029,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File - C1",
            "value": 5,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - C2",
            "value": 12,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - C3",
            "value": 280,
            "unit": "ms",
            "extra": "Results: [48802,48802,48802,48802,48802]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F1",
            "value": 2,
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
            "value": 3,
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
            "value": 1184,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [940,940,940,940,940]"
          },
          {
            "name": "WatDiv-TPF - C2",
            "value": 3487,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [2191,2191,2191,2191,2191]"
          },
          {
            "name": "WatDiv-TPF - C3",
            "value": 18813,
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
            "value": 359,
            "unit": "ms",
            "extra": "Results: [0,0,1,1,1]; Error: [false,false,false,false,false]; HTTP Requests: [444,84,381,381,381]"
          },
          {
            "name": "WatDiv-TPF - F3",
            "value": 240,
            "unit": "ms",
            "extra": "Results: [2,2,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [274,274,19,229,190]"
          },
          {
            "name": "WatDiv-TPF - F4",
            "value": 293,
            "unit": "ms",
            "extra": "Results: [0,0,12,12,12]; Error: [false,false,false,false,false]; HTTP Requests: [305,305,296,296,296]"
          },
          {
            "name": "WatDiv-TPF - F5",
            "value": 430,
            "unit": "ms",
            "extra": "Results: [32,32,40,56,22]; Error: [false,false,false,false,false]; HTTP Requests: [338,338,400,594,189]"
          },
          {
            "name": "WatDiv-TPF - L1",
            "value": 71,
            "unit": "ms",
            "extra": "Results: [1,5,5,1,5]; Error: [false,false,false,false,false]; HTTP Requests: [42,44,56,40,56]"
          },
          {
            "name": "WatDiv-TPF - L2",
            "value": 29,
            "unit": "ms",
            "extra": "Results: [3,3,3,40,3]; Error: [false,false,false,false,false]; HTTP Requests: [10,10,10,15,10]"
          },
          {
            "name": "WatDiv-TPF - L3",
            "value": 51,
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
            "value": 32,
            "unit": "ms",
            "extra": "Results: [1,4,4,22,1]; Error: [false,false,false,false,false]; HTTP Requests: [10,10,10,15,10]"
          },
          {
            "name": "WatDiv-TPF - S1",
            "value": 339,
            "unit": "ms",
            "extra": "Results: [4,0,7,4,0]; Error: [false,false,false,false,false]; HTTP Requests: [410,346,1003,410,794]"
          },
          {
            "name": "WatDiv-TPF - S2",
            "value": 78,
            "unit": "ms",
            "extra": "Results: [2,1,1,2,1]; Error: [false,false,false,false,false]; HTTP Requests: [155,80,80,155,80]"
          },
          {
            "name": "WatDiv-TPF - S3",
            "value": 22,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [7,7,7,7,7]"
          },
          {
            "name": "WatDiv-TPF - S4",
            "value": 324,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [90,90,9,90,90]"
          },
          {
            "name": "WatDiv-TPF - S5",
            "value": 20,
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
            "name": "WatDiv-TPF - failed queries",
            "value": 0,
            "unit": "failed instantiations",
            "extra": "None"
          },
          {
            "name": "BSBM-File - 1",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [0.4]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 2",
            "value": 7,
            "unit": "ms",
            "extra": "Results: [19.93]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 3",
            "value": 6,
            "unit": "ms",
            "extra": "Results: [0.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 4",
            "value": 5,
            "unit": "ms",
            "extra": "Results: [0]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 5",
            "value": 18,
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
            "value": 6,
            "unit": "ms",
            "extra": "Results: [9.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 8",
            "value": 6,
            "unit": "ms",
            "extra": "Results: [4.67]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 9",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [629.72]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 10",
            "value": 5,
            "unit": "ms",
            "extra": "Results: [2.43]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 11",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [10]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 12",
            "value": 3,
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
            "value": 7,
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
            "value": 102,
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
            "value": 22,
            "unit": "ms",
            "extra": "Results: [0.4]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 2",
            "value": 54,
            "unit": "ms",
            "extra": "Results: [19.93]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 3",
            "value": 34,
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
            "value": 473,
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
            "value": 148,
            "unit": "ms",
            "extra": "Results: [9.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 8",
            "value": 131,
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
            "value": 128,
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
            "value": 21,
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
            "value": 1979,
            "unit": "ms",
            "extra": "Results: [0,4]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-10",
            "value": 7540,
            "unit": "ms",
            "extra": "Results: [10,10]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-11",
            "value": 62,
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
            "value": 379,
            "unit": "ms",
            "extra": "Results: [1,1]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-2",
            "value": 419,
            "unit": "ms",
            "extra": "Results: [20,20]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-4",
            "value": 160,
            "unit": "ms",
            "extra": "Results: [3,3]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-5",
            "value": 4317,
            "unit": "ms",
            "extra": "Results: [0,20]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-6",
            "value": 66,
            "unit": "ms",
            "extra": "Results: [10,10]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-7",
            "value": 2148,
            "unit": "ms",
            "extra": "Results: [20,20]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-complex-8",
            "value": 92,
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
            "value": 176,
            "unit": "ms",
            "extra": "Results: [6,10]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-short-3",
            "value": 5,
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
            "value": 4,
            "unit": "ms",
            "extra": "Results: [1,1]; Error: [false,false]; HTTP Requests: [0,0]"
          },
          {
            "name": "LDBC-SNB-File - interactive-short-7",
            "value": 4,
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
            "value": 36671,
            "unit": "ms",
            "extra": "Results: [18]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-10",
            "value": 195,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-11",
            "value": 6511,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-12",
            "value": 8100,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-13",
            "value": 908,
            "unit": "ms",
            "extra": "Results: [29]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-14",
            "value": 17540,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-15",
            "value": 70,
            "unit": "ms",
            "extra": "Results: [4]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-17",
            "value": 3023,
            "unit": "ms",
            "extra": "Results: [1]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-18",
            "value": 7566,
            "unit": "ms",
            "extra": "Results: [60]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-2",
            "value": 26989,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-20",
            "value": 46806,
            "unit": "ms",
            "extra": "Results: [6]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-21",
            "value": 12590,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-22",
            "value": 53539,
            "unit": "ms",
            "extra": "Results: [8]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-23",
            "value": 363,
            "unit": "ms",
            "extra": "Results: [31]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-24",
            "value": 6868,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-3",
            "value": 22263,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-4",
            "value": 93,
            "unit": "ms",
            "extra": "Results: [8]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-6",
            "value": 120,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-7",
            "value": 60149,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - bi-8",
            "value": 756,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [0]"
          },
          {
            "name": "LDBC-SNB-BI-File - failed queries",
            "value": 0,
            "unit": "failed instantiations",
            "extra": "None"
          },
          {
            "name": "Web - dbpedia/airports-italy",
            "value": 954,
            "unit": "ms",
            "extra": "Results: [19]; Error: [false]; HTTP Requests: [22]"
          },
          {
            "name": "Web - dbpedia/artists-york-filter",
            "value": 8161,
            "unit": "ms",
            "extra": "Results: [32]; Error: [false]; HTTP Requests: [516]"
          },
          {
            "name": "Web - dbpedia/artists-york",
            "value": 8754,
            "unit": "ms",
            "extra": "Results: [32]; Error: [false]; HTTP Requests: [516]"
          },
          {
            "name": "Web - dbpedia/authors-books",
            "value": 511,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [7]"
          },
          {
            "name": "Web - dbpedia/belgian-software",
            "value": 4533,
            "unit": "ms",
            "extra": "Results: [13]; Error: [false]; HTTP Requests: [142]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-inlaws-pp",
            "value": 596,
            "unit": "ms",
            "extra": "Results: [8]; Error: [false]; HTTP Requests: [9]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-pp",
            "value": 2755,
            "unit": "ms",
            "extra": "Results: [633]; Error: [false]; HTTP Requests: [81]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-service",
            "value": 3536,
            "unit": "ms",
            "extra": "Results: [43]; Error: [false]; HTTP Requests: [123]"
          },
          {
            "name": "Web - dbpedia/brad-pitt",
            "value": 2875,
            "unit": "ms",
            "extra": "Results: [43]; Error: [false]; HTTP Requests: [122]"
          },
          {
            "name": "Web - dbpedia/bruce-willis-pp",
            "value": 498,
            "unit": "ms",
            "extra": "Results: [3]; Error: [false]; HTTP Requests: [8]"
          },
          {
            "name": "Web - dbpedia/common-jesus",
            "value": 34894,
            "unit": "ms",
            "extra": "Results: [1000]; Error: [false]; HTTP Requests: [1851]"
          },
          {
            "name": "Web - dbpedia/desserts-plants",
            "value": 22292,
            "unit": "ms",
            "extra": "Results: [168]; Error: [false]; HTTP Requests: [732]"
          },
          {
            "name": "Web - dbpedia/events-trentino",
            "value": 37947,
            "unit": "ms",
            "extra": "Results: [29]; Error: [false]; HTTP Requests: [1839]"
          },
          {
            "name": "Web - dbpedia/indian-dishes",
            "value": 3363,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [201]"
          },
          {
            "name": "Web - dbpedia/natalie-portman",
            "value": 1422,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [34]"
          },
          {
            "name": "Web - dbpedia/os-raspberrypi",
            "value": 505,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [8]"
          },
          {
            "name": "Web - dbpedia/people-cambridge-pairs-orderby-nolimit",
            "value": 1587,
            "unit": "ms",
            "extra": "Results: [86142]; Error: [false]; HTTP Requests: [4]"
          },
          {
            "name": "Web - dbpedia/people-cambridge-pairs-orderby",
            "value": 1165,
            "unit": "ms",
            "extra": "Results: [10]; Error: [false]; HTTP Requests: [4]"
          },
          {
            "name": "Web - dbpedia/women-mythology",
            "value": 8974,
            "unit": "ms",
            "extra": "Results: [102]; Error: [false]; HTTP Requests: [712]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit-service",
            "value": 7804,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [235.66666666666666]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit",
            "value": 7528,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [348.6666666666667]"
          },
          {
            "name": "Web - heterogeneous/lindas-rhea-identifiers",
            "value": 5692,
            "unit": "ms",
            "extra": "Results: [11]; Error: [false]; HTTP Requests: [20]"
          },
          {
            "name": "Web - other/bruce-willis-pp-cartesian",
            "value": 788,
            "unit": "ms",
            "extra": "Results: [57]; Error: [false]; HTTP Requests: [13]"
          },
          {
            "name": "Web - other/ruben-knows-zero-or-more",
            "value": 626,
            "unit": "ms",
            "extra": "Results: [434]; Error: [false]; HTTP Requests: [3]"
          },
          {
            "name": "Web - other/ruben-knows-zero-or-one",
            "value": 218,
            "unit": "ms",
            "extra": "Results: [434]; Error: [false]; HTTP Requests: [3]"
          },
          {
            "name": "Web - other/ruben-predicates",
            "value": 204,
            "unit": "ms",
            "extra": "Results: [44]; Error: [false]; HTTP Requests: [3]"
          },
          {
            "name": "Web - other/rubens-articles",
            "value": 8589,
            "unit": "ms",
            "extra": "Results: [111]; Error: [false]; HTTP Requests: [58]"
          },
          {
            "name": "Web - failed queries",
            "value": 5,
            "unit": "failed instantiations",
            "extra": "dbpedia/bands-queen: 1/1 failed; dbpedia/carpenters-crucifixion: 1/1 failed; dbpedia/michael-jackson: 1/1 failed; heterogeneous/harvard-san-francisco-limit-filter: 1/1 failed; heterogeneous/wikidata-dbpedia-cats: 1/1 failed"
          }
        ]
      }
    ]
  }
}