// https://leetcode.com/problems/min-stack/submissions/
// 155. Min Stack

var MinStack = function () {
  this.arr = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.arr.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.arr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  const elem = this.arr[this.arr.length - 1];
  return elem;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return Math.min(...this.arr);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
