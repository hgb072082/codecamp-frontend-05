function sum (num)
{
return num*(num+1)/2

}

sum(4)

function countLetter(str) {
	let count = 0;
  for(let i=0;i<str.length;i++){
if(str[i]=='a'||str[i]=='A'){count++}
}
return count;
}

countLetter("i am from korea")


function makeNumber(num) {
	let str = '';
  if(num==1){
return String(num);
    }else if(num===0){
return String(num);
}
  else {  
str='1'
for(let i=2;i<num+1;i++){
str=str+'-'+String(i);
    

}
return str;
}
}

makeNumber(5);


function makeOdd(num) 
{	let str = '';

for (let i = 1; i<num/2+1;i++){

str=str+String(2*i-1)
}
 return str;
}

makeOdd(7)

function bigNum(str) {
	let biggest = 0;
  biggest=Math.max(...str);
  return(biggest)
  
}
bigNum("12349")
