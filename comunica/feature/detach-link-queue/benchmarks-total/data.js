window.BENCHMARK_DATA = {
  "lastUpdate": 1759833995819,
  "repoUrl": "https://github.com/comunica/comunica",
  "entries": {
    "Benchmarks total results": [
      {
        "commit": {
          "author": {
            "email": "16085353+surilindur@users.noreply.github.com",
            "name": "surilindur",
            "username": "surilindur"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e7949c4b2c77df52ab58c66e5eb95dde53147cdc",
          "message": "Handle sd:propertyFeature in SPARQL endpoints\n\nThis ensures that when querying over endpoints exposing `sd:propertyFeature`\nin their service description, we assume that the endpoint will have matches, and\nthat no separate ASK or COUNT queries are sent to that endpoint.\n\nThis enables federation over endpoints (e.g. IDSM/ChEBI) that add special behaviour\nto certain predicates, and can require some of these predicates to always be grouped\ntogether.",
          "timestamp": "2025-09-30T11:20:11+02:00",
          "tree_id": "b2366de17b3250ae7fa73cb2254bd78a5ed47515",
          "url": "https://github.com/comunica/comunica/commit/e7949c4b2c77df52ab58c66e5eb95dde53147cdc"
        },
        "date": 1759833994857,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 4079,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 25372,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 314,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1352,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 160024,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}