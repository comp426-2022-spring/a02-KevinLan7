let startNum = 2;
import minimist from "minimist";
import {coinFlip,coinFlips,countFlips,flipACoin} from "./modules/coin.mjs";
let allArg = minimist(process.argv.slice(startNum));
allArg["number"];
if(allArg.number == undefined){
    let flip = coinFlips(1);
    console.log(flip);
    console.log(countFlips(flip));
}else{
    let flip = coinFlips(allArg["number"]);
    console.log(flip);
    console.log(countFlips(flip));
}