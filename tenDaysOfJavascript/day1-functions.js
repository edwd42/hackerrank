// Declare the function as the property's value
function factorial(n) {
    if (n > 1) {
        return n * factorial(n - 1);
    }
    // Returns 1 if n <= 1
    return 1;
}

console.log(factorial(4));

