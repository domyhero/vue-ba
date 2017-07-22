# vue-ba

Simple Baidu Analytics binding for Vue.js apps, 534 bytes gzipped.

## Install

```bash
npm install lokielse/vue-ba --save
```

## Usage

### vue-router

```js
import VueRouter from 'vue-router'
import ga from 'vue-ba'

Vue.use(VueRouter)

const router = new VueRouter()
ga(router, 'a47884c1aa8bb952sc5c0e28167d7203')
```

## License

MIT