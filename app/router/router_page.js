
module.exports = app =>{

    let { router, controller } = app;
    
    router.get("/", controller.home.index);

    router.redirect("/index","/", 302);

    router.get("/news/:id/:year", controller.news.index);
}