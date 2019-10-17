const router = require('koa-router')();

const badjsRoute = require('./badjs/badjs.js');

router.use('/badjs', badjsRoute);

module.exports = router;