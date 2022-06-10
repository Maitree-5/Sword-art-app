// Spread operators in Js..
const num = [4,2,3,5,6,7,9];
//if we wnna do some modification but we have to preserve our original array then use spread operator..
const num2 = [...num];//Use 3 dots before variable name..
num.push(10);//to preserve original array and add any new value..use push method
const modifiedNum = num.concat(12); // we actually create new array by using concate method..
const dozen = [...modifiedNum, 13]; // add new num in prior varible by maintaining its original value
console.log(num,modifiedNum,dozen);

//Functional pro. is about pure function. Push fun is impure as it modifies original arrays.
//Pure func = doesn't produce side effects and doesn't modifies original arrays.
//No matter how many times we call it, the result will be the same.
//As a rule of thumb, prefer pure fun over impure. Abstain from methods like push as they produce side effects.
// In terms of arrays use func that returns new arrays instead of modified one.

//Use of spread ope in objects: we can add new properties and also modified existing properties.
const obj = {fname:'ABC',lname:'XYZ',age:23};
const obj1 = {...obj,reborn:'true'};
const obj3 = {...obj1,age:27};
obj1.age=27;
console.log(obj1);

//---ARRAY METHODS---
//  1. FILTER METHOD:
// It returns an array  with elements that pass the test.
// this fun is used for search or filtering.
//Map isalso called transformation func.
const filterDozen = dozen.filter(num=> num > 5);
const mapp = dozen.map(num => Math.pow(num,2));
//Array operations can be chained..it would be impossible without functional approach.
const upgradeDozen = dozen
.filter((num)=>num%2 == 0)
.map((num)=>Math.pow(num,3));

//  2. REDUCE METHOD:
// less imp, reduce the array to a single value.
const three = [1, 2, 3];
const sum = three.reduce((acc,num) => acc + num, 2);
//1) accumulator = 0 , num = 1;
//2) acc = 1 , num = 2;
console.log(sum);
