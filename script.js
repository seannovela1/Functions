//function that outputs a greeting
function greet (name) { 
// Vallidate input 
if (typeof name !== 'string'||name.trim()===''){
    return 'Invalid name provided!';
}
return `Hello, ${name}!`;
}

// Call the greet function
console.log(greet("some name")); // Expected output: Hello, some name!

// function that gives the appoximate circumference of a circle given the diameter
function circumference (diameter) { 
    // validate input
    if (typeof diameter !=='number'||diameter<=0) {
        return 'invalid diameter provided!';
    }
    return Math.PI* diameter;
}

// Example call to the circumfrence function
console.log(circumference(10)); // Expected output: 31.41592653589793

// Function that calls another function
function firstfunction() {console.log("first function start");
    secondFunction();
    console.log("First function end");
}

function secondFunction() {
    console.log("Second function");
}
