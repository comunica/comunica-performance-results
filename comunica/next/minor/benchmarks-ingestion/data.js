window.BENCHMARK_DATA = {
  "lastUpdate": 1795795348342,
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
          "id": "417ff3eb23f970cb97427d2e1c5d4939e31d26ef",
          "message": "Fix failing stageRelease test on Windows (#2054)",
          "timestamp": "2026-11-27T15:17:11+01:00",
          "tree_id": "1f0f20a2eaec3f0c8fe5ec512210abf50c020977",
          "url": "https://github.com/comunica/comunica/commit/417ff3eb23f970cb97427d2e1c5d4939e31d26ef"
        },
        "date": 1795795347235,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bsbm-file-10k - ingestion time",
            "value": 9809,
            "unit": "ms",
            "extra": "Triples: 3564773; Throughput: 363419 triples/s; Runs: [9789,9809,9658,10002,10096]"
          },
          {
            "name": "bsbm-file-10k - memory after ingestion",
            "value": 784,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 231 bytes; Runs: [783,784,784,785,796]; Heap used: [350,350,350,350,350]; External: [248,248,248,248,248]"
          },
          {
            "name": "bsbm-file-10k - store size after ingestion",
            "value": 558,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 164 bytes; Runs: [558,558,558,558,558]"
          },
          {
            "name": "bsbm-file - ingestion time",
            "value": 1456,
            "unit": "ms",
            "extra": "Triples: 374911; Throughput: 257494 triples/s; Runs: [1470,1456,1447,1456,1446]"
          },
          {
            "name": "bsbm-file - memory after ingestion",
            "value": 242,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 677 bytes; Runs: [241,243,243,242,238]; Heap used: [73,73,73,73,73]; External: [32,32,32,32,32]"
          },
          {
            "name": "bsbm-file - store size after ingestion",
            "value": 64,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 179 bytes; Runs: [64,64,64,64,64]"
          },
          {
            "name": "ldbc-snb-file - ingestion time",
            "value": 15003,
            "unit": "ms",
            "extra": "Triples: 4028513; Throughput: 268514 triples/s; Runs: [14951,15124,14921,15003,15098]"
          },
          {
            "name": "ldbc-snb-file - memory after ingestion",
            "value": 800,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 208 bytes; Runs: [799,838,790,836,800]; Heap used: [330,330,330,330,330]; External: [284,284,284,284,284]"
          },
          {
            "name": "ldbc-snb-file - store size after ingestion",
            "value": 573,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 149 bytes; Runs: [573,573,573,573,573]"
          },
          {
            "name": "watdiv-file - ingestion time",
            "value": 1604,
            "unit": "ms",
            "extra": "Triples: 1093014; Throughput: 681430 triples/s; Runs: [1471,1622,1604,1661,1545]"
          },
          {
            "name": "watdiv-file - memory after ingestion",
            "value": 266,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 255 bytes; Runs: [265,262,269,266,267]; Heap used: [53,53,53,53,55]; External: [88,88,88,88,88]"
          },
          {
            "name": "watdiv-file - store size after ingestion",
            "value": 100,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 96 bytes; Runs: [100,100,100,100,103]"
          }
        ]
      }
    ]
  }
}