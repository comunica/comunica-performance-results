window.BENCHMARK_DATA = {
  "lastUpdate": 1793408166360,
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
          "id": "d80c3141b2785d5d688237f032ff823c95243798",
          "message": "Count distinct subjects in RDF/JS sources and keep distinct values through joins\n\nQuerySourceRdfJs now also counts the distinct subjects of a pattern with a\nfixed predicate, cached per query execution, and caps distinct value counts\nat the pattern's cardinality. Join results keep the distinct values of their\nvariables instead of dropping them, so that join cardinalities further up in\na plan can still be estimated from them.\n\nWithout distinct subject counts, a subject variable was assumed to take a\ndifferent value in every binding, so one-to-many joins such as forums with\ntheir members or posts with their tags were estimated to not multiply their\ninput. This made LDBC SNB BI7 time out, and BI9 run out of memory.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_012cgUi7SRsskNRaXEatKfnw",
          "timestamp": "2026-10-31T00:39:02Z",
          "tree_id": "0b562de8edba4fe8ce81f047a838947b9eae7d05",
          "url": "https://github.com/comunica/comunica/commit/d80c3141b2785d5d688237f032ff823c95243798"
        },
        "date": 1793408165245,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 375,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 18363,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 42,
            "unit": "ms"
          },
          {
            "name": "BSBM-File-10k",
            "value": 83,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1119,
            "unit": "ms"
          },
          {
            "name": "LDBC-SNB-File",
            "value": 26834,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 148051,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}