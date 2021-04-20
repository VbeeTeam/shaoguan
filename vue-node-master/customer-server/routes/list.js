var express = require('express');
var router = express.Router();
const db = require("../public/js/db")

router.get('/', (req, res) => {

    var page = req.query.page //当前的num
    var size = req.query.size //当前页的数量

    // mysql 提供的分页方法: limit m,n ==>m代表从第几号位开始，n: 代表选取的个数
    //模糊查询的sql  SELECT * FROM  customer WHERE blogTitle LIKE ? OR blogContent LIKE ? OR blogLable LIKE ?
    // var params = [(parseInt(page) - 1) * parseInt(size), parseInt(size)]
    var total = 0;
    let sql = 'select * from customer ';
    if (req.query.name && req.query.sex) {
        sql = sql + `where name like'%${req.query.name}%' and sex='${req.query.sex}'`

        db(`select * from customer where name like'%${req.query.name}%' and sex='${req.query.sex}'`, null, (res) => {
            console.log('1', res.length)
            total = res.length
        })
    } else if (req.query.name) {
        sql = sql + `where name like'%${req.query.name}%'`
        db(`select * from customer where name like'%${req.query.name}%'`, null, (res) => {
            console.log('2', res.length)
            total = res.length
        })
    } else if (req.query.sex) {
        sql = sql + `where sex='${req.query.sex}'`
        db('select * from customer where sex=?', [req.query.sex], (res) => {
            console.log('3', res.length)
            total = res.length
        })
    } else {
        db('select * from customer', null, (res) => {
            console.log('4', res.length)
            total = res.length
        })
    }
    // 分页
    page = (parseInt(page) - 1) * parseInt(size);
    size = parseInt(size);
    sql = sql + ` limit ${page},${size}`;
    setTimeout(() => {
        db(sql, null, (result) => {
            console.log(result)
            if (result.length > 0) {

                res.json({
                    code: 200,
                    message: "获取成功",
                    data: result,
                    total: total
                });

            } else {
                res.json({
                    code: 500,
                    message: "服务器错误"
                })
            }
        })
    }, 500)

});

router.get('/detail', (req, res) => {

    let sql = 'select * from customer where id =?';

    db(sql, req.query.id, (result) => {
        if (result.length > 0) {
            res.json({
                code: 200,
                message: "获取成功",
                data: result[0]
            });
        } else {
            res.json({
                code: 500,
                message: "服务器错误"
            })
        }
    })

})

module.exports = router;