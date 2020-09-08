// Your code here
//Argument(s) - A 4-element Array of a String, String, String, and Number corresponding to a first name, family name, title, and pay rate per hour
function createEmployeeRecord(array) {
    let employee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}

////
function createEmployeeRecords(array) {
    const emp = array.map(x => createEmployeeRecord(x))
    return emp
}