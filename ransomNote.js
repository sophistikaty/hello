/**
 * hackerrank.com ransom note  (hashmaps)
 * https://www.hackerrank.com/challenges/ctci-ransom-note/problem
 */

 function checkMagazine(magazine, note){
    const canReproduce = note.every(function(word){
        let wordAvailable = false;
        const wordIndex = magazine.indexOf(word);
        if(wordIndex !== -1){
            magazine.splice(wordIndex, 1);
            wordAvailable = true;
        }
        return wordAvailable;
    })
    return canReproduce ? 'Yes' : 'No';
 }
 const magazine = ['give', 'me', 'one', 'grand', 'today', 'night'];
 const note = ['give', 'one', 'grand', 'today'];
 console.log('will harold be able to reproduce his (case sensitive)'
 + 'ransom note from the full words in the magazine? ', checkMagazine(magazine, note));