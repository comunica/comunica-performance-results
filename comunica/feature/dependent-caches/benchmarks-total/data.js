window.BENCHMARK_DATA = {
  "lastUpdate": 1763108611467,
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
          "id": "d46a6578d8a990cf6ebcf0834a11a801c77061c9",
          "message": "Fallback SPARQL endpoint requests to original URL if SD URL 404's\n\nThis is necessary as many endpoints incorrectly configure their service\ndescription, and refer to non-existing or invalid URLs.\n\nRelated to #1591",
          "timestamp": "2025-11-04T17:54:47+09:00",
          "tree_id": "c31ba08c310bd124879fe05e789fe69ea84f0447",
          "url": "https://github.com/comunica/comunica/commit/d46a6578d8a990cf6ebcf0834a11a801c77061c9"
        },
        "date": 1763108610197,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 5278,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 22989,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 364,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1410,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 133140,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}