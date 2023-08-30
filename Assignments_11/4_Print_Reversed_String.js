/* 

Q4. Print reverse string

Problem Description
Write a recursive function that takes a string, S, as input and prints the characters of S in reverse order.

Problem Constraints
1 <= |s| <= 1000

Input Format
First line of input contains a string S.

Output Format
Print the character of the string S in reverse order. 

Example Input
Input 1:
 scaleracademy

Input 2:
 cool

Example Output
Output 1:
 ymedacarelacs

Output 2:
 looc
 
*/

function Reverse_String(string) {
    if (string.length === 0) {
        return ''; 
    }

    const last_Character = string[string.length - 1];
    
    const remaining_Character = string.slice(0, string.length - 1);

    const reversed_Sub_String = Reverse_String(remaining_Character);

    return last_Character + reversed_Sub_String;
}

let string = "karnataka";

console.log(Reverse_String(string));