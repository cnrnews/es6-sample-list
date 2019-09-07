
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
// 场景1：返回数组某一字段符合条件的数组
let filteTmp=stus.filter((stu)=>{
    return stu.age>14
})
console.log('过滤年龄大于14岁的：'+JSON.stringify(filteTmp))
console.log('---------------------------')
filteTmp=stus.filter((stu)=>{
    return stu.sex == 0
})
console.log('过滤性别属性sex==0：'+JSON.stringify(filteTmp))
console.log('---------------------------')
// 场景2：多条件筛选
filteTmp=stus.filter((stu)=>{
    return stu.sex == 0 && stu.age > 17
})
console.log('sex==0 并且年龄大于17岁的：'+JSON.stringify(filteTmp))
console.log('---------------------------')
// 场景3：过滤数组符合某一对象属性值相匹配的
let cStu={
    name:'黎明',
    course: '数学'
}
function filterCourse(stu)
{
    return cStu.course == stu.course
}
let fileterTmp2=stus.filter(filterCourse)
console.log('过滤课程是【数学】的：'+JSON.stringify(fileterTmp2))