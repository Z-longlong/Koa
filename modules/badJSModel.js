const db = require("../libs/db/db.js");

// 插入数据
exports._insert = async (ctx, next) => {
    /**
     * errorType  错误类型
     * msg  错误信息
     * errorTime  发生错误时间
     * filePath 错误资源路径
     * line  行
     * col  列
     * userBehavior  用户行为
     * from  错误页面
     * type  错误类型
     * clienttype  项目类型
     * errorURL  图片错误路径
     */
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
        if (err) {
            console.log(err);
        } else {
            ctx.response.body = {
                status: 200,
                msg: 'success'
            }
        }
    })
    await next();
}

exports._getErrorInfo = async (ctx, next) => {
    console.log(ctx);
    let {
        type
    } = ctx.request.query;
    let params = {
        type
    };
    db.find("errorInfo", {
        where: {
            type: params.type
        }
    }, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            ctx.res.body = {
                status: 200,
                msg: 'success',
                data: data
            }
        }
    })
    await next();
}