const db = require("../libs/db/db.js");

// 插入数据
exports._insert = (ctx) => {
    console.log(ctx.request);
    let {
        errorType,
        msg,
        errorTime,
        filePath,
        line,
        col,
        userBehavior,
        from,
        type,
        clienttype,
        errorURL
    } = ctx.request.query;
    let params = {
        errorType,
        msg,
        errorTime,
        filePath,
        line,
        col,
        userBehavior,
        from,
        type,
        clienttype,
        errorURL
    };
    db.insertOne("errorInfo", params, function (err) {
        if (!err) {
            ctx.body = {
                status: 200
            }
        }
    })
}