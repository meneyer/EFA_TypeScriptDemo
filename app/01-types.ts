        //1      //2     //3
let username: string = "instructor";
let password: string = "Letmein1234!";
let instructorId: number = 5;
//1 declares the variable
//2 declared the variable type
//3 initialize the variable with a value of that type

//we can also declare a value and type without initialization
//let password: string;
let phoneNubmer: number;
let email: string;
let socialSecurity: number;
let isMarried: boolean;

//with implicit typing, you don't have to declare a type
let greeting = "Hello";
//if you hover over the variable, it shows it is a string in VS Code

//typescript catches errors in real time and won't let you continue until you fix them.  THese can be typos, syntax errors, etc.

//Number are one of the most common primitive types and declard with the number keyword in TypeScript
let age: number = 40;
let currentYear: number = 2021;
//it also supports ES6 octal literals
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

//Strings - can be single or double quotes
let companyName: string;
companyName = "Eleven Fifty"
let appName: string = 'Twitter';
appName = "Instagram";

//Boolean - have the same syntax
let isLoogedIn: boolean = true;
let isGoldLevelUser: boolean = true;

//Array - can be expressed in 2 different ways
//1
let studentList: string[] = ['Tom', 'Tracy', 'Nikaya']
//2
let allScores: Array<number> = [100, 92, 95, 96];
//Accessing the array indices works in the same way:
console.log("Student List:", studentList[0]);

//ANY - One of the things that many developers like about TypeScript is the ability to toggle off forced types if the type is not known during development. At any point in the application, we may not know what type a variable is. This could be coming from a 3rd party package. With these cases, we let the type be decided at compile time, and we can use the any type:
let dataFromThirdParty: any = '12345';
console.log(dataFromThirdParty);
console.log( typeof dataFromThirdParty);

dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log( typeof dataFromThirdParty);

//VOID - this has no type at all.  Not really seen in variables, but more common for functions that return no value
function sayHelloToAll(): void {
    console.log("Hello to all!")
}

//Null and Undefined
let undefinedVariable: undefined = undefined;
let nullVariable: null = null;

//Tuple - Tuple types allow you to create an array with multiple different types(notice how Tuple is sort of a suffix of multiple). You would still have a fixed number of items in the array, but the items need to be different types. You may want this for a key value pair
//Declare a tuple type
let usernameAndId: [number, string];
//Initialize It
usernameAndId = [1, "kennisreally40"];  //these must be in the right order.  ["kennisreally40", 1] would throw an error

//Enum - gives names to numeric values
enum WeaponType { Sword, Saber, Spear}
let weapon: WeaponType = WeaponType.Sword
//like Arrays, enums start at 0, but that starting index can be assigned a different number
enum CardType {Ace = 1, Two, Three, Four}
let cardType: string = CardType[2]
console.log(CardType)


//UNION TYPES
//Union Types allow us to have more flexibility with out variables, but still keep the intent of declaring a specific type for our variables.
let x: number | string;
let y: number | null;
//now the variables can take on more than one t ype
x='1234';
x=1234
//although x= true and y=false would thow an error





