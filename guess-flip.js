import {Require1} from "model";
let require = Require1(import.meta.url);
let minimist = require("minimist");
let {exit} = require("process");
import {flipACoin} from "./modules/coin.mjs";
let allArg = minimist(process.argv.slice(2));
let argCall = allArg["call"];
try{
    let resultCoinFlips1 = flipACoin(argCall);
    console.log(resultCoinFlips1);
}catch(e){
    console.log(e);
}