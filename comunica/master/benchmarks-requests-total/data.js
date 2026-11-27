window.BENCHMARK_DATA = {
  "lastUpdate": 1795783629636,
  "repoUrl": "https://github.com/comunica/comunica",
  "entries": {
    "Benchmarks HTTP request total results": [
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
        "date": 1795338316060,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-TPF",
            "value": 128843,
            "unit": "requests",
            "extra": "Queries: 20; Excluded: []"
          },
          {
            "name": "LargeRDFBench-File",
            "value": 58075,
            "unit": "requests",
            "extra": "Queries: 19; Excluded: []"
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
        "date": 1795530037875,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-TPF",
            "value": 128843,
            "unit": "requests",
            "extra": "Queries: 20; Excluded: []"
          },
          {
            "name": "LargeRDFBench-File",
            "value": 58103,
            "unit": "requests",
            "extra": "Queries: 19; Excluded: []"
          }
        ]
      },
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
        "date": 1795532818759,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-TPF",
            "value": 128843,
            "unit": "requests",
            "extra": "Queries: 20; Excluded: []"
          },
          {
            "name": "LargeRDFBench-File",
            "value": 58079,
            "unit": "requests",
            "extra": "Queries: 19; Excluded: []"
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
          "id": "2ef1acd7ea9c0046ba328cc3083027536a144014",
          "message": "Enable spec tests fixed by Traqula 1.5.0 (#2044)\n\nTraqula 1.5.0 fixes the parser bugs for which these spec tests were\nskipped, so they now pass:\n\n- SPARQL 1.1: bindings#values-group-by-(projection|select-expression)\n  and syntax-query#test_group_by_values_scope_0[123]\n- SPARQL 1.2: syntax#duplicated-values-variable and\n  syntax#group-by-scope-bad-[123] (reverts #1898)\n\nThe remaining skips concern query evaluation, not parsing, and still fail.",
          "timestamp": "2026-11-25T14:41:32+01:00",
          "tree_id": "040d4cbca9a344f9cfbd3a37dde82070fc17a54a",
          "url": "https://github.com/comunica/comunica/commit/2ef1acd7ea9c0046ba328cc3083027536a144014"
        },
        "date": 1795615258539,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-TPF",
            "value": 128843,
            "unit": "requests",
            "extra": "Queries: 20; Excluded: []"
          },
          {
            "name": "LargeRDFBench-File",
            "value": 58066,
            "unit": "requests",
            "extra": "Queries: 19; Excluded: []"
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
          "id": "02d4ceba8cd9482ca7ae3906c65efeaca39ea4a5",
          "message": "Fix missing support for extension aggregates in the standalone expression engine (#2043)",
          "timestamp": "2026-11-25T15:32:36+01:00",
          "tree_id": "2b9262bb31b4ffa5ebc5bd3457e805f6077facad",
          "url": "https://github.com/comunica/comunica/commit/02d4ceba8cd9482ca7ae3906c65efeaca39ea4a5"
        },
        "date": 1795618437607,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-TPF",
            "value": 128843,
            "unit": "requests",
            "extra": "Queries: 20; Excluded: []"
          },
          {
            "name": "LargeRDFBench-File",
            "value": 58082,
            "unit": "requests",
            "extra": "Queries: 19; Excluded: []"
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
          "id": "7327c03d113733a69887b9b3c094bc5bb4b4fd9d",
          "message": "Replace deprecated url.parse in SPARQL endpoint (#2050)",
          "timestamp": "2026-11-27T11:57:06+01:00",
          "tree_id": "dbc52a339e9cbc69b727a2c0819df373ed56a571",
          "url": "https://github.com/comunica/comunica/commit/7327c03d113733a69887b9b3c094bc5bb4b4fd9d"
        },
        "date": 1795778653141,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-TPF",
            "value": 128843,
            "unit": "requests",
            "extra": "Queries: 20; Excluded: []"
          },
          {
            "name": "LargeRDFBench-File",
            "value": 58062,
            "unit": "requests",
            "extra": "Queries: 19; Excluded: []"
          }
        ]
      },
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
          "id": "78f4fbb0ecdbd005ae04e1004b912dcb2dc33a6a",
          "message": "Bump to release version v5.5.1",
          "timestamp": "2026-11-27T13:21:33+01:00",
          "tree_id": "bdfffa6dc7e2760b064cf44643a4fe3d16f7049e",
          "url": "https://github.com/comunica/comunica/commit/78f4fbb0ecdbd005ae04e1004b912dcb2dc33a6a"
        },
        "date": 1795783628461,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-TPF",
            "value": 128843,
            "unit": "requests",
            "extra": "Queries: 20; Excluded: []"
          },
          {
            "name": "LargeRDFBench-File",
            "value": 58042,
            "unit": "requests",
            "extra": "Queries: 19; Excluded: []"
          }
        ]
      }
    ]
  }
}