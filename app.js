// 导入koa
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./router');
const cors = require('koa2-cors');
// 创建一个Koa对象表示web app本身:
const app = new Koa();

//ctx是由koa传入的封装了request和response的变量，我们可以通过它访问request和response

app.use(async (ctx, next) => {
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>龙龙的错误上报后台</h1>';
    await next();
});

// 允许跨域
app.use(cors());
// 处理post请求body
app.use(bodyParser());


// add router middleware:
app.use(router.routes());
app.use(router.allowedMethods());

// 在端口3000监听:
app.listen(3001);