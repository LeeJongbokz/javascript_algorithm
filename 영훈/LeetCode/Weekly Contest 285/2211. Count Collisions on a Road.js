/**
 * @param {string} directions
 * @return {number}
 */
 var countCollisions = function(directions) {
  let answer = 0;
  let _directions = directions.split('');
  let rCnt = 0;
  for (let i = 0; i < _directions.length; i++) {
      if (_directions[i] === 'R') {
          if (_directions[i + 1] === 'L') {
              _directions[i] = 'S';
              _directions[i + 1] = 'S';
              answer += 2;
              answer += rCnt;
              rCnt = 0;
              i++;
          } else if (_directions[i + 1] === 'S') {
              _directions[i] = 'S';
              answer++;
              answer += rCnt;
              rCnt = 0;
          }
          else rCnt++; // 현재 R, 다음도 R
      }
      if (_directions[i] === 'L') {
          if (_directions[i - 1] === 'S') {
              _directions[i] = 'S';
              answer++;
          }
      }
  }
  return answer;
};