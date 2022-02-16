function solution(n) {
  var answer = 0;

  let firstNum = 1;
  let secondNum = 0;
  let box;
  for (let i = 1; i < n; i++) {
    box = firstNum % 1234567;
    firstNum = (firstNum + secondNum) % 1234567;
    secondNum = box;
  }
  answer = firstNum;
  return answer;
}
