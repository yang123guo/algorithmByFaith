// Source : https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Author : Han Zichi
// Date   : 2016-08-05

/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    var hash = {};
    var start = 0;
    var ans = 0;

    for (var i = 0, len = s.length; i < len; i++) {
        var item = s[i];

        if (!hash[item])
          hash[item] = true;
        else {
          // item 已经在 substring 中存在了
            for (; ;) {
                if (s[start] === item) {
                  start++;
                  break;
                }

                hash[s[start]] = false;
                start++;
            }
        }
        ans = Math.max(ans, i - start + 1);
    }
    return ans;
};