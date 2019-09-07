
function User(id)
{
    this.id=id
}

function randomId(){
    return Math.random()*99999999
}
function createAdminUser(user=new User(randomId()))
{
    user.admin=true;
    return user;
}
const user = new User(2)

console.log(createAdminUser(user))