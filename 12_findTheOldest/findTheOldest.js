const findTheOldest = function(arr) {
    // Whats need to be done:
    // I have to compare all the objects years of birth and death
    // and return the object of the oldest

    return arr.reduce((oldestPerson, person) => {
        let pDeath = ((person.yearOfDeath == undefined) ? new Date().getFullYear() : person.yearOfDeath);
        let pBirth = person.yearOfBirth;
        let opDeath = ((oldestPerson.yearOfDeath == undefined) ? new Date().getFullYear() : oldestPerson.yearOfDeath);
        let opBirth = oldestPerson.yearOfBirth;

        let pAge = pDeath - pBirth;
        let opAge = opDeath - opBirth;

        // Check whos older
        return (pAge > opAge) ? person : oldestPerson;
    }, arr[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
