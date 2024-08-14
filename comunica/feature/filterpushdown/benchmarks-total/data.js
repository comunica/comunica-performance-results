window.BENCHMARK_DATA = {
  "lastUpdate": 1723630444253,
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
          "id": "7b52eaf4c2eef9a9f79f572fbcf17fdd079e9c21",
          "message": "Merge nested filters into conjunctive after pushdown",
          "timestamp": "2024-08-12T12:54:05+02:00",
          "tree_id": "09bb6deb96662549a5fc9852ecb0f7c8c9ea612b",
          "url": "https://github.com/comunica/comunica/commit/7b52eaf4c2eef9a9f79f572fbcf17fdd079e9c21"
        },
        "date": 1723462284272,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 8421,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 35329,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 2385,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 3837,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 123200,
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
          "id": "d4da37992850bf3eba3ea4f2b4259e94953a51f3",
          "message": "Only enable filter pushdown if criteria are met\n\nThe criteria under which filter pushdown is enabled are as follows:\n\n- Always push down if aggressive mode is enabled\n- Push down if the filter is extremely selective\n- Push down if federated\n- Push down if single source accepts the query",
          "timestamp": "2024-08-12T14:06:55+02:00",
          "tree_id": "6c05b2a357666b44d66d454c1c356f24ad3b8943",
          "url": "https://github.com/comunica/comunica/commit/d4da37992850bf3eba3ea4f2b4259e94953a51f3"
        },
        "date": 1723466433510,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 7809,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 35843,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 1107,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 2580,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 211711,
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
          "id": "ee02eb77e0c8e217e4d9443c66a1f577d71ea479",
          "message": "Enable left join filter pushdown by default",
          "timestamp": "2024-08-12T14:51:56+02:00",
          "tree_id": "c49f4fc4624d9f76351875353785a57d7aaad611",
          "url": "https://github.com/comunica/comunica/commit/ee02eb77e0c8e217e4d9443c66a1f577d71ea479"
        },
        "date": 1723468727976,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 7492,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 34758,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 1094,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 2534,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 146884,
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
          "id": "a68a8159081108f1700dea525aedf16668156e29",
          "message": "Bump coveralls action in CI",
          "timestamp": "2024-08-12T15:23:46+02:00",
          "tree_id": "9a23b5c7416c4cea530b3bb21b1d3005480e072a",
          "url": "https://github.com/comunica/comunica/commit/a68a8159081108f1700dea525aedf16668156e29"
        },
        "date": 1723470874313,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 7727,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 38074,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 1120,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 2407,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 144592,
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
          "id": "d487c093054f72556b50ca167c3b4fb2bda9cb7a",
          "message": "Push down simple equality filters into triple patterns",
          "timestamp": "2024-08-14T11:43:39+02:00",
          "tree_id": "4101e8e7df2ada38546e758c26569074e023407e",
          "url": "https://github.com/comunica/comunica/commit/d487c093054f72556b50ca167c3b4fb2bda9cb7a"
        },
        "date": 1723630443939,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 8428,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 35237,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 1063,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 2577,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 120403,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}