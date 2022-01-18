import {useRouter} from 'next/router'
import { useQuery } from '@apollo/client'
import { useMutation, gql } from "@apollo/client";
import * as styles from '../../../styles/fetch'
const FETCH_BOARD=gql`
query fetchBoard($boardId:ID!)
{

fetchBoard(boardId: $boardId){

_id
writer
title
contents


}


}


`

export default function FetchPage(){

const router = useRouter()

const {data} =useQuery(FETCH_BOARD,{variables:{
boardId:(router.query.aaa)


}})
console.log(data)

return(<>

    <styles.Wrapper>

<styles.Header>


    <styles.HeaderProfileImg src={`/Users/hwang-gyubin/Desktop/codecamp-frontend-05-gyubin/freeboard_frontend/public/profileImg.png`} />
    <styles.HeaderTextBox>
<styles.HeaderNameText>
{data?.fetchBoard.writer} 
</styles.HeaderNameText>
<styles.HeaderDateText>Date: 2021.02.18</styles.HeaderDateText>

    </styles.HeaderTextBox>
    <styles.HeaderYellowImgBox>
        <styles.HeaderYellowImg></styles.HeaderYellowImg>
    </styles.HeaderYellowImgBox>
</styles.Header>

<styles.BoardTitle>{data?.fetchBoard.title}</styles.BoardTitle>
<styles.BoardImg></styles.BoardImg>

<styles.BoardText>{data?.fetchBoard.contents}</styles.BoardText>

<styles.BoardVideo></styles.BoardVideo>



<styles.GoodBadBox>
<styles.GoodBadImg /><styles.GoodBadImg />
</styles.GoodBadBox>

    </styles.Wrapper>

</>



)


}