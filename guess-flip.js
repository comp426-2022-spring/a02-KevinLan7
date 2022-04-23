let startNum = 2;
import minimist from "minimist";
import {coinFlip,coinFlips,countFlips,flipACoin} from "./modules/coin.mjs";
let allArg = minimist(process.argv.slice(startNum));
let argCall = allArg["call"];
if((argCall != "heads" && argCall != "tails") || argCall == undefined){
    console.log("Error: no input.");
    console.log("Usage: node guess-flip --call=[heads|tails]");
}else{
    console.log(flipACoin(argCall));
}