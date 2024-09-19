window.BENCHMARK_DATA = {
  "lastUpdate": 1726771958258,
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
        "date": 1726756980833,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 5931,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 26276,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 596,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1530,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 133069,
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
          "id": "7ed87f093f363b78c2ab743cb4e2d6abf184a401",
          "message": "Forward side data from test to run in actors\n\nThis allows expensive logic from test methods to be reused as input to\nrun methods.\n\nCloses #1006",
          "timestamp": "2024-09-19T17:06:02+02:00",
          "tree_id": "c996e49ef9c38239d745aaf281d6358f4683a774",
          "url": "https://github.com/comunica/comunica/commit/7ed87f093f363b78c2ab743cb4e2d6abf184a401"
        },
        "date": 1726761670488,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 6715,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 22777,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 600,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1540,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 157751,
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
          "id": "81b290a75d42db67adc7e620c2f4058c874d3b8e",
          "message": "Forward side data from test to run in actors\n\nThis allows expensive logic from test methods to be reused as input to\nrun methods.\n\nCloses #1006",
          "timestamp": "2024-09-19T19:49:39+02:00",
          "tree_id": "c996e49ef9c38239d745aaf281d6358f4683a774",
          "url": "https://github.com/comunica/comunica/commit/81b290a75d42db67adc7e620c2f4058c874d3b8e"
        },
        "date": 1726770259885,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 5662,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 25641,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 629,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1637,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 151828,
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
          "id": "2fa7295d77d3a36abc24e8730e29cf12e3cf7e36",
          "message": "Use test side data in rdf-join bus\n\nThis reduces duplicate metadata calculations across test and run.",
          "timestamp": "2024-09-19T20:29:00+02:00",
          "tree_id": "0d191f3b9f33cb65ae95d3362881e38e8efa7db5",
          "url": "https://github.com/comunica/comunica/commit/2fa7295d77d3a36abc24e8730e29cf12e3cf7e36"
        },
        "date": 1726771958024,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 5671,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 26558,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 585,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1529,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 130644,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}