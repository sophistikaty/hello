/**
 * hackerrank.com two strings (hashmaps)
 * https://www.hackerrank.com/challenges/two-strings/problem
 */

 function twoStrings(s1, s2) {
    const hasMatchingSubString = s1.split('').some(function(char){
        return s2.indexOf(char) !== -1;
    },{});
    return hasMatchingSubString ? 'YES' : 'NO';
}

const stringOne = 'hi';
const stringTwo = 'world';

console.log('Do these two strings share any substrings? ', twoStrings(stringOne, stringTwo));