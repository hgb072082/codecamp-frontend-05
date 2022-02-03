import * as S from "./BoardCommentWrite.styles";
import { Rate } from "antd";
import "antd/dist/antd.css";

export default function BoardCommentWriteUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.Header>댓글</S.Header>
        <S.UserInputBox>
          <S.UserInput
            placeholder="작성자"
            onChange={props.onChangeWriter}
            defaultValue={props.e?.writer}
            readOnly={props.e?.writer}
          ></S.UserInput>
          <S.UserInput
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          ></S.UserInput>
          <Rate
            style={{ fontSize: "40px" }}
            onChange={props.onChangeRating}
            defaultValue={props.e?.rating}
          />
          ;
        </S.UserInputBox>

        <S.ContentBox>
          <S.Content
            maxLength={100}
            onChange={props.onChangeContents}
            defaultValue={props.e?.contents}
            placeholder={
             "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            }
          ></S.Content>
          <S.ContentFooter>
            <S.ContentLength>{props.contents.length}/100</S.ContentLength>
            <S.ContentSubmitBtn
              id={props.isEditing && props.e?.target?.id}
              onClick={
                props.isEditing ? props.onClickSubmitEdit : props.onClickWrite
              }
            >
              {props.isEditing ? "수정하기" : "등록하기"}
            </S.ContentSubmitBtn>
          </S.ContentFooter>
        </S.ContentBox>
      </S.Wrapper>
    </>
  );
}
