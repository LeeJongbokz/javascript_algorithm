# 기본

DFS: 깊이 우선 탐색

부모가 중간
왼쪽은 부모*2
오른쪽은 부모*2+1

길이 없으면 back한다.

# 종류

## 전위: 부 -> 왼 -> 오

## 중위: 왼 -> 부 -> 오

## 후위: 왼 -> 오 -> 부

# 기본 코드

```JavaScript
//  answer+=(v+' '); 위치에 따라 전, 중, 후위로 나뉨

            function solution(n){
                let answer="";
                function DFS(v){
                    if(v>7) return;
                    else{
                        answer+=(v+' ');
                        DFS(v*2);
                        DFS(v*2+1);
                    }
                }
                DFS(n);
                return answer;
            }

            console.log(solution(1));
```
