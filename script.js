// Step 1: Create four variables with numbers
num1 = 5
num2 = 7
num3 = 16
num4 = 12

// Step 2: Add the first two variables
sum_result = num1 + num2

//Step 3: Subtract the fourth variable from the third
sub_result = num3 - num4

// Step 4: Multiply the results from steps 2 and 3
finalResult = sum_result * sub_result

//Step 5: Check if finalResult is an even number
evenOddResult = finalResult % 2

// To pass this test, finalResult should have a value of 48 
//evenOddResult should have a value of 0.
//evenOddresult = 0
//finalResult = 48



//*THIS IS MATH 2 *//
///math 2//
let result = 67.45;
let result2 = 68.75;

// Step 1: Multiply result and result2 and assign the result back to result
result *= result2;

// Step 2: Format result to two decimal places
let finalResult = result.toFixed(2);

// Step 3: Check the data type of finalResult and convert to a number if it's a string
let finalNumber;
if (typeof finalResult === 'string') {
    finalNumber = parseFloat(finalResult);}


