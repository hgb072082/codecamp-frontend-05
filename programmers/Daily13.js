function solution(arr, divisor) {
  var answer = [];

  answer = arr.filter((e) => {
    return e % divisor === 0;
  });
  console.log(answer);

  if (answer.length > 0) {
    answer.sort(function (a, b) {
      return a - b;
    });
  } else answer.push(-1);
  return answer;
}

solution([1, 3, 5], 2);
