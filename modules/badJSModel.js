const db = require("../libs/db/db.js");

// 插入数据
exports._insert = (ctx) => {
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
        clienttype
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
        clienttype
    };
    db.insertOne("errorInfo", params, function (err) {
        if (!err) {
            console.log('插入成功');
            ctx.body = "响应"
        }
    })
}