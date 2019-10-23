// 导入koa
const Koa = require('koa');
const bodyParser = require('koa-bodyparser'); // 处理post请求body
const router = require('./router');
const path = require('path');
// const staticFiles = require('koa-static');
// 创建一个Koa对象表示web app本身:
const app = new Koa();

let defaultImgPath = path.join(__dirname, './public/images/Clear.gif');

//ctx是由koa传入的封装了request和response的变量，我们可以通过它访问request和response

//运行跨域访问
app.use(async (ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    await next();
})
app.use(async (ctx, next) => {
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>龙龙的错误上报后台</h1>';
    await next();
});

app.use(bodyParser());

// app.use(staticFiles(path.join(__dirname + '/public/'), {
//     index: defaultImgPath
// }));

// add router middleware:
app.use(router.routes());
app.use(router.allowedMethods());

// 在端口3000监听:
app.listen(3001);