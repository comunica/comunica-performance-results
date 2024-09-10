window.BENCHMARK_DATA = {
  "lastUpdate": 1725978518218,
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
          "id": "4cb21fcc65d68fe0dc78bc7e3ddded7c9cdf85d8",
          "message": "Improve error reporting when mediators fail\n\nAll buses now have an error message template, which will be used when\nreporting mediator failures.\n\nCloses #119",
          "timestamp": "2024-09-06T15:53:09+02:00",
          "tree_id": "f3e82635c1f6c9b6dbd5f030ded477a575eb080c",
          "url": "https://github.com/comunica/comunica/commit/4cb21fcc65d68fe0dc78bc7e3ddded7c9cdf85d8"
        },
        "date": 1725967338013,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 5862,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 23631,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 586,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1572,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 231218,
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
          "id": "7507b24bdef6b655432aef89ba96c9e2524e6808",
          "message": "Abstract actor-rdf-join-minus-hash-undef into actor-rdf-join-minus-hash",
          "timestamp": "2024-09-10T13:26:11+02:00",
          "tree_id": "a7f1576665627c025a71e63161747aaeb0e81ac2",
          "url": "https://github.com/comunica/comunica/commit/7507b24bdef6b655432aef89ba96c9e2524e6808"
        },
        "date": 1725969592743,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 5312,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 23666,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 591,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1523,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 232192,
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
          "id": "6027c7eda4dad6b557875eb63c27a43906998fa4",
          "message": "Add undef support to inner hash join actor\n\nThis generalizes the BindingsIndexUndef slightly due to the different\nbehaviour when handling disjoint domains compared to minus operation.",
          "timestamp": "2024-09-10T16:04:38+02:00",
          "tree_id": "3e347dbf2b81596839ce722b0bc1711fc8c20193",
          "url": "https://github.com/comunica/comunica/commit/6027c7eda4dad6b557875eb63c27a43906998fa4"
        },
        "date": 1725978517902,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 5896,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 25041,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 612,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1463,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 130194,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}