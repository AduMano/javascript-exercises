const repeatString = function(str, it) {
    if (it < 0) {
        return "ERROR";
    }

    let newStr = "";

    for (let i = 0; i < it; i++) {
        newStr += str;
    }

    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
