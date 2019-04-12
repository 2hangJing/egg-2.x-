exports.keys = "zhangjingEgg";

exports.view = {
    defaultViewEngine: "nunjucks",
    mapping: {
        ".html": "nunjucks"
    }
}

exports.news = {
    pageSize: 5,
    serverUrl: "https://www.ismoon.cn/api",
};

/**
 * CSRF 关闭
 */
exports.security = {
    csrf: false
};