window.BENCHMARK_DATA = {
  "lastUpdate": 1763376579278,
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
          "id": "b2e531948fc49a3242f8ffb7d2db54e91f5cca40",
          "message": "Make caches depend on HTTP cache semantics\n\nThis exposes a cache policy on HTTP bus responses, and buses that rely\non it. While query sources and destinations were already being cached,\nthey were cached indefinitely. With this change, they now properly take\ninto account HTTP caching semantics, and become invalidated once the\nunderlying HTTP response becomes invalid.\n\nCurrently, this has one minor limitation.\nWe're not sending re-validation requests. So if the server sends a 304,\nwe will perform a new request and re-index the source. But if an\nHTTP-level cache is active, the actual HTTP request will not be sent, so\nonly local re-indexing will happen, which is negligible in most cases.\n\nPartially closes #166",
          "timestamp": "2025-11-14T15:22:12+01:00",
          "tree_id": "820c296d07b9835d3dfbdcf8115c472daa42513e",
          "url": "https://github.com/comunica/comunica/commit/b2e531948fc49a3242f8ffb7d2db54e91f5cca40"
        },
        "date": 1763131143847,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 4886,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 78514,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 429,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 10314,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 179949,
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
          "id": "b8a20aa3c3e053fad59c1c4c2ded12227c64a0dc",
          "message": "Make caches depend on HTTP cache semantics\n\nThis exposes a cache policy on HTTP bus responses, and buses that rely\non it. While query sources and destinations were already being cached,\nthey were cached indefinitely. With this change, they now properly take\ninto account HTTP caching semantics, and become invalidated once the\nunderlying HTTP response becomes invalid.\n\nCurrently, this has one minor limitation.\nWe're not sending re-validation requests. So if the server sends a 304,\nwe will perform a new request and re-index the source. But if an\nHTTP-level cache is active, the actual HTTP request will not be sent, so\nonly local re-indexing will happen, which is negligible in most cases.\n\nPartially closes #166",
          "timestamp": "2025-11-17T11:30:10+01:00",
          "tree_id": "1900b85d9081caac2f1bf27ed27f76996165b9c5",
          "url": "https://github.com/comunica/comunica/commit/b8a20aa3c3e053fad59c1c4c2ded12227c64a0dc"
        },
        "date": 1763376578209,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 6425,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 23672,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 361,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1578,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 201150,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}