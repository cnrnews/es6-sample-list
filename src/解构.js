// 场景1：对象解构
let stu={
    name:'厘米',
    age:12,
    sex:'男'
}
// let name=stu.name
// let age=stu.age
// let sex=stu.sex
// console.log(name,age,sex)

const {name,age,sex}=stu 
console.log(name,age,sex)

// 场景2：对象解构
let user={
    name:'往里',
    photo:'1.jpg',
    size:2012
}
function printUser({name,photo,size})
{
    return `${name}.${photo}的总大小是${size}`
}
console.log(printUser(user))

// 场景3：对象数组解构
const names=['candy','smith','jike']
let [name1,name2,name3]=names;
console.log(name1,name2,name3);

// 返回数组个数
const {length} =names
console.log('length='+length)

// 展开运算符
const [first,...ret]=names 
console.log(first)
console.log(ret)

