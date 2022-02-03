function solution(absolutes, signs) {
    var answer = 0;
  
    signs.forEach((e,i)=>{if(e===true){answer=answer+absolutes[i]} else {answer=answer-absolutes[i]}})
    
    return answer;
}



function solution(x) {
    var answer = true;
    const arr =String(x).split("")
    let sum=0;
   const newArr= arr.map((e)=>(+e))
    newArr.forEach((e)=>{sum+=e})
    console.log(sum)
    if(x%sum===0){answer=true}else{answer=false}
    return answer;
}