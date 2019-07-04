# vue-jest-external-script-resolve-error-repro

This is a repo to reproduce the module resolution error of [vue-jest](https://github.com/vuejs/vue-jest) when using external script in vue single file component.

## Procedure to reproduce

First, Install dependencies.

```bash
yarn install
```

Second, Run unit test.

```bash
yarn test:unit
```

You will get the following error:

```bash
FAIL  tests/unit/example.spec.js
  ● Test suite failed to run

    Cannot find module '../imported' from 'HelloWorld.vue'

    > 1 | <template>
        | ^
      2 |   <div class="hello">
      3 |     <h1>{{ msg }}</h1>
      4 |     <p>

      at Resolver.resolveModule (node_modules/jest-resolve/build/index.js:221:17)
      at src/components/HelloWorld.vue:1:1
      at Object.<anonymous> (src/components/HelloWorld.vue:23:3)
```

If you run `yarn build` or `yarn serve`, everything goes fine and functions correctly.
