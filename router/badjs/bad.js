// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();
const errorInfo = require("../../modules/badJSModel.js");

// 上报错误信息
router.get("/error", errorInfo._insert);

// 获取错误信息
router.get("/errorInfo", errorInfo._getErrorInfo);

module.exports = router;