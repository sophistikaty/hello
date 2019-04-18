/**
 * hackerrank.com count triplets (hashmaps)
 * https://www.hackerrank.com/challenges/count-triplets-1/problem
 */
function findNextValIndex(nextVal, startIndex, testArray, triplet){
    for(let k = startIndex; k < testArray.length; k++){
        const isNextVal = testArray[k] === nextVal;
        if(isNextVal){
            triplet.push(k);
            console.log('triplet ', triplet);
            break;
        }
    }
    return triplet;
}

function findNumTriplet(ratio, i, testArray){
    let startIndex = i;
    let triplet = [startIndex];
    for (let j = 0; j < 2; j++){
        const nextVal = ratio * testArray[startIndex];
        console.log('nextVal, startIndex, triplet ', nextVal, startIndex, triplet);
        triplet = findNextValIndex(nextVal, startIndex, testArray, triplet);
        startIndex = triplet[j+1];
    }
    return triplet.length === 3 ? triplet : null;
}
function countTriplets(arr, r) {
    return arr.reduce(function(tripletsArr, num, i, testArray){
        const numTriplet = findNumTriplet(r, i, testArray);
        if(numTriplet){
            tripletsArr.push(numTriplet)
        }
        console.log('tripletsArr ', tripletsArr);
        return tripletsArr;
    }, []).length;
    // ooooo, this should be a hashmap tree of possible paths to triplets, then reduce hashmap to count
}

const testArray = [1, 2, 2, 4];
const ratio = 2;

console.log('How many triplicate sets of indices from the array '
, testArray,' which represent a progression of the ratio ', ratio );

console.log(countTriplets(testArray, ratio));
