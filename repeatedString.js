/**
 * hackerrank.com repeated string
 * https://www.hackerrank.com/challenges/repeated-string/problem
 */

 function buildString(ogString, length){
     let testString = ogString;
     while(testString.length < length){
        testString = testString + ogString;
     }
     return testString.substr(0, length); 
 }

function repeatedString(pattern, length) {
    return buildString(pattern, length).split('').reduce(function(letterCount, character){
        console.log('letterCount, character ', letterCount, character);
        const isA = character === 'a';
        return isA ? letterCount + 1 : letterCount;
    },0);
}

const stringPattern = 'aba';
const lengthInt = 10;

console.log('There are ', repeatedString(stringPattern, lengthInt),
 ' occurences of the letter a in the first ', lengthInt, ' of the repeated string pattern');