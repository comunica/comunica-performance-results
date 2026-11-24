window.BENCHMARK_DATA = {
  "lastUpdate": 1795530035290,
  "repoUrl": "https://github.com/comunica/comunica",
  "entries": {
    "Benchmarks ingestion results": [
      {
        "commit": {
          "author": {
            "email": "rubensworks@users.noreply.github.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "77a43a329aa4c510e2d8c190d24706ed08be3833",
          "message": "Track ingestion time and memory usage in CI benchmarks (#1957)",
          "timestamp": "2026-11-07T21:25:45+01:00",
          "tree_id": "e1e9124df767ed7719d533dc7ffcdf0f86799b6d",
          "url": "https://github.com/comunica/comunica/commit/77a43a329aa4c510e2d8c190d24706ed08be3833"
        },
        "date": 1794084141935,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bsbm-file-10k - ingestion time",
            "value": 17839,
            "unit": "ms",
            "extra": "Triples: 3564773; Throughput: 199830 triples/s; Runs: [17798,18066,18246,17255,17839]"
          },
          {
            "name": "bsbm-file-10k - memory after ingestion",
            "value": 2752,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 809 bytes; Runs: [2751,2753,2752,2752,2757]; Heap used: [1303,1303,1303,1303,1303]; External: [240,240,240,240,240]"
          },
          {
            "name": "bsbm-file - ingestion time",
            "value": 1698,
            "unit": "ms",
            "extra": "Triples: 374911; Throughput: 220796 triples/s; Runs: [1663,1703,1691,1698,1733]"
          },
          {
            "name": "bsbm-file - memory after ingestion",
            "value": 467,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 1306 bytes; Runs: [461,476,466,467,469]; Heap used: [174,174,174,174,174]; External: [31,31,31,31,31]"
          },
          {
            "name": "ldbc-snb-file - ingestion time",
            "value": 17099,
            "unit": "ms",
            "extra": "Triples: 4028513; Throughput: 235599 triples/s; Runs: [17068,17179,17099,17024,17314]"
          },
          {
            "name": "ldbc-snb-file - memory after ingestion",
            "value": 3150,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 820 bytes; Runs: [3148,3150,3152,3152,3148]; Heap used: [1601,1601,1601,1601,1601]; External: [269,269,269,269,269]"
          },
          {
            "name": "watdiv-file - ingestion time",
            "value": 4899,
            "unit": "ms",
            "extra": "Triples: 1093014; Throughput: 223110 triples/s; Runs: [4899,5010,4996,4896,4886]"
          },
          {
            "name": "watdiv-file - memory after ingestion",
            "value": 752,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 721 bytes; Runs: [752,754,746,749,753]; Heap used: [72,72,72,72,72]; External: [87,87,87,87,87]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rubensworks@users.noreply.github.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d87f6f5c566641cc4999defdaaaaeccad28f6d9",
          "message": "Report the store size after ingestion in CI benchmarks (#1967)",
          "timestamp": "2026-11-08T18:35:57+01:00",
          "tree_id": "6126fb49d2bcbf51cc9cb2e7086704204ce1c9cf",
          "url": "https://github.com/comunica/comunica/commit/3d87f6f5c566641cc4999defdaaaaeccad28f6d9"
        },
        "date": 1794160537588,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bsbm-file-10k - ingestion time",
            "value": 17579,
            "unit": "ms",
            "extra": "Triples: 3564773; Throughput: 202786 triples/s; Runs: [17617,17086,18170,16747,17579]"
          },
          {
            "name": "bsbm-file-10k - memory after ingestion",
            "value": 2749,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 809 bytes; Runs: [2745,2753,2749,2747,2752]; Heap used: [1303,1303,1303,1303,1303]; External: [240,240,240,240,240]"
          },
          {
            "name": "bsbm-file-10k - store size after ingestion",
            "value": 1502,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 442 bytes; Runs: [1502,1502,1502,1502,1502]"
          },
          {
            "name": "bsbm-file - ingestion time",
            "value": 2092,
            "unit": "ms",
            "extra": "Triples: 374911; Throughput: 179212 triples/s; Runs: [2117,2022,2103,2063,2092]"
          },
          {
            "name": "bsbm-file - memory after ingestion",
            "value": 466,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 1303 bytes; Runs: [465,473,468,466,464]; Heap used: [174,174,174,174,174]; External: [31,31,31,31,31]"
          },
          {
            "name": "bsbm-file - store size after ingestion",
            "value": 164,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 459 bytes; Runs: [164,164,164,164,164]"
          },
          {
            "name": "ldbc-snb-file - ingestion time",
            "value": 19307,
            "unit": "ms",
            "extra": "Triples: 4028513; Throughput: 208656 triples/s; Runs: [20281,19710,18914,19307,18877]"
          },
          {
            "name": "ldbc-snb-file - memory after ingestion",
            "value": 3236,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 842 bytes; Runs: [3229,3236,3240,3242,3236]; Heap used: [1601,1601,1601,1601,1601]; External: [269,269,269,269,269]"
          },
          {
            "name": "ldbc-snb-file - store size after ingestion",
            "value": 1829,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 476 bytes; Runs: [1829,1829,1829,1829,1829]"
          },
          {
            "name": "watdiv-file - ingestion time",
            "value": 4460,
            "unit": "ms",
            "extra": "Triples: 1093014; Throughput: 245070 triples/s; Runs: [4520,4296,4460,4505,4369]"
          },
          {
            "name": "watdiv-file - memory after ingestion",
            "value": 748,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 718 bytes; Runs: [749,746,748,748,754]; Heap used: [70,72,72,70,72]; External: [87,87,87,87,87]"
          },
          {
            "name": "watdiv-file - store size after ingestion",
            "value": 118,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 113 bytes; Runs: [116,118,118,116,118]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rubensworks@users.noreply.github.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55c690b2ce5e48e44daa184e0aa6b34cbd133108",
          "message": "Fix one-or-more paths with equal variables not considering multi-hops (#1963)\n\nThey would only consider single predicates if subject and object were equal,\nbut not if they would be connected by multiple predicates.\n\nCloses #1961",
          "timestamp": "2026-11-10T16:45:57+01:00",
          "tree_id": "8f04b12c766ad762ac1075695c7a2ae1ddbe63c6",
          "url": "https://github.com/comunica/comunica/commit/55c690b2ce5e48e44daa184e0aa6b34cbd133108"
        },
        "date": 1794326840789,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bsbm-file-10k - ingestion time",
            "value": 13753,
            "unit": "ms",
            "extra": "Triples: 3564773; Throughput: 259200 triples/s; Runs: [13899,13405,14028,13753,13659]"
          },
          {
            "name": "bsbm-file-10k - memory after ingestion",
            "value": 2701,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 794 bytes; Runs: [2700,2702,2711,2701,2701]; Heap used: [1303,1303,1303,1303,1303]; External: [240,240,240,240,240]"
          },
          {
            "name": "bsbm-file-10k - store size after ingestion",
            "value": 1502,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 442 bytes; Runs: [1502,1502,1502,1502,1502]"
          },
          {
            "name": "bsbm-file - ingestion time",
            "value": 2519,
            "unit": "ms",
            "extra": "Triples: 374911; Throughput: 148833 triples/s; Runs: [2720,2540,2466,2519,2466]"
          },
          {
            "name": "bsbm-file - memory after ingestion",
            "value": 465,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 1301 bytes; Runs: [466,468,465,464,465]; Heap used: [174,174,174,174,174]; External: [31,31,31,31,31]"
          },
          {
            "name": "bsbm-file - store size after ingestion",
            "value": 164,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 459 bytes; Runs: [164,164,164,164,164]"
          },
          {
            "name": "ldbc-snb-file - ingestion time",
            "value": 29142,
            "unit": "ms",
            "extra": "Triples: 4028513; Throughput: 138237 triples/s; Runs: [29286,29147,28461,29142,28936]"
          },
          {
            "name": "ldbc-snb-file - memory after ingestion",
            "value": 3140,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 817 bytes; Runs: [3141,3139,3140,3140,3138]; Heap used: [1601,1601,1601,1601,1601]; External: [269,269,269,269,269]"
          },
          {
            "name": "ldbc-snb-file - store size after ingestion",
            "value": 1829,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 476 bytes; Runs: [1829,1829,1829,1829,1829]"
          },
          {
            "name": "watdiv-file - ingestion time",
            "value": 4891,
            "unit": "ms",
            "extra": "Triples: 1093014; Throughput: 223475 triples/s; Runs: [4782,4891,4866,4925,4979]"
          },
          {
            "name": "watdiv-file - memory after ingestion",
            "value": 754,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 723 bytes; Runs: [755,755,754,749,748]; Heap used: [72,72,72,72,72]; External: [87,87,87,87,87]"
          },
          {
            "name": "watdiv-file - store size after ingestion",
            "value": 118,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 113 bytes; Runs: [118,118,118,118,118]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rubensworks@users.noreply.github.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b91acc3e41c26152401db6c2a0d4c6041d0bdff",
          "message": "Skip metadata extraction for forced file sources (#1965)\n\nThis avoids buffering, which leads to significantly faster ingestion\nand lower memory requirements during file source loading.",
          "timestamp": "2026-11-10T19:37:16+01:00",
          "tree_id": "3a545ea59d190f75db026124b2432d74864fb3ee",
          "url": "https://github.com/comunica/comunica/commit/2b91acc3e41c26152401db6c2a0d4c6041d0bdff"
        },
        "date": 1794336767985,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bsbm-file-10k - ingestion time",
            "value": 15766,
            "unit": "ms",
            "extra": "Triples: 3564773; Throughput: 226105 triples/s; Runs: [15766,15542,16329,15641,16055]"
          },
          {
            "name": "bsbm-file-10k - memory after ingestion",
            "value": 1796,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 528 bytes; Runs: [1796,1797,1798,1795,1795]; Heap used: [1298,1298,1298,1298,1298]; External: [240,240,240,240,240]"
          },
          {
            "name": "bsbm-file-10k - store size after ingestion",
            "value": 1497,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 440 bytes; Runs: [1497,1497,1497,1497,1497]"
          },
          {
            "name": "bsbm-file - ingestion time",
            "value": 1580,
            "unit": "ms",
            "extra": "Triples: 374911; Throughput: 237285 triples/s; Runs: [1568,1580,1580,1538,1601]"
          },
          {
            "name": "bsbm-file - memory after ingestion",
            "value": 348,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 973 bytes; Runs: [346,349,348,348,349]; Heap used: [173,173,173,173,173]; External: [31,31,31,31,31]"
          },
          {
            "name": "bsbm-file - store size after ingestion",
            "value": 163,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 456 bytes; Runs: [163,163,163,163,163]"
          },
          {
            "name": "ldbc-snb-file - ingestion time",
            "value": 21230,
            "unit": "ms",
            "extra": "Triples: 4028513; Throughput: 189756 triples/s; Runs: [21392,21490,21228,21230,20923]"
          },
          {
            "name": "ldbc-snb-file - memory after ingestion",
            "value": 2143,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 558 bytes; Runs: [2141,2157,2144,2133,2143]; Heap used: [1600,1600,1600,1600,1600]; External: [269,269,269,269,269]"
          },
          {
            "name": "ldbc-snb-file - store size after ingestion",
            "value": 1828,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 476 bytes; Runs: [1828,1828,1828,1828,1828]"
          },
          {
            "name": "watdiv-file - ingestion time",
            "value": 3453,
            "unit": "ms",
            "extra": "Triples: 1093014; Throughput: 316540 triples/s; Runs: [3566,3453,3549,3334,3445]"
          },
          {
            "name": "watdiv-file - memory after ingestion",
            "value": 287,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 275 bytes; Runs: [287,285,286,287,290]; Heap used: [70,72,70,70,72]; External: [87,87,87,87,87]"
          },
          {
            "name": "watdiv-file - store size after ingestion",
            "value": 116,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 111 bytes; Runs: [116,118,116,116,118]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rubensworks@users.noreply.github.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f0decec6bbf97acff3067d2e453e126dd676d90",
          "message": "Update process-sparql-benchmark-results to 1.4.1 (#1968)",
          "timestamp": "2026-11-11T15:16:40+01:00",
          "tree_id": "73243e3a174a589aa13e44d457d458f770742492",
          "url": "https://github.com/comunica/comunica/commit/4f0decec6bbf97acff3067d2e453e126dd676d90"
        },
        "date": 1794416526900,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bsbm-file-10k - ingestion time",
            "value": 7559,
            "unit": "ms",
            "extra": "Triples: 3564773; Throughput: 471593 triples/s; Runs: [7557,7602,7570,7532,7559]"
          },
          {
            "name": "bsbm-file-10k - memory after ingestion",
            "value": 794,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 234 bytes; Runs: [795,789,794,792,804]; Heap used: [371,371,371,371,371]; External: [248,248,248,248,248]"
          },
          {
            "name": "bsbm-file-10k - store size after ingestion",
            "value": 577,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 170 bytes; Runs: [577,577,577,577,577]"
          },
          {
            "name": "bsbm-file - ingestion time",
            "value": 1395,
            "unit": "ms",
            "extra": "Triples: 374911; Throughput: 268753 triples/s; Runs: [1402,1385,1395,1425,1365]"
          },
          {
            "name": "bsbm-file - memory after ingestion",
            "value": 245,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 685 bytes; Runs: [245,242,250,246,243]; Heap used: [76,76,76,76,76]; External: [32,32,32,32,32]"
          },
          {
            "name": "bsbm-file - store size after ingestion",
            "value": 67,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 187 bytes; Runs: [67,67,67,67,67]"
          },
          {
            "name": "ldbc-snb-file - ingestion time",
            "value": 9812,
            "unit": "ms",
            "extra": "Triples: 4028513; Throughput: 410570 triples/s; Runs: [9640,9848,9812,9624,9932]"
          },
          {
            "name": "ldbc-snb-file - memory after ingestion",
            "value": 863,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 225 bytes; Runs: [832,895,836,896,863]; Heap used: [370,370,370,370,370]; External: [283,283,283,283,283]"
          },
          {
            "name": "ldbc-snb-file - store size after ingestion",
            "value": 613,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 160 bytes; Runs: [613,613,613,613,613]"
          },
          {
            "name": "watdiv-file - ingestion time",
            "value": 1583,
            "unit": "ms",
            "extra": "Triples: 1093014; Throughput: 690470 triples/s; Runs: [1609,1512,1522,1583,1595]"
          },
          {
            "name": "watdiv-file - memory after ingestion",
            "value": 269,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 258 bytes; Runs: [264,274,269,270,267]; Heap used: [56,58,56,58,56]; External: [88,88,88,88,88]"
          },
          {
            "name": "watdiv-file - store size after ingestion",
            "value": 103,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 99 bytes; Runs: [103,105,103,105,103]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rubensworks@users.noreply.github.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9f6369dc8cdccea4780e9c1a5691e334ddba645e",
          "message": "Also discover SPARQL service descriptions via service-desc Link headers (#1970)\n\nThis is a new feature in SPARQL 1.2.",
          "timestamp": "2026-11-12T11:44:59+01:00",
          "tree_id": "1d38c03cd838064ae6fe5c99dd4593c3ed7ae72e",
          "url": "https://github.com/comunica/comunica/commit/9f6369dc8cdccea4780e9c1a5691e334ddba645e"
        },
        "date": 1794481353522,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bsbm-file-10k - ingestion time",
            "value": 12428,
            "unit": "ms",
            "extra": "Triples: 3564773; Throughput: 286834 triples/s; Runs: [12428,12507,12458,12370,12359]"
          },
          {
            "name": "bsbm-file-10k - memory after ingestion",
            "value": 800,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 235 bytes; Runs: [805,805,785,790,800]; Heap used: [371,371,371,371,371]; External: [248,248,248,248,248]"
          },
          {
            "name": "bsbm-file-10k - store size after ingestion",
            "value": 577,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 170 bytes; Runs: [577,577,577,577,577]"
          },
          {
            "name": "bsbm-file - ingestion time",
            "value": 945,
            "unit": "ms",
            "extra": "Triples: 374911; Throughput: 396731 triples/s; Runs: [945,986,916,898,950]"
          },
          {
            "name": "bsbm-file - memory after ingestion",
            "value": 244,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 682 bytes; Runs: [244,249,240,251,244]; Heap used: [76,76,76,76,76]; External: [32,32,32,32,32]"
          },
          {
            "name": "bsbm-file - store size after ingestion",
            "value": 67,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 187 bytes; Runs: [67,67,67,67,67]"
          },
          {
            "name": "ldbc-snb-file - ingestion time",
            "value": 12757,
            "unit": "ms",
            "extra": "Triples: 4028513; Throughput: 315788 triples/s; Runs: [12838,12942,12757,12649,12674]"
          },
          {
            "name": "ldbc-snb-file - memory after ingestion",
            "value": 829,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 216 bytes; Runs: [861,827,829,856,826]; Heap used: [370,370,370,370,370]; External: [283,283,283,283,283]"
          },
          {
            "name": "ldbc-snb-file - store size after ingestion",
            "value": 613,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 160 bytes; Runs: [613,613,613,613,613]"
          },
          {
            "name": "watdiv-file - ingestion time",
            "value": 1495,
            "unit": "ms",
            "extra": "Triples: 1093014; Throughput: 731113 triples/s; Runs: [1486,1537,1498,1479,1495]"
          },
          {
            "name": "watdiv-file - memory after ingestion",
            "value": 268,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 257 bytes; Runs: [267,268,262,271,272]; Heap used: [56,56,56,58,58]; External: [88,88,88,88,88]"
          },
          {
            "name": "watdiv-file - store size after ingestion",
            "value": 103,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 99 bytes; Runs: [103,103,103,105,105]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rubensworks@users.noreply.github.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6680b1d3dd3676716b1f0c403501c3f70400fb0d",
          "message": "Improve planner accuracy of bind over local sources (#1971)\n\nThe new `localCost` is now used instead of `subQueryCost`\nfor local sources, which resolves performance regressions over HDT.",
          "timestamp": "2026-11-13T05:51:27+01:00",
          "tree_id": "fc8b695d4ce6746ff4402f9dda1a6c6b3be32018",
          "url": "https://github.com/comunica/comunica/commit/6680b1d3dd3676716b1f0c403501c3f70400fb0d"
        },
        "date": 1794546798961,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bsbm-file-10k - ingestion time",
            "value": 12467,
            "unit": "ms",
            "extra": "Triples: 3564773; Throughput: 285937 triples/s; Runs: [12581,12693,12442,12467,12400]"
          },
          {
            "name": "bsbm-file-10k - memory after ingestion",
            "value": 803,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 236 bytes; Runs: [803,800,799,804,808]; Heap used: [371,371,371,371,371]; External: [248,248,248,248,248]"
          },
          {
            "name": "bsbm-file-10k - store size after ingestion",
            "value": 577,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 170 bytes; Runs: [577,577,577,577,577]"
          },
          {
            "name": "bsbm-file - ingestion time",
            "value": 1395,
            "unit": "ms",
            "extra": "Triples: 374911; Throughput: 268753 triples/s; Runs: [1395,1407,1366,1394,1428]"
          },
          {
            "name": "bsbm-file - memory after ingestion",
            "value": 244,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 682 bytes; Runs: [244,244,243,246,248]; Heap used: [76,76,76,76,76]; External: [32,32,32,32,32]"
          },
          {
            "name": "bsbm-file - store size after ingestion",
            "value": 67,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 187 bytes; Runs: [67,67,67,67,67]"
          },
          {
            "name": "ldbc-snb-file - ingestion time",
            "value": 12310,
            "unit": "ms",
            "extra": "Triples: 4028513; Throughput: 327255 triples/s; Runs: [12449,12147,12345,12310,12299]"
          },
          {
            "name": "ldbc-snb-file - memory after ingestion",
            "value": 824,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 214 bytes; Runs: [874,818,814,832,824]; Heap used: [370,370,370,370,370]; External: [283,283,283,283,283]"
          },
          {
            "name": "ldbc-snb-file - store size after ingestion",
            "value": 613,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 160 bytes; Runs: [613,613,613,613,613]"
          },
          {
            "name": "watdiv-file - ingestion time",
            "value": 2070,
            "unit": "ms",
            "extra": "Triples: 1093014; Throughput: 528026 triples/s; Runs: [2014,2120,2095,2070,2030]"
          },
          {
            "name": "watdiv-file - memory after ingestion",
            "value": 269,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 258 bytes; Runs: [269,271,267,265,273]; Heap used: [61,58,56,58,61]; External: [88,88,88,88,88]"
          },
          {
            "name": "watdiv-file - store size after ingestion",
            "value": 105,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 101 bytes; Runs: [108,105,103,105,108]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rubensworks@users.noreply.github.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f752c58624df1233de616fa0f35a37e29c4cc204",
          "message": "Add Node.js versions badge to READMEs (#1972)\n\nCloses #1969",
          "timestamp": "2026-11-13T08:05:16+01:00",
          "tree_id": "d703e8e7861ca3e9a26ed595c357ca5e1a3b0735",
          "url": "https://github.com/comunica/comunica/commit/f752c58624df1233de616fa0f35a37e29c4cc204"
        },
        "date": 1794554314940,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bsbm-file-10k - ingestion time",
            "value": 9464,
            "unit": "ms",
            "extra": "Triples: 3564773; Throughput: 376667 triples/s; Runs: [9464,9426,9466,9506,9424]"
          },
          {
            "name": "bsbm-file-10k - memory after ingestion",
            "value": 809,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 238 bytes; Runs: [814,809,795,813,808]; Heap used: [371,371,371,371,371]; External: [248,248,248,248,248]"
          },
          {
            "name": "bsbm-file-10k - store size after ingestion",
            "value": 577,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 170 bytes; Runs: [577,577,577,577,577]"
          },
          {
            "name": "bsbm-file - ingestion time",
            "value": 1453,
            "unit": "ms",
            "extra": "Triples: 374911; Throughput: 258025 triples/s; Runs: [1449,1453,1454,1458,1432]"
          },
          {
            "name": "bsbm-file - memory after ingestion",
            "value": 244,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 682 bytes; Runs: [244,245,247,241,243]; Heap used: [76,76,76,76,76]; External: [32,32,32,32,32]"
          },
          {
            "name": "bsbm-file - store size after ingestion",
            "value": 67,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 187 bytes; Runs: [67,67,67,67,67]"
          },
          {
            "name": "ldbc-snb-file - ingestion time",
            "value": 9995,
            "unit": "ms",
            "extra": "Triples: 4028513; Throughput: 403053 triples/s; Runs: [10068,9545,9995,10112,9789]"
          },
          {
            "name": "ldbc-snb-file - memory after ingestion",
            "value": 839,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 218 bytes; Runs: [843,839,839,833,837]; Heap used: [370,370,370,370,370]; External: [283,283,283,283,283]"
          },
          {
            "name": "ldbc-snb-file - store size after ingestion",
            "value": 613,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 160 bytes; Runs: [613,613,613,613,613]"
          },
          {
            "name": "watdiv-file - ingestion time",
            "value": 2903,
            "unit": "ms",
            "extra": "Triples: 1093014; Throughput: 376512 triples/s; Runs: [2961,2909,2837,2878,2903]"
          },
          {
            "name": "watdiv-file - memory after ingestion",
            "value": 271,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 260 bytes; Runs: [274,268,272,269,271]; Heap used: [58,56,58,56,58]; External: [88,88,88,88,88]"
          },
          {
            "name": "watdiv-file - store size after ingestion",
            "value": 105,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 101 bytes; Runs: [105,103,105,103,105]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rubensworks@users.noreply.github.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "84657dfaa90f4eec4777879ced1270680d922bd6",
          "message": "Fix crash when HTTP invalidating non-URLs (#1977)",
          "timestamp": "2026-11-14T11:01:55+01:00",
          "tree_id": "486c9e668d3b0ecc20d700fa491e6ccb33899f46",
          "url": "https://github.com/comunica/comunica/commit/84657dfaa90f4eec4777879ced1270680d922bd6"
        },
        "date": 1794652319949,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bsbm-file-10k - ingestion time",
            "value": 12665,
            "unit": "ms",
            "extra": "Triples: 3564773; Throughput: 281466 triples/s; Runs: [12665,12717,12568,12840,12630]"
          },
          {
            "name": "bsbm-file-10k - memory after ingestion",
            "value": 810,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 238 bytes; Runs: [811,810,806,811,810]; Heap used: [371,371,371,371,371]; External: [248,248,248,248,248]"
          },
          {
            "name": "bsbm-file-10k - store size after ingestion",
            "value": 577,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 170 bytes; Runs: [577,577,577,577,577]"
          },
          {
            "name": "bsbm-file - ingestion time",
            "value": 1465,
            "unit": "ms",
            "extra": "Triples: 374911; Throughput: 255912 triples/s; Runs: [1465,1459,1476,1500,1434]"
          },
          {
            "name": "bsbm-file - memory after ingestion",
            "value": 245,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 685 bytes; Runs: [245,247,244,251,245]; Heap used: [76,76,76,76,76]; External: [32,32,32,32,32]"
          },
          {
            "name": "bsbm-file - store size after ingestion",
            "value": 67,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 187 bytes; Runs: [67,67,67,67,67]"
          },
          {
            "name": "ldbc-snb-file - ingestion time",
            "value": 12402,
            "unit": "ms",
            "extra": "Triples: 4028513; Throughput: 324828 triples/s; Runs: [12629,12402,12227,12263,12477]"
          },
          {
            "name": "ldbc-snb-file - memory after ingestion",
            "value": 832,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 217 bytes; Runs: [833,832,832,830,877]; Heap used: [370,370,370,370,370]; External: [283,283,283,283,283]"
          },
          {
            "name": "ldbc-snb-file - store size after ingestion",
            "value": 613,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 160 bytes; Runs: [613,613,613,613,613]"
          },
          {
            "name": "watdiv-file - ingestion time",
            "value": 1430,
            "unit": "ms",
            "extra": "Triples: 1093014; Throughput: 764345 triples/s; Runs: [1401,1436,1490,1430,1413]"
          },
          {
            "name": "watdiv-file - memory after ingestion",
            "value": 266,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 255 bytes; Runs: [270,266,266,271,263]; Heap used: [56,56,58,56,58]; External: [88,88,88,88,88]"
          },
          {
            "name": "watdiv-file - store size after ingestion",
            "value": 103,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 99 bytes; Runs: [103,103,105,103,105]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rubensworks@users.noreply.github.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6be20b6d64fc8c8d0c8398847c2f802efc710737",
          "message": "Only fetch distinct objects from sources that efficiently support them (#1981)",
          "timestamp": "2026-11-15T13:56:32+01:00",
          "tree_id": "fd5b88d8a9666d37dbe459cd56fdce8fc8e44bcd",
          "url": "https://github.com/comunica/comunica/commit/6be20b6d64fc8c8d0c8398847c2f802efc710737"
        },
        "date": 1794749119996,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bsbm-file-10k - ingestion time",
            "value": 14136,
            "unit": "ms",
            "extra": "Triples: 3564773; Throughput: 252177 triples/s; Runs: [14242,14209,13847,14136,13991]"
          },
          {
            "name": "bsbm-file-10k - memory after ingestion",
            "value": 801,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 236 bytes; Runs: [803,801,799,798,806]; Heap used: [371,371,371,371,371]; External: [248,248,248,248,248]"
          },
          {
            "name": "bsbm-file-10k - store size after ingestion",
            "value": 577,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 170 bytes; Runs: [577,577,577,577,577]"
          },
          {
            "name": "bsbm-file - ingestion time",
            "value": 855,
            "unit": "ms",
            "extra": "Triples: 374911; Throughput: 438492 triples/s; Runs: [886,835,853,865,855]"
          },
          {
            "name": "bsbm-file - memory after ingestion",
            "value": 243,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 680 bytes; Runs: [237,254,243,246,240]; Heap used: [76,76,76,76,76]; External: [32,32,32,32,32]"
          },
          {
            "name": "bsbm-file - store size after ingestion",
            "value": 67,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 187 bytes; Runs: [67,67,67,67,67]"
          },
          {
            "name": "ldbc-snb-file - ingestion time",
            "value": 13016,
            "unit": "ms",
            "extra": "Triples: 4028513; Throughput: 309505 triples/s; Runs: [12952,12916,13058,13016,13208]"
          },
          {
            "name": "ldbc-snb-file - memory after ingestion",
            "value": 830,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 216 bytes; Runs: [829,829,857,888,830]; Heap used: [370,370,370,370,370]; External: [283,283,283,283,283]"
          },
          {
            "name": "ldbc-snb-file - store size after ingestion",
            "value": 613,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 160 bytes; Runs: [613,613,613,613,613]"
          },
          {
            "name": "watdiv-file - ingestion time",
            "value": 1496,
            "unit": "ms",
            "extra": "Triples: 1093014; Throughput: 730624 triples/s; Runs: [1478,1472,1551,1548,1496]"
          },
          {
            "name": "watdiv-file - memory after ingestion",
            "value": 264,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 253 bytes; Runs: [267,264,262,273,263]; Heap used: [56,56,56,58,56]; External: [88,88,88,88,88]"
          },
          {
            "name": "watdiv-file - store size after ingestion",
            "value": 103,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 99 bytes; Runs: [103,103,103,105,103]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rubensworks@users.noreply.github.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b1f161e6150ef1234fb99b462349916a7240315f",
          "message": "Update rdf-stores to 2.10.3 (#2013)\n\nThis allows larger datasets to be stored in memory.\nThis slightly reduces storage sizes and improves execution times.",
          "timestamp": "2026-11-16T10:55:42+01:00",
          "tree_id": "6f4e8ba64e7897e818d81b88244c8e6f842daaf5",
          "url": "https://github.com/comunica/comunica/commit/b1f161e6150ef1234fb99b462349916a7240315f"
        },
        "date": 1794824201048,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bsbm-file-10k - ingestion time",
            "value": 9161,
            "unit": "ms",
            "extra": "Triples: 3564773; Throughput: 389125 triples/s; Runs: [8970,9286,9241,9161,9121]"
          },
          {
            "name": "bsbm-file-10k - memory after ingestion",
            "value": 791,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 233 bytes; Runs: [791,793,794,776,778]; Heap used: [351,351,351,351,351]; External: [248,248,248,248,248]"
          },
          {
            "name": "bsbm-file-10k - store size after ingestion",
            "value": 558,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 164 bytes; Runs: [558,558,558,558,558]"
          },
          {
            "name": "bsbm-file - ingestion time",
            "value": 1081,
            "unit": "ms",
            "extra": "Triples: 374911; Throughput: 346819 triples/s; Runs: [1081,1073,1079,1083,1081]"
          },
          {
            "name": "bsbm-file - memory after ingestion",
            "value": 243,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 680 bytes; Runs: [243,244,244,243,233]; Heap used: [73,73,73,73,73]; External: [32,32,32,32,32]"
          },
          {
            "name": "bsbm-file - store size after ingestion",
            "value": 64,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 179 bytes; Runs: [64,64,64,64,64]"
          },
          {
            "name": "ldbc-snb-file - ingestion time",
            "value": 16119,
            "unit": "ms",
            "extra": "Triples: 4028513; Throughput: 249923 triples/s; Runs: [16119,16065,16139,16006,16269]"
          },
          {
            "name": "ldbc-snb-file - memory after ingestion",
            "value": 798,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 208 bytes; Runs: [787,795,798,799,800]; Heap used: [330,330,330,330,330]; External: [284,284,284,284,284]"
          },
          {
            "name": "ldbc-snb-file - store size after ingestion",
            "value": 573,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 149 bytes; Runs: [573,573,573,573,573]"
          },
          {
            "name": "watdiv-file - ingestion time",
            "value": 2648,
            "unit": "ms",
            "extra": "Triples: 1093014; Throughput: 412770 triples/s; Runs: [2630,2642,2779,2648,2670]"
          },
          {
            "name": "watdiv-file - memory after ingestion",
            "value": 267,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 256 bytes; Runs: [267,263,269,266,268]; Heap used: [53,56,53,53,53]; External: [88,88,88,88,88]"
          },
          {
            "name": "watdiv-file - store size after ingestion",
            "value": 100,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 96 bytes; Runs: [100,103,100,100,100]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rubensworks@users.noreply.github.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3b80bbc0451fb2fadac9f82ddb1bce85261e1b2e",
          "message": "Fix adding yearMonthDurations not considering proper month ends (#1974)\n\nRelated to #1973",
          "timestamp": "2026-11-17T15:53:34+01:00",
          "tree_id": "a4b937707604eabb5f49e8b7b0e4e90bdf614ee8",
          "url": "https://github.com/comunica/comunica/commit/3b80bbc0451fb2fadac9f82ddb1bce85261e1b2e"
        },
        "date": 1794928138281,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bsbm-file-10k - ingestion time",
            "value": 13189,
            "unit": "ms",
            "extra": "Triples: 3564773; Throughput: 270284 triples/s; Runs: [13023,13317,13594,13189,12861]"
          },
          {
            "name": "bsbm-file-10k - memory after ingestion",
            "value": 784,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 231 bytes; Runs: [784,784,784,775,781]; Heap used: [351,351,351,351,351]; External: [248,248,248,248,248]"
          },
          {
            "name": "bsbm-file-10k - store size after ingestion",
            "value": 558,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 164 bytes; Runs: [558,558,558,558,558]"
          },
          {
            "name": "bsbm-file - ingestion time",
            "value": 1095,
            "unit": "ms",
            "extra": "Triples: 374911; Throughput: 342384 triples/s; Runs: [1075,1099,1095,1110,1091]"
          },
          {
            "name": "bsbm-file - memory after ingestion",
            "value": 241,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 674 bytes; Runs: [238,245,239,241,248]; Heap used: [73,73,73,73,73]; External: [32,32,32,32,32]"
          },
          {
            "name": "bsbm-file - store size after ingestion",
            "value": 64,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 179 bytes; Runs: [64,64,64,64,64]"
          },
          {
            "name": "ldbc-snb-file - ingestion time",
            "value": 17502,
            "unit": "ms",
            "extra": "Triples: 4028513; Throughput: 230174 triples/s; Runs: [16892,16624,17502,17504,18383]"
          },
          {
            "name": "ldbc-snb-file - memory after ingestion",
            "value": 799,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 208 bytes; Runs: [792,799,789,800,801]; Heap used: [330,330,330,330,330]; External: [284,284,284,284,284]"
          },
          {
            "name": "ldbc-snb-file - store size after ingestion",
            "value": 573,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 149 bytes; Runs: [573,573,573,573,573]"
          },
          {
            "name": "watdiv-file - ingestion time",
            "value": 1479,
            "unit": "ms",
            "extra": "Triples: 1093014; Throughput: 739022 triples/s; Runs: [1528,1414,1480,1479,1462]"
          },
          {
            "name": "watdiv-file - memory after ingestion",
            "value": 269,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 258 bytes; Runs: [269,269,269,270,269]; Heap used: [53,56,56,53,53]; External: [88,88,88,88,88]"
          },
          {
            "name": "watdiv-file - store size after ingestion",
            "value": 100,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 96 bytes; Runs: [100,103,103,100,100]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rubensworks@users.noreply.github.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "57c668c39143e135c3c5cd077ec12804590ca649",
          "message": "Fix string = and < not using codepoint collation (#1975)\n\nRelated to #1973",
          "timestamp": "2026-11-17T16:22:48+01:00",
          "tree_id": "416f574c95c539c3976cf80c9d1f2fbe6b307881",
          "url": "https://github.com/comunica/comunica/commit/57c668c39143e135c3c5cd077ec12804590ca649"
        },
        "date": 1794930368010,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bsbm-file-10k - ingestion time",
            "value": 9719,
            "unit": "ms",
            "extra": "Triples: 3564773; Throughput: 366784 triples/s; Runs: [9719,9851,9646,9747,9700]"
          },
          {
            "name": "bsbm-file-10k - memory after ingestion",
            "value": 785,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 231 bytes; Runs: [785,781,784,785,785]; Heap used: [351,351,351,351,351]; External: [248,248,248,248,248]"
          },
          {
            "name": "bsbm-file-10k - store size after ingestion",
            "value": 558,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 164 bytes; Runs: [558,558,558,558,558]"
          },
          {
            "name": "bsbm-file - ingestion time",
            "value": 831,
            "unit": "ms",
            "extra": "Triples: 374911; Throughput: 451156 triples/s; Runs: [822,878,830,831,833]"
          },
          {
            "name": "bsbm-file - memory after ingestion",
            "value": 240,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 671 bytes; Runs: [240,245,236,238,245]; Heap used: [73,73,73,73,73]; External: [32,32,32,32,32]"
          },
          {
            "name": "bsbm-file - store size after ingestion",
            "value": 64,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 179 bytes; Runs: [64,64,64,64,64]"
          },
          {
            "name": "ldbc-snb-file - ingestion time",
            "value": 14898,
            "unit": "ms",
            "extra": "Triples: 4028513; Throughput: 270406 triples/s; Runs: [14903,14898,14870,14924,14855]"
          },
          {
            "name": "ldbc-snb-file - memory after ingestion",
            "value": 791,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 206 bytes; Runs: [802,786,791,786,818]; Heap used: [330,330,330,330,330]; External: [284,284,284,284,284]"
          },
          {
            "name": "ldbc-snb-file - store size after ingestion",
            "value": 573,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 149 bytes; Runs: [573,573,573,573,573]"
          },
          {
            "name": "watdiv-file - ingestion time",
            "value": 2107,
            "unit": "ms",
            "extra": "Triples: 1093014; Throughput: 518754 triples/s; Runs: [2116,2118,2089,2088,2107]"
          },
          {
            "name": "watdiv-file - memory after ingestion",
            "value": 268,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 257 bytes; Runs: [265,268,269,263,268]; Heap used: [53,53,53,53,56]; External: [88,88,88,88,88]"
          },
          {
            "name": "watdiv-file - store size after ingestion",
            "value": 100,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 96 bytes; Runs: [100,100,100,100,103]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rubensworks@users.noreply.github.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5397d161c6ae97534df527af21b54a997c8e3d0b",
          "message": "Fix release builds and images not being deployed anymore (#2022)",
          "timestamp": "2026-11-21T07:46:35+01:00",
          "tree_id": "df0498b7917dcfdc8e37e47da336e7b40831e8cf",
          "url": "https://github.com/comunica/comunica/commit/5397d161c6ae97534df527af21b54a997c8e3d0b"
        },
        "date": 1795244762557,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bsbm-file-10k - ingestion time",
            "value": 12767,
            "unit": "ms",
            "extra": "Triples: 3564773; Throughput: 279218 triples/s; Runs: [12503,12889,12767,13157,12634]"
          },
          {
            "name": "bsbm-file-10k - memory after ingestion",
            "value": 782,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 230 bytes; Runs: [786,780,782,784,771]; Heap used: [351,351,351,351,351]; External: [248,248,248,248,248]"
          },
          {
            "name": "bsbm-file-10k - store size after ingestion",
            "value": 558,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 164 bytes; Runs: [558,558,558,558,558]"
          },
          {
            "name": "bsbm-file - ingestion time",
            "value": 1109,
            "unit": "ms",
            "extra": "Triples: 374911; Throughput: 338062 triples/s; Runs: [1112,1109,1114,1100,1092]"
          },
          {
            "name": "bsbm-file - memory after ingestion",
            "value": 241,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 674 bytes; Runs: [231,248,241,241,244]; Heap used: [73,73,73,73,73]; External: [32,32,32,32,32]"
          },
          {
            "name": "bsbm-file - store size after ingestion",
            "value": 64,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 179 bytes; Runs: [64,64,64,64,64]"
          },
          {
            "name": "ldbc-snb-file - ingestion time",
            "value": 14716,
            "unit": "ms",
            "extra": "Triples: 4028513; Throughput: 273751 triples/s; Runs: [14716,14882,14907,14711,14657]"
          },
          {
            "name": "ldbc-snb-file - memory after ingestion",
            "value": 798,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 208 bytes; Runs: [795,800,801,798,782]; Heap used: [330,330,330,330,330]; External: [284,284,284,284,284]"
          },
          {
            "name": "ldbc-snb-file - store size after ingestion",
            "value": 573,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 149 bytes; Runs: [573,573,573,573,573]"
          },
          {
            "name": "watdiv-file - ingestion time",
            "value": 1746,
            "unit": "ms",
            "extra": "Triples: 1093014; Throughput: 626010 triples/s; Runs: [1676,1746,1774,1717,1762]"
          },
          {
            "name": "watdiv-file - memory after ingestion",
            "value": 267,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 256 bytes; Runs: [262,269,267,262,268]; Heap used: [53,53,53,53,53]; External: [88,88,88,88,88]"
          },
          {
            "name": "watdiv-file - store size after ingestion",
            "value": 100,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 96 bytes; Runs: [100,100,100,100,100]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rubensworks@users.noreply.github.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aef4a4c12e287935ac4c0870bc236f155fec3758",
          "message": "Build and deploy web clients for development branches and releases (#2023)",
          "timestamp": "2026-11-21T11:47:54+01:00",
          "tree_id": "9bd08cb740b64f546d55edd0e0ba47b345a8cf87",
          "url": "https://github.com/comunica/comunica/commit/aef4a4c12e287935ac4c0870bc236f155fec3758"
        },
        "date": 1795259280619,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bsbm-file-10k - ingestion time",
            "value": 12386,
            "unit": "ms",
            "extra": "Triples: 3564773; Throughput: 287807 triples/s; Runs: [12494,12470,12228,12386,12231]"
          },
          {
            "name": "bsbm-file-10k - memory after ingestion",
            "value": 773,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 227 bytes; Runs: [784,773,770,774,773]; Heap used: [351,351,351,351,351]; External: [248,248,248,248,248]"
          },
          {
            "name": "bsbm-file-10k - store size after ingestion",
            "value": 558,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 164 bytes; Runs: [558,558,558,558,558]"
          },
          {
            "name": "bsbm-file - ingestion time",
            "value": 1394,
            "unit": "ms",
            "extra": "Triples: 374911; Throughput: 268946 triples/s; Runs: [1386,1394,1394,1378,1394]"
          },
          {
            "name": "bsbm-file - memory after ingestion",
            "value": 243,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 680 bytes; Runs: [243,245,247,243,242]; Heap used: [73,73,73,73,73]; External: [32,32,32,32,32]"
          },
          {
            "name": "bsbm-file - store size after ingestion",
            "value": 64,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 179 bytes; Runs: [64,64,64,64,64]"
          },
          {
            "name": "ldbc-snb-file - ingestion time",
            "value": 9585,
            "unit": "ms",
            "extra": "Triples: 4028513; Throughput: 420293 triples/s; Runs: [9585,9511,9608,9498,9804]"
          },
          {
            "name": "ldbc-snb-file - memory after ingestion",
            "value": 796,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 207 bytes; Runs: [802,796,796,796,829]; Heap used: [330,330,330,330,330]; External: [284,284,284,284,284]"
          },
          {
            "name": "ldbc-snb-file - store size after ingestion",
            "value": 573,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 149 bytes; Runs: [573,573,573,573,573]"
          },
          {
            "name": "watdiv-file - ingestion time",
            "value": 2204,
            "unit": "ms",
            "extra": "Triples: 1093014; Throughput: 495923 triples/s; Runs: [2242,2196,2204,2250,2202]"
          },
          {
            "name": "watdiv-file - memory after ingestion",
            "value": 268,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 257 bytes; Runs: [264,268,269,270,264]; Heap used: [56,56,56,56,59]; External: [88,88,88,88,88]"
          },
          {
            "name": "watdiv-file - store size after ingestion",
            "value": 103,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 99 bytes; Runs: [103,103,103,103,106]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rubensworks@users.noreply.github.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5dac5bca42aa481e7a5a63088b536db0707a296e",
          "message": "Replace uuid with a minimal UUID v4 implementation (#2026)\n\nThe uuid package contained many things we did not need,\nwhich made our bundle size unnecessarily large.",
          "timestamp": "2026-11-21T13:16:30+01:00",
          "tree_id": "167ced7738d13d485c4e9d7996417cf9d9fd87e7",
          "url": "https://github.com/comunica/comunica/commit/5dac5bca42aa481e7a5a63088b536db0707a296e"
        },
        "date": 1795264855388,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bsbm-file-10k - ingestion time",
            "value": 8951,
            "unit": "ms",
            "extra": "Triples: 3564773; Throughput: 398254 triples/s; Runs: [8979,8951,9171,8869,8844]"
          },
          {
            "name": "bsbm-file-10k - memory after ingestion",
            "value": 781,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 230 bytes; Runs: [783,780,789,774,781]; Heap used: [351,351,351,351,351]; External: [248,248,248,248,248]"
          },
          {
            "name": "bsbm-file-10k - store size after ingestion",
            "value": 558,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 164 bytes; Runs: [558,558,558,558,558]"
          },
          {
            "name": "bsbm-file - ingestion time",
            "value": 788,
            "unit": "ms",
            "extra": "Triples: 374911; Throughput: 475775 triples/s; Runs: [782,798,789,788,779]"
          },
          {
            "name": "bsbm-file - memory after ingestion",
            "value": 237,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 663 bytes; Runs: [246,237,245,236,237]; Heap used: [73,73,73,73,73]; External: [32,32,32,32,32]"
          },
          {
            "name": "bsbm-file - store size after ingestion",
            "value": 64,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 179 bytes; Runs: [64,64,64,64,64]"
          },
          {
            "name": "ldbc-snb-file - ingestion time",
            "value": 15152,
            "unit": "ms",
            "extra": "Triples: 4028513; Throughput: 265873 triples/s; Runs: [15123,15117,15293,15152,15491]"
          },
          {
            "name": "ldbc-snb-file - memory after ingestion",
            "value": 798,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 208 bytes; Runs: [798,798,784,800,789]; Heap used: [330,330,330,330,330]; External: [284,284,284,284,284]"
          },
          {
            "name": "ldbc-snb-file - store size after ingestion",
            "value": 573,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 149 bytes; Runs: [573,573,573,573,573]"
          },
          {
            "name": "watdiv-file - ingestion time",
            "value": 2243,
            "unit": "ms",
            "extra": "Triples: 1093014; Throughput: 487300 triples/s; Runs: [2323,2243,2218,2233,2259]"
          },
          {
            "name": "watdiv-file - memory after ingestion",
            "value": 269,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 258 bytes; Runs: [271,270,265,269,268]; Heap used: [53,53,53,56,56]; External: [88,88,88,88,88]"
          },
          {
            "name": "watdiv-file - store size after ingestion",
            "value": 100,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 96 bytes; Runs: [100,100,100,103,103]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rubensworks@users.noreply.github.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "005f4fab42a026562f1834de03fdb448c7ed95a2",
          "message": "Remove duplicate packages from browser bundles (#2025)",
          "timestamp": "2026-11-21T13:51:29+01:00",
          "tree_id": "b069bc47b9a310739682c8579ecadfe2dc8ce4e0",
          "url": "https://github.com/comunica/comunica/commit/005f4fab42a026562f1834de03fdb448c7ed95a2"
        },
        "date": 1795266635781,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bsbm-file-10k - ingestion time",
            "value": 12242,
            "unit": "ms",
            "extra": "Triples: 3564773; Throughput: 291192 triples/s; Runs: [12328,12185,12113,12447,12242]"
          },
          {
            "name": "bsbm-file-10k - memory after ingestion",
            "value": 783,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 230 bytes; Runs: [783,784,779,785,768]; Heap used: [350,350,350,350,350]; External: [248,248,248,248,248]"
          },
          {
            "name": "bsbm-file-10k - store size after ingestion",
            "value": 558,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 164 bytes; Runs: [558,558,558,558,558]"
          },
          {
            "name": "bsbm-file - ingestion time",
            "value": 1098,
            "unit": "ms",
            "extra": "Triples: 374911; Throughput: 341449 triples/s; Runs: [1103,1095,1101,1090,1098]"
          },
          {
            "name": "bsbm-file - memory after ingestion",
            "value": 241,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 674 bytes; Runs: [237,241,242,249,241]; Heap used: [73,73,73,73,73]; External: [32,32,32,32,32]"
          },
          {
            "name": "bsbm-file - store size after ingestion",
            "value": 64,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 179 bytes; Runs: [64,64,64,64,64]"
          },
          {
            "name": "ldbc-snb-file - ingestion time",
            "value": 12239,
            "unit": "ms",
            "extra": "Triples: 4028513; Throughput: 329154 triples/s; Runs: [12239,12121,12219,12260,12245]"
          },
          {
            "name": "ldbc-snb-file - memory after ingestion",
            "value": 817,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 213 bytes; Runs: [836,764,817,804,839]; Heap used: [330,330,330,330,330]; External: [284,284,284,284,284]"
          },
          {
            "name": "ldbc-snb-file - store size after ingestion",
            "value": 573,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 149 bytes; Runs: [573,573,573,573,573]"
          },
          {
            "name": "watdiv-file - ingestion time",
            "value": 2163,
            "unit": "ms",
            "extra": "Triples: 1093014; Throughput: 505323 triples/s; Runs: [2111,2223,2247,2163,2162]"
          },
          {
            "name": "watdiv-file - memory after ingestion",
            "value": 268,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 257 bytes; Runs: [269,270,268,264,263]; Heap used: [58,53,55,58,55]; External: [88,88,88,88,88]"
          },
          {
            "name": "watdiv-file - store size after ingestion",
            "value": 103,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 99 bytes; Runs: [106,100,103,106,103]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rubensworks@users.noreply.github.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34468d93a12831569bb595cb7a6c7f404babc94c",
          "message": "Fix REPLACE not following fn:replace replacement string rules (#2021)\n\nHandles new spec tests from w3c/rdf-tests#414",
          "timestamp": "2026-11-21T15:06:31+01:00",
          "tree_id": "8a42f55844cd62551288513e925eaf828e1b6f69",
          "url": "https://github.com/comunica/comunica/commit/34468d93a12831569bb595cb7a6c7f404babc94c"
        },
        "date": 1795271931430,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bsbm-file-10k - ingestion time",
            "value": 10248,
            "unit": "ms",
            "extra": "Triples: 3564773; Throughput: 347851 triples/s; Runs: [10357,10203,10248,10366,10184]"
          },
          {
            "name": "bsbm-file-10k - memory after ingestion",
            "value": 785,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 231 bytes; Runs: [787,785,788,784,785]; Heap used: [350,350,350,350,350]; External: [248,248,248,248,248]"
          },
          {
            "name": "bsbm-file-10k - store size after ingestion",
            "value": 558,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 164 bytes; Runs: [558,558,558,558,558]"
          },
          {
            "name": "bsbm-file - ingestion time",
            "value": 1398,
            "unit": "ms",
            "extra": "Triples: 374911; Throughput: 268177 triples/s; Runs: [1453,1390,1382,1398,1408]"
          },
          {
            "name": "bsbm-file - memory after ingestion",
            "value": 243,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 680 bytes; Runs: [239,243,239,244,244]; Heap used: [73,73,73,73,73]; External: [32,32,32,32,32]"
          },
          {
            "name": "bsbm-file - store size after ingestion",
            "value": 64,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 179 bytes; Runs: [64,64,64,64,64]"
          },
          {
            "name": "ldbc-snb-file - ingestion time",
            "value": 11882,
            "unit": "ms",
            "extra": "Triples: 4028513; Throughput: 339043 triples/s; Runs: [11882,11765,11768,12080,12014]"
          },
          {
            "name": "ldbc-snb-file - memory after ingestion",
            "value": 765,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 199 bytes; Runs: [762,766,765,762,780]; Heap used: [330,330,330,330,330]; External: [284,284,284,284,284]"
          },
          {
            "name": "ldbc-snb-file - store size after ingestion",
            "value": 573,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 149 bytes; Runs: [573,573,573,573,573]"
          },
          {
            "name": "watdiv-file - ingestion time",
            "value": 1981,
            "unit": "ms",
            "extra": "Triples: 1093014; Throughput: 551749 triples/s; Runs: [1995,1974,1931,2011,1981]"
          },
          {
            "name": "watdiv-file - memory after ingestion",
            "value": 267,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 256 bytes; Runs: [263,267,268,269,265]; Heap used: [53,53,53,53,53]; External: [88,88,88,88,88]"
          },
          {
            "name": "watdiv-file - store size after ingestion",
            "value": 100,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 96 bytes; Runs: [100,100,100,100,100]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rubensworks@users.noreply.github.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6af4888a9660c56ed21b72f2215f204f06c38f9b",
          "message": "Add LargeRDFBench federated benchmark to CI (#1979)",
          "timestamp": "2026-11-21T21:51:42+01:00",
          "tree_id": "bbefd7a7e81baae028fc19bc7057a8a9ed112546",
          "url": "https://github.com/comunica/comunica/commit/6af4888a9660c56ed21b72f2215f204f06c38f9b"
        },
        "date": 1795303655966,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bsbm-file-10k - ingestion time",
            "value": 12399,
            "unit": "ms",
            "extra": "Triples: 3564773; Throughput: 287505 triples/s; Runs: [12626,12666,12394,12399,12388]"
          },
          {
            "name": "bsbm-file-10k - memory after ingestion",
            "value": 784,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 231 bytes; Runs: [785,784,782,782,784]; Heap used: [350,350,350,350,350]; External: [248,248,248,248,248]"
          },
          {
            "name": "bsbm-file-10k - store size after ingestion",
            "value": 558,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 164 bytes; Runs: [558,558,558,558,558]"
          },
          {
            "name": "bsbm-file - ingestion time",
            "value": 1419,
            "unit": "ms",
            "extra": "Triples: 374911; Throughput: 264208 triples/s; Runs: [1439,1422,1407,1404,1419]"
          },
          {
            "name": "bsbm-file - memory after ingestion",
            "value": 245,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 685 bytes; Runs: [240,242,245,245,246]; Heap used: [73,73,73,73,73]; External: [32,32,32,32,32]"
          },
          {
            "name": "bsbm-file - store size after ingestion",
            "value": 64,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 179 bytes; Runs: [64,64,64,64,64]"
          },
          {
            "name": "ldbc-snb-file - ingestion time",
            "value": 10561,
            "unit": "ms",
            "extra": "Triples: 4028513; Throughput: 381452 triples/s; Runs: [10095,10561,10588,10773,10082]"
          },
          {
            "name": "ldbc-snb-file - memory after ingestion",
            "value": 798,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 208 bytes; Runs: [803,803,798,797,797]; Heap used: [330,330,330,330,330]; External: [284,284,284,284,284]"
          },
          {
            "name": "ldbc-snb-file - store size after ingestion",
            "value": 573,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 149 bytes; Runs: [573,573,573,573,573]"
          },
          {
            "name": "watdiv-file - ingestion time",
            "value": 2661,
            "unit": "ms",
            "extra": "Triples: 1093014; Throughput: 410753 triples/s; Runs: [2661,2692,2699,2633,2626]"
          },
          {
            "name": "watdiv-file - memory after ingestion",
            "value": 265,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 254 bytes; Runs: [269,262,265,262,267]; Heap used: [53,53,53,53,53]; External: [88,88,88,88,88]"
          },
          {
            "name": "watdiv-file - store size after ingestion",
            "value": 100,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 96 bytes; Runs: [100,100,100,100,100]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rubensworks@users.noreply.github.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b58d5faed2396b698c801e3fb59fe9976ec89e12",
          "message": "Fix SPARQL XML serializer not escaping all illegal characters (#1985)\n\nCharacters such as U+0003 and U+0019 are now replaced by U+FFFD.",
          "timestamp": "2026-11-22T07:55:44+01:00",
          "tree_id": "beb92191ea84c236d7e3232de631dbff5f64d9e9",
          "url": "https://github.com/comunica/comunica/commit/b58d5faed2396b698c801e3fb59fe9976ec89e12"
        },
        "date": 1795331701739,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bsbm-file-10k - ingestion time",
            "value": 13358,
            "unit": "ms",
            "extra": "Triples: 3564773; Throughput: 266864 triples/s; Runs: [13310,13141,13372,13358,13488]"
          },
          {
            "name": "bsbm-file-10k - memory after ingestion",
            "value": 789,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 232 bytes; Runs: [785,789,792,786,789]; Heap used: [350,350,350,350,350]; External: [248,248,248,248,248]"
          },
          {
            "name": "bsbm-file-10k - store size after ingestion",
            "value": 558,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 164 bytes; Runs: [558,558,558,558,558]"
          },
          {
            "name": "bsbm-file - ingestion time",
            "value": 1393,
            "unit": "ms",
            "extra": "Triples: 374911; Throughput: 269139 triples/s; Runs: [1393,1403,1507,1380,1390]"
          },
          {
            "name": "bsbm-file - memory after ingestion",
            "value": 243,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 680 bytes; Runs: [238,246,241,247,243]; Heap used: [73,73,73,73,73]; External: [32,32,32,32,32]"
          },
          {
            "name": "bsbm-file - store size after ingestion",
            "value": 64,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 179 bytes; Runs: [64,64,64,64,64]"
          },
          {
            "name": "ldbc-snb-file - ingestion time",
            "value": 15379,
            "unit": "ms",
            "extra": "Triples: 4028513; Throughput: 261949 triples/s; Runs: [15438,15379,15322,15259,15474]"
          },
          {
            "name": "ldbc-snb-file - memory after ingestion",
            "value": 789,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 205 bytes; Runs: [841,789,789,798,783]; Heap used: [330,330,330,330,330]; External: [284,284,284,284,284]"
          },
          {
            "name": "ldbc-snb-file - store size after ingestion",
            "value": 573,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 149 bytes; Runs: [573,573,573,573,573]"
          },
          {
            "name": "watdiv-file - ingestion time",
            "value": 2206,
            "unit": "ms",
            "extra": "Triples: 1093014; Throughput: 495473 triples/s; Runs: [2196,2379,2206,2181,2209]"
          },
          {
            "name": "watdiv-file - memory after ingestion",
            "value": 266,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 255 bytes; Runs: [266,269,268,264,266]; Heap used: [53,55,55,53,53]; External: [88,88,88,88,88]"
          },
          {
            "name": "watdiv-file - store size after ingestion",
            "value": 100,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 96 bytes; Runs: [100,103,103,100,100]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rubensworks@users.noreply.github.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc775f18fa045adc5c291c5dbea43ecff80bdcc4",
          "message": "Prefer SPARQL JSON results over our custom JSON format in content negotiation (#1986)",
          "timestamp": "2026-11-22T09:39:12+01:00",
          "tree_id": "b75b7e9ccd24146aca9759957d8893af9d354a91",
          "url": "https://github.com/comunica/comunica/commit/cc775f18fa045adc5c291c5dbea43ecff80bdcc4"
        },
        "date": 1795338312813,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bsbm-file-10k - ingestion time",
            "value": 12012,
            "unit": "ms",
            "extra": "Triples: 3564773; Throughput: 296768 triples/s; Runs: [12012,11986,11785,12185,12107]"
          },
          {
            "name": "bsbm-file-10k - memory after ingestion",
            "value": 784,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 231 bytes; Runs: [755,791,741,785,784]; Heap used: [350,350,350,350,350]; External: [248,248,248,248,248]"
          },
          {
            "name": "bsbm-file-10k - store size after ingestion",
            "value": 558,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 164 bytes; Runs: [558,558,558,558,558]"
          },
          {
            "name": "bsbm-file - ingestion time",
            "value": 1102,
            "unit": "ms",
            "extra": "Triples: 374911; Throughput: 340210 triples/s; Runs: [1096,1090,1132,1102,1124]"
          },
          {
            "name": "bsbm-file - memory after ingestion",
            "value": 240,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 671 bytes; Runs: [240,241,236,240,243]; Heap used: [73,73,73,73,73]; External: [32,32,32,32,32]"
          },
          {
            "name": "bsbm-file - store size after ingestion",
            "value": 64,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 179 bytes; Runs: [64,64,64,64,64]"
          },
          {
            "name": "ldbc-snb-file - ingestion time",
            "value": 9549,
            "unit": "ms",
            "extra": "Triples: 4028513; Throughput: 421878 triples/s; Runs: [9549,9382,9488,9709,9593]"
          },
          {
            "name": "ldbc-snb-file - memory after ingestion",
            "value": 802,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 209 bytes; Runs: [802,796,799,831,802]; Heap used: [330,330,330,330,330]; External: [284,284,284,284,284]"
          },
          {
            "name": "ldbc-snb-file - store size after ingestion",
            "value": 573,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 149 bytes; Runs: [573,573,573,573,573]"
          },
          {
            "name": "watdiv-file - ingestion time",
            "value": 2126,
            "unit": "ms",
            "extra": "Triples: 1093014; Throughput: 514118 triples/s; Runs: [2088,2096,2126,2217,2142]"
          },
          {
            "name": "watdiv-file - memory after ingestion",
            "value": 267,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 256 bytes; Runs: [268,270,263,267,267]; Heap used: [53,55,53,53,53]; External: [88,88,88,88,88]"
          },
          {
            "name": "watdiv-file - store size after ingestion",
            "value": 100,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 96 bytes; Runs: [100,103,100,100,100]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "35114273+jitsedesmet@users.noreply.github.com",
            "name": "Jitse De Smet",
            "username": "jitsedesmet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "636002a5734943d222fb63f21eecf68f735b7cdc",
          "message": "Add support for extension aggregators (#1889)\n\nThese can be passed using the `extensionAggregators` context key.\n\nCloses #1584",
          "timestamp": "2026-11-24T15:00:40+01:00",
          "tree_id": "468782e663dc81f67c40a7fd6b56f9652f8f9831",
          "url": "https://github.com/comunica/comunica/commit/636002a5734943d222fb63f21eecf68f735b7cdc"
        },
        "date": 1795530034270,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bsbm-file-10k - ingestion time",
            "value": 12684,
            "unit": "ms",
            "extra": "Triples: 3564773; Throughput: 281045 triples/s; Runs: [12487,12563,12684,12824,12731]"
          },
          {
            "name": "bsbm-file-10k - memory after ingestion",
            "value": 783,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 230 bytes; Runs: [784,783,783,779,785]; Heap used: [350,350,350,350,350]; External: [248,248,248,248,248]"
          },
          {
            "name": "bsbm-file-10k - store size after ingestion",
            "value": 558,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 164 bytes; Runs: [558,558,558,558,558]"
          },
          {
            "name": "bsbm-file - ingestion time",
            "value": 873,
            "unit": "ms",
            "extra": "Triples: 374911; Throughput: 429451 triples/s; Runs: [852,858,873,941,876]"
          },
          {
            "name": "bsbm-file - memory after ingestion",
            "value": 239,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 668 bytes; Runs: [238,239,236,241,249]; Heap used: [73,73,73,73,73]; External: [32,32,32,32,32]"
          },
          {
            "name": "bsbm-file - store size after ingestion",
            "value": 64,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 179 bytes; Runs: [64,64,64,64,64]"
          },
          {
            "name": "ldbc-snb-file - ingestion time",
            "value": 12097,
            "unit": "ms",
            "extra": "Triples: 4028513; Throughput: 333018 triples/s; Runs: [11916,12097,12062,12140,12312]"
          },
          {
            "name": "ldbc-snb-file - memory after ingestion",
            "value": 778,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 203 bytes; Runs: [765,834,762,814,778]; Heap used: [330,330,330,330,330]; External: [284,284,284,284,284]"
          },
          {
            "name": "ldbc-snb-file - store size after ingestion",
            "value": 573,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 149 bytes; Runs: [573,573,573,573,573]"
          },
          {
            "name": "watdiv-file - ingestion time",
            "value": 1507,
            "unit": "ms",
            "extra": "Triples: 1093014; Throughput: 725291 triples/s; Runs: [1434,1521,1507,1419,1522]"
          },
          {
            "name": "watdiv-file - memory after ingestion",
            "value": 267,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 256 bytes; Runs: [264,268,267,268,262]; Heap used: [53,55,53,53,53]; External: [88,88,88,88,88]"
          },
          {
            "name": "watdiv-file - store size after ingestion",
            "value": 100,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 96 bytes; Runs: [100,103,100,100,100]"
          }
        ]
      }
    ]
  }
}