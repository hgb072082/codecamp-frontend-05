//2일차


function boolean(input1, input2) {
	if(input1||input2) {
console.log("true")
  }
else{console.log("false")}
}

boolean(1,1)


function evenOdd(num) {
	if(num%2==1) {
console.log("Odd")
  }
else if(num==0){
console.log("Zero")

}
else{
console.log("Even")

}

}


function temperature(num){
	if(num<=18) {
console.log("조금춥네요")
	}
else if (num<=23){
console.log("날씨가 좋네요")
}

else {
console.log("조금 덥습니다")
}
}

function days(month) {
	if(month===1||month===3||month===5||month===7||month===8||month===10||month===12



) {
console.log("31")
  }
else if(month===2){
console.log("28")
}
else{console.log("30")}
  }
