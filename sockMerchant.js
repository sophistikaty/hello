/**
 * hackerrank.com sock merchant
 * https://www.hackerrank.com/challenges/sock-merchant/problem
 */
function getPairCount(socksIn) {
    const socksClone = socksIn.slice(0);
    return socksIn.reduce(function (pairCount, sockColor){
        const firstIndex = socksClone.indexOf(sockColor);
        const lastIndex = socksClone.lastIndexOf(sockColor);
        const hasPair = firstIndex !== lastIndex; 
        if (hasPair){
            socksClone.splice(firstIndex, 1);
            socksClone.splice(socksClone.indexOf(sockColor), 1);
            pairCount++;
        }
       return pairCount;
    },0);
}

const socks = [10, 10, 20, 20, 20, 10, 10, 30, 50, 10, 20];

console.log('sock merchant has ', getPairCount(socks),
 ' pairs of socks to sell. Hope they\'re bombas.');
