
function solution(seoul) {
    var answer = '';
    answer=`김서방은 ${seoul.findIndex((e)=>e==="Kim")}에 있다`
    return answer;
}

function solution(s) {
    var answer = true;
   
   for(let i =0;i<s.length;i++){
if(isNaN(s[i])||!(s.length===4||s.length===6)){answer=false}
}
   
    return answer;
}

function solution(n) {
    var answer = 0;
    for(let i =1;i<=Math.floor(n/2);i++){
if(n%i===0){
answer+=i
}

}
    answer+=n;
    
    return answer;
}