window.BENCHMARK_DATA = {
  "lastUpdate": 1726756981065,
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
      }
    ]
  }
}