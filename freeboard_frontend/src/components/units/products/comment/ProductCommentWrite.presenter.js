import * as Styles from "./ProductCommentWrite.styles";

export default function ProductCommentWriteUI(props) {
  return (
    <>
      <Styles.Wrapper>
        <Styles.Header></Styles.Header>
        <Styles.ContentBox>
          <Styles.Content
            onChange={props.onChangeComment}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          ></Styles.Content>
          <Styles.ContentFooter>
            <Styles.ContentLength>
              {props.comment ? props.comment.length : 0}/100
            </Styles.ContentLength>
            <Styles.CommentSubmitBtn
              onClick={
                props.isEditing ? props.onClickEditBtn : props.onClickSubmitBtn
              }
            >
              {props.isEditing ? "수정하기" : "문의하기"}
            </Styles.CommentSubmitBtn>
          </Styles.ContentFooter>
        </Styles.ContentBox>
      </Styles.Wrapper>
    </>
  );
}
