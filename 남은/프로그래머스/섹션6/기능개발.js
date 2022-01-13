const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

function solution(progresses, speeds) {
  var answer = [];

  while (progresses.length > 0) {
    let today = 0;

    // 한 싸이클마다 speed만큼 더해준다.
    progresses.forEach((elem, idx) => {
      const newElem = elem + speeds[idx];
      progresses.splice(idx, 1, newElem);
    });

    // 맨 처음 엘레먼트가 100을 넘으면
    // 그 뒤로 연속적으로 100이 넘는 애들을 모두 카운트해서 answer에 담는다.
    if (progresses[0] >= 100) {
      // 하나만 제거 하는게 아니라, 100이 넘는 애들을 모두 카운트 후 제거해야 하므로 while문을 쓴다.
      while (progresses.length > 0) {
        const unshifted = progresses.shift();

        if (unshifted >= 100) {
          // speeds도 같은 위치의 엘레먼트를 제거해줘야 함
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
