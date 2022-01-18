function solution(s) {
    var answer = Number(s)
    return answer;
}




function solution(arr)
{
    var answer = [];

   arr.forEach((e)=>{
if(answer[answer.length-1]!==e){
answer.push(e);


}


})
    return answer;
}

solution([1,4,2,4,2,2,23,2,4,5,2,2,4,4,4])

function solution(phone_number) {
    var answer = '';
    
    let arr = [...phone_number]
    for (let i =0; i<(arr.length)-4;i++){
arr[i]='*';
        
}
    
    
    answer=arr.join("");
  
    
    return answer;
}
