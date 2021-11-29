/*
 * @Description:系统后台
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-11-01 14:03:21
 */
const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
app.listen(5050, () => {
  console.log('test')
})

const mysql = require('mysql')
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root', // 数据库账号
  password: 'root', // 数据库密码
  database: 'haidao', // 数据库名称
})
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/ship', (req, res) => {
  // 定义SQL语句
  const sqlStr = 'SELECT lon,lat FROM ships'
  conn.query(sqlStr, (err, results) => {
    console.log(results)
    if (err)
      return res.json({ err_code: 1, message: '获取失败', affectedRows: 0 })
    res.json({
      err_code: 0,
      message: results,
      affectedRows: 0,
    })
  })
})
