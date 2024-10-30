//function that outputs a greeting
function greet (name) { 
// Validate input 
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

// Example call to the circumference function
console.log(circumference(10)); // Expected output: 31.41592653589793

// Function that calls another function
function firstFunction() {console.log("first Function start");
    secondFunction();
    console.log("First function end");
}

function secondFunction() {
    console.log("Second function");
}


// Call the first function abd observe the output 
firstFunction();// Expected output: First function start, Second function, First function end
 
// function that causes the stack to overflow 
function overflow() { 
 // This function is intentionally left as is to demonstrate stack overflow
 // Uncomment the following line to cause a stack overflow (be cautious as it will crash your browser)
 // overflow();
 console.log("This function is designed to overflow if called.");
}
