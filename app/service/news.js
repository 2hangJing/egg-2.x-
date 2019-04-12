const Service = require('egg').Service;

class NewsService extends Service{

    /**
     * @param {string} title
     * URL https://eggjs.org/zh-cn/intro/quickstart.html 
    */
    async list (title){

        const { serverUrl, pageSize } = this.config.news;

        const {data: dataList} = await this.ctx.curl(`${serverUrl}/web/article/list`,{ dataType: "json"});

        dataList.unshift({title: "由URL参数拼接的Title参数为：" + title + this.ctx.query.id, creationTime: this.app.extend_app_add(this.ctx.params.year) + "-04-10"});

        return dataList;
    }
}

module.exports = NewsService;
