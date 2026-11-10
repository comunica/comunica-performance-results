window.BENCHMARK_DATA = {
  "lastUpdate": 1794326842493,
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
      }
    ]
  }
}