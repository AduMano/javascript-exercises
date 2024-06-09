const fibonacci = function(num) {
    if (num == 0) return 0;
    else if (num < 0) return "OOPS";

    let fib = [0];

    // Make an array of fibonacci
    for (let i = 0; i < num; i++) {
        if (i == 0 || i == 1) {
            fib.push(1);
            continue;
        }

        fib.push(( fib[i] + fib[i-1] ));   
    }

    return fib[num];
};

// Do not edit below this line
module.exports = fibonacci;
