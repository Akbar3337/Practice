/* 

Q1. Sum of Digits!

Problem Description
Given a number A, we need to find the sum of its digits using recursion.

Problem Constraints
1 <= A <= 10^9

Input Format
The first and only argument is an integer A.

Output Format
Return an integer denoting the sum of digits of the number A. 

Example Input
Input 1:
 A = 46
 
Input 2:
 A = 11

Example Output
Output 1:
 10

Output 2:
 2

Example Explanation
Explanation 1:
 Sum of digits of 46 = 4 + 6 = 10

Explanation 2:
 Sum of digits of 11 = 1 + 1 = 2

*/

function sum_of_Digits(number) {
    if (number === 0) {
        return 0;
    }
    
    const last_Digit = number % 10;

    const remaining_Number = Math.floor(number / 10);

    return last_Digit + sum_of_Digits(remaining_Number);
}

let number = 1258;

console.log(sum_of_Digits(number));