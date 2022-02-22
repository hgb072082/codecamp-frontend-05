import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Modal } from "antd";
import ProductCommentListUI from "./ProductCommentList.presenter";
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./ProductCommentList.queries";

export default function ProductCommentList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: String(router.query.productNum) },
  });

  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditemQuestions) {
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        }

        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  const onClickDelete = (_id) => async () => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: String(_id),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.productNum },
          },
        ],
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <ProductCommentListUI
        data={data}
        onClickDelete={onClickDelete}
        fetchMore={fetchMore}
        onLoadMore={onLoadMore}
      />
    </>
  );
}
