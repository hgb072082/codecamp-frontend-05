function solution(n, lost, reserve) {
  var answer = 0;
  const extraArr = reserve.filter((e, i) => !lost.includes(e));
  const realNoHave = lost.filter((e, i) => !reserve.includes(e));

  realNoHave.forEach((e, i) => {
    if (i === 0 && extraArr.includes(e + 1)) {
      realNoHave.splice(realNoHave.findIndex(e), 1);
      extraArr.splice(extraArr.findIndex(e + 1), 1);
    } else if (extraArr.includes(e - 1)) {
      extraArr.splice(extraArr.findIndex(e - 1), 1);
      realNoHave.splice(realNoHave.findIndex(e), 1);
    } else if (extraArr.includes(e + 1)) {
      extraArr.splice(extraArr.findIndex(e + 1), 1);
      realNoHave.splice(realNoHave.findIndex(e), 1);
    }
  });
  answer = n - realNoHave;

  return answer;
}
