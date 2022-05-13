// const arg = "1:30";
// const arg = "1:00";
// const arg = "15:00";
const arg = "16:40";

function solution(arg) {
  let answer = -1;

  let [hours, minutes] = arg.split(":").map((elem) => elem * 1);
  if (hours < 0 || hours > 24) return answer;
  if (minutes < 0 || minutes > 60) return answer;

  // if (hours > 12) hours = hours - 12;
  // console.log({ hours });

  // hour
  // 360/12 -> 30 degree (1 hour)
  // 30/60 -> .5 degree (1 min)

  // minutes
  // 30 min -> 180 degree
  // 1 min -> 6 degree
  answer = Math.abs(minutes * 6 - hours * 30);
  if (answer > 360 - answer) answer = 360 - answer;

  // const devider = 0.5;

  // hours = hours * 60;
  // answer = hours * devider - minutes * devider;

  return answer;
}

console.log(solution(arg));
