let array1=['1-1','1-2']
let array2=['2-1','2-2']
let array3=['3-1','3-2']

let newArray=[...array1,...array2,...array3]

console.log(newArray)


// 练习
function shooping(...items)
{
    if(items.indexOf('milk')<0)
    {
        return ['milk',...items]
    }
    return items
}
console.log(shooping('orange','BeforeUnloadEvent','affs'))