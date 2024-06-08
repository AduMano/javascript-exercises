// arr parameter holds the first argument, which is the sets.
// the ...target is the rest of the arguments stored in the array, this is called
// "Spread Operator". Thanks Odin!

const removeFromArray = function(arr, ...target) {
    // Using filter, It iterates the items in arr one by one and check if they are not
    // included in the target array, if they are not included then proceed on the iteration.
    // if they are in the target array they wont be making inside this new array.
    
    return arr.filter((item) => {
        return (!target.includes(item));
    });
};

// Do not edit below this line
module.exports = removeFromArray;
