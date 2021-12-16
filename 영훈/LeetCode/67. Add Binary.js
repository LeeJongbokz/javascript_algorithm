var addBinary = function(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let sum = '';

  for (; i >= 0 || j >= 0 || carry > 0; i--, j--) {
    const binary1 = i < 0 ? 0 : a[i] - '0';
    const binary2 = j < 0 ? 0 : b[j] - '0';
    const binarySum = binary1 + binary2 + carry;
    sum = `${binarySum % 2}${sum}`;
    carry = Math.floor(binarySum / 2);
  }

  return sum;
};

let a = "1010", b = "1011";
console.log(addBinary(a, b));