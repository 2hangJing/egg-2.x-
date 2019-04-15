const Service = require('egg').Service;

class NewsService extends Service{

    /**
     * @param {string} title
     * URL https://eggjs.org/zh-cn/intro/quickstart.html 
    */
    changeStr (str){

        let newStr = this.ctx.ctxExtend(str)

        return newStr;
    }
}

module.exports = NewsService;
