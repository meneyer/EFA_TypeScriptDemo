function addNumbers(numOne: number, numTwo: number){
    return numOne + numTwo;
}

addNumbers (1, 2);

//The following throw errors as you can't add arguments in typescript like you can in js:
//addNumbers(1, 2, 3);
//addNumbers(1, 2, 3, "Foo");

function fullName (firstName: string, lastName: string){
    return firstName + lastName;
}
fullName ("Megs", "Neyer");

//RETURN TYPES
                    //1             //2  //1-create a type for the parameter 2-denotes the return type
function sayHello(name:string) : string{
    return name;
}
sayHello("Kenn"); //3 -- fullfills the requirements of string, so this works
//sayHello(1) //4 -- is not a string, so this does NOT work


function blahblah (username: string, password: string) : boolean{
    if (username === "elevenfiftyuser" && password === "Letmein1234!"){
        return true
    } else {
        return false
    }
}

blahblah("elevenfiftyuser", "Letmein1234!")


//OPTIONALS
//Optionals allow for flexibility in our parameters. With optionals we can allow an argument to be left out if needed. Optionals are declared using a question mark after them
//Optionals must go after all required params

                                    //1                                  //2   
function addNumbersWithOptional (numOne: number, numTwo: number, someString?: string){
    console.log(someString);
    return numOne + numTwo
}
//1 - numOne and numTwo are not optional;  2-someString parameter is optional

addNumbersWithOptional(1, 2); //since SomeString is optional, it does not require an argument when the function is called
addNumbersWithOptional(1, 2, "This is optional"); //but we can have one
//hovering over the function will show the someString is union type of string | undefined