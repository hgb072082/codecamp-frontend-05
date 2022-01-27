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
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardNum) },
  });
const [deleteIsOpen,setDeleteIsOpen] = useState(false);
const [selectedId,setSelectedId] = useState("");
const [password,setPassword]= useState("")
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);
const onChangeIsOpen = () => {

setDeleteIsOpen((prev)=>(!prev))

}

const onChangeBtn = () => {

setSelectedId(event.target.id)
setDeleteIsOpen((prev)=>(!prev))

}
const onChangePassword = (event) => {
setPassword(event.target.value)


}

  async function onClickDelete(event) {
    setDeleteIsOpen(true);
    setSelectedId(event.target.id)
    console.log(selectedId)

    try {
      console.log(event.target.id);
      await deleteBoardComment({
        variables: {
          password: password,
          boardCommentId: selectedId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardNum },
          },
        ],
      });
    } catch (error) {
      Modal.error((error.message));
    }

    onChangeIsOpen();
  }

  
  
  return (
    <>
      <BoardCommentListUI data={data} onClickDelete={onClickDelete} onChangeIsOpen={onChangeIsOpen} onChangePassword={onChangePassword} deleteIsOpen={deleteIsOpen} onChangeBtn={onChangeBtn}/>
    </>
  );
}
