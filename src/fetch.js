
window.addEventListener('DOMContentLoaded', function () {
    document.getElementById('button1').addEventListener('click', getText)
    document.getElementById('button2').addEventListener('click', getJson)
    document.getElementById('button3').addEventListener('click', getNet)
});


// 获取本地文本数据
function getText() {

    fetch('./app.txt')
        .then((res) => res.text())
        .then((data) => {
            console.log(data);
            document.getElementById('fetch')
                .innerHTML = data
        }).catch(err => console.log(err))
}

// 获取本地json数据
function getJson() {
    fetch('./posts.json')
        .then((res) => res.json())
        .then(data => {
            let output = '';
            data.forEach((post) => {
                output += `<li>${post.title}</li>`
            })
            document.getElementById('fetch')
                .innerHTML = output
        }).catch(err => console.log(err))
}

// 请求网络API
function getNet() {
    let url = 'https://api.github.com/users';
    fetch(url)
        .then((res) => res.json())
        .then(data => {
            let output = '';
            data.forEach((post) => {
                output += `<li>${post.login}</li>`
            })
            document.getElementById('fetch')
                .innerHTML = output
        }).catch(err => console.log(err))
}