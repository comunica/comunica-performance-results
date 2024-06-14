window.BENCHMARK_DATA = {
  "lastUpdate": 1718364260879,
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
          "id": "93f87d2b31ea39605967c84c8c029205ae7b3b28",
          "message": "Add optional hash join actor\n\nThis is a hash join actor that can be configured to handle undefineds or\nnot, and/or runs in blocking mode or not.\nThis actor is instantiated 4 times by default to cover all possible\ncombinations.\n\nThis actor can significantly improve performance in cases where our NLJ\nor BJ optional actors are insufficiently fast.\n\nCloses #772",
          "timestamp": "2024-06-14T13:09:41+02:00",
          "tree_id": "b33745b6a0fa628b3fb270c5c11ba0357653ae4b",
          "url": "https://github.com/comunica/comunica/commit/93f87d2b31ea39605967c84c8c029205ae7b3b28"
        },
        "date": 1718364260532,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 7739,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 36307,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}