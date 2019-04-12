

module.exports = app =>{

    let { router, controller } = app;

    router.post("/api/postTitle", controller.api.postTitle);
}