window.BENCHMARK_DATA = {
  "lastUpdate": 1790352945776,
  "repoUrl": "https://github.com/comunica/comunica",
  "entries": {
    "Benchmarks total results": [
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
        "date": 1790352944618,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 2269,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 23061,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 166,
            "unit": "ms"
          },
          {
            "name": "BSBM-File-10k",
            "value": 1825,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1422,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 170637,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}