const Controller = require("egg").Controller;

class NewsController extends Controller{
    
    async index(){

        const dataList = await this.service.news.list();

        await this.ctx.render("news/list.html", {list : dataList});
    }
}

module.exports = NewsController;
