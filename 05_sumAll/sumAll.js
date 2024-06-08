const sumAll = function(p1, p2) {
    // I used typeof function to check what type is the data,
    // since this program only allows numbers, then this was used.
    // I also inserted the condition that numbers cant progress with 
    // negative numbers.

    if (typeof(p1) !== "number" || typeof(p2) !== "number" ||
        p1 < 0 || p2 < 0
    ) {
        return "ERROR";
    }
    else{
        let sum = 0;

        // This checks if the param 1 is less than param 2 vice versa
        if (p1 < p2) {
            for (let i = p1; i <= p2; i++) {
                sum += i;
            }
        }
        else {
            for (let i = p1; i >= p2; i--) {
                sum += i;
            }
        }

        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
