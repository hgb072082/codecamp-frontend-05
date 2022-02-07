
function solution(a, b) {
   
    let days = [31,29,31,30,31,30,31,31,30,31,30] 
    let sum=0;
    if(a===1){sum=0}else{
 for (let i=a-2; i>-1 ;i--) {
 sum+=days[i]
 }    }
 let realDays=sum+b;
   console.log(realDays)
     let yoil = ["THU","FRI","SAT","SUN","MON","TUE","WED"]
 let answer = yoil[Math.floor(realDays%7)]
     return answer;
 }
 