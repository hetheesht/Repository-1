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

// let employee={
//         uname:"het",
//         designation:"Junior developer",
//         salary:"4LPA",
//         mobile:6756467978
//     }

// let {uname,designation,...remainList}=employee;
// console.log(uname);
// console.log(designation);
// console.log(remainList)

// Functions

// Anonymous function

// let demo=function(x,y){
//     return x+y
// }

// (function(x,y){
//     return x*y
// }) ()
// console.log(demo(3,4))

// (function(x=4,y=6){
//     return console.log(x+y)
// }) ()

// setTimeout(function(){
//   console.log("welcome")
// },3000)
  
// console.log(demo(3,4))

// Arrow function

// let demo =(x,y) => {
//     return x*y

// }
// console.log(demo(3,4))

let employee=["dhanush","Pavan","Harika","vignesh","gh"]

// for(let i=0;i<employee.length;i++){
//     console.log(employee[i])
// }
// for-in
// for(let i in employee){
//     console.log(i)
// }

// for-of

// for(let i of employee){
//     console.log(i)
// }

// forEach()
// employee.forEach(function(element){
//      console.log(element+" OK")
//  })

// console.log(result)

// map
// let result=employee.map(function(element,index){
//     return element+"k"+index
// })
// console.log(employee)
// console.log(result)   

// Map function in arrow function
// let result=employee.map((element,index)=>{
//         return element+"k"+index
//     })
     // console.log(employee)
//     console.log(result)  
 
// Using arrow function
 employee.forEach((element)=>{
    console.log(element+" OK")
 })   
