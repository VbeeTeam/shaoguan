var express = require('express');
var router = express.Router();

const db = require("../public/js/db")

router.delete('/', (req, res) => {
    let info = req.body;
  
    let sql = "delete from customer where id = ?";
    let data = [info.id]
    db(sql, data, (result) => {
        console.log(result)
        if(result.affectedRows == 1){
            res.json({
                code: 200,
                message: "删除成功"
            })
        }else{
            res.json({
                code: 201,
                message: "删除失败"
            })
        }
    })

});

module.exports = router;
