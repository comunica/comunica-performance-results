window.BENCHMARK_DATA = {
  "lastUpdate": 1744380746181,
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
          "id": "c5529ac2e01addeb1b1a5afbdbf9e29983ce1a93",
          "message": "Skip unnecessary SPARQL SD requests for a single source\n\nCloses #1532",
          "timestamp": "2025-04-08T16:01:48+02:00",
          "tree_id": "66195ffce794efd1a413daba12ffe3586972b28d",
          "url": "https://github.com/comunica/comunica/commit/c5529ac2e01addeb1b1a5afbdbf9e29983ce1a93"
        },
        "date": 1744380745476,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File - C1",
            "value": 239,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - C2",
            "value": 2372,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - C3",
            "value": 1926,
            "unit": "ms",
            "extra": "Results: [48802,48802,48802,48802,48802]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F1",
            "value": 13,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F2",
            "value": 37,
            "unit": "ms",
            "extra": "Results: [0,0,1,1,1]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F3",
            "value": 78,
            "unit": "ms",
            "extra": "Results: [2,2,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F4",
            "value": 33,
            "unit": "ms",
            "extra": "Results: [0,0,12,12,12]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F5",
            "value": 84,
            "unit": "ms",
            "extra": "Results: [32,32,40,56,22]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L1",
            "value": 13,
            "unit": "ms",
            "extra": "Results: [1,5,5,1,5]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L2",
            "value": 6,
            "unit": "ms",
            "extra": "Results: [3,3,3,40,3]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L3",
            "value": 8,
            "unit": "ms",
            "extra": "Results: [69,33,12,12,69]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L4",
            "value": 3,
            "unit": "ms",
            "extra": "Results: [6,7,6,6,6]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L5",
            "value": 5,
            "unit": "ms",
            "extra": "Results: [1,4,4,22,1]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S1",
            "value": 37,
            "unit": "ms",
            "extra": "Results: [4,0,7,4,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S2",
            "value": 9,
            "unit": "ms",
            "extra": "Results: [2,1,1,2,1]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S3",
            "value": 26,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S4",
            "value": 25,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S5",
            "value": 5,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S6",
            "value": 3,
            "unit": "ms",
            "extra": "Results: [1,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S7",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-TPF - C1",
            "value": 906,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [1880,1880,1880,1880,1880]"
          },
          {
            "name": "WatDiv-TPF - C2",
            "value": 2440,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [4382,4382,4382,4382,4382]"
          },
          {
            "name": "WatDiv-TPF - C3",
            "value": 18918,
            "unit": "ms",
            "extra": "Results: [48802,48802,48802,48802,48802]; Error: [false,false,false,false,false]; HTTP Requests: [40908,40908,40908,40908,40908]"
          },
          {
            "name": "WatDiv-TPF - F1",
            "value": 54,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [86,86,86,86,86]"
          },
          {
            "name": "WatDiv-TPF - F2",
            "value": 316,
            "unit": "ms",
            "extra": "Results: [0,0,1,1,1]; Error: [false,false,false,false,false]; HTTP Requests: [888,168,762,762,762]"
          },
          {
            "name": "WatDiv-TPF - F3",
            "value": 218,
            "unit": "ms",
            "extra": "Results: [2,2,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [548,548,38,458,380]"
          },
          {
            "name": "WatDiv-TPF - F4",
            "value": 282,
            "unit": "ms",
            "extra": "Results: [0,0,12,12,12]; Error: [false,false,false,false,false]; HTTP Requests: [610,610,592,592,592]"
          },
          {
            "name": "WatDiv-TPF - F5",
            "value": 388,
            "unit": "ms",
            "extra": "Results: [32,32,40,56,22]; Error: [false,false,false,false,false]; HTTP Requests: [676,676,800,1188,378]"
          },
          {
            "name": "WatDiv-TPF - L1",
            "value": 60,
            "unit": "ms",
            "extra": "Results: [1,5,5,1,5]; Error: [false,false,false,false,false]; HTTP Requests: [84,88,112,80,112]"
          },
          {
            "name": "WatDiv-TPF - L2",
            "value": 20,
            "unit": "ms",
            "extra": "Results: [3,3,3,40,3]; Error: [false,false,false,false,false]; HTTP Requests: [20,20,20,30,20]"
          },
          {
            "name": "WatDiv-TPF - L3",
            "value": 43,
            "unit": "ms",
            "extra": "Results: [69,33,12,12,69]; Error: [false,false,false,false,false]; HTTP Requests: [70,68,96,96,70]"
          },
          {
            "name": "WatDiv-TPF - L4",
            "value": 11,
            "unit": "ms",
            "extra": "Results: [6,7,6,6,6]; Error: [false,false,false,false,false]; HTTP Requests: [10,10,10,10,10]"
          },
          {
            "name": "WatDiv-TPF - L5",
            "value": 23,
            "unit": "ms",
            "extra": "Results: [1,4,4,22,1]; Error: [false,false,false,false,false]; HTTP Requests: [20,20,20,30,20]"
          },
          {
            "name": "WatDiv-TPF - S1",
            "value": 316,
            "unit": "ms",
            "extra": "Results: [4,0,7,4,0]; Error: [false,false,false,false,false]; HTTP Requests: [820,692,2006,820,1588]"
          },
          {
            "name": "WatDiv-TPF - S2",
            "value": 74,
            "unit": "ms",
            "extra": "Results: [2,1,1,2,1]; Error: [false,false,false,false,false]; HTTP Requests: [310,160,160,310,160]"
          },
          {
            "name": "WatDiv-TPF - S3",
            "value": 14,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [14,14,14,14,14]"
          },
          {
            "name": "WatDiv-TPF - S4",
            "value": 26,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [28,28,158,28,28]"
          },
          {
            "name": "WatDiv-TPF - S5",
            "value": 15,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [14,14,14,14,14]"
          },
          {
            "name": "WatDiv-TPF - S6",
            "value": 18,
            "unit": "ms",
            "extra": "Results: [1,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [192,8,36,28,12]"
          },
          {
            "name": "WatDiv-TPF - S7",
            "value": 7,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [8,8,8,8,20]"
          },
          {
            "name": "BSBM-File - 1",
            "value": 5,
            "unit": "ms",
            "extra": "Results: [0.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 2",
            "value": 22,
            "unit": "ms",
            "extra": "Results: [19.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 3",
            "value": 9,
            "unit": "ms",
            "extra": "Results: [0.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 4",
            "value": 11,
            "unit": "ms",
            "extra": "Results: [0]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 5",
            "value": 206,
            "unit": "ms",
            "extra": "Results: [3.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 6",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [undefined]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 7",
            "value": 42,
            "unit": "ms",
            "extra": "Results: [9.38]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 8",
            "value": 31,
            "unit": "ms",
            "extra": "Results: [5.05]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 9",
            "value": 20,
            "unit": "ms",
            "extra": "Results: [629.48]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 10",
            "value": 29,
            "unit": "ms",
            "extra": "Results: [2.8]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 11",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [10]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 12",
            "value": 7,
            "unit": "ms",
            "extra": "Results: [1120.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 1",
            "value": 25,
            "unit": "ms",
            "extra": "Results: [0.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 2",
            "value": 68,
            "unit": "ms",
            "extra": "Results: [19.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 3",
            "value": 39,
            "unit": "ms",
            "extra": "Results: [0.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 4",
            "value": 55,
            "unit": "ms",
            "extra": "Results: [0]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 5",
            "value": 611,
            "unit": "ms",
            "extra": "Results: [3.5]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 6",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [undefined]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 7",
            "value": 197,
            "unit": "ms",
            "extra": "Results: [9.38]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 8",
            "value": 169,
            "unit": "ms",
            "extra": "Results: [5.05]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 9",
            "value": 9,
            "unit": "ms",
            "extra": "Results: [629.48]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 10",
            "value": 192,
            "unit": "ms",
            "extra": "Results: [2.8]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 11",
            "value": 8,
            "unit": "ms",
            "extra": "Results: [10]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 12",
            "value": 22,
            "unit": "ms",
            "extra": "Results: [1120.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "Web - dbpedia/airports-italy",
            "value": 857,
            "unit": "ms",
            "extra": "Results: [19]; Error: [false]; HTTP Requests: [44]"
          },
          {
            "name": "Web - dbpedia/artists-york-filter",
            "value": 6800,
            "unit": "ms",
            "extra": "Results: [32]; Error: [false]; HTTP Requests: [1032]"
          },
          {
            "name": "Web - dbpedia/artists-york",
            "value": 6907,
            "unit": "ms",
            "extra": "Results: [32]; Error: [false]; HTTP Requests: [1032]"
          },
          {
            "name": "Web - dbpedia/authors-books",
            "value": 387,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [15.666666666666666]"
          },
          {
            "name": "Web - dbpedia/bands-queen",
            "value": 448,
            "unit": "ms",
            "extra": "Results: [9]; Error: [false]; HTTP Requests: [34]"
          },
          {
            "name": "Web - dbpedia/belgian-software",
            "value": 3784,
            "unit": "ms",
            "extra": "Results: [13]; Error: [false]; HTTP Requests: [284]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-inlaws-pp",
            "value": 476,
            "unit": "ms",
            "extra": "Results: [8]; Error: [false]; HTTP Requests: [18]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-pp",
            "value": 2441,
            "unit": "ms",
            "extra": "Results: [633]; Error: [false]; HTTP Requests: [162]"
          },
          {
            "name": "Web - dbpedia/brad-pitt",
            "value": 2350,
            "unit": "ms",
            "extra": "Results: [43]; Error: [false]; HTTP Requests: [244]"
          },
          {
            "name": "Web - dbpedia/bruce-willis-pp",
            "value": 385,
            "unit": "ms",
            "extra": "Results: [3]; Error: [false]; HTTP Requests: [16]"
          },
          {
            "name": "Web - dbpedia/carpenters-crucifixion",
            "value": 188,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [6]"
          },
          {
            "name": "Web - dbpedia/common-jesus",
            "value": 28979,
            "unit": "ms",
            "extra": "Results: [1000]; Error: [false]; HTTP Requests: [3704.6666666666665]"
          },
          {
            "name": "Web - dbpedia/desserts-plants",
            "value": 19122,
            "unit": "ms",
            "extra": "Results: [168]; Error: [false]; HTTP Requests: [1464]"
          },
          {
            "name": "Web - dbpedia/events-trentino",
            "value": 31129,
            "unit": "ms",
            "extra": "Results: [29]; Error: [false]; HTTP Requests: [3678]"
          },
          {
            "name": "Web - dbpedia/indian-dishes",
            "value": 2859,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [402]"
          },
          {
            "name": "Web - dbpedia/michael-jackson",
            "value": 2482,
            "unit": "ms",
            "extra": "Results: [26]; Error: [false]; HTTP Requests: [236]"
          },
          {
            "name": "Web - dbpedia/natalie-portman",
            "value": 1027,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [68]"
          },
          {
            "name": "Web - dbpedia/os-raspberrypi",
            "value": 390,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [16]"
          },
          {
            "name": "Web - dbpedia/women-mythology",
            "value": 7377,
            "unit": "ms",
            "extra": "Results: [102]; Error: [false]; HTTP Requests: [1424]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit-filter",
            "value": 6482,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [695.3333333333334]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit",
            "value": 5945,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [693.3333333333334]"
          },
          {
            "name": "Web - heterogeneous/lindas-rhea-identifiers",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [0]; Error: [true]; HTTP Requests: []"
          },
          {
            "name": "Web - heterogeneous/wikidata-dbpedia-cats",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [22]; Error: [true]; HTTP Requests: [148]"
          },
          {
            "name": "Web - other/bruce-willis-pp-cartesian",
            "value": 1062,
            "unit": "ms",
            "extra": "Results: [57]; Error: [false]; HTTP Requests: [26]"
          },
          {
            "name": "Web - other/rubens-articles",
            "value": 3418,
            "unit": "ms",
            "extra": "Results: [91]; Error: [false]; HTTP Requests: [98]"
          }
        ]
      }
    ]
  }
}