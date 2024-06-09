const palindromes = function (str) {
    // Use regex to grab only letters and numbers (a-zA-Z0-9)
    // The "g" flag makes it check the whole string
    // The [^] means "not", so it finds things that are not in the set
    // Then I replace those that are not in the set with an empty string

    let newStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversed = newStr.split("").reverse().join("").toLowerCase();

    return (newStr === reversed);
};

// Do not edit below this line
module.exports = palindromes;
