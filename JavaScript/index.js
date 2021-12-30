"use strict"
// const name="vamsi";
// var age=20;

// if(age>18){
//     var name="A";
//     var name="Vas"
//     console.log(name)
// }
// console.log(name)

//objects

// let employee={
//     name:"het",
//     designation:"Junior developer",
//     salary:"4LPA",
//     mobile:6756467978
// }
// console.log(employee.mobile)

//Array

// let employee=["syam","raja","het"]
// console.log(employee[1])

// Alerts

// alert("registration is completed successfully")
// let number1=prompt("Enter username")
// console.log(number1)

// confirm("Are you sure you want to exit?")

// console statements

// console.log("Welcome")
// console.info("For information")
// console.warn("Check the code once")
// console.error("name is note defined")

// Spread operator

// let external_marks=[44,46,47,23,43,32]
// let internal_marks=[12,2,13,14,15,16]
// let results=[56,78,external_marks]
// let final=[45,57,975,...external_marks,...internal_marks]
// console.log(results)
// console.log(final)

//Rest Parameter
 
// function addition(x,y,...remainData){
//     console.log(x);
//     console.log(y);
//     console.log(remainData);
//     console.log(typeof(remainData))
// }

// console.log(addition(2,3,242,354,34,"rtdg"))

// Destructuring of array

// let employees=["n1","n2","n3","n4","n5"]
// // let name1=employees[0];
// // let name2=employees[1];
// let [sunil_21,gopinath,...data]=employees

// console.log(sunil_21)
// console.log(data)
 
// Desrtucting of object

let employee={
        uname:"het",
        designation:"Junior developer",
        salary:"4LPA",
        mobile:6756467978
    }

let {uname,designation,...remainList}=employee;
console.log(uname);
console.log(designation);
console.log(remainList)