import axios from "axios";
import{useState} from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_BOARD=gql`

mutation {createProfile(name:"황규빈", age:23,school:"인하대학교"){

_id
number
message

}}


`


export default function TestApi() {
const [createBoard]=useMutation(CREATE_BOARD);
return(
<>
<button onClick={ async ()=>{

const result = await createBoard()
console.log(result)
}}>REST-API 요청하기</button>




</>)

}