import {Require1} from "model";
let require = Require1(import.meta.url);
let minimist = require("minimist");
let {exit} = require("process");
import {coinFlips,countFlips} from "./modules/coin.mjs";
let allArg = minimist(process.argv.slice(2));
let argFlips = allArg["number"];
let numFlips = argFlips || 1;
let resultCoinFlips = coinFlips(numFlips);
console.log(resultCoinFlips);
console.log(countFlips(resultCoinFlips));