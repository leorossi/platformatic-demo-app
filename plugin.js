/// <reference path="./global.d.ts" />
'use strict'

/** @param {import('fastify').FastifyInstance} app */
module.exports = async function (app) {
  console.log('The plugin has been loaded')
  app.get('/hello', (req, res) => {
    return res.send('Hello World!')
  })
}
