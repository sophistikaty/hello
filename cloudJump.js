/**
 * hackerrank.com jumping on clouds
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
 */

 function isThunder(cloud){
     return cloud === 1;
 }

function jumpingOnClouds(clouds) {
    return clouds.reduce(function(jumpTracker, cloud, index, cloudArr){
        const isLastCloud = index === cloudArr.length -1;
        const isMaxJump = index === jumpTracker.lastJump +2;
        const landHere = !isThunder(cloud) && (isLastCloud || isMaxJump || isThunder(cloudArr[index+1]));
        jumpTracker.lastJump = landHere ? index : jumpTracker.lastJump;
        jumpTracker.jumpCount = landHere ? jumpTracker.jumpCount +1 : jumpTracker.jumpCount;
        return jumpTracker;
    },{lastJump:0, jumpCount:0}).jumpCount;
}

const clouds = [0, 0, 0, 1, 0, 0];
console.log('Emma has to make at least ', jumpingOnClouds(clouds),' jumps to make it across the clouds.')