window.BENCHMARK_DATA = {
  "lastUpdate": 1723127513944,
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
          "id": "61fb3fb4862679551f3611e58bb4e7e948ea1a18",
          "message": "Support pushing filters into left joins\n\nThis is disabled by default, as this lead to a minor slowdown for all of\nour tested queries (such as the York query) due to more filter iterators\nbeing created than before, which are more expensive than one large\nfilter iterator.\nThis might be enableable in the future if filter iterators would lead to\nless overhead (which originates from the AsyncIterator transform\niterator overhead).",
          "timestamp": "2024-08-08T15:03:01+02:00",
          "tree_id": "92f475ef5930460a9cf4a120dd74d2142976c8e0",
          "url": "https://github.com/comunica/comunica/commit/61fb3fb4862679551f3611e58bb4e7e948ea1a18"
        },
        "date": 1723127513400,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 7507,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 34305,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 1093,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 2487,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 186462,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}