const Controller = require("egg").Controller;

class HomeController extends Controller{
    
    async index(){

        this.ctx.body = "Hellow Egg.js";
    }
}

module.exports = HomeController;