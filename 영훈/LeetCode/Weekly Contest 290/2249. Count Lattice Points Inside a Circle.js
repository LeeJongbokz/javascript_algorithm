/**
 * @param {number[][]} circles
 * @return {number}
 */
 var countLatticePoints = function(circles) {
  // (0, 0), (4, 4), (2, 3), (4, 5)
  let ans = new Set();
  
  for (const c of circles) {
      let sx = c[0] - c[2];
      let sy = c[1] - c[2];
      let ex = c[0] + c[2];
      let ey = c[1] + c[2];
      for (let i = sx; i <= ex; i++) {
          for (let j = sy; j <= ey; j++) {
              let disX = i - c[0];
              let disY = j - c[1];
              let distance = Math.sqrt(disX * disX + disY * disY);
              if (distance <= c[2]) {
                  ans.add(`${i}, ${j}`);
              }
          }
      }
  }
  
  return ans.size;
};