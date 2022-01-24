import { useQuery,gql } from '@apollo/client';
import BoardWrite from '../../../../src/components/units/board/09-write/BoardWrite.container'
import { useRouter} from "next/router"
const FETCH_BOARD = gql`
query fetchBoard($number:Int){

  fetchBoard(number:$number){

writer
title
contents

  }


}

`

export default function BoardEditPage() {
  const router = useRouter();
const {data} =useQuery(FETCH_BOARD,{

variables: {number:Number(router.query.mynumber)},

});


  return(
    <BoardWrite isEdit={true}  data={data}/>
  )
}