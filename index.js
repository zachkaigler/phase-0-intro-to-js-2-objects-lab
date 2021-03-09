// Write your solution in this file!
const employee = {
    name: "Zach Kaigler",
    streetAddress: "283 5th Ave"
}

function updateEmployeeWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, {[key]: value}); 
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    return Object.assign(object, {[key]: value});
}

function deleteFromEmployeeByKey(object, key) {
    const newObject = Object.assign({}, object);
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key];
    return object;
}