window.BENCHMARK_DATA = {
  "lastUpdate": 1763449152659,
  "repoUrl": "https://github.com/comunica/comunica",
  "entries": {
    "Benchmarks detailed results": [
      {
        "commit": {
          "author": {
            "email": "ruben.taelman@ugent.be",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "ruben.taelman@ugent.be",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "distinct": true,
          "id": "d46a6578d8a990cf6ebcf0834a11a801c77061c9",
          "message": "Fallback SPARQL endpoint requests to original URL if SD URL 404's\n\nThis is necessary as many endpoints incorrectly configure their service\ndescription, and refer to non-existing or invalid URLs.\n\nRelated to #1591",
          "timestamp": "2025-11-04T17:54:47+09:00",
          "tree_id": "c31ba08c310bd124879fe05e789fe69ea84f0447",
          "url": "https://github.com/comunica/comunica/commit/d46a6578d8a990cf6ebcf0834a11a801c77061c9"
        },
        "date": 1763108607882,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File - C1",
            "value": 234,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - C2",
            "value": 2444,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - C3",
            "value": 2214,
            "unit": "ms",
            "extra": "Results: [48802,48802,48802,48802,48802]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F1",
            "value": 15,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F2",
            "value": 41,
            "unit": "ms",
            "extra": "Results: [0,0,1,1,1]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F3",
            "value": 66,
            "unit": "ms",
            "extra": "Results: [2,2,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F4",
            "value": 34,
            "unit": "ms",
            "extra": "Results: [0,0,12,12,12]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F5",
            "value": 83,
            "unit": "ms",
            "extra": "Results: [32,32,40,56,22]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L1",
            "value": 14,
            "unit": "ms",
            "extra": "Results: [1,5,5,1,5]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L2",
            "value": 6,
            "unit": "ms",
            "extra": "Results: [3,3,3,40,3]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L3",
            "value": 9,
            "unit": "ms",
            "extra": "Results: [69,33,12,12,69]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L4",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [6,7,6,6,6]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L5",
            "value": 5,
            "unit": "ms",
            "extra": "Results: [1,4,4,22,1]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S1",
            "value": 31,
            "unit": "ms",
            "extra": "Results: [4,0,7,4,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S2",
            "value": 10,
            "unit": "ms",
            "extra": "Results: [2,1,1,2,1]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S3",
            "value": 30,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S4",
            "value": 30,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S5",
            "value": 4,
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
            "value": 2,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-TPF - C1",
            "value": 953,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [940,940,940,940,940]"
          },
          {
            "name": "WatDiv-TPF - C2",
            "value": 2613,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [2191,2191,2191,2191,2191]"
          },
          {
            "name": "WatDiv-TPF - C3",
            "value": 17690,
            "unit": "ms",
            "extra": "Results: [48802,48802,48802,48802,48802]; Error: [false,false,false,false,false]; HTTP Requests: [20454,20454,20454,20454,20454]"
          },
          {
            "name": "WatDiv-TPF - F1",
            "value": 52,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [43,43,43,43,43]"
          },
          {
            "name": "WatDiv-TPF - F2",
            "value": 293,
            "unit": "ms",
            "extra": "Results: [0,0,1,1,1]; Error: [false,false,false,false,false]; HTTP Requests: [444,84,381,381,381]"
          },
          {
            "name": "WatDiv-TPF - F3",
            "value": 201,
            "unit": "ms",
            "extra": "Results: [2,2,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [274,274,19,229,190]"
          },
          {
            "name": "WatDiv-TPF - F4",
            "value": 252,
            "unit": "ms",
            "extra": "Results: [0,0,12,12,12]; Error: [false,false,false,false,false]; HTTP Requests: [305,305,296,296,296]"
          },
          {
            "name": "WatDiv-TPF - F5",
            "value": 347,
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
            "value": 18,
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
            "value": 10,
            "unit": "ms",
            "extra": "Results: [6,7,6,6,6]; Error: [false,false,false,false,false]; HTTP Requests: [5,5,5,5,5]"
          },
          {
            "name": "WatDiv-TPF - L5",
            "value": 20,
            "unit": "ms",
            "extra": "Results: [1,4,4,22,1]; Error: [false,false,false,false,false]; HTTP Requests: [10,10,10,15,10]"
          },
          {
            "name": "WatDiv-TPF - S1",
            "value": 309,
            "unit": "ms",
            "extra": "Results: [4,0,7,4,0]; Error: [false,false,false,false,false]; HTTP Requests: [410,346,1003,410,794]"
          },
          {
            "name": "WatDiv-TPF - S2",
            "value": 69,
            "unit": "ms",
            "extra": "Results: [2,1,1,2,1]; Error: [false,false,false,false,false]; HTTP Requests: [155,80,80,155,80]"
          },
          {
            "name": "WatDiv-TPF - S3",
            "value": 14,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [7,7,7,7,7]"
          },
          {
            "name": "WatDiv-TPF - S4",
            "value": 18,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [14,14,79,14,14]"
          },
          {
            "name": "WatDiv-TPF - S5",
            "value": 12,
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
            "value": 6,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [4,4,4,4,10]"
          },
          {
            "name": "BSBM-File - 1",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [0.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 2",
            "value": 20,
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
            "value": 202,
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
            "value": 29,
            "unit": "ms",
            "extra": "Results: [5.05]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 9",
            "value": 17,
            "unit": "ms",
            "extra": "Results: [629.48]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 10",
            "value": 28,
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
            "value": 22,
            "unit": "ms",
            "extra": "Results: [0.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 2",
            "value": 67,
            "unit": "ms",
            "extra": "Results: [19.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 3",
            "value": 40,
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
            "value": 630,
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
            "value": 193,
            "unit": "ms",
            "extra": "Results: [9.38]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 8",
            "value": 177,
            "unit": "ms",
            "extra": "Results: [5.05]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 9",
            "value": 9,
            "unit": "ms",
            "extra": "Results: [629.48]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 10",
            "value": 190,
            "unit": "ms",
            "extra": "Results: [2.8]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 11",
            "value": 9,
            "unit": "ms",
            "extra": "Results: [10]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 12",
            "value": 19,
            "unit": "ms",
            "extra": "Results: [1120.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "Web - dbpedia/airports-italy",
            "value": 1021,
            "unit": "ms",
            "extra": "Results: [19]; Error: [false]; HTTP Requests: [66]"
          },
          {
            "name": "Web - dbpedia/artists-york-filter",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [32]; Error: [true]; HTTP Requests: [802.5]"
          },
          {
            "name": "Web - dbpedia/artists-york",
            "value": 7276,
            "unit": "ms",
            "extra": "Results: [32]; Error: [false]; HTTP Requests: [516]"
          },
          {
            "name": "Web - dbpedia/authors-books",
            "value": 435,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [9]"
          },
          {
            "name": "Web - dbpedia/bands-queen",
            "value": 440,
            "unit": "ms",
            "extra": "Results: [9]; Error: [false]; HTTP Requests: [17]"
          },
          {
            "name": "Web - dbpedia/belgian-software",
            "value": 4027,
            "unit": "ms",
            "extra": "Results: [13]; Error: [false]; HTTP Requests: [142]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-inlaws-pp",
            "value": 531,
            "unit": "ms",
            "extra": "Results: [8]; Error: [false]; HTTP Requests: [9]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-pp",
            "value": 2455,
            "unit": "ms",
            "extra": "Results: [633]; Error: [false]; HTTP Requests: [81]"
          },
          {
            "name": "Web - dbpedia/brad-pitt",
            "value": 2518,
            "unit": "ms",
            "extra": "Results: [43]; Error: [false]; HTTP Requests: [122]"
          },
          {
            "name": "Web - dbpedia/bruce-willis-pp",
            "value": 432,
            "unit": "ms",
            "extra": "Results: [3]; Error: [false]; HTTP Requests: [8]"
          },
          {
            "name": "Web - dbpedia/carpenters-crucifixion",
            "value": 213,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [3]"
          },
          {
            "name": "Web - dbpedia/common-jesus",
            "value": 30380,
            "unit": "ms",
            "extra": "Results: [1000]; Error: [false]; HTTP Requests: [1851]"
          },
          {
            "name": "Web - dbpedia/desserts-plants",
            "value": 19991,
            "unit": "ms",
            "extra": "Results: [168]; Error: [false]; HTTP Requests: [732]"
          },
          {
            "name": "Web - dbpedia/events-trentino",
            "value": 31184,
            "unit": "ms",
            "extra": "Results: [29]; Error: [false]; HTTP Requests: [1839]"
          },
          {
            "name": "Web - dbpedia/indian-dishes",
            "value": 2926,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [201]"
          },
          {
            "name": "Web - dbpedia/michael-jackson",
            "value": 2550,
            "unit": "ms",
            "extra": "Results: [26]; Error: [false]; HTTP Requests: [118]"
          },
          {
            "name": "Web - dbpedia/natalie-portman",
            "value": 1066,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [34]"
          },
          {
            "name": "Web - dbpedia/os-raspberrypi",
            "value": 424,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [8]"
          },
          {
            "name": "Web - dbpedia/women-mythology",
            "value": 7174,
            "unit": "ms",
            "extra": "Results: [102]; Error: [false]; HTTP Requests: [712]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit-filter",
            "value": 6856,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [349]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit",
            "value": 6375,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [346.6666666666667]"
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
            "value": 985,
            "unit": "ms",
            "extra": "Results: [57]; Error: [false]; HTTP Requests: [13]"
          },
          {
            "name": "Web - other/rubens-articles",
            "value": 3881,
            "unit": "ms",
            "extra": "Results: [91]; Error: [false]; HTTP Requests: [49]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ruben.taelman@ugent.be",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "ruben.taelman@ugent.be",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "distinct": true,
          "id": "b2e531948fc49a3242f8ffb7d2db54e91f5cca40",
          "message": "Make caches depend on HTTP cache semantics\n\nThis exposes a cache policy on HTTP bus responses, and buses that rely\non it. While query sources and destinations were already being cached,\nthey were cached indefinitely. With this change, they now properly take\ninto account HTTP caching semantics, and become invalidated once the\nunderlying HTTP response becomes invalid.\n\nCurrently, this has one minor limitation.\nWe're not sending re-validation requests. So if the server sends a 304,\nwe will perform a new request and re-index the source. But if an\nHTTP-level cache is active, the actual HTTP request will not be sent, so\nonly local re-indexing will happen, which is negligible in most cases.\n\nPartially closes #166",
          "timestamp": "2025-11-14T15:22:12+01:00",
          "tree_id": "820c296d07b9835d3dfbdcf8115c472daa42513e",
          "url": "https://github.com/comunica/comunica/commit/b2e531948fc49a3242f8ffb7d2db54e91f5cca40"
        },
        "date": 1763131142171,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File - C1",
            "value": 223,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - C2",
            "value": 2215,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - C3",
            "value": 2077,
            "unit": "ms",
            "extra": "Results: [48802,48802,48802,48802,48802]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F1",
            "value": 14,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F2",
            "value": 37,
            "unit": "ms",
            "extra": "Results: [0,0,1,1,1]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F3",
            "value": 63,
            "unit": "ms",
            "extra": "Results: [2,2,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F4",
            "value": 34,
            "unit": "ms",
            "extra": "Results: [0,0,12,12,12]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F5",
            "value": 85,
            "unit": "ms",
            "extra": "Results: [32,32,40,56,22]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L1",
            "value": 13,
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
            "value": 9,
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
            "value": 29,
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
            "value": 31,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S4",
            "value": 31,
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
            "name": "WatDiv-TPF - C1",
            "value": 5124,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [5193,5193,5193,5193,5193]"
          },
          {
            "name": "WatDiv-TPF - C2",
            "value": 24829,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [26092,26093,26091,26093,26094]"
          },
          {
            "name": "WatDiv-TPF - C3",
            "value": 40835,
            "unit": "ms",
            "extra": "Results: [48802,48802,48802,48802,48802]; Error: [false,false,false,false,false]; HTTP Requests: [42714,42717,42714,42715,42712]"
          },
          {
            "name": "WatDiv-TPF - F1",
            "value": 428,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [415,415,415,415,415]"
          },
          {
            "name": "WatDiv-TPF - F2",
            "value": 1164,
            "unit": "ms",
            "extra": "Results: [0,0,1,1,1]; Error: [false,false,false,false,false]; HTTP Requests: [1336,251,1199,1199,1199]"
          },
          {
            "name": "WatDiv-TPF - F3",
            "value": 842,
            "unit": "ms",
            "extra": "Results: [2,2,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [1076,1076,65,836,692]"
          },
          {
            "name": "WatDiv-TPF - F4",
            "value": 1044,
            "unit": "ms",
            "extra": "Results: [0,0,12,12,12]; Error: [false,false,false,false,false]; HTTP Requests: [1035,1035,1087,1087,1087]"
          },
          {
            "name": "WatDiv-TPF - F5",
            "value": 2362,
            "unit": "ms",
            "extra": "Results: [32,32,40,56,22]; Error: [false,false,false,false,false]; HTTP Requests: [2312,2311,2804,4057,1429]"
          },
          {
            "name": "WatDiv-TPF - L1",
            "value": 324,
            "unit": "ms",
            "extra": "Results: [1,5,5,1,5]; Error: [false,false,false,false,false]; HTTP Requests: [271,309,416,241,416]"
          },
          {
            "name": "WatDiv-TPF - L2",
            "value": 60,
            "unit": "ms",
            "extra": "Results: [3,3,3,40,3]; Error: [false,false,false,false,false]; HTTP Requests: [41,41,41,50,41]"
          },
          {
            "name": "WatDiv-TPF - L3",
            "value": 221,
            "unit": "ms",
            "extra": "Results: [69,33,12,12,69]; Error: [false,false,false,false,false]; HTTP Requests: [214,209,288,288,215]"
          },
          {
            "name": "WatDiv-TPF - L4",
            "value": 33,
            "unit": "ms",
            "extra": "Results: [6,7,6,6,6]; Error: [false,false,false,false,false]; HTTP Requests: [22,23,22,22,22]"
          },
          {
            "name": "WatDiv-TPF - L5",
            "value": 57,
            "unit": "ms",
            "extra": "Results: [1,4,4,22,1]; Error: [false,false,false,false,false]; HTTP Requests: [41,42,41,52,41]"
          },
          {
            "name": "WatDiv-TPF - S1",
            "value": 813,
            "unit": "ms",
            "extra": "Results: [4,0,7,4,0]; Error: [false,false,false,false,false]; HTTP Requests: [865,699,2092,865,1595]"
          },
          {
            "name": "WatDiv-TPF - S2",
            "value": 185,
            "unit": "ms",
            "extra": "Results: [2,1,1,2,1]; Error: [false,false,false,false,false]; HTTP Requests: [347,182,182,347,182]"
          },
          {
            "name": "WatDiv-TPF - S3",
            "value": 40,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [32,32,32,32,30]"
          },
          {
            "name": "WatDiv-TPF - S4",
            "value": 61,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [45,49,179,49,45]"
          },
          {
            "name": "WatDiv-TPF - S5",
            "value": 39,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [29,30,31,29,31]"
          },
          {
            "name": "WatDiv-TPF - S6",
            "value": 38,
            "unit": "ms",
            "extra": "Results: [1,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [209,11,43,35,20]"
          },
          {
            "name": "WatDiv-TPF - S7",
            "value": 15,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [11,11,11,11,28]"
          },
          {
            "name": "BSBM-File - 1",
            "value": 5,
            "unit": "ms",
            "extra": "Results: [0.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 2",
            "value": 23,
            "unit": "ms",
            "extra": "Results: [19.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 3",
            "value": 9,
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
            "value": 239,
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
            "value": 46,
            "unit": "ms",
            "extra": "Results: [9.38]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 8",
            "value": 35,
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
            "value": 32,
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
            "value": 7,
            "unit": "ms",
            "extra": "Results: [1120.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 1",
            "value": 61,
            "unit": "ms",
            "extra": "Results: [0.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 2",
            "value": 432,
            "unit": "ms",
            "extra": "Results: [19.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 3",
            "value": 163,
            "unit": "ms",
            "extra": "Results: [0.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 4",
            "value": 185,
            "unit": "ms",
            "extra": "Results: [0]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 5",
            "value": 6418,
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
            "value": 1032,
            "unit": "ms",
            "extra": "Results: [9.38]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 8",
            "value": 963,
            "unit": "ms",
            "extra": "Results: [5.05]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 9",
            "value": 29,
            "unit": "ms",
            "extra": "Results: [629.48]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 10",
            "value": 887,
            "unit": "ms",
            "extra": "Results: [2.8]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 11",
            "value": 25,
            "unit": "ms",
            "extra": "Results: [10]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 12",
            "value": 119,
            "unit": "ms",
            "extra": "Results: [1120.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "Web - dbpedia/airports-italy",
            "value": 1359,
            "unit": "ms",
            "extra": "Results: [19]; Error: [false]; HTTP Requests: [65.33333333333333]"
          },
          {
            "name": "Web - dbpedia/artists-york-filter",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [32]; Error: [true]; HTTP Requests: [737]"
          },
          {
            "name": "Web - dbpedia/artists-york",
            "value": 9341,
            "unit": "ms",
            "extra": "Results: [32]; Error: [false]; HTTP Requests: [516]"
          },
          {
            "name": "Web - dbpedia/authors-books",
            "value": 580,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [9]"
          },
          {
            "name": "Web - dbpedia/bands-queen",
            "value": 581,
            "unit": "ms",
            "extra": "Results: [9]; Error: [false]; HTTP Requests: [17]"
          },
          {
            "name": "Web - dbpedia/belgian-software",
            "value": 5416,
            "unit": "ms",
            "extra": "Results: [13]; Error: [false]; HTTP Requests: [142]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-inlaws-pp",
            "value": 716,
            "unit": "ms",
            "extra": "Results: [8]; Error: [false]; HTTP Requests: [9]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-pp",
            "value": 3277,
            "unit": "ms",
            "extra": "Results: [633]; Error: [false]; HTTP Requests: [81]"
          },
          {
            "name": "Web - dbpedia/brad-pitt",
            "value": 3412,
            "unit": "ms",
            "extra": "Results: [43]; Error: [false]; HTTP Requests: [122]"
          },
          {
            "name": "Web - dbpedia/bruce-willis-pp",
            "value": 572,
            "unit": "ms",
            "extra": "Results: [3]; Error: [false]; HTTP Requests: [8]"
          },
          {
            "name": "Web - dbpedia/carpenters-crucifixion",
            "value": 285,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [3]"
          },
          {
            "name": "Web - dbpedia/common-jesus",
            "value": 40156,
            "unit": "ms",
            "extra": "Results: [1000]; Error: [false]; HTTP Requests: [1850.6666666666667]"
          },
          {
            "name": "Web - dbpedia/desserts-plants",
            "value": 26850,
            "unit": "ms",
            "extra": "Results: [168]; Error: [false]; HTTP Requests: [732]"
          },
          {
            "name": "Web - dbpedia/events-trentino",
            "value": 42244,
            "unit": "ms",
            "extra": "Results: [29]; Error: [false]; HTTP Requests: [1839]"
          },
          {
            "name": "Web - dbpedia/indian-dishes",
            "value": 3967,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [201]"
          },
          {
            "name": "Web - dbpedia/michael-jackson",
            "value": 3546,
            "unit": "ms",
            "extra": "Results: [26]; Error: [false]; HTTP Requests: [118]"
          },
          {
            "name": "Web - dbpedia/natalie-portman",
            "value": 1429,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [34]"
          },
          {
            "name": "Web - dbpedia/os-raspberrypi",
            "value": 563,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [8]"
          },
          {
            "name": "Web - dbpedia/women-mythology",
            "value": 9677,
            "unit": "ms",
            "extra": "Results: [102]; Error: [false]; HTTP Requests: [712]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit-filter",
            "value": 9531,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [347.6666666666667]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit",
            "value": 8779,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [345.3333333333333]"
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
            "value": 1034,
            "unit": "ms",
            "extra": "Results: [57]; Error: [false]; HTTP Requests: [53.333333333333336]"
          },
          {
            "name": "Web - other/rubens-articles",
            "value": 6634,
            "unit": "ms",
            "extra": "Results: [91]; Error: [false]; HTTP Requests: [268.3333333333333]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ruben.taelman@ugent.be",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "ruben.taelman@ugent.be",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "distinct": true,
          "id": "b8a20aa3c3e053fad59c1c4c2ded12227c64a0dc",
          "message": "Make caches depend on HTTP cache semantics\n\nThis exposes a cache policy on HTTP bus responses, and buses that rely\non it. While query sources and destinations were already being cached,\nthey were cached indefinitely. With this change, they now properly take\ninto account HTTP caching semantics, and become invalidated once the\nunderlying HTTP response becomes invalid.\n\nCurrently, this has one minor limitation.\nWe're not sending re-validation requests. So if the server sends a 304,\nwe will perform a new request and re-index the source. But if an\nHTTP-level cache is active, the actual HTTP request will not be sent, so\nonly local re-indexing will happen, which is negligible in most cases.\n\nPartially closes #166",
          "timestamp": "2025-11-17T11:30:10+01:00",
          "tree_id": "1900b85d9081caac2f1bf27ed27f76996165b9c5",
          "url": "https://github.com/comunica/comunica/commit/b8a20aa3c3e053fad59c1c4c2ded12227c64a0dc"
        },
        "date": 1763376576055,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File - C1",
            "value": 241,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - C2",
            "value": 3570,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - C3",
            "value": 2211,
            "unit": "ms",
            "extra": "Results: [48802,48802,48802,48802,48802]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F1",
            "value": 14,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F2",
            "value": 37,
            "unit": "ms",
            "extra": "Results: [0,0,1,1,1]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F3",
            "value": 85,
            "unit": "ms",
            "extra": "Results: [2,2,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F4",
            "value": 35,
            "unit": "ms",
            "extra": "Results: [0,0,12,12,12]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F5",
            "value": 92,
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
            "value": 5,
            "unit": "ms",
            "extra": "Results: [3,3,3,40,3]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L3",
            "value": 9,
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
            "value": 5,
            "unit": "ms",
            "extra": "Results: [1,4,4,22,1]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S1",
            "value": 29,
            "unit": "ms",
            "extra": "Results: [4,0,7,4,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S2",
            "value": 9,
            "unit": "ms",
            "extra": "Results: [2,1,1,2,1]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S3",
            "value": 30,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S4",
            "value": 29,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S5",
            "value": 4,
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
            "value": 975,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [940,940,940,940,940]"
          },
          {
            "name": "WatDiv-TPF - C2",
            "value": 2646,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [2191,2191,2191,2191,2191]"
          },
          {
            "name": "WatDiv-TPF - C3",
            "value": 18242,
            "unit": "ms",
            "extra": "Results: [48802,48802,48802,48802,48802]; Error: [false,false,false,false,false]; HTTP Requests: [20454,20454,20454,20454,20454]"
          },
          {
            "name": "WatDiv-TPF - F1",
            "value": 52,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [43,43,43,43,43]"
          },
          {
            "name": "WatDiv-TPF - F2",
            "value": 312,
            "unit": "ms",
            "extra": "Results: [0,0,1,1,1]; Error: [false,false,false,false,false]; HTTP Requests: [444,84,381,381,381]"
          },
          {
            "name": "WatDiv-TPF - F3",
            "value": 211,
            "unit": "ms",
            "extra": "Results: [2,2,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [274,274,19,229,190]"
          },
          {
            "name": "WatDiv-TPF - F4",
            "value": 255,
            "unit": "ms",
            "extra": "Results: [0,0,12,12,12]; Error: [false,false,false,false,false]; HTTP Requests: [305,305,296,296,296]"
          },
          {
            "name": "WatDiv-TPF - F5",
            "value": 375,
            "unit": "ms",
            "extra": "Results: [32,32,40,56,22]; Error: [false,false,false,false,false]; HTTP Requests: [338,338,400,594,189]"
          },
          {
            "name": "WatDiv-TPF - L1",
            "value": 64,
            "unit": "ms",
            "extra": "Results: [1,5,5,1,5]; Error: [false,false,false,false,false]; HTTP Requests: [42,44,56,40,56]"
          },
          {
            "name": "WatDiv-TPF - L2",
            "value": 19,
            "unit": "ms",
            "extra": "Results: [3,3,3,40,3]; Error: [false,false,false,false,false]; HTTP Requests: [10,10,10,15,10]"
          },
          {
            "name": "WatDiv-TPF - L3",
            "value": 43,
            "unit": "ms",
            "extra": "Results: [69,33,12,12,69]; Error: [false,false,false,false,false]; HTTP Requests: [35,34,48,48,35]"
          },
          {
            "name": "WatDiv-TPF - L4",
            "value": 11,
            "unit": "ms",
            "extra": "Results: [6,7,6,6,6]; Error: [false,false,false,false,false]; HTTP Requests: [5,5,5,5,5]"
          },
          {
            "name": "WatDiv-TPF - L5",
            "value": 26,
            "unit": "ms",
            "extra": "Results: [1,4,4,22,1]; Error: [false,false,false,false,false]; HTTP Requests: [10,10,10,15,10]"
          },
          {
            "name": "WatDiv-TPF - S1",
            "value": 306,
            "unit": "ms",
            "extra": "Results: [4,0,7,4,0]; Error: [false,false,false,false,false]; HTTP Requests: [410,346,1003,410,794]"
          },
          {
            "name": "WatDiv-TPF - S2",
            "value": 70,
            "unit": "ms",
            "extra": "Results: [2,1,1,2,1]; Error: [false,false,false,false,false]; HTTP Requests: [155,80,80,155,80]"
          },
          {
            "name": "WatDiv-TPF - S3",
            "value": 13,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [7,7,7,7,7]"
          },
          {
            "name": "WatDiv-TPF - S4",
            "value": 19,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [14,14,79,14,14]"
          },
          {
            "name": "WatDiv-TPF - S5",
            "value": 13,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [7,7,7,7,7]"
          },
          {
            "name": "WatDiv-TPF - S6",
            "value": 14,
            "unit": "ms",
            "extra": "Results: [1,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [96,4,18,14,6]"
          },
          {
            "name": "WatDiv-TPF - S7",
            "value": 6,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [4,4,4,4,10]"
          },
          {
            "name": "BSBM-File - 1",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [0.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 2",
            "value": 19,
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
            "value": 200,
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
            "value": 29,
            "unit": "ms",
            "extra": "Results: [5.05]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 9",
            "value": 16,
            "unit": "ms",
            "extra": "Results: [629.48]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 10",
            "value": 29,
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
            "value": 27,
            "unit": "ms",
            "extra": "Results: [0.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 2",
            "value": 75,
            "unit": "ms",
            "extra": "Results: [19.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 3",
            "value": 42,
            "unit": "ms",
            "extra": "Results: [0.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 4",
            "value": 61,
            "unit": "ms",
            "extra": "Results: [0]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 5",
            "value": 710,
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
            "value": 219,
            "unit": "ms",
            "extra": "Results: [9.38]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 8",
            "value": 191,
            "unit": "ms",
            "extra": "Results: [5.05]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 9",
            "value": 10,
            "unit": "ms",
            "extra": "Results: [629.48]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 10",
            "value": 213,
            "unit": "ms",
            "extra": "Results: [2.8]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 11",
            "value": 8,
            "unit": "ms",
            "extra": "Results: [10]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 12",
            "value": 22,
            "unit": "ms",
            "extra": "Results: [1120.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "Web - dbpedia/airports-italy",
            "value": 1498,
            "unit": "ms",
            "extra": "Results: [19]; Error: [false]; HTTP Requests: [156]"
          },
          {
            "name": "Web - dbpedia/artists-york-filter",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [32]; Error: [true]; HTTP Requests: [1228.5]"
          },
          {
            "name": "Web - dbpedia/artists-york",
            "value": 10562,
            "unit": "ms",
            "extra": "Results: [32]; Error: [false]; HTTP Requests: [516]"
          },
          {
            "name": "Web - dbpedia/authors-books",
            "value": 650,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [7.666666666666667]"
          },
          {
            "name": "Web - dbpedia/bands-queen",
            "value": 658,
            "unit": "ms",
            "extra": "Results: [9]; Error: [false]; HTTP Requests: [17]"
          },
          {
            "name": "Web - dbpedia/belgian-software",
            "value": 6132,
            "unit": "ms",
            "extra": "Results: [13]; Error: [false]; HTTP Requests: [142]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-inlaws-pp",
            "value": 811,
            "unit": "ms",
            "extra": "Results: [8]; Error: [false]; HTTP Requests: [9]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-pp",
            "value": 3755,
            "unit": "ms",
            "extra": "Results: [633]; Error: [false]; HTTP Requests: [81]"
          },
          {
            "name": "Web - dbpedia/brad-pitt",
            "value": 3923,
            "unit": "ms",
            "extra": "Results: [43]; Error: [false]; HTTP Requests: [122]"
          },
          {
            "name": "Web - dbpedia/bruce-willis-pp",
            "value": 658,
            "unit": "ms",
            "extra": "Results: [3]; Error: [false]; HTTP Requests: [8]"
          },
          {
            "name": "Web - dbpedia/carpenters-crucifixion",
            "value": 326,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [3]"
          },
          {
            "name": "Web - dbpedia/common-jesus",
            "value": 45140,
            "unit": "ms",
            "extra": "Results: [1000]; Error: [false]; HTTP Requests: [1851.6666666666667]"
          },
          {
            "name": "Web - dbpedia/desserts-plants",
            "value": 30031,
            "unit": "ms",
            "extra": "Results: [168]; Error: [false]; HTTP Requests: [732]"
          },
          {
            "name": "Web - dbpedia/events-trentino",
            "value": 47899,
            "unit": "ms",
            "extra": "Results: [29]; Error: [false]; HTTP Requests: [1839]"
          },
          {
            "name": "Web - dbpedia/indian-dishes",
            "value": 4708,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [201]"
          },
          {
            "name": "Web - dbpedia/michael-jackson",
            "value": 3858,
            "unit": "ms",
            "extra": "Results: [26]; Error: [false]; HTTP Requests: [118]"
          },
          {
            "name": "Web - dbpedia/natalie-portman",
            "value": 1607,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [34]"
          },
          {
            "name": "Web - dbpedia/os-raspberrypi",
            "value": 638,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [8]"
          },
          {
            "name": "Web - dbpedia/women-mythology",
            "value": 10740,
            "unit": "ms",
            "extra": "Results: [102]; Error: [false]; HTTP Requests: [712]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit-filter",
            "value": 10289,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [349.3333333333333]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit",
            "value": 9642,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [346.3333333333333]"
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
            "value": 1372,
            "unit": "ms",
            "extra": "Results: [57]; Error: [false]; HTTP Requests: [13]"
          },
          {
            "name": "Web - other/rubens-articles",
            "value": 6253,
            "unit": "ms",
            "extra": "Results: [91]; Error: [false]; HTTP Requests: [49]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ruben.taelman@ugent.be",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "ruben.taelman@ugent.be",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "distinct": true,
          "id": "9dad2ce34a50936e1ae278e6e5723de75d0f6a1b",
          "message": "Make caches depend on HTTP cache semantics\n\nThis exposes a cache policy on HTTP bus responses, and buses that rely\non it. While query sources and destinations were already being cached,\nthey were cached indefinitely. With this change, they now properly take\ninto account HTTP caching semantics, and become invalidated once the\nunderlying HTTP response becomes invalid.\n\nCurrently, this has one minor limitation.\nWe're not sending re-validation requests. So if the server sends a 304,\nwe will perform a new request and re-index the source. But if an\nHTTP-level cache is active, the actual HTTP request will not be sent, so\nonly local re-indexing will happen, which is negligible in most cases.\n\nPartially closes #166",
          "timestamp": "2025-11-17T12:17:13+01:00",
          "tree_id": "38bc735629a499d9061fed392fb9fad007363e46",
          "url": "https://github.com/comunica/comunica/commit/9dad2ce34a50936e1ae278e6e5723de75d0f6a1b"
        },
        "date": 1763379004541,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File - C1",
            "value": 209,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - C2",
            "value": 2198,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - C3",
            "value": 1985,
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
            "value": 34,
            "unit": "ms",
            "extra": "Results: [0,0,1,1,1]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F3",
            "value": 67,
            "unit": "ms",
            "extra": "Results: [2,2,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F4",
            "value": 32,
            "unit": "ms",
            "extra": "Results: [0,0,12,12,12]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F5",
            "value": 85,
            "unit": "ms",
            "extra": "Results: [32,32,40,56,22]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L1",
            "value": 11,
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
            "value": 9,
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
            "value": 27,
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
            "value": 28,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S4",
            "value": 29,
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
            "value": 2,
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
            "value": 1084,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [940,940,940,940,940]"
          },
          {
            "name": "WatDiv-TPF - C2",
            "value": 3017,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [2191,2191,2191,2191,2191]"
          },
          {
            "name": "WatDiv-TPF - C3",
            "value": 19978,
            "unit": "ms",
            "extra": "Results: [48802,48802,48802,48802,48802]; Error: [false,false,false,false,false]; HTTP Requests: [20454,20454,20454,20454,20454]"
          },
          {
            "name": "WatDiv-TPF - F1",
            "value": 62,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [43,43,43,43,43]"
          },
          {
            "name": "WatDiv-TPF - F2",
            "value": 362,
            "unit": "ms",
            "extra": "Results: [0,0,1,1,1]; Error: [false,false,false,false,false]; HTTP Requests: [444,84,381,381,381]"
          },
          {
            "name": "WatDiv-TPF - F3",
            "value": 231,
            "unit": "ms",
            "extra": "Results: [2,2,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [274,274,19,229,190]"
          },
          {
            "name": "WatDiv-TPF - F4",
            "value": 290,
            "unit": "ms",
            "extra": "Results: [0,0,12,12,12]; Error: [false,false,false,false,false]; HTTP Requests: [305,305,296,296,296]"
          },
          {
            "name": "WatDiv-TPF - F5",
            "value": 427,
            "unit": "ms",
            "extra": "Results: [32,32,40,56,22]; Error: [false,false,false,false,false]; HTTP Requests: [338,338,400,594,189]"
          },
          {
            "name": "WatDiv-TPF - L1",
            "value": 65,
            "unit": "ms",
            "extra": "Results: [1,5,5,1,5]; Error: [false,false,false,false,false]; HTTP Requests: [42,44,56,40,56]"
          },
          {
            "name": "WatDiv-TPF - L2",
            "value": 21,
            "unit": "ms",
            "extra": "Results: [3,3,3,40,3]; Error: [false,false,false,false,false]; HTTP Requests: [10,10,10,15,10]"
          },
          {
            "name": "WatDiv-TPF - L3",
            "value": 45,
            "unit": "ms",
            "extra": "Results: [69,33,12,12,69]; Error: [false,false,false,false,false]; HTTP Requests: [35,34,48,48,35]"
          },
          {
            "name": "WatDiv-TPF - L4",
            "value": 12,
            "unit": "ms",
            "extra": "Results: [6,7,6,6,6]; Error: [false,false,false,false,false]; HTTP Requests: [5,5,5,5,5]"
          },
          {
            "name": "WatDiv-TPF - L5",
            "value": 29,
            "unit": "ms",
            "extra": "Results: [1,4,4,22,1]; Error: [false,false,false,false,false]; HTTP Requests: [10,10,10,15,10]"
          },
          {
            "name": "WatDiv-TPF - S1",
            "value": 331,
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
            "value": 14,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [7,7,7,7,7]"
          },
          {
            "name": "WatDiv-TPF - S4",
            "value": 21,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [14,14,79,14,14]"
          },
          {
            "name": "WatDiv-TPF - S5",
            "value": 14,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [7,7,7,7,7]"
          },
          {
            "name": "WatDiv-TPF - S6",
            "value": 17,
            "unit": "ms",
            "extra": "Results: [1,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [96,4,18,14,6]"
          },
          {
            "name": "WatDiv-TPF - S7",
            "value": 7,
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
            "value": 23,
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
            "value": 231,
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
            "value": 49,
            "unit": "ms",
            "extra": "Results: [9.38]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 8",
            "value": 38,
            "unit": "ms",
            "extra": "Results: [5.05]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 9",
            "value": 43,
            "unit": "ms",
            "extra": "Results: [629.48]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 10",
            "value": 34,
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
            "value": 8,
            "unit": "ms",
            "extra": "Results: [1120.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 1",
            "value": 25,
            "unit": "ms",
            "extra": "Results: [0.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 2",
            "value": 76,
            "unit": "ms",
            "extra": "Results: [19.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 3",
            "value": 44,
            "unit": "ms",
            "extra": "Results: [0.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 4",
            "value": 57,
            "unit": "ms",
            "extra": "Results: [0]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 5",
            "value": 732,
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
            "value": 218,
            "unit": "ms",
            "extra": "Results: [9.38]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 8",
            "value": 200,
            "unit": "ms",
            "extra": "Results: [5.05]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 9",
            "value": 11,
            "unit": "ms",
            "extra": "Results: [629.48]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 10",
            "value": 217,
            "unit": "ms",
            "extra": "Results: [2.8]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 11",
            "value": 9,
            "unit": "ms",
            "extra": "Results: [10]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 12",
            "value": 24,
            "unit": "ms",
            "extra": "Results: [1120.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "Web - dbpedia/airports-italy",
            "value": 872,
            "unit": "ms",
            "extra": "Results: [19]; Error: [false]; HTTP Requests: [87.33333333333333]"
          },
          {
            "name": "Web - dbpedia/artists-york-filter",
            "value": 7012,
            "unit": "ms",
            "extra": "Results: [32]; Error: [false]; HTTP Requests: [1226]"
          },
          {
            "name": "Web - dbpedia/artists-york",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [32]; Error: [true]; HTTP Requests: [516]"
          },
          {
            "name": "Web - dbpedia/authors-books",
            "value": 372,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [8.666666666666666]"
          },
          {
            "name": "Web - dbpedia/bands-queen",
            "value": 376,
            "unit": "ms",
            "extra": "Results: [9]; Error: [false]; HTTP Requests: [17]"
          },
          {
            "name": "Web - dbpedia/belgian-software",
            "value": 3431,
            "unit": "ms",
            "extra": "Results: [13]; Error: [false]; HTTP Requests: [142]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-inlaws-pp",
            "value": 455,
            "unit": "ms",
            "extra": "Results: [8]; Error: [false]; HTTP Requests: [9]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-pp",
            "value": 2110,
            "unit": "ms",
            "extra": "Results: [633]; Error: [false]; HTTP Requests: [81]"
          },
          {
            "name": "Web - dbpedia/brad-pitt",
            "value": 2146,
            "unit": "ms",
            "extra": "Results: [43]; Error: [false]; HTTP Requests: [122]"
          },
          {
            "name": "Web - dbpedia/bruce-willis-pp",
            "value": 365,
            "unit": "ms",
            "extra": "Results: [3]; Error: [false]; HTTP Requests: [8]"
          },
          {
            "name": "Web - dbpedia/carpenters-crucifixion",
            "value": 182,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [3]"
          },
          {
            "name": "Web - dbpedia/common-jesus",
            "value": 25552,
            "unit": "ms",
            "extra": "Results: [1000]; Error: [false]; HTTP Requests: [1851]"
          },
          {
            "name": "Web - dbpedia/desserts-plants",
            "value": 17289,
            "unit": "ms",
            "extra": "Results: [168]; Error: [false]; HTTP Requests: [732]"
          },
          {
            "name": "Web - dbpedia/events-trentino",
            "value": 26929,
            "unit": "ms",
            "extra": "Results: [29]; Error: [false]; HTTP Requests: [1839]"
          },
          {
            "name": "Web - dbpedia/indian-dishes",
            "value": 2441,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [201]"
          },
          {
            "name": "Web - dbpedia/michael-jackson",
            "value": 2184,
            "unit": "ms",
            "extra": "Results: [26]; Error: [false]; HTTP Requests: [118]"
          },
          {
            "name": "Web - dbpedia/natalie-portman",
            "value": 924,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [34]"
          },
          {
            "name": "Web - dbpedia/os-raspberrypi",
            "value": 364,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [8]"
          },
          {
            "name": "Web - dbpedia/women-mythology",
            "value": 6235,
            "unit": "ms",
            "extra": "Results: [102]; Error: [false]; HTTP Requests: [712]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit-filter",
            "value": 6300,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [348.3333333333333]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit",
            "value": 5708,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [345.6666666666667]"
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
            "value": 841,
            "unit": "ms",
            "extra": "Results: [57]; Error: [false]; HTTP Requests: [54.333333333333336]"
          },
          {
            "name": "Web - other/rubens-articles",
            "value": 4997,
            "unit": "ms",
            "extra": "Results: [91]; Error: [false]; HTTP Requests: [438]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ruben.taelman@ugent.be",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "ruben.taelman@ugent.be",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "distinct": true,
          "id": "bf9c521a579548cfaf2fdeda79b3d089fe91eaa9",
          "message": "Cache JSON-LD context in HTTP-dependent cache\n\nCloses #1635",
          "timestamp": "2025-11-17T14:14:54+01:00",
          "tree_id": "155ee188b8ad9246ce4ad1ade3f9930db21c48b8",
          "url": "https://github.com/comunica/comunica/commit/bf9c521a579548cfaf2fdeda79b3d089fe91eaa9"
        },
        "date": 1763386043960,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File - C1",
            "value": 220,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - C2",
            "value": 2323,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - C3",
            "value": 1954,
            "unit": "ms",
            "extra": "Results: [48802,48802,48802,48802,48802]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F1",
            "value": 14,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F2",
            "value": 37,
            "unit": "ms",
            "extra": "Results: [0,0,1,1,1]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F3",
            "value": 63,
            "unit": "ms",
            "extra": "Results: [2,2,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F4",
            "value": 34,
            "unit": "ms",
            "extra": "Results: [0,0,12,12,12]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F5",
            "value": 82,
            "unit": "ms",
            "extra": "Results: [32,32,40,56,22]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L1",
            "value": 11,
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
            "value": 47,
            "unit": "ms",
            "extra": "Results: [4,0,7,4,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S2",
            "value": 7,
            "unit": "ms",
            "extra": "Results: [2,1,1,2,1]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S3",
            "value": 29,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S4",
            "value": 30,
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
            "value": 2,
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
            "value": 1037,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [940,940,940,940,940]"
          },
          {
            "name": "WatDiv-TPF - C2",
            "value": 3036,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [2191,2191,2191,2191,2191]"
          },
          {
            "name": "WatDiv-TPF - C3",
            "value": 20185,
            "unit": "ms",
            "extra": "Results: [48802,48802,48802,48802,48802]; Error: [false,false,false,false,false]; HTTP Requests: [20454,20454,20454,20454,20454]"
          },
          {
            "name": "WatDiv-TPF - F1",
            "value": 65,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [43,43,43,43,43]"
          },
          {
            "name": "WatDiv-TPF - F2",
            "value": 351,
            "unit": "ms",
            "extra": "Results: [0,0,1,1,1]; Error: [false,false,false,false,false]; HTTP Requests: [444,84,381,381,381]"
          },
          {
            "name": "WatDiv-TPF - F3",
            "value": 243,
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
            "value": 434,
            "unit": "ms",
            "extra": "Results: [32,32,40,56,22]; Error: [false,false,false,false,false]; HTTP Requests: [338,338,400,594,189]"
          },
          {
            "name": "WatDiv-TPF - L1",
            "value": 69,
            "unit": "ms",
            "extra": "Results: [1,5,5,1,5]; Error: [false,false,false,false,false]; HTTP Requests: [42,44,56,40,56]"
          },
          {
            "name": "WatDiv-TPF - L2",
            "value": 21,
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
            "value": 14,
            "unit": "ms",
            "extra": "Results: [6,7,6,6,6]; Error: [false,false,false,false,false]; HTTP Requests: [5,5,5,5,5]"
          },
          {
            "name": "WatDiv-TPF - L5",
            "value": 25,
            "unit": "ms",
            "extra": "Results: [1,4,4,22,1]; Error: [false,false,false,false,false]; HTTP Requests: [10,10,10,15,10]"
          },
          {
            "name": "WatDiv-TPF - S1",
            "value": 360,
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
            "value": 16,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [7,7,7,7,7]"
          },
          {
            "name": "WatDiv-TPF - S4",
            "value": 24,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [14,14,79,14,14]"
          },
          {
            "name": "WatDiv-TPF - S5",
            "value": 15,
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
            "value": 8,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [4,4,4,4,10]"
          },
          {
            "name": "BSBM-File - 1",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [0.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 2",
            "value": 21,
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
            "value": 8,
            "unit": "ms",
            "extra": "Results: [0]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 5",
            "value": 222,
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
            "value": 42,
            "unit": "ms",
            "extra": "Results: [9.38]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 8",
            "value": 32,
            "unit": "ms",
            "extra": "Results: [5.05]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 9",
            "value": 20,
            "unit": "ms",
            "extra": "Results: [629.48]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 10",
            "value": 31,
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
            "value": 26,
            "unit": "ms",
            "extra": "Results: [0.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 2",
            "value": 75,
            "unit": "ms",
            "extra": "Results: [19.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 3",
            "value": 42,
            "unit": "ms",
            "extra": "Results: [0.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 4",
            "value": 62,
            "unit": "ms",
            "extra": "Results: [0]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 5",
            "value": 712,
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
            "value": 223,
            "unit": "ms",
            "extra": "Results: [9.38]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 8",
            "value": 199,
            "unit": "ms",
            "extra": "Results: [5.05]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 9",
            "value": 11,
            "unit": "ms",
            "extra": "Results: [629.48]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 10",
            "value": 216,
            "unit": "ms",
            "extra": "Results: [2.8]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 11",
            "value": 10,
            "unit": "ms",
            "extra": "Results: [10]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 12",
            "value": 23,
            "unit": "ms",
            "extra": "Results: [1120.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "Web - dbpedia/airports-italy",
            "value": 887,
            "unit": "ms",
            "extra": "Results: [19]; Error: [false]; HTTP Requests: [140]"
          },
          {
            "name": "Web - dbpedia/artists-york-filter",
            "value": 7268,
            "unit": "ms",
            "extra": "Results: [32]; Error: [false]; HTTP Requests: [1689.6666666666667]"
          },
          {
            "name": "Web - dbpedia/artists-york",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [32]; Error: [true]; HTTP Requests: [516]"
          },
          {
            "name": "Web - dbpedia/authors-books",
            "value": 392,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [8]"
          },
          {
            "name": "Web - dbpedia/bands-queen",
            "value": 396,
            "unit": "ms",
            "extra": "Results: [9]; Error: [false]; HTTP Requests: [17]"
          },
          {
            "name": "Web - dbpedia/belgian-software",
            "value": 3561,
            "unit": "ms",
            "extra": "Results: [13]; Error: [false]; HTTP Requests: [142]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-inlaws-pp",
            "value": 471,
            "unit": "ms",
            "extra": "Results: [8]; Error: [false]; HTTP Requests: [9]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-pp",
            "value": 2268,
            "unit": "ms",
            "extra": "Results: [633]; Error: [false]; HTTP Requests: [81]"
          },
          {
            "name": "Web - dbpedia/brad-pitt",
            "value": 2236,
            "unit": "ms",
            "extra": "Results: [43]; Error: [false]; HTTP Requests: [122]"
          },
          {
            "name": "Web - dbpedia/bruce-willis-pp",
            "value": 382,
            "unit": "ms",
            "extra": "Results: [3]; Error: [false]; HTTP Requests: [8]"
          },
          {
            "name": "Web - dbpedia/carpenters-crucifixion",
            "value": 191,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [3]"
          },
          {
            "name": "Web - dbpedia/common-jesus",
            "value": 26278,
            "unit": "ms",
            "extra": "Results: [1000]; Error: [false]; HTTP Requests: [1850.6666666666667]"
          },
          {
            "name": "Web - dbpedia/desserts-plants",
            "value": 17589,
            "unit": "ms",
            "extra": "Results: [168]; Error: [false]; HTTP Requests: [732]"
          },
          {
            "name": "Web - dbpedia/events-trentino",
            "value": 27633,
            "unit": "ms",
            "extra": "Results: [29]; Error: [false]; HTTP Requests: [1839]"
          },
          {
            "name": "Web - dbpedia/indian-dishes",
            "value": 2605,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [201]"
          },
          {
            "name": "Web - dbpedia/michael-jackson",
            "value": 2231,
            "unit": "ms",
            "extra": "Results: [26]; Error: [false]; HTTP Requests: [118]"
          },
          {
            "name": "Web - dbpedia/natalie-portman",
            "value": 930,
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
            "name": "Web - dbpedia/women-mythology",
            "value": 6140,
            "unit": "ms",
            "extra": "Results: [102]; Error: [false]; HTTP Requests: [712]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit-filter",
            "value": 6324,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [348.6666666666667]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit",
            "value": 5967,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [346.3333333333333]"
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
            "value": 812,
            "unit": "ms",
            "extra": "Results: [57]; Error: [false]; HTTP Requests: [80.33333333333333]"
          },
          {
            "name": "Web - other/rubens-articles",
            "value": 4011,
            "unit": "ms",
            "extra": "Results: [91]; Error: [false]; HTTP Requests: [608.3333333333334]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ruben.taelman@ugent.be",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "ruben.taelman@ugent.be",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "distinct": true,
          "id": "d2c7e46d02ab2eb7577d9b6e18b4be344c04ed22",
          "message": "Add in-memory HTTP caching\n\nWhen the `httpCache` context flag is set to true, HTTP requests will be\nset and retrieved from an in-memory cache. This cache fully adheres to\nthe HTTP caching semantics. The cache size can be configured through\nconfig parameters on the HTTP fetch actor.\n\nCloses #166",
          "timestamp": "2025-11-18T07:45:17+01:00",
          "tree_id": "bd067d3fa648a8f8e86114dbb1e679b20c78d271",
          "url": "https://github.com/comunica/comunica/commit/d2c7e46d02ab2eb7577d9b6e18b4be344c04ed22"
        },
        "date": 1763449151811,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File - C1",
            "value": 210,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - C2",
            "value": 2278,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - C3",
            "value": 1968,
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
            "value": 35,
            "unit": "ms",
            "extra": "Results: [0,0,1,1,1]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F3",
            "value": 65,
            "unit": "ms",
            "extra": "Results: [2,2,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F4",
            "value": 33,
            "unit": "ms",
            "extra": "Results: [0,0,12,12,12]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F5",
            "value": 79,
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
            "value": 25,
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
            "value": 27,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S4",
            "value": 28,
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
            "value": 962,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [940,940,940,940,940]"
          },
          {
            "name": "WatDiv-TPF - C2",
            "value": 2717,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [2191,2191,2191,2191,2191]"
          },
          {
            "name": "WatDiv-TPF - C3",
            "value": 18468,
            "unit": "ms",
            "extra": "Results: [48802,48802,48802,48802,48802]; Error: [false,false,false,false,false]; HTTP Requests: [20454,20454,20454,20454,20454]"
          },
          {
            "name": "WatDiv-TPF - F1",
            "value": 60,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [43,43,43,43,43]"
          },
          {
            "name": "WatDiv-TPF - F2",
            "value": 333,
            "unit": "ms",
            "extra": "Results: [0,0,1,1,1]; Error: [false,false,false,false,false]; HTTP Requests: [444,84,381,381,381]"
          },
          {
            "name": "WatDiv-TPF - F3",
            "value": 241,
            "unit": "ms",
            "extra": "Results: [2,2,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [274,274,19,229,190]"
          },
          {
            "name": "WatDiv-TPF - F4",
            "value": 279,
            "unit": "ms",
            "extra": "Results: [0,0,12,12,12]; Error: [false,false,false,false,false]; HTTP Requests: [305,305,296,296,296]"
          },
          {
            "name": "WatDiv-TPF - F5",
            "value": 429,
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
            "value": 20,
            "unit": "ms",
            "extra": "Results: [3,3,3,40,3]; Error: [false,false,false,false,false]; HTTP Requests: [10,10,10,15,10]"
          },
          {
            "name": "WatDiv-TPF - L3",
            "value": 50,
            "unit": "ms",
            "extra": "Results: [69,33,12,12,69]; Error: [false,false,false,false,false]; HTTP Requests: [35,34,48,48,35]"
          },
          {
            "name": "WatDiv-TPF - L4",
            "value": 13,
            "unit": "ms",
            "extra": "Results: [6,7,6,6,6]; Error: [false,false,false,false,false]; HTTP Requests: [5,5,5,5,5]"
          },
          {
            "name": "WatDiv-TPF - L5",
            "value": 21,
            "unit": "ms",
            "extra": "Results: [1,4,4,22,1]; Error: [false,false,false,false,false]; HTTP Requests: [10,10,10,15,10]"
          },
          {
            "name": "WatDiv-TPF - S1",
            "value": 327,
            "unit": "ms",
            "extra": "Results: [4,0,7,4,0]; Error: [false,false,false,false,false]; HTTP Requests: [410,346,1003,410,794]"
          },
          {
            "name": "WatDiv-TPF - S2",
            "value": 81,
            "unit": "ms",
            "extra": "Results: [2,1,1,2,1]; Error: [false,false,false,false,false]; HTTP Requests: [155,80,80,155,80]"
          },
          {
            "name": "WatDiv-TPF - S3",
            "value": 15,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [7,7,7,7,7]"
          },
          {
            "name": "WatDiv-TPF - S4",
            "value": 22,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [14,14,79,14,14]"
          },
          {
            "name": "WatDiv-TPF - S5",
            "value": 15,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [7,7,7,7,7]"
          },
          {
            "name": "WatDiv-TPF - S6",
            "value": 17,
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
            "name": "BSBM-File - 1",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [0.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 2",
            "value": 22,
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
            "value": 8,
            "unit": "ms",
            "extra": "Results: [0]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 5",
            "value": 228,
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
            "value": 45,
            "unit": "ms",
            "extra": "Results: [9.38]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 8",
            "value": 35,
            "unit": "ms",
            "extra": "Results: [5.05]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 9",
            "value": 24,
            "unit": "ms",
            "extra": "Results: [629.48]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 10",
            "value": 31,
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
            "value": 26,
            "unit": "ms",
            "extra": "Results: [0.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 2",
            "value": 68,
            "unit": "ms",
            "extra": "Results: [19.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 3",
            "value": 44,
            "unit": "ms",
            "extra": "Results: [0.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 4",
            "value": 56,
            "unit": "ms",
            "extra": "Results: [0]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 5",
            "value": 674,
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
            "value": 212,
            "unit": "ms",
            "extra": "Results: [9.38]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 8",
            "value": 189,
            "unit": "ms",
            "extra": "Results: [5.05]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 9",
            "value": 10,
            "unit": "ms",
            "extra": "Results: [629.48]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 10",
            "value": 209,
            "unit": "ms",
            "extra": "Results: [2.8]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 11",
            "value": 8,
            "unit": "ms",
            "extra": "Results: [10]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 12",
            "value": 21,
            "unit": "ms",
            "extra": "Results: [1120.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "Web - dbpedia/airports-italy",
            "value": 921,
            "unit": "ms",
            "extra": "Results: [19]; Error: [false]; HTTP Requests: [22]"
          },
          {
            "name": "Web - dbpedia/artists-york-filter",
            "value": 6406,
            "unit": "ms",
            "extra": "Results: [32]; Error: [false]; HTTP Requests: [516]"
          },
          {
            "name": "Web - dbpedia/artists-york",
            "value": 6276,
            "unit": "ms",
            "extra": "Results: [32]; Error: [false]; HTTP Requests: [516]"
          },
          {
            "name": "Web - dbpedia/authors-books",
            "value": 380,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [7.666666666666667]"
          },
          {
            "name": "Web - dbpedia/bands-queen",
            "value": 384,
            "unit": "ms",
            "extra": "Results: [9]; Error: [false]; HTTP Requests: [17]"
          },
          {
            "name": "Web - dbpedia/belgian-software",
            "value": 3516,
            "unit": "ms",
            "extra": "Results: [13]; Error: [false]; HTTP Requests: [142]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-inlaws-pp",
            "value": 463,
            "unit": "ms",
            "extra": "Results: [8]; Error: [false]; HTTP Requests: [9]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-pp",
            "value": 2155,
            "unit": "ms",
            "extra": "Results: [633]; Error: [false]; HTTP Requests: [81]"
          },
          {
            "name": "Web - dbpedia/brad-pitt",
            "value": 2206,
            "unit": "ms",
            "extra": "Results: [43]; Error: [false]; HTTP Requests: [122]"
          },
          {
            "name": "Web - dbpedia/bruce-willis-pp",
            "value": 375,
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
            "value": 26294,
            "unit": "ms",
            "extra": "Results: [1000]; Error: [false]; HTTP Requests: [1850.6666666666667]"
          },
          {
            "name": "Web - dbpedia/desserts-plants",
            "value": 17517,
            "unit": "ms",
            "extra": "Results: [168]; Error: [false]; HTTP Requests: [732]"
          },
          {
            "name": "Web - dbpedia/events-trentino",
            "value": 27317,
            "unit": "ms",
            "extra": "Results: [29]; Error: [false]; HTTP Requests: [1839]"
          },
          {
            "name": "Web - dbpedia/indian-dishes",
            "value": 2655,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [201]"
          },
          {
            "name": "Web - dbpedia/michael-jackson",
            "value": 2249,
            "unit": "ms",
            "extra": "Results: [26]; Error: [false]; HTTP Requests: [118]"
          },
          {
            "name": "Web - dbpedia/natalie-portman",
            "value": 946,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [34]"
          },
          {
            "name": "Web - dbpedia/os-raspberrypi",
            "value": 375,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [8]"
          },
          {
            "name": "Web - dbpedia/women-mythology",
            "value": 6519,
            "unit": "ms",
            "extra": "Results: [102]; Error: [false]; HTTP Requests: [712]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit-filter",
            "value": 6136,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [349.3333333333333]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit",
            "value": 5682,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [346]"
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
            "value": 763,
            "unit": "ms",
            "extra": "Results: [57]; Error: [false]; HTTP Requests: [54]"
          },
          {
            "name": "Web - other/rubens-articles",
            "value": 4440,
            "unit": "ms",
            "extra": "Results: [91]; Error: [false]; HTTP Requests: [418]"
          }
        ]
      }
    ]
  }
}