function getPairCount(socksIn) {
    const sortedSocks = socksIn.sort((a,b)=>{return a < b;});
    return sortedSocks.reduce(function (pairCount, sockColor){
        const firstIndex = sortedSocks.indexOf(sockColor);
        const lastIndex = sortedSocks.lastIndexOf(sockColor);
        const hasPair = firstIndex !== lastIndex; 
        if (hasPair){
            sortedSocks.splice(firstIndex, 1);
            sortedSocks.splice(sortedSocks.indexOf(sockColor), 1);
            pairCount++;
        }
       return pairCount;
    },0);
}

const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log('sock merchant has ', getPairCount(socks),
 ' pairs of socks to sell. Hope they\'re bombas.');
