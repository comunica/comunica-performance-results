window.BENCHMARK_DATA = {
  "lastUpdate": 1727365086326,
  "repoUrl": "https://github.com/comunica/comunica",
  "entries": {
    "Benchmarks total results": [
      {
        "commit": {
          "author": {
            "email": "bryanelliott.tam@ugent.be",
            "name": "Bryan-Elliott Tam",
            "username": "constraintAutomaton"
          },
          "committer": {
            "email": "rubensworks@users.noreply.github.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "distinct": true,
          "id": "a83d31964a63925d7cf3b60b6bd32b7c825fab8d",
          "message": "Fix the typo where the actor refers to QuerySourceQpf instead of QuerySourceRdfJs in the error thrown",
          "timestamp": "2024-09-20T11:07:47+02:00",
          "tree_id": "dd895e9a3940f973ad106e8b3a4d1da9c5127680",
          "url": "https://github.com/comunica/comunica/commit/a83d31964a63925d7cf3b60b6bd32b7c825fab8d"
        },
        "date": 1727192923751,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 6325,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 27308,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 849,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 2007,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 203480,
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
          "id": "8e1de4b81d88526d9580db27526923d215fc4982",
          "message": "Add two federated SPARQL endpoint queries to benchmark-web\n\nThese test the effectiveness of multi-bind and multi-bind-source join\nactors.",
          "timestamp": "2024-09-26T17:11:21+02:00",
          "tree_id": "57b742c7f59478d07040e068898ba2f0d760c3cf",
          "url": "https://github.com/comunica/comunica/commit/8e1de4b81d88526d9580db27526923d215fc4982"
        },
        "date": 1727365086087,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 6014,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 26080,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 830,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1909,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 150446,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}