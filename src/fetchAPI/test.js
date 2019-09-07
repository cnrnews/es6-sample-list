
const http = new EasyHttp;

let url = 'http://jsonplaceholder.typicode.com/users'
// http.get(url)
//     .then((data) => {
//         console.log(data)
//     }).catch(err => console.log(err))


// 传输数据
const data={
    name:'Henry',
    username:'candy',
    email:'1709919@qq.com'
}
// http.post("http://jsonplaceholder.typicode.com/users",data)
// .then(data=>console.log(data))
// .catch(err=>console.log(err))

// http.put("http://jsonplaceholder.typicode.com/users/2",data)
// .then(data=>console.log(data))
// .catch(err=>console.log(err))

http.delete("http://jsonplaceholder.typicode.com/users/2")
.then(data=>console.log(data))
.catch(err=>console.log(err))

