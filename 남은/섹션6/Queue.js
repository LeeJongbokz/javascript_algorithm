// 1.  배열로 구현

{
  class Queue {
    constructor() {
      this.data = [];
    }

    add(param) {
      this.data.unshift(param);
    }

    remove() {
      return this.data.pop();
    }
  }

  const qu = new Queue();
  qu.add(3);
  console.log(qu);
  qu.add(2);
  console.log(qu);
  qu.add(1);
  console.log(qu);
  console.log(qu.remove());
}

// 2. 직접 구현
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
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

// 3. BigO
// Insertion O(1)
// Deletion O(1)
// Search O(n)
// Access O(n)

// 큐 역시 스택과 동일한 시간 복잡도를 가진다.
// 즉, 자료가 삽입될 때는 자료의 맨 뒤에 자료가 삽입되는 연산만 수행되므로 O(1)로 표기할 수 있다.
// 자료의 삭제 또한 맨 앞의 자료가 삭제되는 동일한 연산이 수행되므로 O(1)로 표기된다.

// 자료를 검색할 때는 맨 앞의 요소부터 맨 마지막 요소까지 차례대로 검색해야 하기 때문에 시간 복잡도는 O(n)이다.

// 만약에 자료가 100개 존재할 때, 30번 째 요소를 삭제한다면 그 때의 시간 복잡도는 어떻게 될까?
// 100개 중에 30번째 요소를 찾기 위해 자료를 검색하는 데 O(n)만큼이 소요되고,
// 그 후 검색한 해당 요소를 삭제하는 연산은 O(1)만큼 소요된다.
// 따라서 어떤 위치의 요소를 삭제하든지 항상 O(1)의 시간 복잡도가 소요된다

// 출처: https://im-developer.tistory.com/121 [Code Playground]
