let heads = "heads";
let tails = "tails";
let win = "win";
let lose = "lose";

/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

 export function coinFlip() {
  return Math.random() > .5 ? heads : tails;
}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

export function coinFlips(flips) {
  let results = [];
  for(let i = 0; i < flips; i++){
    results.push(coinFlip());
  }
  return results;
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

export function countFlips(array) {
  let array2 = {heads:0,tails:0};
  array.forEach(flip=>{
    if(flip == heads){
      array2.heads++;
    }else if(flip == tails){
      array2.tails++;
    }
  })
  if(array2.heads == 0){
    delete array2.heads;
  }else if(array2.tails == 0){
    delete array2.tails;
  }
  return array2;
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

export function flipACoin(call) {
  if(call == heads || call == tails){
    let result = {e1:call,e2:coinFlip(),e3:null};
    result.e3 = ((result.e1 == result.e2) ? win : lose);
    return result;
  }else if(call == null || call == ""){
    throw "Error: no input.";
  }else{
    throw "Usage: node guess-flip --call=[heads|tails]";
  }
}


/** Export 
 * 
 * Export all of your named functions
*/