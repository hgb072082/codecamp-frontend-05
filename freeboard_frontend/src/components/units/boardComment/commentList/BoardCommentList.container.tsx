import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Modal } from "antd";

import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentListUI from "./BoardCommentList.presenter";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import { useState } from "react";
export default function BoardCommentList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardNum) },
  });
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [password, setPassword] = useState("");
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);
  const onChangeIsOpen = () => {
    setDeleteIsOpen((prev) => !prev);
  };

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments) {
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        }
        console.log(prev.fetchBoardComments);
        console.log(fetchMoreResult.fetchBoardComments);
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  const onClickDeleteBtn = (id) => () => {
    setSelectedId(id);
    setDeleteIsOpen((prev) => !prev);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  async function onClickDelete() {
    setDeleteIsOpen(true);

    console.log(selectedId);

    try {
      await deleteBoardComment({
        variables: {
          password: password,
          boardCommentId: selectedId,
        },
        // refetchQueries: [
        //   {
        //     query: FETCH_BOARD_COMMENTS,
        //     variables: { boardId: router.query.boardNum },
        //   },
        // ],
        update(cache, { data }) {
          const deletedId = data.deleteBoardComment;
          cache.modify({
            fields: {
              fetchBoardComments: (prev, { readField }) => {
                const fileteredPrev = prev.filter(
                  (el) => readField("_id", el) !== deletedId
                );
                return [...fileteredPrev];
              },
            },
          });
        },
      });
    } catch (error) {
      Modal.error({ content: error.message });
      console.log("요기가문제야");
    }

    onChangeIsOpen();
  }

  return (
    <>
      <BoardCommentListUI
        data={data}
        onClickDelete={onClickDelete}
        onChangeIsOpen={onChangeIsOpen}
        onChangePassword={onChangePassword}
        deleteIsOpen={deleteIsOpen}
        onClickDeleteBtn={onClickDeleteBtn}
        fetchMore={fetchMore}
        onLoadMore={onLoadMore}
      />
    </>
  );
}
