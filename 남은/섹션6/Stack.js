// 1. 배열로 구현
{
  class Stack {
    constructor() {
      this.data = [];
    }

    push(param) {
      this.data.push(param);
    }
    pop() {
      return this.data.pop();
    }
    peek() {
      return this.data[this.data.length - 1];
    }
  }
}

// 2. 직접 구현
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

// 실사용 예시
// Real Life Use Cases

// 호출 스택(Call Stack): 예를 들어서 자바스크립트에서 모든 함수 호출은 스택 자료 구조로 이루어져있다. 특히 재귀함수를 사용할 때 중요하게 다뤄진다. (https://im-developer.tistory.com/102?category=831368)
// Undo/Redo Mechanism: 만약에 우리가 포토샵같은 프로그램을 켜서 사진 작업을 한다고 해보자. 사진을 밝게 조절하기도 하고 색깔 톤을 조절하기도 하고 필터를 사용할 수도 있다. 작업을 하다가 결과가 마음에 안들면 언제든지 Ctrl+Alt+Z를 눌러서 방금전의 작업들을 뒤에서부터 순차적으로 취소할 수 있다. 이러한 매커니즘도 스택과 같은 자료구조라고 할 수 있다. 우리가 실행한 보정 작업들이 순차적으로 스택 구조로 저장되고 취소 단축키를 누를 때마다 맨 위의 자료들이 삭제되기 때문이다.

// 출처: https://im-developer.tistory.com/121 [Code Playground]

// 알고리즘 문제
// 올바른 괄호
