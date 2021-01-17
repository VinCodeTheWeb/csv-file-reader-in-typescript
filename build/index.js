"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var matchResult_1 = require("./matchResult");
var reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var matche = _a[_i];
    if (matche[1] === 'Man United' && matche[5] === matchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (matche[2] === 'Man United' && matche[5] === matchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games!");
