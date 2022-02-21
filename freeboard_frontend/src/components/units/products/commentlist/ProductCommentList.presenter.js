import * as S from "./ProductCommentList.styles";
import "antd/dist/antd.css";

import InfiniteScroll from "react-infinite-scroller";
import ProductCommentListElement from "./ProductCommentListElement";

export default function ProductCommentListUI(props) {
  console.log(props.data?.fetchUseditemQuestions);
  return (
    <>
      <S.Wrapper>
        {props.data?.fetchUseditemQuestions.map((e, i) => (
          <InfiniteScroll
            key={i}
            pageStart={0}
            loadMore={props.onLoadMore} // 스크롤 내릴 시 실행되는 함수
            hasMore={true}
          >
            <ProductCommentListElement
              id={e._id}
              e={e}
              key={e.id}
              onClickDelete={props.onClickDelete}
              fetchMore={props.fetchMore}
              data={props.data}
            />
          </InfiniteScroll>
        ))}
      </S.Wrapper>
    </>
  );
}
