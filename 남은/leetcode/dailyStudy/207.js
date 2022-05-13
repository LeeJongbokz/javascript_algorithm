// medium
// https://leetcode.com/problems/course-schedule/
// 207. Course Schedule
// DFS임
// 못 품
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// const numCourses = 2,
//   prerequisites = [[1, 0]];
// const numCourses = 2,
//   prerequisites = [
//     [1, 0],
//     [0, 1],
//   ];
// const numCourses = 1,
//   prerequisites = [];
const numCourses = 2,
  prerequisites = [[0, 1]]; // true

// 이렇게 하면 안 됨,
// 첫 번째 배열 검색 로직이 없음
// 끝에서부터 돌아야 함
var canFinish = function (numCourses, prerequisites) {
  if (prerequisites.length === 0) return true;
  let takenCourseCount = 0;
  let lastTakenCourse = -1;

  for (let idx = prerequisites.length - 1; idx >= 0; idx--) {
    // console.log(prerequisites[idx]);
    const [first, second] = prerequisites[idx];
    // console.log({ takenCourseCount });
    if (second > first) return false;
    if (second < lastTakenCourse) continue;
    takenCourseCount += 2;
    lastTakenCourse = first;
  }

  return takenCourseCount === numCourses;
};
console.log(canFinish(numCourses, prerequisites));
