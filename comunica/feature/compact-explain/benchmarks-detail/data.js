window.BENCHMARK_DATA = {
  "lastUpdate": 1717769632283,
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
          "id": "2cfbe2d8419b9e9d24f390fd46862b3b9678e4d3",
          "message": "Make physical query plan explain output compact and human-readable\n\nThis modifies the JSON-based physical explain output to be non-JSON\nand purely textual. It only contains the essential information.\nThe previous JSON-based output can still be retrieved via the\n'physical-json' explain mode.",
          "timestamp": "2024-06-07T15:58:54+02:00",
          "tree_id": "6dde6354e89b081df720aa7ed2ccae5d8db42e2d",
          "url": "https://github.com/comunica/comunica/commit/2cfbe2d8419b9e9d24f390fd46862b3b9678e4d3"
        },
        "date": 1717769632053,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File - C1",
            "value": 353,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - C2",
            "value": 2895,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - C3",
            "value": 3770,
            "unit": "ms",
            "extra": "Results: 48802; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - F1",
            "value": 17,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - F2",
            "value": 57,
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
            "value": 52,
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
            "value": 21,
            "unit": "ms",
            "extra": "Results: 1; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - L2",
            "value": 15,
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
            "value": 16,
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
            "value": 45,
            "unit": "ms",
            "extra": "Results: 4; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S2",
            "value": 15,
            "unit": "ms",
            "extra": "Results: 2; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S3",
            "value": 54,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S4",
            "value": 59,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S5",
            "value": 65,
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
            "value": 1342,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 940"
          },
          {
            "name": "WatDiv-TPF - C2",
            "value": 3714,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 2191"
          },
          {
            "name": "WatDiv-TPF - C3",
            "value": 29038,
            "unit": "ms",
            "extra": "Results: 48802; Error: false; HTTP Requests: 20454"
          },
          {
            "name": "WatDiv-TPF - F1",
            "value": 77,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 43"
          },
          {
            "name": "WatDiv-TPF - F2",
            "value": 524,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 444"
          },
          {
            "name": "WatDiv-TPF - F3",
            "value": 418,
            "unit": "ms",
            "extra": "Results: 2; Error: false; HTTP Requests: 274"
          },
          {
            "name": "WatDiv-TPF - F4",
            "value": 426,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 305"
          },
          {
            "name": "WatDiv-TPF - F5",
            "value": 563,
            "unit": "ms",
            "extra": "Results: 32; Error: false; HTTP Requests: 338"
          },
          {
            "name": "WatDiv-TPF - L1",
            "value": 115,
            "unit": "ms",
            "extra": "Results: 1; Error: false; HTTP Requests: 49"
          },
          {
            "name": "WatDiv-TPF - L2",
            "value": 111,
            "unit": "ms",
            "extra": "Results: 3; Error: false; HTTP Requests: 67"
          },
          {
            "name": "WatDiv-TPF - L3",
            "value": 66,
            "unit": "ms",
            "extra": "Results: 69; Error: false; HTTP Requests: 35"
          },
          {
            "name": "WatDiv-TPF - L4",
            "value": 116,
            "unit": "ms",
            "extra": "Results: 6; Error: false; HTTP Requests: 75"
          },
          {
            "name": "WatDiv-TPF - L5",
            "value": 111,
            "unit": "ms",
            "extra": "Results: 1; Error: false; HTTP Requests: 67"
          },
          {
            "name": "WatDiv-TPF - S1",
            "value": 509,
            "unit": "ms",
            "extra": "Results: 4; Error: false; HTTP Requests: 410"
          },
          {
            "name": "WatDiv-TPF - S2",
            "value": 126,
            "unit": "ms",
            "extra": "Results: 2; Error: false; HTTP Requests: 155"
          },
          {
            "name": "WatDiv-TPF - S3",
            "value": 588,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 417"
          },
          {
            "name": "WatDiv-TPF - S4",
            "value": 417,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 282"
          },
          {
            "name": "WatDiv-TPF - S5",
            "value": 695,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 492"
          },
          {
            "name": "WatDiv-TPF - S6",
            "value": 27,
            "unit": "ms",
            "extra": "Results: 1; Error: false; HTTP Requests: 96"
          },
          {
            "name": "WatDiv-TPF - S7",
            "value": 10,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 4"
          }
        ]
      }
    ]
  }
}