
const moment = require("moment");

moment.locale("zh-cn");

exports.loaclTime = time =>{

    let newTime = moment(time).startOf('day').fromNow(); 

    return newTime;
}