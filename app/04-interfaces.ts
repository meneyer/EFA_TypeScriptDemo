//INTERFACES

interface Animal{
    name: string;
    numberOfLegs: number;
}
//One rule of interfaces is that you can't instantiate them. let a: Animal= new Animal() would throw an error
let lassie: Animal = {
    name: "Lassie",
    numberOfLegs: 4
}


//METHODS
// sayHello(name: string) : string{
//     var someNum = 1+2;
//     var someOtherNum = 1+2;
//     return name;
// }

interface Product{
    name: string;
    price: number;
    setTimeOfPurcharsed(d:Date);
}

class Apples implements Product {
    name: 'Apples';
    price: 5.50;
    setTimeOfPurcharsed(d:Date){
        console.log("Apples purchased on ", d);
    }
}

let myApples: Apples = new Apples ();
myApples.setTimeOfPurcharsed(new Date(Date.now()))