/*
You’ve been given an index.html file and this starter js file.

0. Source this file into the index.html file. You should see a console log when this is done correctly.
  -- There is no JS to write for this step.
*/

console.log('Step 0 complete! client.js loaded!');

// Write your code here!

// 1. Start with the number 29 and set that equal to a variable named ‘highScore’;
let highScore = 29
// 2. Make a new empty array called myScrabbleTiles.
let myScrabbleTiles = [];

// 3. Put these 6 tile objects into myScrabbleTiles:
/*
  { tile: 'N', score: 1 }
  { tile: 'K', score: 5 }
  { tile: 'Z', score: 10 }
  { tile: 'X', score: 8 }
  { tile: 'D', score: 2 }
  { tile: 'A', score: 1 }
*/
let tiles = [
  { tile: 'N', score: 1 },
  { tile: 'K', score: 5 },
  { tile: 'Z', score: 10 },
  { tile: 'X', score: 8 },
  { tile: 'D', score: 2 },
  { tile: 'A', score: 1 }]

myScrabbleTiles.push(tiles)
console.log(myScrabbleTiles[0][1])

// 4. Remove the last tile from myScrabbleTiles.

let removed = myScrabbleTiles[0].pop()
console.log(removed)
// 5. Add the following new tile to myScrabbleTiles:
/*
  { tile: 'F', score : 4 }
*/
let added = myScrabbleTiles[0].push({ tile: 'F', score: 4 })
console.log(myScrabbleTiles[0])

// 6. Complete this function. It needs to be given an array of tile objects. The function will use a for-loop and return the sum of all the scores in the given array.
function sumTiles(anArray) {
  let value = 0
  for (let sum of anArray) {
    for (let i = 0; i < sum.length; i++) {
      value += sum[i].score
    }
  }
  return value
}

console.log(sumTiles(myScrabbleTiles));

// 7. Use the function above to get the total score for myScrabbleTiles and assign the value to a variable called "myScore".
let myScore = sumTiles(myScrabbleTiles)


// 8. Check whether or not your score is higher than the highScore.
// 8-1 If your score is higher, change highScore to the new high score.
highScore=myScore

// DONE!