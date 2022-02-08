

function solution(n, m) {
    let answer=[];
  let arr=[];
    let a=n;
    let b=m;
    let max=1;
    let min=1;
    for (let i = Math.min(n,m); i>1; i--) {
      
if(a%i===0 && b%i===0)
    {arr.push(i);
a=a/i; b=b/i;
}

      
    } 
  arr.forEach((e)=>{min=min*e; })
  console.log(min)
  console.log(arr)
  console.log(a,b)
  max=min*a*b;
  console.log(max)
    answer.push(max);
    answer.push(min);
    return answer;
}
