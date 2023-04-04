// 1. Write a js program to find maximum between two numbers.
// {
//     var firstValue =+ prompt("Enter first value");
//     var secondValue =+ prompt("Enter second value");
//     if (firstValue > secondValue){
//    console.log(`your Number1 "${firstValue}" is grater then Number2 "${secondValue}"`)
// }
//     else  if(firstValue<secondValue){
//         console.log(`your Number1 ${firstValue
//         } is Less to ${secondValue}`);
//     }
//     else  if(firstValue==secondValue){
//         console.log(`your Number1 ${firstValue
//         } is Equal then ${secondValue}`);
//     }else{
//         console.log('Please Enter a Vaild Value')
//     } 
// }



// 2. Write a js program to find maximum between three numbers.
//
// function maximum(num1 ,num2 , num3) {
//     if (num1 > num2 && num1 > num3) {
//         console.log(`Your Number1 "${num1} "is Greater then NUmber2" ${num2}" and Number3 
//         "${num3}"`);
//     }
//     else if (num2 > num3 && num2 > num1) {
//         console.log(`${num2} is Greater then ${num1} and ${num3}`);
//     }
//     else{
//         console.log(`${num3} is Greater then ${num1} and ${num2}`);
//     }
// }
// num1 = prompt("Enter first value");
// num2 = prompt("Enter second value");
// num3 = prompt("Enter third value");
// maximum(num1,num2,num3);





// 3.Write a js program to check whether a number is negative, positive or zero.
// function negativeorpositive(valueNumber) {
//     if (valueNumber > 0) {
//         console.log(`${valueNumber} number is positive` );
//     }
//     else if (valueNumber < 0) {
//         console.log(`${valueNumber} number is nagitive` );
//     }
//     else {
//         console.log(`${valueNumber} number is zero` );
//     }
// }
// var valueNumber = prompt("Enter a Number");
// negativeorpositive(valueNumber)





// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.
// function negativeorpositive(valueNumber) {
//     if (valueNumber %5 == 0) {
//         console.log(`${valueNumber} value divided by 5` );
//     }
//     else if (valueNumber %11 == 0) {
//         console.log(`${valueNumber} value divided by 11` );
//     }
//     else {
//         console.log(`${valueNumber} value not divided` );
//     }
// }
// var valueNumber = prompt("Enter a value");
// negativeorpositive(valueNumber)





// 5. Write a js program to check whether a number is even or odd.
// function evenodd(valueNumber) {
//     if (valueNumber %2 == 0) {
//         console.log(`${valueNumber} your number is even`);
//     } else {
//         console.log(`${valueNumber} your number is odd`);
//     }
// }
// var valueNumber = prompt("Enter a value");
// evenodd(valueNumber)





// 6. Write a js program to check whether a year is leap year or not.
// function leap(valueNumber) {
//     if (valueNumber %4 == 0) {
//         console.log(`${valueNumber} This year is leap year`);
//     } else {
//         console.log(`${valueNumber} This year is not leap year`);
//     }
// }
// var valueNumber = prompt("Enter a value");
// leap(valueNumber)





// 7. Write a js program to check whether a character is alphabet or not.
// function alphaet(valueNumber) {
//     if (valueNumber >='a' && 'z'>= valueNumber) {
//         console.log(`${valueNumber} This is alphabet chracter`);
//     } else {
//         console.log(`${valueNumber} This is not alphabet chracter`);
//     }
// }
// var valueNumber = prompt("Enter a value");
// aplhabet(valueNumber)




// 8. Write a js program to input any alphabet and check whether it is vowel or consonant.
// function vowel(valueNumber) {
//     if (valueNumber == 'a' || valueNumber == 'e'|| valueNumber == 'i'|| valueNumber == 'o' || valueNumber == 'u') {
//         console.log(`${valueNumber} This is vowel`);
//     }
  
//      else {
//         console.log(`${valueNumber} This is not vowel`);
//     }
// }
// var valueNumber = prompt("Enter a value");
// vowel(valueNumber)





// 9. Write a js program to input any character and check whether it is alphabet, digit or special character.
// function alpa(valueNumber) {
//     if (valueNumber >= 'a' && 'z' >= valueNumber) {
//         console.log(`${valueNumber} This is alphabet`);
//     }
//     else if (valueNumber > 0 && valueNumber < 9) {
//         console.log(`${valueNumber} This is digits`);
//     }
//     else{
//         console.log(`${valueNumber} This is special charcter`);
//     }
// }
// var valueNumber = prompt("Enter a value");
// alpa(valueNumber)




// 11. Write a js program to input week number and print week day.
// function week(daysWeek) {
//     var totalDays = (daysWeek * 7);
//     console.log(`This  ${daysWeek} week has ${totalDays} days`);
// }
// var daysWeek = prompt("Enter week");
// week(daysWeek)


// 21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill ?

// const unitCharges = parseFloat(prompt("Enter the electricity unit charges:"));
// var totalBill = 0;
// var unitsConsumed = 0;
// if (unitCharges <= 50) {
//   unitsConsumed = unitCharges;
//   totalBill = unitsConsumed * 0.50;
// } else if (unitCharges <= 150) {
//   unitsConsumed = 50 + (unitCharges - 50);
//   totalBill = 50 * 0.50 + (unitsConsumed - 50) * 0.75;
// } else if (unitCharges <= 250) {
//   unitsConsumed = 100 + (unitCharges - 150);
//   totalBill = 50 * 0.50 + 100 * 0.75 + (unitsConsumed - 100) * 1.20;
// } else {
//   unitsConsumed = unitCharges - 250;
//   totalBill = 50 * 0.50 + 100 * 0.75 + 100 * 1.20 + unitsConsumed * 1.50;
// }
// totalBill *= 1.20;
// console.log(`Total electricity bill for ${unitCharges} units consumed: Rs. ${totalBill}`);


// // 19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F_____?

// var physicsMarks = parseFloat(prompt("Enter the marks obtained in Physics:"));
// var chemistryMarks = parseFloat(prompt("Enter the marks obtained in Chemistry:"));
// var biologyMarks = parseFloat(prompt("Enter the marks obtained in Biology:"));
// var mathMarks = parseFloat(prompt("Enter the marks obtained in Mathematics:"));
// var computerMarks = parseFloat(prompt("Enter the marks obtained in Computer:"));
// var totalMarks = physicsMarks + chemistryMarks + biologyMarks + mathMarks + computerMarks;
// var percentage = (totalMarks / 500) * 100;
// let grade = '';
// if (percentage >= 90) {
//   grade = 'A';
// } else if (percentage >= 80) {
//   grade = 'B';
// } else if (percentage >= 70) {
//   grade = 'C';
// } else if (percentage >= 60) {
//   grade = 'D';
// } else if (percentage >= 40) {
//   grade = 'E';
// } else {
//   grade = 'Fail';
// }
// console.log(`Total marks obtained: ${totalMarks}/500`);
// console.log(`Percentage: ${percentage.toFixed(2)}%`);
// console.log(`Grade: ${grade}`);



