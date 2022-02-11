const object1 = {};
const object2 = {};
var answer;
function solution(participant, completion) {
  participant.forEach((element) => {
    if (object1[element]) {
      object1[element] += 1;
    } else {
      object1[element] = 1;
    }
  });

  completion.forEach((element) => {
    if (element in object2) {
      object2[element] += 1;
    } else {
      object2[element] = 1;
    }
  });

  for (var name in object1) {
    if (object2[name] && object1[name] > object2[name]) {
      answer = name;

      return answer;
    } else if (!(name in object2)) {
      answer = name;

      return answer;
    }
  }
}

// //else if (!(name in object2)) {
// //answer = name;
// //}

// function solution(participant, completion) {
//     var answer = '';

//     const parSet=new Set(participant)
//     const comSet=new Set(completion)
//     const parArr=[...parSet];
//     const comArr=[...comSet];
//     parArr.forEach((e,i)=>{if(!comArr.includes(e)){answer=e }})
//     return answer;
// }
