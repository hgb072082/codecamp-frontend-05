function solution(a, b) {
    var answer = 0;
    if(a<b){
    for (let i = 0; i<b-a+1;i++){
answer=answer+(a+i)

}}else {for (let i = 0; i<a-b+1;i++){
answer=answer+(b+i)

}}
    return answer;
}


function solution(n) {
    var answer = 0;
    if (Math.floor(Math.sqrt(n))===Math.sqrt(n)){return (Math.sqrt(n)+1)*(Math.sqrt(n)+1)}else return -1
  
}

