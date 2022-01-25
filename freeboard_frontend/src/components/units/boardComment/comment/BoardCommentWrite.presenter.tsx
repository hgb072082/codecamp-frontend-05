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
            value={props.writer}
          ></S.UserInput>
          <S.UserInput
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
            value={props.password}
          ></S.UserInput>
          <Rate
            style={{ fontSize: "40px" }}
            onChange={props.onChangeRating}
            value={props.rating}
          />
          ;
        </S.UserInputBox>

        <S.ContentBox>
          <S.Content
            maxLength={100}
            onChange={props.onChangeContents}
            value={props.contents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          ></S.Content>
          <S.ContentFooter>
            <S.ContentLength>{props.contents.length}/100</S.ContentLength>
            <S.ContentSubmitBtn onClick={props.onClickWrite}>
              등록하기
            </S.ContentSubmitBtn>
          </S.ContentFooter>
        </S.ContentBox>
      </S.Wrapper>
    </>
  );
}
