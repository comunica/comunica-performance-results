window.BENCHMARK_DATA = {
  "lastUpdate": 1793374335865,
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
          "id": "93147810cce566afb2b2576bdf4c1b3782add916",
          "message": "Look up arbitrary length paths in index nested loop joins\n\nPaths over a single (inverse) predicate are walked synchronously from\ntheir bound subject or object, instead of being evaluated unbound and\njoined afterwards, which for ZeroOrMore paths enumerates every node.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_012cgUi7SRsskNRaXEatKfnw",
          "timestamp": "2026-10-30T15:13:05Z",
          "tree_id": "5a1720614255b9052d05d9ddb1fe03529f6214b3",
          "url": "https://github.com/comunica/comunica/commit/93147810cce566afb2b2576bdf4c1b3782add916"
        },
        "date": 1793374333593,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 338,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 19206,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 58,
            "unit": "ms"
          },
          {
            "name": "BSBM-File-10k",
            "value": 109,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1496,
            "unit": "ms"
          },
          {
            "name": "LDBC-SNB-File",
            "value": 18228,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 144616,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}