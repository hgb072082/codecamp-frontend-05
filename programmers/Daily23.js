function solution(answers) {
  var answer = [];
  const num1 = [];
  const num2 = [];
  const num3 = [];
  let num1Count = 0;
  let num2Count = 0;

  let num3Count = 0;

  answers.forEach((e, i) => {
    if ((i + 1) % 5 === 1) {
      num1.push(1);
    }
    if ((i + 1) % 5 === 2) {
      num1.push(2);
    }
    if ((i + 1) % 5 === 3) {
      num1.push(3);
    }
    if ((i + 1) % 5 === 4) {
      num1.push(4);
    }
    if ((i + 1) % 5 === 0) {
      num1.push(5);
    }
    if ((i + 1) % 8 === 1) {
      num2.push(2);
    }
    if ((i + 1) % 8 === 2) {
      num2.push(1);
    }
    if ((i + 1) % 8 === 3) {
      num2.push(2);
    }
    if ((i + 1) % 8 === 4) {
      num2.push(3);
    }
    if ((i + 1) % 8 === 5) {
      num2.push(2);
    }
    if ((i + 1) % 8 === 6) {
      num2.push(4);
    }
    if ((i + 1) % 8 === 7) {
      num2.push(2);
    }
    if ((i + 1) % 8 === 0) {
      num2.push(5);
    }
    if ((i + 1) % 10 === 1) {
      num3.push(3);
    }
    if ((i + 1) % 10 === 2) {
      num3.push(3);
    }
    if ((i + 1) % 10 === 3) {
      num3.push(1);
    }
    if ((i + 1) % 10 === 4) {
      num3.push(1);
    }
    if ((i + 1) % 10 === 5) {
      num3.push(2);
    }
    if ((i + 1) % 10 === 6) {
      num3.push(2);
    }
    if ((i + 1) % 10 === 7) {
      num3.push(4);
    }
    if ((i + 1) % 10 === 8) {
      num3.push(4);
    }
    if ((i + 1) % 10 === 9) {
      num3.push(5);
    }
    if ((i + 1) % 10 === 0) {
      num3.push(5);
    }
  });
  answers.forEach((e, i) => {
    if (e === num1[i]) {
      num1Count++;
    }
    if (e === num2[i]) {
      num2Count++;
    }
    if (e === num3[i]) {
      num3Count++;
    }
  });
  if (num1Count === Math.max(num1Count, num2Count, num3Count)) {
    answer.push(1);
  }
  if (num2Count === Math.max(num1Count, num2Count, num3Count)) {
    answer.push(2);
  }
  if (num3Count === Math.max(num1Count, num2Count, num3Count)) {
    answer.push(3);
  }

  return answer;
}
