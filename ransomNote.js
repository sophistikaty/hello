/**
 * hackerrank.com ransom note  (hashmaps)
 * https://www.hackerrank.com/challenges/ctci-ransom-note/problem
 */

 function magazineToHashMap(magazine){
     return magazine.reduce(function(map, word){
        const wordCount = map[word];
        map[word] = wordCount ? wordCount +1 : 1; 
        return map;
     }, {})
 }

 function checkMagazine(magazine, note){
    const magazineWords = magazineToHashMap(magazine);
    const canReproduce = note.every(function(word){
        const wordCountAvailable = magazineWords[word];
        if(wordCountAvailable > 0){
            magazineWords[word] = wordCountAvailable -1;
        }
        return wordCountAvailable ? true : false;
    })
    console.log(canReproduce ? 'Yes' : 'No');
 }
 const magazine = ['give', 'me', 'one', 'grand', 'today', 'night'];
 const note = ['give', 'one', 'grand', 'today'];
 console.log('will harold be able to reproduce his (case sensitive)'
 + 'ransom note from the full words in the magazine? ');
 checkMagazine(magazine, note);