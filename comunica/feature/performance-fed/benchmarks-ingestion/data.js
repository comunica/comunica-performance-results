window.BENCHMARK_DATA = {
  "lastUpdate": 1795354777389,
  "repoUrl": "https://github.com/comunica/comunica",
  "entries": {
    "Benchmarks ingestion results": [
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
          "id": "e78b2596e5a24efd16ecde18175f343a552468f2",
          "message": "Merge comunica/comunica#2019 (exists-first-binding) into feature/performance-fed\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01UeSuG9ndDKvwKBmPJr6RKR",
          "timestamp": "2026-11-22T13:21:06Z",
          "tree_id": "2ab68a84ca0a823c1db3769638d095b48bc3e66d",
          "url": "https://github.com/comunica/comunica/commit/e78b2596e5a24efd16ecde18175f343a552468f2"
        },
        "date": 1795354776409,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bsbm-file-10k - ingestion time",
            "value": 12468,
            "unit": "ms",
            "extra": "Triples: 3564773; Throughput: 285914 triples/s; Runs: [12468,12421,12267,12492,12526]"
          },
          {
            "name": "bsbm-file-10k - memory after ingestion",
            "value": 782,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 230 bytes; Runs: [782,785,767,783,780]; Heap used: [350,350,350,350,350]; External: [248,248,248,248,248]"
          },
          {
            "name": "bsbm-file-10k - store size after ingestion",
            "value": 558,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 164 bytes; Runs: [558,558,558,558,558]"
          },
          {
            "name": "bsbm-file - ingestion time",
            "value": 1084,
            "unit": "ms",
            "extra": "Triples: 374911; Throughput: 345859 triples/s; Runs: [1079,1081,1088,1093,1084]"
          },
          {
            "name": "bsbm-file - memory after ingestion",
            "value": 242,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 677 bytes; Runs: [241,240,244,243,242]; Heap used: [73,73,73,73,73]; External: [32,32,32,32,32]"
          },
          {
            "name": "bsbm-file - store size after ingestion",
            "value": 64,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 179 bytes; Runs: [64,64,64,64,64]"
          },
          {
            "name": "ldbc-snb-file - ingestion time",
            "value": 12164,
            "unit": "ms",
            "extra": "Triples: 4028513; Throughput: 331183 triples/s; Runs: [12213,12153,12232,12164,12119]"
          },
          {
            "name": "ldbc-snb-file - memory after ingestion",
            "value": 790,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 206 bytes; Runs: [765,803,790,805,764]; Heap used: [330,330,330,330,330]; External: [284,284,284,284,284]"
          },
          {
            "name": "ldbc-snb-file - store size after ingestion",
            "value": 573,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 149 bytes; Runs: [573,573,573,573,573]"
          },
          {
            "name": "watdiv-file - ingestion time",
            "value": 2771,
            "unit": "ms",
            "extra": "Triples: 1093014; Throughput: 394447 triples/s; Runs: [2738,3086,2979,2771,2754]"
          },
          {
            "name": "watdiv-file - memory after ingestion",
            "value": 266,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 255 bytes; Runs: [265,266,269,266,268]; Heap used: [53,58,55,53,53]; External: [88,88,88,88,88]"
          },
          {
            "name": "watdiv-file - store size after ingestion",
            "value": 100,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 96 bytes; Runs: [100,106,103,100,100]"
          }
        ]
      }
    ]
  }
}