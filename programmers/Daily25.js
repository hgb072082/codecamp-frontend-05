function solution(s) {
  let numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  let answer = s;

  numbers.forEach((e, i) => {
    let arr = answer.split(e);
    answer = arr.join(i);
  });

  return Number(answer);
}
