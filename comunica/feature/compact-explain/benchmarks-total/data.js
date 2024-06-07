window.BENCHMARK_DATA = {
  "lastUpdate": 1717769633254,
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
          "id": "2cfbe2d8419b9e9d24f390fd46862b3b9678e4d3",
          "message": "Make physical query plan explain output compact and human-readable\n\nThis modifies the JSON-based physical explain output to be non-JSON\nand purely textual. It only contains the essential information.\nThe previous JSON-based output can still be retrieved via the\n'physical-json' explain mode.",
          "timestamp": "2024-06-07T15:58:54+02:00",
          "tree_id": "6dde6354e89b081df720aa7ed2ccae5d8db42e2d",
          "url": "https://github.com/comunica/comunica/commit/2cfbe2d8419b9e9d24f390fd46862b3b9678e4d3"
        },
        "date": 1717769633055,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 7692,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 38993,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}