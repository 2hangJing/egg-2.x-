
module.exports = {

    /**
     * @param {number} num
     * application 的扩展， 通过 this.app.xxxx调用
     */
    extend_app_add(num = 0, ...arg){

        return num - 10;
    }
}