function grade(score) {

  if(score>100||score<0){
return ("잘못된 점수입니다.")
}
else if (score>=90){

return("A")
}
else if (score>=80){return ("B")}
else if (score>=70){return ("C")}
else if (score>=60){return ("D")}
else if (score<=59){return ("F")}

}

grade(87);

const myShopping = [
		{ category: "과일", price: 12000　},
		{ category: "의류", price:10000　 },
		{ category: "의류", price: 20000　},
		{ category: "장난감", price: 9000 },
		{ category: "과일", price: 5000　 },
		{ category: "의류", price: 10000  },
		{ category: "과일", price: 8000　　},
		{ category: "의류", price: 7000　　},
		{ category: "장난감", price: 5000  },
		{ category: "의류", price: 10000　 },
]
function ads (shop){
count=0;
shop.forEach((e)=>{

if(e.category==="의류")
count++
  
}

)
console.log(count)
if(count<=2){
console.log("Bronze")
}else if (count <=4){

console.log("Silver")
}
else{console.log("Gold")}
}

ads(myShopping)
