'use strict';

// 1 amocana
function sum(...nUmbers) {
    let sum = 0;
    for( i = 0; i < nUmbers.length; i++) {
        if(nUmbers[i] > 0) {
            sum += nUmbers[i];
        }
    }
    console.log(sum);
}
sum (2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);

// 2 amocana 

function sum(...numbers) {
    let numberSum = 0;
    for ( let item of numbers){
        numberSum = numberSum + item;
    }
    console.log(numberSum)
}
sum (10, 50, 6, 7, 8, 11, 6, 3, 9);



// 3 amocana 
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }
  let printName2 = `${user.firstname}   ${user.lastname} `
  console.log(printName2) ; 


// 4 amocana
function sum(...number){
    for (let itEm of number) {
        if (itEm > 20){
           console.log(itEm)
        }
    }
}
sum (20, 56, 6, 17, 3, 12, 6, 3, 19);


// 5 amocana 
let numBers = [1,2,4,10,34,5,7,87];

 for (let i = 0; i < numBers.length; i++) {
     if (numBers[i] < 10){
        console.log(numBers[i])
     }
 }

    
// 6 amocana 
let numbers =[1,2,3,4,5,6,7,8,9,10];
for (let item of numbers){
    if (item == 6){
        break
    }
    console.log(item);
}

// 7 amocana
let aRray = ["html","css","python","javascript","bootstrap"];
for (let item of aRray){
    if (item.length > 4 && item.includes('av')){
        console.log(item);
    }
}


 