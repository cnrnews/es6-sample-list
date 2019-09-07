function* generateIds()
{
    let index=1;
    while(true)
    {
        yield index++
    }
}
let gen = generateIds()
for(let i=0;i<10;i++)
{
    console.log(gen.next().value)
}