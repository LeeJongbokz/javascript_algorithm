const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

function solution(progresses, speeds) {
  var answer = [];

  while (progresses.length > 0) {
    let today = 0;
    progresses.forEach((elem, idx) => {
      const newElem = elem + speeds[idx];
      progresses.splice(idx, 1, newElem);
    });

    //
    if (progresses[0] >= 100) {
      while (progresses.length > 0) {
        const unshifted = progresses.shift();

        if (unshifted >= 100) {
          speeds.shift();
          today++;
        }
        //   100보다 작으면 도로 넣는다
        else {
          progresses.unshift(unshifted);
          break;
        }
      }

      answer.push(today);
    }
  }

  return answer;
}

console.log(solution(progresses, speeds));
