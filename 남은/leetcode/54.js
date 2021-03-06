// 54. Spiral Matrix
// https://leetcode.com/problems/spiral-matrix/
// 시계방향(빵모양)으로 숫자 출력
// [[1,2,3],[4,5,6],[7,8,9]]
// ->
// [1,2,3],
// [4,5,6],
// [7,8,9]]
// =>
// [1,2,3,6,9,8,7,4,5]

//
// [(0/0),(0/1),(0/2)],
// [(1/0),(1/1),(1/2)],
// [(2/0),(2/1),(2/2)]]

// 가장 x인덱스가 작은
//
// y가 0이고 x가 0부터 length까지 쭉 돌고
// y가 length고 x가 0+1부터 length까지 쭉 돌고
// x가 length고 y가 length-1부터 0까지 쭉 돌고
// y가 0이고 x가 length-1부터 0+1까지 쭉 돌고
//
// y가 0+1이고 x가 0+1부터 length-1-1까지 쭉 돌고...
//
// 어디까지 반복?
// 없어질 때까지
// -> 돌면서 답 배열에 넣은 애들은 0으로 바꾸기
// -> 0으로 바꾸면 위에 length까지 쭉 돌기 말고 0만날때까지 돌기... 이렇게도 될듯
