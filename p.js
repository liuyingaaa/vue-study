const express =require('express')
const app=express()
const axios=require('axios')
app.use('/',express.static('./'))
app.get('/',(req,res)=>{
    axios.get('http://zuowen.api.juhe.cn/zuowen/typeList?key=5d2dccdb3cf4483c6606c0d1c8dc4e2e&id=1').then((result)=>{
        res.send(result.data)
    })
}).listen(3300,()=>{
    console.log('http://127.0.0.1:3300 is running')
})