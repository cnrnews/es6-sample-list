// 场景1：计算对象数组中每个电脑的操作系统是否课用。大于16位操作系统
//        标识课用，否则不可用
// every: 一假则假
// some:  一真为真
let compues=[
    {
        name:'Apple',
        ram:16
    },
    {
        name:'IBM',
        ram:8
    },
    {
        name:'Acer',
        ram:32
    }
]
let every=compues.every((item)=>{
    return item.ram > 16
})
console.log('every='+every)

let some=compues.some((item)=>{
    return item.ram >16
})
console.log('some='+some)
console.log('===========================')
// 场景2：表单验证 所有字段不能为空
function Field(value)
{
    this.value=value
}
Field.prototype.validate=function()
{
    return this.value.length > 0;
}
var username=new Field('candy')
var telephone=new Field('199')
var email=new Field('11')
var form=[username,telephone,email]
var validate=form.every((item)=>{
    return item.validate()
})
console.log('validate:'+validate)