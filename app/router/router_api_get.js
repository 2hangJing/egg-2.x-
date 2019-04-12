
module.exports = app =>{

    let { router, controller } = app;

    router.get("/api/getTitle", controller.api.getTitle);
}