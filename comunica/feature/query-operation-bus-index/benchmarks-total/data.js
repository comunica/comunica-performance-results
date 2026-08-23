window.BENCHMARK_DATA = {
  "lastUpdate": 1787478944733,
  "repoUrl": "https://github.com/comunica/comunica",
  "entries": {
    "Benchmarks total results": [
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
          "id": "fab8918b0fcca0606bf3d5437fd201029ba30586",
          "message": "Generate EARL test reports for different specs",
          "timestamp": "2026-08-21T17:41:36+02:00",
          "tree_id": "aac254f452f82af782143dfecd05861337d5d607",
          "url": "https://github.com/comunica/comunica/commit/fab8918b0fcca0606bf3d5437fd201029ba30586"
        },
        "date": 1787467776833,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 3609,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 19525,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 329,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1522,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 100886,
            "unit": "ms"
          }
        ]
      },
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
          "id": "9aaaf0fef2346be6d3c070ea280613ab0161cfba",
          "message": "Fix query operation bus index never being populated\n\nBusQueryOperation indexes its actors on `operationName` so that an action\nonly has to be tested against the actors that can handle its operation type.\nThat index was never populated: all 34 actors ended up under `_undefined_`,\nso every query operation mediation tested every actor.\n\nThe indexing happens in `Actor`'s constructor, which copies the properties of\n`args` onto the actor and then subscribes it to the bus. Since\n`ActorQueryOperationTyped` received `operationName` as a separate constructor\nparameter and only assigned it after `super(...)` had returned, the property\nwas still undefined at subscription time. The `operationName` class field\ndeclaration compounds this: with `target: es2023`, `useDefineForClassFields`\nis enabled, so the declaration itself redefines the property as undefined\nonce `super(...)` returns.\n\nPass `operationName` through the args object instead, so it is set before the\nactor subscribes, mirroring how `ActorFunctionFactoryDedicated` passes\n`functionNames`.\n\nThe index now holds 27 keys instead of 1. Actor test() calls drop by 4.9x on\na star-shaped query and by 22.7x on a chained join query, with identical\nquery results.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01NGYidruWD2uPGrYsbbkWrY",
          "timestamp": "2026-08-23T06:44:05Z",
          "tree_id": "3faa868e60dfddd5b9d6107d450c34efa1ee5f70",
          "url": "https://github.com/comunica/comunica/commit/9aaaf0fef2346be6d3c070ea280613ab0161cfba"
        },
        "date": 1787469502081,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 4753,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 23062,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 307,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1526,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 118606,
            "unit": "ms"
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
          "id": "fab8918b0fcca0606bf3d5437fd201029ba30586",
          "message": "Generate EARL test reports for different specs",
          "timestamp": "2026-08-21T17:41:36+02:00",
          "tree_id": "aac254f452f82af782143dfecd05861337d5d607",
          "url": "https://github.com/comunica/comunica/commit/fab8918b0fcca0606bf3d5437fd201029ba30586"
        },
        "date": 1787470724528,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 3415,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 23510,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 248,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1535,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 97105,
            "unit": "ms"
          }
        ]
      },
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
          "id": "9aaaf0fef2346be6d3c070ea280613ab0161cfba",
          "message": "Fix query operation bus index never being populated\n\nBusQueryOperation indexes its actors on `operationName` so that an action\nonly has to be tested against the actors that can handle its operation type.\nThat index was never populated: all 34 actors ended up under `_undefined_`,\nso every query operation mediation tested every actor.\n\nThe indexing happens in `Actor`'s constructor, which copies the properties of\n`args` onto the actor and then subscribes it to the bus. Since\n`ActorQueryOperationTyped` received `operationName` as a separate constructor\nparameter and only assigned it after `super(...)` had returned, the property\nwas still undefined at subscription time. The `operationName` class field\ndeclaration compounds this: with `target: es2023`, `useDefineForClassFields`\nis enabled, so the declaration itself redefines the property as undefined\nonce `super(...)` returns.\n\nPass `operationName` through the args object instead, so it is set before the\nactor subscribes, mirroring how `ActorFunctionFactoryDedicated` passes\n`functionNames`.\n\nThe index now holds 27 keys instead of 1. Actor test() calls drop by 4.9x on\na star-shaped query and by 22.7x on a chained join query, with identical\nquery results.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01NGYidruWD2uPGrYsbbkWrY",
          "timestamp": "2026-08-23T06:44:05Z",
          "tree_id": "3faa868e60dfddd5b9d6107d450c34efa1ee5f70",
          "url": "https://github.com/comunica/comunica/commit/9aaaf0fef2346be6d3c070ea280613ab0161cfba"
        },
        "date": 1787472365863,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 4527,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 23117,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 320,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1562,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 145552,
            "unit": "ms"
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
          "id": "fab8918b0fcca0606bf3d5437fd201029ba30586",
          "message": "Generate EARL test reports for different specs",
          "timestamp": "2026-08-21T17:41:36+02:00",
          "tree_id": "aac254f452f82af782143dfecd05861337d5d607",
          "url": "https://github.com/comunica/comunica/commit/fab8918b0fcca0606bf3d5437fd201029ba30586"
        },
        "date": 1787474016286,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 5871,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 23221,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 422,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1505,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 195012,
            "unit": "ms"
          }
        ]
      },
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
          "id": "9aaaf0fef2346be6d3c070ea280613ab0161cfba",
          "message": "Fix query operation bus index never being populated\n\nBusQueryOperation indexes its actors on `operationName` so that an action\nonly has to be tested against the actors that can handle its operation type.\nThat index was never populated: all 34 actors ended up under `_undefined_`,\nso every query operation mediation tested every actor.\n\nThe indexing happens in `Actor`'s constructor, which copies the properties of\n`args` onto the actor and then subscribes it to the bus. Since\n`ActorQueryOperationTyped` received `operationName` as a separate constructor\nparameter and only assigned it after `super(...)` had returned, the property\nwas still undefined at subscription time. The `operationName` class field\ndeclaration compounds this: with `target: es2023`, `useDefineForClassFields`\nis enabled, so the declaration itself redefines the property as undefined\nonce `super(...)` returns.\n\nPass `operationName` through the args object instead, so it is set before the\nactor subscribes, mirroring how `ActorFunctionFactoryDedicated` passes\n`functionNames`.\n\nThe index now holds 27 keys instead of 1. Actor test() calls drop by 4.9x on\na star-shaped query and by 22.7x on a chained join query, with identical\nquery results.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01NGYidruWD2uPGrYsbbkWrY",
          "timestamp": "2026-08-23T06:44:05Z",
          "tree_id": "3faa868e60dfddd5b9d6107d450c34efa1ee5f70",
          "url": "https://github.com/comunica/comunica/commit/9aaaf0fef2346be6d3c070ea280613ab0161cfba"
        },
        "date": 1787476007662,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 5307,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 21685,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 247,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1600,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 89990,
            "unit": "ms"
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
          "id": "fab8918b0fcca0606bf3d5437fd201029ba30586",
          "message": "Generate EARL test reports for different specs",
          "timestamp": "2026-08-21T17:41:36+02:00",
          "tree_id": "aac254f452f82af782143dfecd05861337d5d607",
          "url": "https://github.com/comunica/comunica/commit/fab8918b0fcca0606bf3d5437fd201029ba30586"
        },
        "date": 1787477677577,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 5360,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 23958,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 331,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 976,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 139123,
            "unit": "ms"
          }
        ]
      },
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
          "id": "9aaaf0fef2346be6d3c070ea280613ab0161cfba",
          "message": "Fix query operation bus index never being populated\n\nBusQueryOperation indexes its actors on `operationName` so that an action\nonly has to be tested against the actors that can handle its operation type.\nThat index was never populated: all 34 actors ended up under `_undefined_`,\nso every query operation mediation tested every actor.\n\nThe indexing happens in `Actor`'s constructor, which copies the properties of\n`args` onto the actor and then subscribes it to the bus. Since\n`ActorQueryOperationTyped` received `operationName` as a separate constructor\nparameter and only assigned it after `super(...)` had returned, the property\nwas still undefined at subscription time. The `operationName` class field\ndeclaration compounds this: with `target: es2023`, `useDefineForClassFields`\nis enabled, so the declaration itself redefines the property as undefined\nonce `super(...)` returns.\n\nPass `operationName` through the args object instead, so it is set before the\nactor subscribes, mirroring how `ActorFunctionFactoryDedicated` passes\n`functionNames`.\n\nThe index now holds 27 keys instead of 1. Actor test() calls drop by 4.9x on\na star-shaped query and by 22.7x on a chained join query, with identical\nquery results.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01NGYidruWD2uPGrYsbbkWrY",
          "timestamp": "2026-08-23T06:44:05Z",
          "tree_id": "3faa868e60dfddd5b9d6107d450c34efa1ee5f70",
          "url": "https://github.com/comunica/comunica/commit/9aaaf0fef2346be6d3c070ea280613ab0161cfba"
        },
        "date": 1787478943412,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WatDiv-File",
            "value": 4791,
            "unit": "ms"
          },
          {
            "name": "WatDiv-TPF",
            "value": 22170,
            "unit": "ms"
          },
          {
            "name": "BSBM-File",
            "value": 231,
            "unit": "ms"
          },
          {
            "name": "BSBM-TPF",
            "value": 1693,
            "unit": "ms"
          },
          {
            "name": "Web",
            "value": 131831,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}