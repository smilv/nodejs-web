/**
 * 文件上传-控制器
 * bin 2020/02/26
 */

module.exports = {
    /**
     * 上传文件
     */
    upload: function(req, res) {
        console.log(req.file);
        res.status(200);
        res.json({
            code: 200,
            data: req.file.path,
            msg: "success"
        });
    }
};