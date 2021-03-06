import * as S from "./ProductCommentList.styles";
import { useState } from "react";

import ProductCommentWrite from "../comment/ProductCommentWrite.container";
import ProductAnswerList from "../answerlist/ProductAnswerList.container";
import ProductAnswerWrite from "../answer/ProductAnswerWrite.container";
export default function ProductCommentListElement(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [isAnswering, setIsAnswering] = useState(false);
  const onClickReviseBtn = () => {
    setIsEditing((prev) => !prev);
  };
  const onClickAnswerBtn = () => {
    setIsAnswering((prev) => !prev);
  };
  return (
    <>
      {isEditing ? (
        <>
          <ProductCommentWrite e={props.e} isEditing={isEditing} />
        </>
      ) : (
        <>
          <S.CommentContainer>
            <S.Icon></S.Icon>
            <S.MainContentBox>
              <S.NameStarBox>
                <S.Name></S.Name>
              </S.NameStarBox>

              <S.Content>{props.e?.contents}</S.Content>
              {/* <S.Date>{getMyDate(props.e?.createdAt)}</S.Date> */}
            </S.MainContentBox>
            <S.ReviseDelete>
              <S.Btn onClick={onClickReviseBtn}> </S.Btn>
              <S.Btn
                id={props.e._id}
                onClick={props.onClickDelete(props.e._id)}
              ></S.Btn>
            </S.ReviseDelete>
            <S.ReviseDelete>
              <S.Btn onClick={onClickAnswerBtn}> </S.Btn>
            </S.ReviseDelete>
          </S.CommentContainer>
        </>
      )}
      <ProductAnswerList e={props.e} isAnswering={isAnswering} />
      {isAnswering && (
        <ProductAnswerWrite e={props.e} isAnswering={isAnswering} />
      )}
    </>
  );
}
