// Source : https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Author : Han Zichi
// Date   : 2016-08-05

/**
 * @param {string} s
 * @return {number}
 */

 var lengthOfLongestSubstring = function(s) {
  var hash = {};
  var start = 0;
  var ans = 0;
