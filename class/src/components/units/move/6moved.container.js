import {useRouter} from 'next/router'
import { useQuery } from '@apollo/client'
import { useMutation, gql } from "@apollo/client";
import MoveUI from './6moved.presenter';
const FETCH_BOARD = gql`
query fetchBoard($number:Int){

fetchBoard(number: $number) {

writer
title
contents

}

}


`

export default function DynamicRoutedPage(){

const router =  useRouter()

const {data}=useQuery(FETCH_BOARD, {variables

:{number:Number(router.query.aaa)}


})

return (

<MoveUI 

router={router}
data={data}
/>

)

}