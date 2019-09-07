var set = new Set()

set.add(12)
set.add('string value')
set.add({name:'candy'})
set.add(function(){console.log('im function')})

console.log(set)
console.log('==========================')
console.log([1,false,'vaue'])


console.log('==========================')
console.log(set.has(12))
console.log(set.has(3+9))
console.log(set.has({name:'candy'}))// 匹配的是地址


console.log('==========================')
// 删除
console.log(set.delete(12))

// for...of 
console.log('==========================')
for (let value of set) {
    console.log(value)
}

// forEach 
console.log('==========================')
set.forEach((value)=>{
    console.log(value)
})

// set to Array
console.log('==========================')
let setArray=Array.from(set)
console.log(setArray)