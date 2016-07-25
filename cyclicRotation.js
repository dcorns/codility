/**
 * cyclicRotation
 * Created by dcorns on 7/25/16
 * Copyright © 2016 Dale Corns
 * Rotate an array to the right by a given number of steps.
 */
'use strict';

function solution(A, K){
  var r = K;
  if(K > A.length){
    r = K%A.length;
  }
  var aryLeft = A.slice(r * -1);
  var aryRight = A.slice(0, r * -1);
  return aryLeft.concat(aryRight);
}

console.log(solution([1,2,3,4,5,6,7,8,9,10], 13));