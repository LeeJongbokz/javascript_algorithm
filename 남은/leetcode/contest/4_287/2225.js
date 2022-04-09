// 2225. Find Players With Zero or One Losses
// https://leetcode.com/contest/weekly-contest-287/problems/find-players-with-zero-or-one-losses/

// 한 번도 안 진 사람이랑, 한 번만 진 사람이랑 구해라
// 배열 안에 숫자 오름차순으로 정렬해서 리턴해라
// 루저 배열 따로 만들어서, 루저 배열에 없는 친구들만 리턴하기

/**
 * @param {number[][]} matches
 * @return {number[][]}
 */

const matches = [
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [5, 7],
  [4, 5],
  [4, 8],
  [4, 9],
  [10, 4],
  [10, 9],
];

// const matches = [
//   [1, 5],
//   [2, 5],
//   [2, 8],
//   [2, 9],
//   [3, 8],
//   [4, 7],
//   [4, 9],
//   [5, 7],
//   [6, 8],
// ];

// const matches = [
//   [2, 3],
//   [1, 3],
//   [5, 4],
//   [6, 4],
// ];
// const matches = [
//   [1, 5],
//   [1, 6],
//   [2, 5],
//   [2, 7],
//   [2, 8],
//   [3, 4],
//   [3, 9],
//   [4, 6],
//   [4, 9],
//   [5, 6],
//   [5, 8],
//   [6, 7],
//   [6, 8],
// ];
var findWinners = function (matches) {
  const answer = [[], []];
  const winners = {};
  const losers = {};
  const uniquePlayers = new Set();

  matches.forEach((elem) => {
    const [win, lose] = elem;
    uniquePlayers.add(win);
    uniquePlayers.add(lose);

    if (winners[win]) {
      winners[win] += 1;
    } else {
      winners[win] = 1;
    }

    if (losers[lose]) {
      losers[lose] += 1;
    } else {
      losers[lose] = 1;
    }
  });

  // console.log({ winners });

  const players = [...uniquePlayers];
  players.sort(function (a, b) {
    return a - b;
  });
  // console.log({ players });
  players.forEach((elem) => {
    if (!losers[elem] && winners[elem]) answer[0].push(elem);
    if (losers[elem] === 1) answer[1].push(elem);
  });

  return answer;
};
console.log(findWinners(matches));
