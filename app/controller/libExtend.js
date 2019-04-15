const Controller = require("egg").Controller;

class LibExtendController extends Controller{
    
    async index(){

        let newStr = this.service.libExtend.changeStr("libExtend controler");

        await this.ctx.render("libExtend/index.html", {newStr});
    }
}

module.exports = LibExtendController;