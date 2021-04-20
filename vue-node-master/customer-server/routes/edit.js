var express = require('express');
var router = express.Router();

const db = require("../public/js/db")

router.put('/', (req, res) => {
    let info = req.body;
    console.log(info);

    let sql = "update customer set name=?, sex=?, age=?, phone=?, description=? where id=?";
    let data = [info.name, info.sex, info.age, info.phone, info.description, info.id];
    
    db(sql, data, (result) => {
        if(result.affectedRows == 1){
            res.json({
                code: 200,
                message: "修改成功"
            })
        }else{
            res.json({
                code: 201,
                message: "修改失败"
            })
        }
    })

});

module.exports = router;
