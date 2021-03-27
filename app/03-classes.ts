// //1
// class Person {
//     //2
//     firstName: string;
//     lastName: string;

// //3
// let phil: Person = new Person();

// //4
// phil.firstName = "Phil";
// phil.lastName = "Donahue"

//1 - creates a new class called Person
//2 - creates 2 properties with types in that class
//3 - we create an instance (instantiation) of the class by setting the type to Person and calling the new keyword to create a new instance of class
//4 - properties of the instance are set


//Instantiation - means to creat a new instance of a class
//let someVariableName: Person = new Person ()

//METHODS
class Person {
    firstName: string;
    lastName: string;

    sayHello(){
        console.log("Hello", this.firstName)
    }
}

let kenn: Person = new Person();

kenn.firstName = "Kenn";
kenn.sayHello();
//Hello Kenn



class Practice {
    nameOne: string;
    nameTwo: string;

    sayHelloToFullName(){
        console.log("Hello", this.nameOne, this.nameTwo)
    }
}

let sheriff: Practice=new Practice();
sheriff.nameOne = "Sheriff";
sheriff.nameTwo = "Holler";
sheriff.sayHelloToFullName()
//Hello Sheriff Holler


//CONSTRUCTORS
class Game {
    constructor(name: string, maker: string){
        this.gameName = name;
        this.gameMaker = maker;
    }
    gameName: string;
    gameMaker:string;
}

let battleship: Game = new Game('Battleship', 'Hasbro')
//let battleship: Game = new Game()  <--this throws and error because two aruguments are required in the parens of the constructor

//Game without a constructor for comparison
class GameWithoutConstructor{
    gameName: string;
    gameMaker:string;
}
let monopoly: GameWithoutConstructor = new GameWithoutConstructor();
monopoly.gameName = "Monopoly"
monopoly.gameMaker = "Hasbro"


//INHERITANCE

//Parent class -- universal to all automobiles
class Vehicle {
    type: string;
    make: string;
    model: string;
    manufacureYear: number;
    runs: boolean;
    topSpeed: number;
}

//subclasses -- holds properties unique to the subclass
class Automobile extends Vehicle{
    isSelfDriving: boolean;
}

let myCar: Automobile = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed=200;
myCar.make="Volvo"

class Motorcycle extends Vehicle{
    easyToDoWheelie: boolean;
}

let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;



class AnimalPractice{
    hasFur: boolean;
    name: "string";
    isCuddly: boolean;
}

class Bear extends AnimalPractice{
    willEatYou: boolean;
}

class Fish extends AnimalPractice{
    livesInWater: boolean;
}

let bearAnimal: Bear = new Bear();
bearAnimal.willEatYou = true;
bearAnimal.isCuddly = false;

let fishCreature: Fish = new Fish();
fishCreature.hasFur = false;
fishCreature.livesInWater = true;


//PARAMETER PROPERTIES - allow us to declare property types and accessors in our constructor parameters.
class Store {
    // constructor(name: string, city: string){
    //     this.name = name;
    //     this.city = city;
    // }
    // name: string;
    // city: string;
    constructor(public name: string, public city: string){}
}
let ikea: Store = new Store ('Ikea', 'Fishers');


//ACCESSORS - JS has public and private accessors
class Employee extends Person{
    private _salary: number;
    getSalary(): string{
        return this._salary.toString();
    }
    setSalary(newSalary: number){
        this._salary = newSalary;
    }
}
let newEmployee: Employee = new Employee();
newEmployee.setSalary(30000);
//newEmployee.setSalary(0) will break the code
let salaryResult: string = newEmployee.getSalary();
console.log("The salary is:", salaryResult)