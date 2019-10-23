const router = require('koa-router')();

const badjsRoute = require('./badjs/bad.js');

router.use('/badjs', badjsRoute.routes(), badjsRoute.allowedMethods());

module.exports = router;