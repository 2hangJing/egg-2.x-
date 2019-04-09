const Service = require('egg').Service;

class NewsService extends Service{

    /**
     * @param {object} page
     * URL https://eggjs.org/zh-cn/intro/quickstart.html
     * @param {number} page.num  
    */
    async list (page = {num : 1}){

        const { serverUrl, pageSize } = this.config.news;

        const {data: dataList} = await this.ctx.curl(`${serverUrl}/web/article/list`,{ dataType: "json"});

        return dataList;
    }
}

module.exports = NewsService;
