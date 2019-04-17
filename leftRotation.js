/**
 * hackerrank.com left rotation
 * https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem
 */
function rotateLeft(array){
    let shiftVal = array.shift();
    array.push(shiftVal);
    console.log('shifted array ',array);
    return array;
}

function handleLeftRotations(array, rotationCount){
    let rotatedArray = array.slice(0);
    for(let i=0; i < rotationCount; i++){
        console.log('index ',i);
        rotatedArray = rotateLeft(array);
    }
    return rotatedArray;
}
const myArray = [1,2,3,4,5];
const count = 4;
console.log('my array is ', handleLeftRotations(myArray, count), ' after ', count ,' left rotations');