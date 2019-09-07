// 需要返回值，如果没有返回值，默认返回undifined;map 返回的是一个新的数组
// 场景1.将A对象数组中某个属性的值存储到B数组中去
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
let newStuArray=stus.map((stu)=>{
  return stu.course
})
console.log('newStuArray='+newStuArray)