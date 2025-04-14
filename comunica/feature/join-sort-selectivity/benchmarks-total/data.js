window.BENCHMARK_DATA = {
  "lastUpdate": 1744640252942,
  "repoUrl": "https://github.com/comunica/comunica",
  "entries": {
    "Benchmarks total results": [
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
          "id": "c5529ac2e01addeb1b1a5afbdbf9e29983ce1a93",
          "message": "Skip unnecessary SPARQL SD requests for a single source\n\nCloses #1532",
          "timestamp": "2025-04-08T16:01:48+02:00",
          "tree_id": "66195ffce794efd1a413daba12ffe3586972b28d",
          "url": "https://github.com/comunica/comunica/commit/c5529ac2e01addeb1b1a5afbdbf9e29983ce1a93"
        },
        "date": 1744380746965,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 4924,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 24149,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 384,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1395,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 135295,
            "unit": "ms"
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
          "id": "577fd93aa7d0f8288040d859b73133ceb8dac056",
          "message": "Add join sorter based on join selectivities\n\nThis will be used as a fallback to the default cardinality-based join\nentry sorter, in case not all cardinalities are present.\n\nFor example, when the engine is unable to provide cardinalities for\ntriple patterns on SPARQL endpoints (they are all infinity), this new\nactor will provide a fallback approach to order them based on a variable\ncounting approach.\nThis corresponds to the default FedX approach.",
          "timestamp": "2025-04-14T15:45:52+02:00",
          "tree_id": "2d43bd88dbd5f4e15b561a2a9311810964fdb381",
          "url": "https://github.com/comunica/comunica/commit/577fd93aa7d0f8288040d859b73133ceb8dac056"
        },
        "date": 1744640252427,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 5748,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 25647,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 341,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1372,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 179942,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}