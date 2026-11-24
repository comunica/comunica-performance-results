window.BENCHMARK_DATA = {
  "lastUpdate": 1795532704446,
  "repoUrl": "https://github.com/comunica/comunica",
  "entries": {
    "Benchmarks ingestion results": [
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
          "id": "3a258e018a9c5f0b03f531b30ee1cdc659b5b7c9",
          "message": "Bump to release version v5.5.0",
          "timestamp": "2026-11-24T15:44:07+01:00",
          "tree_id": "b4afd4ccd90802f4f93bb626cab510e98cd04a0e",
          "url": "https://github.com/comunica/comunica/commit/3a258e018a9c5f0b03f531b30ee1cdc659b5b7c9"
        },
        "date": 1795532703232,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bsbm-file-10k - ingestion time",
            "value": 12491,
            "unit": "ms",
            "extra": "Triples: 3564773; Throughput: 285387 triples/s; Runs: [12420,12419,12525,12515,12491]"
          },
          {
            "name": "bsbm-file-10k - memory after ingestion",
            "value": 788,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 232 bytes; Runs: [789,787,791,788,787]; Heap used: [350,350,350,350,350]; External: [248,248,248,248,248]"
          },
          {
            "name": "bsbm-file-10k - store size after ingestion",
            "value": 558,
            "unit": "MiB",
            "extra": "Triples: 3564773; Per triple: 164 bytes; Runs: [558,558,558,558,558]"
          },
          {
            "name": "bsbm-file - ingestion time",
            "value": 1009,
            "unit": "ms",
            "extra": "Triples: 374911; Throughput: 371567 triples/s; Runs: [1015,988,1009,1018,1003]"
          },
          {
            "name": "bsbm-file - memory after ingestion",
            "value": 241,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 674 bytes; Runs: [245,243,240,241,239]; Heap used: [73,73,73,73,73]; External: [32,32,32,32,32]"
          },
          {
            "name": "bsbm-file - store size after ingestion",
            "value": 64,
            "unit": "MiB",
            "extra": "Triples: 374911; Per triple: 179 bytes; Runs: [64,64,64,64,64]"
          },
          {
            "name": "ldbc-snb-file - ingestion time",
            "value": 15401,
            "unit": "ms",
            "extra": "Triples: 4028513; Throughput: 261575 triples/s; Runs: [15347,15356,15420,15401,15565]"
          },
          {
            "name": "ldbc-snb-file - memory after ingestion",
            "value": 797,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 207 bytes; Runs: [784,797,800,800,789]; Heap used: [330,330,330,330,330]; External: [284,284,284,284,284]"
          },
          {
            "name": "ldbc-snb-file - store size after ingestion",
            "value": 573,
            "unit": "MiB",
            "extra": "Triples: 4028513; Per triple: 149 bytes; Runs: [573,573,573,573,573]"
          },
          {
            "name": "watdiv-file - ingestion time",
            "value": 1904,
            "unit": "ms",
            "extra": "Triples: 1093014; Throughput: 574062 triples/s; Runs: [1902,1886,2024,1904,1959]"
          },
          {
            "name": "watdiv-file - memory after ingestion",
            "value": 267,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 256 bytes; Runs: [266,265,269,267,268]; Heap used: [58,58,53,55,55]; External: [88,88,88,88,88]"
          },
          {
            "name": "watdiv-file - store size after ingestion",
            "value": 103,
            "unit": "MiB",
            "extra": "Triples: 1093014; Per triple: 99 bytes; Runs: [106,106,100,103,103]"
          }
        ]
      }
    ]
  }
}