const Controller = require("egg").Controller;

class HomeController extends Controller{
    
    async index(){

        await this.ctx.render("index/index.html", {id:10 , class: {name: "张京"}});
    }
}

module.exports = HomeController;