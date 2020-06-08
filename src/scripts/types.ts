(function () {

// Boolean
    let isDone: boolean = false;

// Number
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;

// String
    let color: string = "blue";
    color = 'red';

    let fullName: string = `Bob Bobbington`;
    let age: number = 37;
    let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;

    let sentence2: string = "Hello, my name is " + fullName + ".\n\n" +
        "I'll be " + (age + 1) + " years old next month.";

// Array
    let list1: number[] = [1, 2, 3];
    let list2: Array<number> = [1, 2, 3];

// Tuple
// Declare a tuple type
    let x: [string, number];
// Initialize it
    x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error

    console.log(x[0].substring(1)); // OK
//console.log(x[1].substring(1)); // Error, 'number' does not have 'substring'

//x[3] = "world"; // Error, Property '3' does not exist on type '[string, number]'.
//console.log(x[5].toString()); // Error, Property '5' does not exist on type '[string, number]'.

//Enum
//enum Color {Red, Green, Blue}
//let c: Color = Color.Green;

    enum Color {Red = 2, Green, Blue}

    let colorName: string = Color[3];


    console.log(colorName); // Displays 'Green' as its value is 2 above

//Any


})();


