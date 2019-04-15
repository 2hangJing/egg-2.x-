
module.exports = app =>{

    let { router, controller } = app;
    
    router.get("/", controller.home.index);

    router.redirect("/index","/", 302);

    router.get("/news/:id/:year", controller.news.index);

    /**
     * 扩展插件展示路由
     */
    router.get("/libExtend", controller.libExtend.index);
}