// 232. Implement Queue using Stacks
// https://leetcode.com/problems/implement-queue-using-stacks/

var MyQueue = function () {
  this.data = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.data.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  const data = this.data.shift();
  return data;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  const data = this.data[0];
  return data;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.data.length === 0 ? true : false;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
