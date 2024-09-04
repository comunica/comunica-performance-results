window.BENCHMARK_DATA = {
  "lastUpdate": 1725444209931,
  "repoUrl": "https://github.com/comunica/comunica",
  "entries": {
    "Benchmarks total results": [
      {
        "commit": {
          "author": {
            "email": "rubensworks@users.noreply.github.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "be5498a936db66e9d3ff87f89d8b064a01ca494c",
          "message": "Merge pull request #1417 from jitsedesmet/next/major\n\nMerge master into next/major",
          "timestamp": "2024-08-23T08:29:22+02:00",
          "tree_id": "31f990439e61eb5f29cd9e2b7fc2bd01c77b4cb3",
          "url": "https://github.com/comunica/comunica/commit/be5498a936db66e9d3ff87f89d8b064a01ca494c"
        },
        "date": 1725280500209,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 7644,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 34546,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 1078,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 2362,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 232056,
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
          "id": "db38bf3df3bd1765e51bcb832dcb936706451606",
          "message": "Refactor Actor.test to not rely on Promise rejections\n\nPromise rejections rely on the creation of Error objects,\nwhich are expensive to create in large numbers due to stack trace\nbuilding.\nSince Comunica tends to invoke a huge number of test methods for an\naverage query exection, this can cause a large performance overhead.\n\nThis commit refactors test methods to asynchronously return a\nTestResult, which is a holder object that either contains a passed value\nor a failure message.",
          "timestamp": "2024-09-04T11:36:16+02:00",
          "tree_id": "b6f1b7eaa7bd16db0c1b4774ce978fcdd757c0b8",
          "url": "https://github.com/comunica/comunica/commit/db38bf3df3bd1765e51bcb832dcb936706451606"
        },
        "date": 1725444209584,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 6991,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 31121,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 635,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1940,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 131593,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}