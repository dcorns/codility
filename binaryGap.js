/**
 * binaryGap
 * Created by dcorns on 7/25/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
function solution(N) {
  var fSet, zeroCount = 0, maxCount = 0, prevBit = 'X';
  var binN = N.toString(2);
  for(var i = 0; i < binN.length; i++){
    if(binN[i] === '1'){
      if(fSet && prevBit === '0'){
        if(zeroCount > maxCount) maxCount = zeroCount;
        zeroCount = 0;
      }
      else fSet = true;
    }
    else{
      if(fSet){
        zeroCount++;
      }
    }
    prevBit = binN[i];
  }
  return maxCount;
}
console.log(solution(384403987240982074));