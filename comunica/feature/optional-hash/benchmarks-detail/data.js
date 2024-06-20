window.BENCHMARK_DATA = {
  "lastUpdate": 1718891562925,
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
          "id": "93f87d2b31ea39605967c84c8c029205ae7b3b28",
          "message": "Add optional hash join actor\n\nThis is a hash join actor that can be configured to handle undefineds or\nnot, and/or runs in blocking mode or not.\nThis actor is instantiated 4 times by default to cover all possible\ncombinations.\n\nThis actor can significantly improve performance in cases where our NLJ\nor BJ optional actors are insufficiently fast.\n\nCloses #772",
          "timestamp": "2024-06-14T13:09:41+02:00",
          "tree_id": "b33745b6a0fa628b3fb270c5c11ba0357653ae4b",
          "url": "https://github.com/comunica/comunica/commit/93f87d2b31ea39605967c84c8c029205ae7b3b28"
        },
        "date": 1718364259342,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File - C1",
            "value": 341,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - C2",
            "value": 2748,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - C3",
            "value": 3959,
            "unit": "ms",
            "extra": "Results: 48802; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - F1",
            "value": 18,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - F2",
            "value": 56,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - F3",
            "value": 90,
            "unit": "ms",
            "extra": "Results: 2; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - F4",
            "value": 51,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - F5",
            "value": 134,
            "unit": "ms",
            "extra": "Results: 32; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - L1",
            "value": 23,
            "unit": "ms",
            "extra": "Results: 1; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - L2",
            "value": 14,
            "unit": "ms",
            "extra": "Results: 3; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - L3",
            "value": 12,
            "unit": "ms",
            "extra": "Results: 69; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - L4",
            "value": 17,
            "unit": "ms",
            "extra": "Results: 6; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - L5",
            "value": 15,
            "unit": "ms",
            "extra": "Results: 1; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S1",
            "value": 44,
            "unit": "ms",
            "extra": "Results: 4; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S2",
            "value": 17,
            "unit": "ms",
            "extra": "Results: 2; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S3",
            "value": 60,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S4",
            "value": 61,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S5",
            "value": 70,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S6",
            "value": 6,
            "unit": "ms",
            "extra": "Results: 1; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S7",
            "value": 3,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-TPF - C1",
            "value": 1267,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 940"
          },
          {
            "name": "WatDiv-TPF - C2",
            "value": 3388,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 2191"
          },
          {
            "name": "WatDiv-TPF - C3",
            "value": 27318,
            "unit": "ms",
            "extra": "Results: 48802; Error: false; HTTP Requests: 20454"
          },
          {
            "name": "WatDiv-TPF - F1",
            "value": 70,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 43"
          },
          {
            "name": "WatDiv-TPF - F2",
            "value": 469,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 444"
          },
          {
            "name": "WatDiv-TPF - F3",
            "value": 310,
            "unit": "ms",
            "extra": "Results: 2; Error: false; HTTP Requests: 274"
          },
          {
            "name": "WatDiv-TPF - F4",
            "value": 378,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 305"
          },
          {
            "name": "WatDiv-TPF - F5",
            "value": 556,
            "unit": "ms",
            "extra": "Results: 32; Error: false; HTTP Requests: 338"
          },
          {
            "name": "WatDiv-TPF - L1",
            "value": 108,
            "unit": "ms",
            "extra": "Results: 1; Error: false; HTTP Requests: 49"
          },
          {
            "name": "WatDiv-TPF - L2",
            "value": 104,
            "unit": "ms",
            "extra": "Results: 3; Error: false; HTTP Requests: 67"
          },
          {
            "name": "WatDiv-TPF - L3",
            "value": 59,
            "unit": "ms",
            "extra": "Results: 69; Error: false; HTTP Requests: 35"
          },
          {
            "name": "WatDiv-TPF - L4",
            "value": 111,
            "unit": "ms",
            "extra": "Results: 6; Error: false; HTTP Requests: 75"
          },
          {
            "name": "WatDiv-TPF - L5",
            "value": 102,
            "unit": "ms",
            "extra": "Results: 1; Error: false; HTTP Requests: 67"
          },
          {
            "name": "WatDiv-TPF - S1",
            "value": 469,
            "unit": "ms",
            "extra": "Results: 4; Error: false; HTTP Requests: 410"
          },
          {
            "name": "WatDiv-TPF - S2",
            "value": 113,
            "unit": "ms",
            "extra": "Results: 2; Error: false; HTTP Requests: 155"
          },
          {
            "name": "WatDiv-TPF - S3",
            "value": 501,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 417"
          },
          {
            "name": "WatDiv-TPF - S4",
            "value": 357,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 282"
          },
          {
            "name": "WatDiv-TPF - S5",
            "value": 597,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 492"
          },
          {
            "name": "WatDiv-TPF - S6",
            "value": 22,
            "unit": "ms",
            "extra": "Results: 1; Error: false; HTTP Requests: 96"
          },
          {
            "name": "WatDiv-TPF - S7",
            "value": 8,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 4"
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
          "id": "df40c20e001121cd0ae9a9adf67ed221dc2966ba",
          "message": "Make optional hash and bind join only work with common variables",
          "timestamp": "2024-06-20T15:30:16+02:00",
          "tree_id": "ed89e2f2455ea7bc3bf0ed3851ed620b5cb34057",
          "url": "https://github.com/comunica/comunica/commit/df40c20e001121cd0ae9a9adf67ed221dc2966ba"
        },
        "date": 1718891562697,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File - C1",
            "value": 374,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - C2",
            "value": 3164,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - C3",
            "value": 4209,
            "unit": "ms",
            "extra": "Results: 48802; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - F1",
            "value": 20,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - F2",
            "value": 62,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - F3",
            "value": 95,
            "unit": "ms",
            "extra": "Results: 2; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - F4",
            "value": 53,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - F5",
            "value": 142,
            "unit": "ms",
            "extra": "Results: 32; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - L1",
            "value": 23,
            "unit": "ms",
            "extra": "Results: 1; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - L2",
            "value": 17,
            "unit": "ms",
            "extra": "Results: 3; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - L3",
            "value": 13,
            "unit": "ms",
            "extra": "Results: 69; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - L4",
            "value": 17,
            "unit": "ms",
            "extra": "Results: 6; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - L5",
            "value": 16,
            "unit": "ms",
            "extra": "Results: 1; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S1",
            "value": 43,
            "unit": "ms",
            "extra": "Results: 4; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S2",
            "value": 16,
            "unit": "ms",
            "extra": "Results: 2; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S3",
            "value": 59,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S4",
            "value": 61,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S5",
            "value": 71,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S6",
            "value": 4,
            "unit": "ms",
            "extra": "Results: 1; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S7",
            "value": 3,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-TPF - C1",
            "value": 1317,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 940"
          },
          {
            "name": "WatDiv-TPF - C2",
            "value": 3375,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 2191"
          },
          {
            "name": "WatDiv-TPF - C3",
            "value": 27179,
            "unit": "ms",
            "extra": "Results: 48802; Error: false; HTTP Requests: 20454"
          },
          {
            "name": "WatDiv-TPF - F1",
            "value": 70,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 43"
          },
          {
            "name": "WatDiv-TPF - F2",
            "value": 465,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 444"
          },
          {
            "name": "WatDiv-TPF - F3",
            "value": 316,
            "unit": "ms",
            "extra": "Results: 2; Error: false; HTTP Requests: 274"
          },
          {
            "name": "WatDiv-TPF - F4",
            "value": 378,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 305"
          },
          {
            "name": "WatDiv-TPF - F5",
            "value": 571,
            "unit": "ms",
            "extra": "Results: 32; Error: false; HTTP Requests: 338"
          },
          {
            "name": "WatDiv-TPF - L1",
            "value": 109,
            "unit": "ms",
            "extra": "Results: 1; Error: false; HTTP Requests: 49"
          },
          {
            "name": "WatDiv-TPF - L2",
            "value": 107,
            "unit": "ms",
            "extra": "Results: 3; Error: false; HTTP Requests: 67"
          },
          {
            "name": "WatDiv-TPF - L3",
            "value": 58,
            "unit": "ms",
            "extra": "Results: 69; Error: false; HTTP Requests: 35"
          },
          {
            "name": "WatDiv-TPF - L4",
            "value": 111,
            "unit": "ms",
            "extra": "Results: 6; Error: false; HTTP Requests: 75"
          },
          {
            "name": "WatDiv-TPF - L5",
            "value": 104,
            "unit": "ms",
            "extra": "Results: 1; Error: false; HTTP Requests: 67"
          },
          {
            "name": "WatDiv-TPF - S1",
            "value": 441,
            "unit": "ms",
            "extra": "Results: 4; Error: false; HTTP Requests: 410"
          },
          {
            "name": "WatDiv-TPF - S2",
            "value": 102,
            "unit": "ms",
            "extra": "Results: 2; Error: false; HTTP Requests: 155"
          },
          {
            "name": "WatDiv-TPF - S3",
            "value": 507,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 417"
          },
          {
            "name": "WatDiv-TPF - S4",
            "value": 361,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 282"
          },
          {
            "name": "WatDiv-TPF - S5",
            "value": 600,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 492"
          },
          {
            "name": "WatDiv-TPF - S6",
            "value": 19,
            "unit": "ms",
            "extra": "Results: 1; Error: false; HTTP Requests: 96"
          },
          {
            "name": "WatDiv-TPF - S7",
            "value": 8,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 4"
          },
          {
            "name": "BSBM-File - 1",
            "value": 7,
            "unit": "ms",
            "extra": "Results: 0.5; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 2",
            "value": 119,
            "unit": "ms",
            "extra": "Results: 19.5; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 3",
            "value": 14,
            "unit": "ms",
            "extra": "Results: 0.2; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 4",
            "value": 16,
            "unit": "ms",
            "extra": "Results: 0; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 5",
            "value": 751,
            "unit": "ms",
            "extra": "Results: 3.5; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 6",
            "value": null,
            "unit": "ms",
            "extra": "Results: undefined; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 7",
            "value": 56,
            "unit": "ms",
            "extra": "Results: 9.38; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 8",
            "value": 52,
            "unit": "ms",
            "extra": "Results: 5.05; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 9",
            "value": 22,
            "unit": "ms",
            "extra": "Results: 629.48; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 10",
            "value": 63,
            "unit": "ms",
            "extra": "Results: 2.8; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 11",
            "value": 3,
            "unit": "ms",
            "extra": "Results: 10; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 12",
            "value": 10,
            "unit": "ms",
            "extra": "Results: 1120.2; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 1",
            "value": 34,
            "unit": "ms",
            "extra": "Results: 0.5; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 2",
            "value": 195,
            "unit": "ms",
            "extra": "Results: 19.5; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 3",
            "value": 58,
            "unit": "ms",
            "extra": "Results: 0.2; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 4",
            "value": 81,
            "unit": "ms",
            "extra": "Results: 0; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 5",
            "value": 1326,
            "unit": "ms",
            "extra": "Results: 3.5; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 6",
            "value": null,
            "unit": "ms",
            "extra": "Results: undefined; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 7",
            "value": 271,
            "unit": "ms",
            "extra": "Results: 9.38; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 8",
            "value": 238,
            "unit": "ms",
            "extra": "Results: 5.05; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 9",
            "value": 12,
            "unit": "ms",
            "extra": "Results: 629.48; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 10",
            "value": 293,
            "unit": "ms",
            "extra": "Results: 2.8; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 11",
            "value": 10,
            "unit": "ms",
            "extra": "Results: 10; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 12",
            "value": 29,
            "unit": "ms",
            "extra": "Results: 1120.2; Error: undefined; HTTP Requests: undefined"
          }
        ]
      }
    ]
  }
}