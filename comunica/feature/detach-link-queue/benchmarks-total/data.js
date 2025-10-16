window.BENCHMARK_DATA = {
  "lastUpdate": 1760594527397,
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
          "id": "88b4689c509f390cb343071b2ec7cbc5c6b3e6ea",
          "message": "Merge remote-tracking branch 'origin/master' into feature/detach-link-queue",
          "timestamp": "2025-10-16T07:47:42+02:00",
          "tree_id": "fd8ccead5232ea05ed8a2e156c00ca130bb22e44",
          "url": "https://github.com/comunica/comunica/commit/88b4689c509f390cb343071b2ec7cbc5c6b3e6ea"
        },
        "date": 1760594526413,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 3994,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 22494,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 322,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1332,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 117895,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}