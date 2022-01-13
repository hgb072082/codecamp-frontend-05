import axios from "axios";
import{useState} from "react";

export default function TestApi() {

return(
<>
<button onClick={ async ()=>{

const result = await axios.get("https://koreanjson.com/users")
console.log(result);

}}>REST-API 요청하기</button>




</>)

}