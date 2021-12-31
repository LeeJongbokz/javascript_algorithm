// https://leetcode.com/problems/design-hashmap/
// 706. Design HashMap

// 직접 해쉬맵을 만드는 문제

var MyHashMap = function () {};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  this[key] = value;
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  if (this[key] !== undefined) {
    return this[key];
  }
  return -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  if (this[key]) delete this[key];
};
