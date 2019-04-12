const Controller = require("egg").Controller;

class ApiController extends Controller{
    
    async getTitle(){

        this.ctx.status = 200;

        this.ctx.set("Content-Type", "application/json");

        this.ctx.response.body = {
            
            title: this.ctx.query.title + " => 这是 Egg.js 通过GET 返回数据"
        };
    }

    async postTitle(){

        this.ctx.status = 200;

        this.ctx.set("Content-Type", "application/json");

        this.ctx.response.body = {
            
            title: this.ctx.request.body.title + " => 这是 Egg.js 通过POST 返回数据"
        };
    }


}

module.exports = ApiController;