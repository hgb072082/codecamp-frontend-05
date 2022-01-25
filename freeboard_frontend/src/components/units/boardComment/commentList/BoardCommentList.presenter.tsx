import * as S from "./BoardCommentList.styles";
import "antd/dist/antd.css";
import { Rate } from "antd";
export default function BoardCommentListUI(props) {
  return (
    <>
      <S.Wrapper>
        {props.data?.fetchBoardComments.map((e) => (
          <S.CommentContainer key={e._id}>
            <S.Icon></S.Icon>
            <S.MainContentBox>
              <S.NameStarBox>
                <S.Name>{e?.writer}</S.Name>
              </S.NameStarBox>

              <S.Content>{e?.contents}</S.Content>
              <S.Date>{e?.createdAt}</S.Date>
              <Rate value={e?.rating} />
            </S.MainContentBox>
            <S.ReviseDelete>
              <S.Btn></S.Btn>
              <S.Btn id={e._id} onClick={props.onClickDelete}></S.Btn>
            </S.ReviseDelete>
          </S.CommentContainer>
        ))}
      </S.Wrapper>
    </>
  );
}
