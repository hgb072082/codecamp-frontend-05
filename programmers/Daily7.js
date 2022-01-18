function solution(num) {
    var answer = '';
    if(num%2===0){
answer="Even";
}else{answer="Odd"}
    return answer;
    
}
function solution(arr) {
    var answer = 0;
    let sum=0;
    arr.forEach((e)=>{
sum=sum+e;

})
    answer = sum/arr.length
    return answer;
}

function solution(s) {
    var answer = '';
    
    if(s.length%2===0){
answer=s[Math.floor(s.length/2-1)]+s[Math.floor(s.length/2)]

}else{
answer=s[Math.floor(s.length/2)]

}
    return answer;
}
