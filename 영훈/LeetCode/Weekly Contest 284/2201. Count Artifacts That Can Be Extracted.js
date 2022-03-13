/**
 * @param {number} n
 * @param {number[][]} artifacts
 * @param {number[][]} dig
 * @return {number}
 */
 var digArtifacts = function(n, artifacts, dig) {
  // 0, 1, 1, 2 -> 01 02 11 12
  let answer = 0;
  let digArr = Array.from(Array(1001), () => Array(1001).fill(0));
  
  for (const d of dig) {
      digArr[d[0]][d[1]] = 1;
  }
  
  for (const a of artifacts) {
      let sy = a[0];
      let sx = a[1];
      let ey = a[2];
      let ex = a[3];
      let check = true;
      for (let y = sy; y <= ey; y++) {
          for (let x = sx; x <= ex; x++) {
              // let find = dig.find(arr => arr[0] === y && arr[1] === x);
              // if (find === undefined) {
              //     check = false;
              //     break;
              // }
              if (!digArr[y][x]) {
                  check = false;
                  break;
              }
          }
          if (!check) break;
      }
      if (check) answer++;
  }
  return answer;
};