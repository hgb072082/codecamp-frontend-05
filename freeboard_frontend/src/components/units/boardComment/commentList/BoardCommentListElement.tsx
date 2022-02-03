import * as S from "./BoardCommentList.styles";
import { getMyDate } from "../../../commons/libraries/utils";
import { useState } from "react";

import BoardCommentWrite from "../comment/BoardCommentWrite.container";
import { Rate } from "antd";





export default function BoardCommentListElement(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const onClickReviseBtn = (event) => {
    setSelectedId(props.e._id);
    console.log(props.e);
    setIsEditing((prev)=>(!prev))
  
  
  
  }



  


  

  return (
    <>{

        isEditing ? <>
        
        
        <BoardCommentWrite e={props.e} isEditing={isEditing} selectedId={selectedId} setIsEditing={setIsEditing} />
        
        
        
        
        </>  :

      <S.CommentContainer>
        <S.Icon></S.Icon>
        <S.MainContentBox>
          <S.NameStarBox>
            <S.Name>{props.e?.writer}</S.Name>
          </S.NameStarBox>

          <S.Content>{props.e?.contents}</S.Content>
          <S.Date>{getMyDate(props.e?.createdAt)}</S.Date>
          <Rate value={props.e?.rating} />
        </S.MainContentBox>
        <S.ReviseDelete >
          <S.Btn onClick={onClickReviseBtn}> </S.Btn>
          <S.Btn id={props.e._id} onClick={props.onClickDeleteBtn}></S.Btn>
        </S.ReviseDelete>
      </S.CommentContainer>
      
      
      
      }
    </>
  );
}
