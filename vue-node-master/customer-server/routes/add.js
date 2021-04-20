var express = require('express');
var router = express.Router();
const db = require("../public/js/db")

router.post('/', (req, res) => {
    let info = req.body;
    let sql = 'insert into customer set ?';
    
    db(sql, info, (result) => {
        if (result.affectedRows == 1) {
            res.json({
                code: 200,
                message: "新增成功"
            });
        } else {
            res.json({
                code: 500,
                message: "服务器错误"
            })
        }
    })

});

module.exports = router;