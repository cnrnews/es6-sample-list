function* fib(max)
{
    let a=0,b=1,n=0
    while(n<max){
        yield a;
        [a,b]=[b,a+b]
        n++
    }
    return
}
for (let i of fib(10)) {
    console.log(i)
}