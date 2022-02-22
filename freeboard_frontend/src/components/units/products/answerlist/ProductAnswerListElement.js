import * as S from "./ProductAnswerList.styles";
import { useState } from "react";

import ProductAnswerWrite from "../answer/ProductAnswerWrite.container";
export default function ProductAnswerListElement(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const onClickReviseBtn = (event) => {
    setSelectedId(props.e._id);
    console.log(props.e);
    setIsEditing((prev) => !prev);
  };

  return (
    <>
      {isEditing ? (
        <>
          <ProductAnswerWrite
            e={props.e}
            isEditing={isEditing}
            selectedId={selectedId}
            setIsEditing={setIsEditing}
          />
        </>
      ) : (
        // hasmore가 true일때에
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
          </S.CommentContainer>
        </>
      )}
    </>
  );
}
