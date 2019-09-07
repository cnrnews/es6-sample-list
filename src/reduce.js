
// 场景1；计算整形数组之和
let nums=[1,3,5]
// let result=nums.reduce(function(sum,number)
// {
//     return sum+=number
// },0)
let result=nums.reduce((sum,number)=>{
    return sum+=number
},10)
console.log('result='+result)

// 场景2：将数组对象的某个属性抽离到另一个数组
let colors=['red','blue']
let newColors=colors.reduce((newArray,color)=>{
    newArray.push(color)
    return newArray
},[])
console.log(newColors)

// 场景3：判断字符串中括号是否对称
function banlance(string){
    return !string.split("").reduce((previous,char)=>{
        if(previous<0){
            return previous
        }
        if(char == '(')
        {
            return ++previous
        }
        if(char == ')')
        {
            --previous
        }
        return previous
    },0)
}
console.log(banlance('((()))dd'))