window.BENCHMARK_DATA = {
  "lastUpdate": 1739469870626,
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
          "id": "513e55a61639902de3c0dceda0c3c4c29cb617bd",
          "message": "Avoid creation of intermediary triple objects for in-memory stores\n\nThis slightly improves overall performance.",
          "timestamp": "2025-02-13T14:55:08+01:00",
          "tree_id": "2001807ea9884ebc832200417fa7d888a3216fa7",
          "url": "https://github.com/comunica/comunica/commit/513e55a61639902de3c0dceda0c3c4c29cb617bd"
        },
        "date": 1739469870185,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 4944,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 24783,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 340,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1606,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 140310,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}