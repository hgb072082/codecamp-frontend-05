// import { useQuery } from "@apollo/client";
// import ProductAnswerListUI from "./ProductAnswerList.presenter";
// import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "./ProductAnswerList.queries";

// export default function ProductAnswerList(props) {
//   const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS);
//   console.log(data);
//   return <ProductAnswerListUI data={data} />;
// }

import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import ProductAnswerListUI from "./ProductAnswerList.presenter";
import {
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  DELETE_USED_ITEM_QUESTION_ANSWER,
} from "./ProductAnswerList.queries";

export default function ProductAnswerList(props) {
  const { data, fetchMore } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: String(props.e?._id) },
  });

  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  );

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data.fetchUseditemQuestionAnswers.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditemQuestionAnswers) {
          return {
            fetchUseditemQuestionAnswers: [
              ...prev.fetchUseditemQuestionAnswers,
            ],
          };
        }

        return {
          fetchUseditemQuestionAnswers: [
            ...prev.fetchUseditemQuestionAnswers,
            ...fetchMoreResult.fetchUseditemQuestionAnswers,
          ],
        };
      },
    });
  };

  const onClickDelete = (_id) => async () => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: String(_id),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.e._id },
          },
        ],
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <ProductAnswerListUI
        data={data}
        onClickDelete={onClickDelete}
        fetchMore={fetchMore}
        onLoadMore={onLoadMore}
        isAnswering={props.isAnswering}
      />
    </>
  );
}
