// 225. Implement Stack using Queues
// https://leetcode.com/problems/implement-stack-using-queues/

var MyStack = function () {
  this.data = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.data.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  const data = this.data.pop();
  return data;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  const data = this.data[this.data.length - 1];
  return data;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.data.length === 0 ? true : false;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
