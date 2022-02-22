import * as S from "./ProductAnswerList.styles";
import "antd/dist/antd.css";

import InfiniteScroll from "react-infinite-scroller";
import ProductAnswerListElement from "./ProductAnswerListElement";

export default function ProductAnswerListUI(props) {
  return (
    <>
      <S.Wrapper>
        {props.data?.fetchUseditemQuestionAnswers.map((e, i) => (
          <InfiniteScroll
            key={i}
            pageStart={0}
            loadMore={props.onLoadMore} // 스크롤 내릴 시 실행되는 함수
            hasMore={true}
          >
            댓글
            <ProductAnswerListElement
              e={e}
              key={e.id}
              onClickDelete={props.onClickDelete}
              fetchMore={props.fetchMore}
              data={props.data}
              isAnswering={props.isAnswering}
            />
          </InfiniteScroll>
        ))}
      </S.Wrapper>
    </>
  );
}
