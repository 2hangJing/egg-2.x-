module.exports = app => {

    /**
     * page routers
     */
    require("./router/router_page")(app);

    /**
     * GET api
     */
    require("./router/router_api_get")(app);


    /**
     * POST api
     */
    require("./router/router_api_post")(app);
};