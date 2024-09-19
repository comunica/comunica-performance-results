window.BENCHMARK_DATA = {
  "lastUpdate": 1726748496592,
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
          "id": "5ddb64bb1df4b1179529f3e2ea0c05fb321dfce9",
          "message": "Only consider overlapping vars when testing undef in join actors\n\nThis makes it so that actors that can not handle undefs to still work\nover bindings streams that have undefs, but only for variables that are\nirrelevant to the joining.\n\nThis allows for more efficient join actors to be selectable for certain\nqueries, such as other/hubl-optional.sparql.",
          "timestamp": "2024-09-13T11:53:08+02:00",
          "tree_id": "b1bb64326c78e9a4dd43d50aee72b9f1f94d057e",
          "url": "https://github.com/comunica/comunica/commit/5ddb64bb1df4b1179529f3e2ea0c05fb321dfce9"
        },
        "date": 1726570835893,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 5525,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 24103,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 536,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1532,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 231378,
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
          "id": "61f763994908b7f4a65b9ed3a9de006d6b85504f",
          "message": "Forward side data from test to run in actors\n\nThis allows expensive logic from test methods to be reused as input to\nrun methods.\n\nCloses #1006",
          "timestamp": "2024-09-17T15:58:47+02:00",
          "tree_id": "c996e49ef9c38239d745aaf281d6358f4683a774",
          "url": "https://github.com/comunica/comunica/commit/61f763994908b7f4a65b9ed3a9de006d6b85504f"
        },
        "date": 1726583373771,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 6619,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 23491,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 562,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1496,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 229570,
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
          "id": "fd69006e9359d0ee3883cff3edd8269e2ac54bab",
          "message": "Use test side data in rdf-join bus\n\nThis reduces duplicate metadata calculations across test and run.",
          "timestamp": "2024-09-19T13:56:48+02:00",
          "tree_id": "0d191f3b9f33cb65ae95d3362881e38e8efa7db5",
          "url": "https://github.com/comunica/comunica/commit/fd69006e9359d0ee3883cff3edd8269e2ac54bab"
        },
        "date": 1726748496052,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 6827,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 24774,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 571,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1506,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 130269,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}