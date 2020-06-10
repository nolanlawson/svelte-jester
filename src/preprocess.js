const path = require('path')
const svelte = require('svelte/compiler')

const { source, filename } = process.env

// TODO: loading svelte.config.js fails if you are in "type":"module"
// So just load svelte-preprocess directly
const preprocess = require('svelte-preprocess')

svelte
  .preprocess(source, preprocess(), { filename })
  .then(r => { process.stdout.write(r.code) })
