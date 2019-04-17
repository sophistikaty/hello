/**
 * hackerrank.com two strings (hashmaps)
 * https://www.hackerrank.com/challenges/two-strings/problem
 */
function mapChars(string){

    return string.split('').reduce(function(map,char){
        //initialize key structure without values
        map[char] = null;
        return map;
    },{});
}

 function twoStrings(s1, s2) {
    const substringMap1  = mapChars(s1);

}

const stringOne = 'hello';
const stringTwo = 'world';

console.log('Do these two strings share any substrings? ', twoStrings(stringOne, stringTwo);)