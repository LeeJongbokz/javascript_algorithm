// 567. Permutation in String
// https://leetcode.com/problems/permutation-in-string/

// const s1 = "ab",
//   s2 = "eidbaooo";

// const s1 = "ab",
//   s2 = "eidboaoo";

// const s1 = "ab",
//   s2 = "ab";

const s1 = "hello",
  s2 = "ooolleoooleh";

// const s1 = "adc",
//   s2 = "dcda";

// const s1 = "abc",
//   s2 = "bbbca";

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

// 슬라이딩 윈도우 + 해쉬맵 문제임
// s1 해쉬맵에 넣어놓고 카피 만들어두기

// s3을 돌면서 s1 길이만큼 연속해서 해쉬맵 밸류들을 --하고
// 결국 모두 0으로 만들어야 함(딜리트)

// -1이 나오거나 밸류중에 0이 아닌 (남아있는) 키가 있다면
// 반복문 인덱스를 그 다음으로 옮겨야 함(슬라이딩 윈도우)

var checkInclusion = function (s1, s2) {
  let matchCheck = new Map();
  let mapCopy;
  if (s1 === s2) return true;
  s1 = [...s1];
  s2 = [...s2];

  if (s2.length < s1.length) return false;

  let start = 0;
  let chars = [];

  let answer = false;
  for (let idx = 0; idx < s1.length; idx++) {
    // 먼저 해쉬맵 만들기
    const letter = s1[idx];
    if (matchCheck.get(letter)) {
      const num = matchCheck.get(letter);
      matchCheck.set(letter, num + 1);
    } else {
      matchCheck.set(letter, 1);
    }
    // 카피본 저장
    mapCopy = new Map(matchCheck);
    console.log({ mapCopy });

    // 첫 번째 체크
    chars.push(s2[idx]);
    start++;
  }

  // 해쉬맵 원복
  matchCheck = new Map(mapCopy);

  //   return;
  while (start < s2.length + 1) {
    //
    // 해쉬맵 제거(체크) ++ 카운트 체크
    let answer = false;

    // 해쉬맵 원복
    matchCheck = new Map(mapCopy);

    // console.log({ chars });
    // console.log({ matchCheck });
    for (let idx = 0; idx < chars.length; idx++) {
      const elem = chars[idx];
      if (!matchCheck.get(elem)) {
        answer = false;
        // sliding
        break;
      } else {
        // answer = true;
        const num = matchCheck.get(elem);
        matchCheck.set(elem, num - 1);

        // console.log({ matchCheck });
        // 모두 0 체크
        if (![...matchCheck.values()].find((item) => item === 0)) answer = true;
      }
    }

    // console.log({ answer });
    if (answer) return answer;

    // 슬라이딩
    chars.splice(0, 1);
    chars.push(s2[start]);
    // }

    // console.log({ matchCheck });

    start++;
  }
  return false;
};

console.log(checkInclusion(s1, s2));
