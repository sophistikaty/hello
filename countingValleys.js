/**
 * hackerrank.com counting valleys
 * https://www.hackerrank.com/challenges/counting-valleys/problem
 */

 function trackStep(tracker, step){
    const isStepDown = step === 'D';
    const isNewValley = tracker.altitude === 0 && isStepDown;
    tracker.valleyCount = isNewValley ? tracker.valleyCount + 1 : tracker.valleyCount;
    tracker.altitude = isStepDown ? tracker.altitude - 1 : tracker.altitude + 1;
    return tracker;
}

function getValleyCount(stepString){
    return stepString.split('')
    .reduce(trackStep, { altitude:0, valleyCount: 0}).valleyCount;
}

const steps = 'UDDDUDUUD';

console.log('Gary walked into ', getValleyCount(steps), ' valleys.');