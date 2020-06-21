/*
 * @Author: your name
 * @Date: 2020-05-01 13:30:22
 * @LastEditTime: 2020-06-22 01:06:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \.vscode\zoomrepeat\curd\router.js
 */ 
var fs = require('fs');
var Student = require('./student-fs');
var express = require('express');
var router = express.Router();
//创建一个路由容器
//把方法都挂在router中
router.get('/students', function (req, res) {
    fs.readFile('./db.json', 'utf-8', function (err, data) {
        if (err) {
            return res.status(500).send('server error');
        }
        res.render('index.html', {
            fruits: [
                'apple',
                'banana',
                'orange'
            ],
            students: JSON.parse(data).students
        });
    })
})
router.get('/students/new', function (req, res) {
    res.render('new.html');
})
router.post('/students/new', function (req, res) {
    //JSON.parse(req.body);
    Student.save(req.body, function (err) {
        if (err) {
            return res.status(500).send('server not found')
        }
        res.redirect('/students')
    })
})
router.get('/students/edit', function (req, res) {
    Student.findById(parseInt(req.query.id), function (err, student) {
        if (err) {
          return res.status(500).send('Server error.')
        }
        res.render('edit.html', {
          student: student
        })
      })
})
router.post('/students/edit', function (req, res) {
    Student.updateById(req.body, function (err) {
        if (err) {
          return res.status(500).send('Server error.')
        }
        res.redirect('/students')
      })
})
router.get('/students/delete', function (req, res) {
    Student.deleteById(req.query.id, function (err) {
        if (err) {
          return res.status(500).send('Server error.')
        }
        res.redirect('/students')
        //要跳转的界 
    })
})
//把router导出
module.exports = router;