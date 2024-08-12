window.BENCHMARK_DATA = {
  "lastUpdate": 1723462283283,
  "repoUrl": "https://github.com/comunica/comunica",
  "entries": {
    "Benchmarks detailed results": [
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
        "date": 1723127511809,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File - C1",
            "value": 349,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - C2",
            "value": 2706,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - C3",
            "value": 3944,
            "unit": "ms",
            "extra": "Results: 48802; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - F1",
            "value": 20,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - F2",
            "value": 60,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - F3",
            "value": 88,
            "unit": "ms",
            "extra": "Results: 2; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - F4",
            "value": 52,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - F5",
            "value": 144,
            "unit": "ms",
            "extra": "Results: 32; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - L1",
            "value": 21,
            "unit": "ms",
            "extra": "Results: 1; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - L2",
            "value": 7,
            "unit": "ms",
            "extra": "Results: 3; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - L3",
            "value": 15,
            "unit": "ms",
            "extra": "Results: 69; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - L4",
            "value": 4,
            "unit": "ms",
            "extra": "Results: 6; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - L5",
            "value": 8,
            "unit": "ms",
            "extra": "Results: 1; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S1",
            "value": 44,
            "unit": "ms",
            "extra": "Results: 4; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S2",
            "value": 17,
            "unit": "ms",
            "extra": "Results: 2; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S3",
            "value": 6,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S4",
            "value": 9,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S5",
            "value": 6,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S6",
            "value": 4,
            "unit": "ms",
            "extra": "Results: 1; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S7",
            "value": 3,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-TPF - C1",
            "value": 1247,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 940"
          },
          {
            "name": "WatDiv-TPF - C2",
            "value": 3420,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 2191"
          },
          {
            "name": "WatDiv-TPF - C3",
            "value": 27047,
            "unit": "ms",
            "extra": "Results: 48802; Error: false; HTTP Requests: 20454"
          },
          {
            "name": "WatDiv-TPF - F1",
            "value": 69,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 43"
          },
          {
            "name": "WatDiv-TPF - F2",
            "value": 457,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 444"
          },
          {
            "name": "WatDiv-TPF - F3",
            "value": 315,
            "unit": "ms",
            "extra": "Results: 2; Error: false; HTTP Requests: 274"
          },
          {
            "name": "WatDiv-TPF - F4",
            "value": 361,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 305"
          },
          {
            "name": "WatDiv-TPF - F5",
            "value": 495,
            "unit": "ms",
            "extra": "Results: 32; Error: false; HTTP Requests: 338"
          },
          {
            "name": "WatDiv-TPF - L1",
            "value": 78,
            "unit": "ms",
            "extra": "Results: 1; Error: false; HTTP Requests: 42"
          },
          {
            "name": "WatDiv-TPF - L2",
            "value": 26,
            "unit": "ms",
            "extra": "Results: 3; Error: false; HTTP Requests: 10"
          },
          {
            "name": "WatDiv-TPF - L3",
            "value": 57,
            "unit": "ms",
            "extra": "Results: 69; Error: false; HTTP Requests: 35"
          },
          {
            "name": "WatDiv-TPF - L4",
            "value": 14,
            "unit": "ms",
            "extra": "Results: 6; Error: false; HTTP Requests: 5"
          },
          {
            "name": "WatDiv-TPF - L5",
            "value": 28,
            "unit": "ms",
            "extra": "Results: 1; Error: false; HTTP Requests: 10"
          },
          {
            "name": "WatDiv-TPF - S1",
            "value": 488,
            "unit": "ms",
            "extra": "Results: 4; Error: false; HTTP Requests: 410"
          },
          {
            "name": "WatDiv-TPF - S2",
            "value": 106,
            "unit": "ms",
            "extra": "Results: 2; Error: false; HTTP Requests: 155"
          },
          {
            "name": "WatDiv-TPF - S3",
            "value": 18,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 7"
          },
          {
            "name": "WatDiv-TPF - S4",
            "value": 29,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 14"
          },
          {
            "name": "WatDiv-TPF - S5",
            "value": 18,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 7"
          },
          {
            "name": "WatDiv-TPF - S6",
            "value": 23,
            "unit": "ms",
            "extra": "Results: 1; Error: false; HTTP Requests: 96"
          },
          {
            "name": "WatDiv-TPF - S7",
            "value": 9,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 4"
          },
          {
            "name": "BSBM-File - 1",
            "value": 8,
            "unit": "ms",
            "extra": "Results: 0.5; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 2",
            "value": 116,
            "unit": "ms",
            "extra": "Results: 19.5; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 3",
            "value": 13,
            "unit": "ms",
            "extra": "Results: 0.2; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 4",
            "value": 18,
            "unit": "ms",
            "extra": "Results: 0; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 5",
            "value": 721,
            "unit": "ms",
            "extra": "Results: 3.5; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 6",
            "value": null,
            "unit": "ms",
            "extra": "Results: undefined; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 7",
            "value": 50,
            "unit": "ms",
            "extra": "Results: 9.38; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 8",
            "value": 44,
            "unit": "ms",
            "extra": "Results: 5.05; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 9",
            "value": 20,
            "unit": "ms",
            "extra": "Results: 629.48; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 10",
            "value": 91,
            "unit": "ms",
            "extra": "Results: 2.8; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 11",
            "value": 2,
            "unit": "ms",
            "extra": "Results: 10; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 12",
            "value": 10,
            "unit": "ms",
            "extra": "Results: 1120.2; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 1",
            "value": 33,
            "unit": "ms",
            "extra": "Results: 0.5; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 2",
            "value": 190,
            "unit": "ms",
            "extra": "Results: 19.5; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 3",
            "value": 54,
            "unit": "ms",
            "extra": "Results: 0.2; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 4",
            "value": 79,
            "unit": "ms",
            "extra": "Results: 0; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 5",
            "value": 1297,
            "unit": "ms",
            "extra": "Results: 3.5; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 6",
            "value": null,
            "unit": "ms",
            "extra": "Results: undefined; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 7",
            "value": 253,
            "unit": "ms",
            "extra": "Results: 9.38; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 8",
            "value": 218,
            "unit": "ms",
            "extra": "Results: 5.05; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 9",
            "value": 11,
            "unit": "ms",
            "extra": "Results: 629.48; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 10",
            "value": 315,
            "unit": "ms",
            "extra": "Results: 2.8; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 11",
            "value": 10,
            "unit": "ms",
            "extra": "Results: 10; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 12",
            "value": 27,
            "unit": "ms",
            "extra": "Results: 1120.2; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "Web - dbpedia/airports-italy",
            "value": 1416,
            "unit": "ms",
            "extra": "Results: 19; Error: false; HTTP Requests: 22"
          },
          {
            "name": "Web - dbpedia/artists-york",
            "value": 10545,
            "unit": "ms",
            "extra": "Results: 32; Error: false; HTTP Requests: 516"
          },
          {
            "name": "Web - dbpedia/authors-books",
            "value": 672,
            "unit": "ms",
            "extra": "Results: 100; Error: false; HTTP Requests: 7.666666666666667"
          },
          {
            "name": "Web - dbpedia/bands-queen",
            "value": 636,
            "unit": "ms",
            "extra": "Results: 9; Error: false; HTTP Requests: 16"
          },
          {
            "name": "Web - dbpedia/belgian-software",
            "value": 5892,
            "unit": "ms",
            "extra": "Results: 13; Error: false; HTTP Requests: 142"
          },
          {
            "name": "Web - dbpedia/brad-pitt-inlaws-pp",
            "value": 727,
            "unit": "ms",
            "extra": "Results: 8; Error: false; HTTP Requests: 9"
          },
          {
            "name": "Web - dbpedia/brad-pitt-pp",
            "value": 3472,
            "unit": "ms",
            "extra": "Results: 633; Error: false; HTTP Requests: 81"
          },
          {
            "name": "Web - dbpedia/brad-pitt",
            "value": 3634,
            "unit": "ms",
            "extra": "Results: 43; Error: false; HTTP Requests: 122"
          },
          {
            "name": "Web - dbpedia/bruce-willis-pp",
            "value": 693,
            "unit": "ms",
            "extra": "Results: 3; Error: false; HTTP Requests: 8"
          },
          {
            "name": "Web - dbpedia/carpenters-crucifixion",
            "value": 290,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 3"
          },
          {
            "name": "Web - dbpedia/common-jesus",
            "value": 43158,
            "unit": "ms",
            "extra": "Results: 1000; Error: false; HTTP Requests: 1851.3333333333333"
          },
          {
            "name": "Web - dbpedia/desserts-plants",
            "value": 28023,
            "unit": "ms",
            "extra": "Results: 168; Error: false; HTTP Requests: 732"
          },
          {
            "name": "Web - dbpedia/events-trentino",
            "value": 48452,
            "unit": "ms",
            "extra": "Results: 29; Error: false; HTTP Requests: 1839"
          },
          {
            "name": "Web - dbpedia/indian-dishes",
            "value": 4471,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 201"
          },
          {
            "name": "Web - dbpedia/michael-jackson",
            "value": 3747,
            "unit": "ms",
            "extra": "Results: 26; Error: false; HTTP Requests: 118"
          },
          {
            "name": "Web - dbpedia/natalie-portman",
            "value": 1618,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 34"
          },
          {
            "name": "Web - dbpedia/os-raspberrypi",
            "value": 601,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 7"
          },
          {
            "name": "Web - dbpedia/women-mythology",
            "value": 11345,
            "unit": "ms",
            "extra": "Results: 102; Error: false; HTTP Requests: 712.6666666666666"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit",
            "value": 9542,
            "unit": "ms",
            "extra": "Results: 100; Error: false; HTTP Requests: 348.3333333333333"
          },
          {
            "name": "Web - other/bruce-willis-pp-cartesian",
            "value": 731,
            "unit": "ms",
            "extra": "Results: 57; Error: false; HTTP Requests: 13"
          },
          {
            "name": "Web - other/hubl-optional",
            "value": 1225,
            "unit": "ms",
            "extra": "Results: 2016; Error: false; HTTP Requests: 2"
          },
          {
            "name": "Web - other/hubl",
            "value": 573,
            "unit": "ms",
            "extra": "Results: 2016; Error: false; HTTP Requests: 2"
          },
          {
            "name": "Web - other/rubens-articles",
            "value": 4999,
            "unit": "ms",
            "extra": "Results: 91; Error: false; HTTP Requests: 49"
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
        "date": 1723462282644,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File - C1",
            "value": 397,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - C2",
            "value": 3275,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - C3",
            "value": 4198,
            "unit": "ms",
            "extra": "Results: 48802; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - F1",
            "value": 20,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - F2",
            "value": 64,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - F3",
            "value": 103,
            "unit": "ms",
            "extra": "Results: 2; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - F4",
            "value": 62,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - F5",
            "value": 147,
            "unit": "ms",
            "extra": "Results: 32; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - L1",
            "value": 21,
            "unit": "ms",
            "extra": "Results: 1; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - L2",
            "value": 8,
            "unit": "ms",
            "extra": "Results: 3; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - L3",
            "value": 14,
            "unit": "ms",
            "extra": "Results: 69; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - L4",
            "value": 5,
            "unit": "ms",
            "extra": "Results: 6; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - L5",
            "value": 8,
            "unit": "ms",
            "extra": "Results: 1; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S1",
            "value": 50,
            "unit": "ms",
            "extra": "Results: 4; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S2",
            "value": 17,
            "unit": "ms",
            "extra": "Results: 2; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S3",
            "value": 7,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S4",
            "value": 10,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S5",
            "value": 6,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S6",
            "value": 6,
            "unit": "ms",
            "extra": "Results: 1; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-File - S7",
            "value": 3,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 0"
          },
          {
            "name": "WatDiv-TPF - C1",
            "value": 1317,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 940"
          },
          {
            "name": "WatDiv-TPF - C2",
            "value": 3542,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 2191"
          },
          {
            "name": "WatDiv-TPF - C3",
            "value": 27794,
            "unit": "ms",
            "extra": "Results: 48802; Error: false; HTTP Requests: 20454"
          },
          {
            "name": "WatDiv-TPF - F1",
            "value": 74,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 43"
          },
          {
            "name": "WatDiv-TPF - F2",
            "value": 483,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 444"
          },
          {
            "name": "WatDiv-TPF - F3",
            "value": 345,
            "unit": "ms",
            "extra": "Results: 2; Error: false; HTTP Requests: 274"
          },
          {
            "name": "WatDiv-TPF - F4",
            "value": 380,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 305"
          },
          {
            "name": "WatDiv-TPF - F5",
            "value": 524,
            "unit": "ms",
            "extra": "Results: 32; Error: false; HTTP Requests: 338"
          },
          {
            "name": "WatDiv-TPF - L1",
            "value": 80,
            "unit": "ms",
            "extra": "Results: 1; Error: false; HTTP Requests: 42"
          },
          {
            "name": "WatDiv-TPF - L2",
            "value": 28,
            "unit": "ms",
            "extra": "Results: 3; Error: false; HTTP Requests: 10"
          },
          {
            "name": "WatDiv-TPF - L3",
            "value": 61,
            "unit": "ms",
            "extra": "Results: 69; Error: false; HTTP Requests: 35"
          },
          {
            "name": "WatDiv-TPF - L4",
            "value": 16,
            "unit": "ms",
            "extra": "Results: 6; Error: false; HTTP Requests: 5"
          },
          {
            "name": "WatDiv-TPF - L5",
            "value": 30,
            "unit": "ms",
            "extra": "Results: 1; Error: false; HTTP Requests: 10"
          },
          {
            "name": "WatDiv-TPF - S1",
            "value": 453,
            "unit": "ms",
            "extra": "Results: 4; Error: false; HTTP Requests: 410"
          },
          {
            "name": "WatDiv-TPF - S2",
            "value": 103,
            "unit": "ms",
            "extra": "Results: 2; Error: false; HTTP Requests: 155"
          },
          {
            "name": "WatDiv-TPF - S3",
            "value": 19,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 7"
          },
          {
            "name": "WatDiv-TPF - S4",
            "value": 30,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 14"
          },
          {
            "name": "WatDiv-TPF - S5",
            "value": 18,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 7"
          },
          {
            "name": "WatDiv-TPF - S6",
            "value": 23,
            "unit": "ms",
            "extra": "Results: 1; Error: false; HTTP Requests: 96"
          },
          {
            "name": "WatDiv-TPF - S7",
            "value": 9,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 4"
          },
          {
            "name": "BSBM-File - 1",
            "value": 8,
            "unit": "ms",
            "extra": "Results: 0.5; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 2",
            "value": 114,
            "unit": "ms",
            "extra": "Results: 19.5; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 3",
            "value": 14,
            "unit": "ms",
            "extra": "Results: 0.2; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 4",
            "value": 18,
            "unit": "ms",
            "extra": "Results: 0; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 5",
            "value": 2021,
            "unit": "ms",
            "extra": "Results: 3.5; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 6",
            "value": null,
            "unit": "ms",
            "extra": "Results: undefined; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 7",
            "value": 50,
            "unit": "ms",
            "extra": "Results: 9.38; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 8",
            "value": 43,
            "unit": "ms",
            "extra": "Results: 5.05; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 9",
            "value": 19,
            "unit": "ms",
            "extra": "Results: 629.48; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 10",
            "value": 86,
            "unit": "ms",
            "extra": "Results: 2.8; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 11",
            "value": 2,
            "unit": "ms",
            "extra": "Results: 10; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-File - 12",
            "value": 10,
            "unit": "ms",
            "extra": "Results: 1120.2; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 1",
            "value": 32,
            "unit": "ms",
            "extra": "Results: 0.5; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 2",
            "value": 183,
            "unit": "ms",
            "extra": "Results: 19.5; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 3",
            "value": 53,
            "unit": "ms",
            "extra": "Results: 0.2; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 4",
            "value": 77,
            "unit": "ms",
            "extra": "Results: 0; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 5",
            "value": 2703,
            "unit": "ms",
            "extra": "Results: 3.5; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 6",
            "value": null,
            "unit": "ms",
            "extra": "Results: undefined; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 7",
            "value": 247,
            "unit": "ms",
            "extra": "Results: 9.38; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 8",
            "value": 213,
            "unit": "ms",
            "extra": "Results: 5.05; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 9",
            "value": 12,
            "unit": "ms",
            "extra": "Results: 629.48; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 10",
            "value": 281,
            "unit": "ms",
            "extra": "Results: 2.8; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 11",
            "value": 9,
            "unit": "ms",
            "extra": "Results: 10; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "BSBM-TPF - 12",
            "value": 27,
            "unit": "ms",
            "extra": "Results: 1120.2; Error: undefined; HTTP Requests: undefined"
          },
          {
            "name": "Web - dbpedia/airports-italy",
            "value": 839,
            "unit": "ms",
            "extra": "Results: 19; Error: false; HTTP Requests: 22"
          },
          {
            "name": "Web - dbpedia/artists-york",
            "value": 6826,
            "unit": "ms",
            "extra": "Results: 32; Error: false; HTTP Requests: 516"
          },
          {
            "name": "Web - dbpedia/authors-books",
            "value": 441,
            "unit": "ms",
            "extra": "Results: 100; Error: false; HTTP Requests: 9"
          },
          {
            "name": "Web - dbpedia/bands-queen",
            "value": 398,
            "unit": "ms",
            "extra": "Results: 9; Error: false; HTTP Requests: 16"
          },
          {
            "name": "Web - dbpedia/belgian-software",
            "value": 3735,
            "unit": "ms",
            "extra": "Results: 13; Error: false; HTTP Requests: 142"
          },
          {
            "name": "Web - dbpedia/brad-pitt-inlaws-pp",
            "value": 536,
            "unit": "ms",
            "extra": "Results: 8; Error: false; HTTP Requests: 9"
          },
          {
            "name": "Web - dbpedia/brad-pitt-pp",
            "value": 2278,
            "unit": "ms",
            "extra": "Results: 633; Error: false; HTTP Requests: 81"
          },
          {
            "name": "Web - dbpedia/brad-pitt",
            "value": 2488,
            "unit": "ms",
            "extra": "Results: 43; Error: false; HTTP Requests: 122"
          },
          {
            "name": "Web - dbpedia/bruce-willis-pp",
            "value": 375,
            "unit": "ms",
            "extra": "Results: 3; Error: false; HTTP Requests: 8"
          },
          {
            "name": "Web - dbpedia/carpenters-crucifixion",
            "value": 186,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 3"
          },
          {
            "name": "Web - dbpedia/common-jesus",
            "value": 28232,
            "unit": "ms",
            "extra": "Results: 1000; Error: false; HTTP Requests: 1850.6666666666667"
          },
          {
            "name": "Web - dbpedia/desserts-plants",
            "value": 19232,
            "unit": "ms",
            "extra": "Results: 168; Error: false; HTTP Requests: 732"
          },
          {
            "name": "Web - dbpedia/events-trentino",
            "value": 32052,
            "unit": "ms",
            "extra": "Results: 29; Error: false; HTTP Requests: 1839"
          },
          {
            "name": "Web - dbpedia/indian-dishes",
            "value": 2814,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 201"
          },
          {
            "name": "Web - dbpedia/michael-jackson",
            "value": 2497,
            "unit": "ms",
            "extra": "Results: 26; Error: false; HTTP Requests: 118"
          },
          {
            "name": "Web - dbpedia/natalie-portman",
            "value": 1026,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 34"
          },
          {
            "name": "Web - dbpedia/os-raspberrypi",
            "value": 291,
            "unit": "ms",
            "extra": "Results: 0; Error: false; HTTP Requests: 7"
          },
          {
            "name": "Web - dbpedia/women-mythology",
            "value": 7575,
            "unit": "ms",
            "extra": "Results: 102; Error: false; HTTP Requests: 712"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit",
            "value": 6552,
            "unit": "ms",
            "extra": "Results: 100; Error: false; HTTP Requests: 344"
          },
          {
            "name": "Web - other/bruce-willis-pp-cartesian",
            "value": 477,
            "unit": "ms",
            "extra": "Results: 57; Error: false; HTTP Requests: 13"
          },
          {
            "name": "Web - other/hubl-optional",
            "value": 1000,
            "unit": "ms",
            "extra": "Results: 2016; Error: false; HTTP Requests: 2"
          },
          {
            "name": "Web - other/hubl",
            "value": 491,
            "unit": "ms",
            "extra": "Results: 2016; Error: false; HTTP Requests: 2"
          },
          {
            "name": "Web - other/rubens-articles",
            "value": 2859,
            "unit": "ms",
            "extra": "Results: 91; Error: false; HTTP Requests: 49"
          }
        ]
      }
    ]
  }
}