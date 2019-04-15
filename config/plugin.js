const path =  require("path");

exports.zj = {
    enable : true,
    path: path.join(__dirname, "../lib/plugin/egg-zj")
}

exports.nunjucks = {
    enable : true,
    package: "egg-view-nunjucks"
}

