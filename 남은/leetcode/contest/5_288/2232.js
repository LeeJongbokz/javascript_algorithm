// 2232. Minimize Result by Adding Parentheses to Expression
// https://leetcode.com/contest/weekly-contest-288/problems/minimize-result-by-adding-parentheses-to-expression/

const expression = "247+38";
// const expression = "12+34";
// const expression = "999+999";
// const expression = "1+1";
// const expression = "99999999+9";
// const expression = "5+22";

// 첫 번째 수를 곱하는 편이 나은지만 보면 됨
// 247 -> 2/47
// 38

// 3가지 경우만 구하면 됨
// 247+38
// 2(47+38)

/**
 * @param {string} expression
 * @return {string}
 */
var minimizeResult = function (expression) {
  const [num1Str, num2Str] = expression.split("+");
  //   const [num1, num2] = [num1Str, num2Str].map((n) => n * 1);
  let answer = num1Str * 1 + num2Str * 1;

  let computed = answer;
  let stringAnswer = `(${expression})`;
  if (num1Str.length === 1 && num2Str.length === 1) return stringAnswer;

  const diff = num1Str.length - num2Str.length;
  console.log({ diff });

  let multiply1 = "";
  let rest1;
  let multiply2 = "";
  let rest2;
  //   if (restCount === 0) {
  //   } else
  const num1 = [...num1Str];
  const num2 = [...num2Str];

  if (diff >= 0) {
    while (num2.length) {
      console.log({ computed });

      console.log({ num2 });
      multiply1 += num1.shift();

      // num2에서 빼서 곱할 숫자에 넣기
      multiply2 = num2.pop() + multiply2;

      //   if (num2.length === num1.length) {
      // if (diff === multiply1.length || diff === multiply2.length) {

      multiply1 = multiply1 * 1;
      console.log({ multiply2 });

      if (!multiply2) {
        computed = multiply1 * 1 * (num1.join("") * 1 + num2.join("") * 1);

        if (computed < answer) {
          answer = computed;
          stringAnswer = `${multiply1}(${num1.join("") * 1}+${
            num2.join("") * 1
          })`;
          //   break;
        }
      } else {
        console.log({ num2 });
        multiply2 = multiply2 * 1;
        computed =
          multiply1 * (num1.join("") * 1 + num2.join("") * 1) * multiply2;

        if (computed < answer) {
          answer = computed;
          stringAnswer = `${multiply1}(${num1.join("") * 1}+${
            num2.join("") * 1
          })${multiply2}`;
          //   break;
        }
      }
    }
  } else {
    // while (condition) {}
  }

  return stringAnswer;
};
console.log(minimizeResult(expression));
// const first = [...num1Str];
// const first1 = first.shift() * 1;
// const rest1 = first.join("") * 1;
// //
// const second = [...num2Str];
// const first2 = second.pop() * 1;
// const rest2 = second.join("") * 1;
// computed = first1 * (rest1 + rest2) * first2;
// 곱한 값 구하기
// 1. 앞에서 곱한 값
//   answer = (num1Str[0] * 1);
// if (num1Str.length) {
// }

// 2. 뒤에서 곱한 값
