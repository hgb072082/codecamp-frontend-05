import * as S from "./BoardCommentList.styles";
import "antd/dist/antd.css";
import { Modal } from "antd";
import BoardCommentListElement from "./BoardCommentListElement";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardCommentListUI(props) {
  return (
    <>
      <S.Wrapper>
        {props.deleteIsOpen && (
          <Modal
            title="Basic Modal"
            visible={true}
            onOk={props.onClickDelete}
            onCancel={props.onChangeIsOpen}
          >
            <S.PasswordInput
              type="password"
              onChange={props.onChangePassword}
            />
          </Modal>
        )}
        {props.data?.fetchBoardComments.map((e, i) => (
          <InfiniteScroll
            key={i}
            pageStart={0}
            loadMore={props.onLoadMore} // 스크롤 내릴 시 실행되는 함수
            hasMore={true}
          >
            <BoardCommentListElement
              e={e}
              key={e.id}
              onClickDeleteBtn={props.onClickDeleteBtn(e._id)}
              fetchMore={props.fetchMore}
              data={props.data}
            />
          </InfiniteScroll>
        ))}
      </S.Wrapper>
    </>
  );
}
