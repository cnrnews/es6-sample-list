// map 键和值可以是任意类型
const map=new Map()

// key
const key1='stringkey',
      key2={},
      key3=function(){};

// value
map.set(key1,'string value');
map.set(key2,'object value');
map.set(key3,'function value');

// key=value
console.log(map.get(key1),map.get(key2),map.get(key3))

// map.size
console.log('mapsize='+map.size)

console.log('================')
// for...of
for (let [key,value] of map) {
    console.log(`${key}=${value}`)
}

// only key
console.log('================')
for (let key of map.keys()) {
    console.log(key)
}
// only value
console.log('================')
for (let value of map.values()) {
    console.log(value)
}
// forEach
console.log('================')
map.forEach((value,key)=>{
    console.log(`${key}=${value}`)
})

// map to array
console.log('================')
let mapArray=Array.from(map)
console.log(mapArray)

// map.key to array
console.log('================')
let mapkeyArray=Array.from(map.keys())
console.log(mapkeyArray)
// map.value to array
console.log('================')
let mapvalueArray=Array.from(map.values())
console.log(mapvalueArray)