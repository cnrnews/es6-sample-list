class Car{
    constructor(options){
        this.title=options.title
    }
    drive(){
        return 'vroom'
    }
}
class BWM extends Car{
    constructor(options) {
        super(options)
        this.color=options.color
    }
}
var car = new BWM({title:'BWM',color:'black'})
console.log(car)
console.log(car.drive())