(function () {
    // Boolean
    var isDone = false;
    // Number
    var decimal = 6;
    var hex = 0xf00d;
    var binary = 10;
    var octal = 484;
    // String
    var color = "blue";
    color = 'red';
    var fullName = "Bob Bobbington";
    var age = 37;
    var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
    var sentence2 = "Hello, my name is " + fullName + ".\n\n" +
        "I'll be " + (age + 1) + " years old next month.";
    // Array
    var list1 = [1, 2, 3];
    var list2 = [1, 2, 3];
    // Tuple
    // Declare a tuple type
    var x;
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
    var Color;
    (function (Color) {
        Color[Color["Red"] = 2] = "Red";
        Color[Color["Green"] = 3] = "Green";
        Color[Color["Blue"] = 4] = "Blue";
    })(Color || (Color = {}));
    var colorName = Color[3];
    console.log(colorName); // Displays 'Green' as its value is 2 above
    //Any
})();
//# sourceMappingURL=types.js.map