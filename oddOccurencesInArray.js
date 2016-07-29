/**
 * oddOccurencesInArray
 * Created by dcorns on 7/25/16
 * Copyright © 2016 Dale Corns
 * Given an array of positive integers. All numbers occur even number of times except one number which occurs odd number of times. Find the number.
 * Using XOR this problem is solved in O(n) time, constant space
 * Because XOR returns the integer result of comparing each bit of the binary representation of two integers where every opposite relationship is represented by a 1 and where the bits are the same value they are represented by a 0, every time a positive integer is XORed to itself it will return 0. When a binary number is XORed to 0, the result will be that number, so in the end only the integer that is XORed to itself 0 or an odd number of times will be left when all the elements have been XORed against each other starting with 0. The order of the XORing does not matter because result will carry the canceling bits around until a match is reverting its effect on the answer to 0. For example:
 * 8 = 1000b, 0 XOR 1000 = 1000, 7 = 0111b, 1000 XOR 0111 = 1111, 1111 XOR 1000 = 0111 and 0111 XOR 0111, of course = 0. As long as only one value in the array occurs an odd number of times, it will always be what is returned since every time a binary number is XORed to itself it will return 0. And every time a binary number is XORed to 0 it will return the same binary number.
 */
'use strict';

function solution(A){
  var ans = 0;
  for(var i = 0; i < A.length; i++){
    ans = ans ^ A[i];
  }
  return ans;
}
console.log(solution([9, 3, 9, 3, 9, 7 ,9, 7, 15, 8, 7, 12, 15, 7, 8])); //returns 12
