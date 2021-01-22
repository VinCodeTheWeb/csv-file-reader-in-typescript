import { MatchReader } from './inheritence/MatchReader'
import { MatchResult } from './matchResult';

const reader = new MatchReader('football.csv');
reader.read();

let manUnitedWins = 0;

for (let matche of reader.data) {
  if (matche[1] === 'Man United' && matche[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (matche[2] === 'Man United' && matche[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games!`);
