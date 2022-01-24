// function solution(s){
//     var answer = true;

//    let pBox=0;
//     let yBox=0;
// [...s].forEach((e)=>{
// if(e==="p"||e==="P"){pBox++} else if (e==="y"||e==="Y"){yBox++}
// })
// if(pBox===yBox){answer=true} else {answer=false}
//     return answer;
// }

// function solution(s) {
//     var answer = '';

// let arr= s.split(" ")

//  answer=arr.map(e=>e.split("").map((i,idx)=>idx%2===0?i.toUpperCase():i.toLowerCase()).join('')).join(" ")

//     return answer;
// }
