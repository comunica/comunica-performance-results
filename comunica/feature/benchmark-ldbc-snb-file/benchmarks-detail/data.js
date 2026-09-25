window.BENCHMARK_DATA = {
  "lastUpdate": 1790352942875,
  "repoUrl": "https://github.com/comunica/comunica",
  "entries": {
    "Benchmarks detailed results": [
      {
        "commit": {
          "author": {
            "email": "noreply@anthropic.com",
            "name": "Claude",
            "username": "claude"
          },
          "committer": {
            "email": "noreply@anthropic.com",
            "name": "Claude",
            "username": "claude"
          },
          "distinct": true,
          "id": "4f51d6df89817ad04363afcd27cf6fd889d2b582",
          "message": "Bump jbr dependencies of the LDBC SNB benchmark\n\n@jbr-experiment/ldbc-snb 6.2.1 skips the datagen when the fetched\nassets already contain all derived files, and @jbr-hook/cli 6.2.0\nincludes child processes in stats.csv.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01Pox1b5Mbsur3vCP1Rzf3t2",
          "timestamp": "2026-09-25T15:23:26Z",
          "tree_id": "c55708df7e7f034f6a45d1e6461901eda2b657d8",
          "url": "https://github.com/comunica/comunica/commit/4f51d6df89817ad04363afcd27cf6fd889d2b582"
        },
        "date": 1790352941682,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File - C1",
            "value": 111,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - C2",
            "value": 99,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - C3",
            "value": 1860,
            "unit": "ms",
            "extra": "Results: [48802,48802,48802,48802,48802]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F1",
            "value": 11,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F2",
            "value": 18,
            "unit": "ms",
            "extra": "Results: [0,0,1,1,1]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F3",
            "value": 10,
            "unit": "ms",
            "extra": "Results: [2,2,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F4",
            "value": 11,
            "unit": "ms",
            "extra": "Results: [0,0,12,12,12]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - F5",
            "value": 63,
            "unit": "ms",
            "extra": "Results: [32,32,40,56,22]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L1",
            "value": 8,
            "unit": "ms",
            "extra": "Results: [1,5,5,1,5]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L2",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [3,3,3,40,3]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - L3",
            "value": 7,
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
            "value": 4,
            "unit": "ms",
            "extra": "Results: [1,4,4,22,1]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S1",
            "value": 20,
            "unit": "ms",
            "extra": "Results: [4,0,7,4,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S2",
            "value": 6,
            "unit": "ms",
            "extra": "Results: [2,1,1,2,1]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S3",
            "value": 3,
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
            "value": 3,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S6",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [1,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-File - S7",
            "value": 1,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [0,0,0,0,0]"
          },
          {
            "name": "WatDiv-TPF - C1",
            "value": 1026,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [940,940,940,940,940]"
          },
          {
            "name": "WatDiv-TPF - C2",
            "value": 2899,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [2191,2191,2191,2191,2191]"
          },
          {
            "name": "WatDiv-TPF - C3",
            "value": 16864,
            "unit": "ms",
            "extra": "Results: [48802,48802,48802,48802,48802]; Error: [false,false,false,false,false]; HTTP Requests: [20454,20454,20454,20454,20454]"
          },
          {
            "name": "WatDiv-TPF - F1",
            "value": 66,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [43,43,43,43,43]"
          },
          {
            "name": "WatDiv-TPF - F2",
            "value": 349,
            "unit": "ms",
            "extra": "Results: [0,0,1,1,1]; Error: [false,false,false,false,false]; HTTP Requests: [444,84,381,381,381]"
          },
          {
            "name": "WatDiv-TPF - F3",
            "value": 233,
            "unit": "ms",
            "extra": "Results: [2,2,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [274,274,19,229,190]"
          },
          {
            "name": "WatDiv-TPF - F4",
            "value": 269,
            "unit": "ms",
            "extra": "Results: [0,0,12,12,12]; Error: [false,false,false,false,false]; HTTP Requests: [305,305,296,296,296]"
          },
          {
            "name": "WatDiv-TPF - F5",
            "value": 429,
            "unit": "ms",
            "extra": "Results: [32,32,40,56,22]; Error: [false,false,false,false,false]; HTTP Requests: [338,338,400,594,189]"
          },
          {
            "name": "WatDiv-TPF - L1",
            "value": 72,
            "unit": "ms",
            "extra": "Results: [1,5,5,1,5]; Error: [false,false,false,false,false]; HTTP Requests: [42,44,56,40,56]"
          },
          {
            "name": "WatDiv-TPF - L2",
            "value": 29,
            "unit": "ms",
            "extra": "Results: [3,3,3,40,3]; Error: [false,false,false,false,false]; HTTP Requests: [10,10,10,15,10]"
          },
          {
            "name": "WatDiv-TPF - L3",
            "value": 61,
            "unit": "ms",
            "extra": "Results: [69,33,12,12,69]; Error: [false,false,false,false,false]; HTTP Requests: [35,34,48,48,35]"
          },
          {
            "name": "WatDiv-TPF - L4",
            "value": 17,
            "unit": "ms",
            "extra": "Results: [6,7,6,6,6]; Error: [false,false,false,false,false]; HTTP Requests: [5,5,5,5,5]"
          },
          {
            "name": "WatDiv-TPF - L5",
            "value": 34,
            "unit": "ms",
            "extra": "Results: [1,4,4,22,1]; Error: [false,false,false,false,false]; HTTP Requests: [10,10,10,15,10]"
          },
          {
            "name": "WatDiv-TPF - S1",
            "value": 299,
            "unit": "ms",
            "extra": "Results: [4,0,7,4,0]; Error: [false,false,false,false,false]; HTTP Requests: [410,346,1003,410,794]"
          },
          {
            "name": "WatDiv-TPF - S2",
            "value": 76,
            "unit": "ms",
            "extra": "Results: [2,1,1,2,1]; Error: [false,false,false,false,false]; HTTP Requests: [155,80,80,155,80]"
          },
          {
            "name": "WatDiv-TPF - S3",
            "value": 18,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [7,7,7,7,7]"
          },
          {
            "name": "WatDiv-TPF - S4",
            "value": 269,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [90,90,9,90,90]"
          },
          {
            "name": "WatDiv-TPF - S5",
            "value": 20,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [7,7,7,7,7]"
          },
          {
            "name": "WatDiv-TPF - S6",
            "value": 20,
            "unit": "ms",
            "extra": "Results: [1,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [96,4,18,14,6]"
          },
          {
            "name": "WatDiv-TPF - S7",
            "value": 11,
            "unit": "ms",
            "extra": "Results: [0,0,0,0,0]; Error: [false,false,false,false,false]; HTTP Requests: [4,4,4,4,10]"
          },
          {
            "name": "BSBM-File - 1",
            "value": 4,
            "unit": "ms",
            "extra": "Results: [0.4]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 2",
            "value": 11,
            "unit": "ms",
            "extra": "Results: [19.93]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 3",
            "value": 7,
            "unit": "ms",
            "extra": "Results: [0.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 4",
            "value": 7,
            "unit": "ms",
            "extra": "Results: [0]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 5",
            "value": 46,
            "unit": "ms",
            "extra": "Results: [2.97]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 6",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [undefined]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 7",
            "value": 24,
            "unit": "ms",
            "extra": "Results: [9.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 8",
            "value": 17,
            "unit": "ms",
            "extra": "Results: [4.67]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 9",
            "value": 20,
            "unit": "ms",
            "extra": "Results: [629.72]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 10",
            "value": 23,
            "unit": "ms",
            "extra": "Results: [2.43]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 11",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [10]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File - 12",
            "value": 5,
            "unit": "ms",
            "extra": "Results: [1123.93]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 1",
            "value": 7,
            "unit": "ms",
            "extra": "Results: [1.3]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 2",
            "value": 19,
            "unit": "ms",
            "extra": "Results: [21]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 3",
            "value": 18,
            "unit": "ms",
            "extra": "Results: [0.8]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 4",
            "value": 17,
            "unit": "ms",
            "extra": "Results: [0.9]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 5",
            "value": 1293,
            "unit": "ms",
            "extra": "Results: [4.85]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 6",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [undefined]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 7",
            "value": 73,
            "unit": "ms",
            "extra": "Results: [15.28]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 8",
            "value": 47,
            "unit": "ms",
            "extra": "Results: [3.95]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 9",
            "value": 302,
            "unit": "ms",
            "extra": "Results: [630.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 10",
            "value": 40,
            "unit": "ms",
            "extra": "Results: [2.05]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 11",
            "value": 2,
            "unit": "ms",
            "extra": "Results: [10]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-File-10k - 12",
            "value": 7,
            "unit": "ms",
            "extra": "Results: [1142]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 1",
            "value": 28,
            "unit": "ms",
            "extra": "Results: [0.4]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 2",
            "value": 72,
            "unit": "ms",
            "extra": "Results: [19.93]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 3",
            "value": 40,
            "unit": "ms",
            "extra": "Results: [0.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 4",
            "value": 52,
            "unit": "ms",
            "extra": "Results: [0]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 5",
            "value": 653,
            "unit": "ms",
            "extra": "Results: [2.97]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 6",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [undefined]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 7",
            "value": 200,
            "unit": "ms",
            "extra": "Results: [9.2]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 8",
            "value": 158,
            "unit": "ms",
            "extra": "Results: [4.67]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 9",
            "value": 13,
            "unit": "ms",
            "extra": "Results: [629.72]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 10",
            "value": 171,
            "unit": "ms",
            "extra": "Results: [2.43]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 11",
            "value": 10,
            "unit": "ms",
            "extra": "Results: [10]; Error: []; HTTP Requests: []"
          },
          {
            "name": "BSBM-TPF - 12",
            "value": 25,
            "unit": "ms",
            "extra": "Results: [1123.93]; Error: []; HTTP Requests: []"
          },
          {
            "name": "Web - dbpedia/airports-italy",
            "value": 996,
            "unit": "ms",
            "extra": "Results: [19]; Error: [false]; HTTP Requests: [22]"
          },
          {
            "name": "Web - dbpedia/artists-york-filter",
            "value": 8549,
            "unit": "ms",
            "extra": "Results: [32]; Error: [false]; HTTP Requests: [516]"
          },
          {
            "name": "Web - dbpedia/artists-york",
            "value": 8373,
            "unit": "ms",
            "extra": "Results: [32]; Error: [false]; HTTP Requests: [516]"
          },
          {
            "name": "Web - dbpedia/authors-books",
            "value": 501,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [8]"
          },
          {
            "name": "Web - dbpedia/bands-queen",
            "value": 511,
            "unit": "ms",
            "extra": "Results: [9]; Error: [false]; HTTP Requests: [17]"
          },
          {
            "name": "Web - dbpedia/belgian-software",
            "value": 4688,
            "unit": "ms",
            "extra": "Results: [13]; Error: [false]; HTTP Requests: [142]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-inlaws-pp",
            "value": 621,
            "unit": "ms",
            "extra": "Results: [8]; Error: [false]; HTTP Requests: [9]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-pp",
            "value": 2868,
            "unit": "ms",
            "extra": "Results: [633]; Error: [false]; HTTP Requests: [81]"
          },
          {
            "name": "Web - dbpedia/brad-pitt-service",
            "value": 3197,
            "unit": "ms",
            "extra": "Results: [43]; Error: [false]; HTTP Requests: [123]"
          },
          {
            "name": "Web - dbpedia/brad-pitt",
            "value": 2868,
            "unit": "ms",
            "extra": "Results: [43]; Error: [false]; HTTP Requests: [122]"
          },
          {
            "name": "Web - dbpedia/bruce-willis-pp",
            "value": 499,
            "unit": "ms",
            "extra": "Results: [3]; Error: [false]; HTTP Requests: [8]"
          },
          {
            "name": "Web - dbpedia/carpenters-crucifixion",
            "value": 249,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [3]"
          },
          {
            "name": "Web - dbpedia/common-jesus",
            "value": 34412,
            "unit": "ms",
            "extra": "Results: [1000]; Error: [false]; HTTP Requests: [1851]"
          },
          {
            "name": "Web - dbpedia/desserts-plants",
            "value": 22795,
            "unit": "ms",
            "extra": "Results: [168]; Error: [false]; HTTP Requests: [732]"
          },
          {
            "name": "Web - dbpedia/events-trentino",
            "value": 36394,
            "unit": "ms",
            "extra": "Results: [29]; Error: [false]; HTTP Requests: [1839]"
          },
          {
            "name": "Web - dbpedia/indian-dishes",
            "value": 3540,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [201]"
          },
          {
            "name": "Web - dbpedia/michael-jackson",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [0]; Error: [true]; HTTP Requests: []"
          },
          {
            "name": "Web - dbpedia/natalie-portman",
            "value": 1423,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [34]"
          },
          {
            "name": "Web - dbpedia/os-raspberrypi",
            "value": 503,
            "unit": "ms",
            "extra": "Results: [0]; Error: [false]; HTTP Requests: [8]"
          },
          {
            "name": "Web - dbpedia/people-cambridge-pairs-orderby-nolimit",
            "value": 1814,
            "unit": "ms",
            "extra": "Results: [86142]; Error: [false]; HTTP Requests: [4]"
          },
          {
            "name": "Web - dbpedia/people-cambridge-pairs-orderby",
            "value": 1324,
            "unit": "ms",
            "extra": "Results: [10]; Error: [false]; HTTP Requests: [4]"
          },
          {
            "name": "Web - dbpedia/women-mythology",
            "value": 8477,
            "unit": "ms",
            "extra": "Results: [102]; Error: [false]; HTTP Requests: [712]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit-filter",
            "value": 8388,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [348]"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit-service",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [0]; Error: [true]; HTTP Requests: []"
          },
          {
            "name": "Web - heterogeneous/harvard-san-francisco-limit",
            "value": 8069,
            "unit": "ms",
            "extra": "Results: [100]; Error: [false]; HTTP Requests: [345.3333333333333]"
          },
          {
            "name": "Web - heterogeneous/lindas-rhea-identifiers",
            "value": 0,
            "unit": "ms",
            "extra": "Results: []; Error: [true]; HTTP Requests: []"
          },
          {
            "name": "Web - ",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [0]; Error: []; HTTP Requests: []"
          },
          {
            "name": "Web - heterogeneous/wikidata-dbpedia-cats",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [0]; Error: [true]; HTTP Requests: []"
          },
          {
            "name": "Web - other/bruce-willis-pp-cartesian",
            "value": 785,
            "unit": "ms",
            "extra": "Results: [57]; Error: [false]; HTTP Requests: [13]"
          },
          {
            "name": "Web - other/ruben-knows-zero-or-more",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [476]; Error: [true]; HTTP Requests: [3]"
          },
          {
            "name": "Web - other/ruben-knows-zero-or-one",
            "value": 0,
            "unit": "ms",
            "extra": "Results: [476]; Error: [true]; HTTP Requests: [3]"
          },
          {
            "name": "Web - other/ruben-predicates",
            "value": 215,
            "unit": "ms",
            "extra": "Results: [44]; Error: [false]; HTTP Requests: [3]"
          },
          {
            "name": "Web - other/rubens-articles",
            "value": 8578,
            "unit": "ms",
            "extra": "Results: [110]; Error: [false]; HTTP Requests: [52]"
          }
        ]
      }
    ]
  }
}