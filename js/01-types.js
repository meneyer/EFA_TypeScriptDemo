//1      //2     //3
var username = "instructor";
var password = "Letmein1234!";
var instructorId = 5;
//1 declares the variable
//2 declared the variable type
//3 initialize the variable with a value of that type
//we can also declare a value and type without initialization
//let password: string;
var phoneNubmer;
var email;
var socialSecurity;
var isMarried;
//with implicit typing, you don't have to declare a type
var greeting = "Hello";
//if you hover over the variable, it shows it is a string in VS Code
//typescript catches errors in real time and won't let you continue until you fix them.  THese can be typos, syntax errors, etc.
//Number are one of the most common primitive types and declard with the number keyword in TypeScript
var age = 40;
var currentYear = 2021;
//it also supports ES6 octal literals
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
//Strings - can be single or double quotes
var companyName;
companyName = "Eleven Fifty";
var appName = 'Twitter';
appName = "Instagram";
//Boolean - have the same syntax
var isLoogedIn = true;
var isGoldLevelUser = true;
//Array - can be expressed in 2 different ways
//1
var studentList = ['Tom', 'Tracy', 'Nikaya'];
//2
var allScores = [100, 92, 95, 96];
//Accessing the array indices works in the same way:
console.log("Student List:", studentList[0]);
//ANY - One of the things that many developers like about TypeScript is the ability to toggle off forced types if the type is not known during development. At any point in the application, we may not know what type a variable is. This could be coming from a 3rd party package. With these cases, we let the type be decided at compile time, and we can use the any type:
var dataFromThirdParty = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
//VOID - this has no type at all.  Not really seen in variables, but more common for functions that return no value
function sayHelloToAll() {
    console.log("Hello to all!");
}
//Null and Undefined
var undefinedVariable = undefined;
var nullVariable = null;
//Tuple - Tuple types allow you to create an array with multiple different types(notice how Tuple is sort of a suffix of multiple). You would still have a fixed number of items in the array, but the items need to be different types. You may want this for a key value pair
//Declare a tuple type
var usernameAndId;
//Initialize It
usernameAndId = [1, "kennisreally40"]; //these must be in the right order.  ["kennisreally40", 1] would throw an error
//Enum - gives names to numeric values
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
var weapon = WeaponType.Sword;
//like Arrays, enums start at 0, but that starting index can be assigned a different number
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {}));
var cardType = CardType[2];
console.log(CardType);
//# sourceMappingURL=01-types.js.map