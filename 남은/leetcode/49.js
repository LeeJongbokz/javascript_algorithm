// 아나그램 찾는 문제,
// Map에 알파벳 수 넣어놓고, 그 조합이 같은 애들을 찾아야 한다.
// 알파벳순으로 정렬해서 하나의 스트링으로 만들고 그게 같은 지를 비교..?
// 예)
// eat -> a1a1t1
// tea -> a1e1t1
// tan -> a1n1t1
// ate -> a1e1t1

// 배열에서 같은애는 뺴서 답어레이에 넣기
// 0번째 부터 시작해서 더 이상 없으면 그 다음 인덱스로 넘어가기
// (어쩌피 앞에서 뤂 한 번 돌면서 같은 애들은 다 빼가서 바로 다음 인덱스로 넘어가도 된다.)
// const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const strs = [""];
// const strs = ["a"];
const strs = ["", "", ""];
var groupAnagrams = function (strs) {
  const strsOriginal = [...strs];
  const answer = [];

  strs.forEach((elem, idx) => {
    let elememt = [...elem].sort().join("");
    strs.splice(idx, 1, {
      text: elememt,
      original: strsOriginal[idx],
      idx,
      deleted: false,
    });
  });

  strs.forEach((elem) => {
    const arr = [elem.original];
    if (elem.deleted) return;

    strs.forEach((elem2) => {
      if (elem.idx === elem2.idx || elem2.deleted) return;

      if (elem.text === elem2.text) {
        elem2.deleted = true;
        arr.push(elem2.original);
      }
    });

    answer.push(arr);
  });

  return answer;
};

console.log(groupAnagrams(strs));
