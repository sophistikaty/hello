/**
 * hackerrank.com repeated string
 * https://www.hackerrank.com/challenges/repeated-string/problem
 */

function isA(letterCount, character){
    const isA = character === 'a';
    return isA ? letterCount + 1 : letterCount;
};

function countFromWholePattern(stringPattern, length){
    const countInOriginal = stringPattern.split('').reduce(isA,0);
    const wholePatternLength = parseInt(length / stringPattern.length, 10);
    return wholePatternLength * countInOriginal;
}

function countFromRemainder(stringPattern, length){
    const remainderLength = length % stringPattern.length;
    const partialPattern = stringPattern.substr(0, remainderLength);
    return partialPattern.split('').reduce(isA,0);
}

function repeatedString(pattern, length) {
    return countFromWholePattern(pattern, length)
        + countFromRemainder(pattern, length);
}

const stringPattern = 'a';
const lengthInt = 1000000000000;

console.log('There are ', repeatedString(stringPattern, lengthInt),
 ' occurences of the letter a in the first ', lengthInt, ' of the repeated string pattern');