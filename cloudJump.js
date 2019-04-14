/**
 * hackerrank.com jumping on clouds
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
 */

 function isThunder(cloud){
     return cloud === 1;
 }

function jumpingOnClouds(clouds) {
    return clouds.reduce(function(jumpCount, cloud, index, cloudArr){
        const isFirstCloud = index === 0;
        const isLastCloud = index === cloudArr.length -1;
        const landHere = isLastCloud || (!isFirstCloud && !isThunder(cloud) 
        && (isThunder(cloudArr[index+1]) || isThunder(cloudArr[index-1])));
        console.log('landHere, jumpCount, cloud ', landHere, jumpCount, cloud);
        return landHere ? jumpCount + 1 : jumpCount;
    },0);
}

const clouds = [0, 0, 0, 1, 0, 0];
console.log('Emma has to make at least ', jumpingOnClouds(clouds),' jumps to make it across the clouds.')