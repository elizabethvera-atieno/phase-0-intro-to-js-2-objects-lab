// Write your solution in this file!
const employee = {
    name : 'Vera',
    streetAddress : '22 Kapita'
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const employees = {...employee}
    employees[key] = value
    return employees
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    const Employees = employee
    Employees[key] = value
    return Employees
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    const newEmployees = employee
    delete newEmployees[key]
    return newEmployees
}