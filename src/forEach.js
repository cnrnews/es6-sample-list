// forEach 打印整形数组之和
let numbers = [1, 2, 4, 5]
let sum = 0;
function result(number) {
    sum += number
}
numbers.forEach(result)
console.log('sum=' + sum)
