let stus=[
    {
        name:'candy',
        age:12,
        sex:0,
        course: '英语'
    },
    {
        name:'candy2',
        age:14,
        sex:1,
        course: '数学'
    },
    {
        name:'candy3',
        age:19,
        sex:0,
        course: '语文'
    },
]
let fUser=stus.find((stu)=>{
    return stu.name === 'candy'
})
console.log('查找指定用户：'+JSON.stringify(fUser))