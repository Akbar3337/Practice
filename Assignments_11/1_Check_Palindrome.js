/* 

Q1. Check Palindrome

Problem Description
Write a recursive function that checks whether string A is a palindrome or Not.
Return 1 if the string A is a palindrome, else return 0.

Note: A palindrome is a string that's the same when read forward and backward.

Problem Constraints
1 <= |A| <= 50000
String A consists only of lowercase letters.

Input Format
The first and only argument is a string A.

Output Format
Return 1 if the string A is a palindrome, else return 0. 

Example Input
Input 1:
 A = "naman"

Input 2:
 A = "strings"

Example Output
Output 1:
 1

Output 2:
 0

Example Explanation
Explanation 1:
 "naman" is a palindomic string, so return 1.

Explanation 2:
 "strings" is not a palindrome, so return 0.
 
*/

function Check_Palindrome(string, start, end){
  if (start >= end) {
      return 1;
  }

  if (string[start] === string[end]) {
      return Check_Palindrome(string, start + 1, end - 1);
  } 
  else {
      return 0;
  }
}

let string = "gadeg";
console.log(Check_Palindrome(string, 0, string.length - 1));
