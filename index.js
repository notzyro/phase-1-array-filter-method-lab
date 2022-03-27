// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

const result = drivers.findMatching(drivers => drivers === 'Bobby');
console.log(result);



function findMatching(drivers) {   
    var test = [ ]; 
    for (const driver of drivers) {
        if (driver === 'Bobby') {
            test += driver;
        }
    }
    return "[ " + test + " ]";
}


findMatching(drivers);