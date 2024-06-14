window.BENCHMARK_DATA = {
  "lastUpdate": 1718364259661,
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
      }
    ]
  }
}