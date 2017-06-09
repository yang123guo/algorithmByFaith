/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // XXXXX
};


// github上的答案
var addTwoNumbers = function(l1, l2) {
  var add = 0
    , ans
    , head;

  while(l1 || l2) {
    var a = l1 ? l1.val : 0
      , b = l2 ? l2.val : 0;

    // 新结果等于对应位置求和 然后再加上下一位进上来的 然后取个位数
    var sum = a + b + add;
    add = ~~(sum / 10);

    var node = new ListNode(sum % 10);

    if (!ans)
      ans = head = node;
    else {
      head.next = node;
      head = node; 
    }
    
    if (l1)
      l1 = l1.next;
    if (l2)
      l2 = l2.next;
  }

  if (add) {
    var node = new ListNode(add);
    head.next = node;
    head = node;
  }

  return ans;
};