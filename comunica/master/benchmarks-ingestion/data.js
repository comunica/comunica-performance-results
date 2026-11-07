window.BENCHMARK_DATA = {
  "lastUpdate": 1794084143036,
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
      }
    ]
  }
}