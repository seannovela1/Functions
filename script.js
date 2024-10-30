//function that outputs a greeting
function greet (name) { 
// Vallidate input 
if (typeof name !== 'string'||name.trim()===''){
    return 'Invalid name provided!';
}
return `Hello, ${name}!`;
}

