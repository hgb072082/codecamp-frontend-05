import ProductCommentWriteUI from "./ProductCommentWrite.presenter";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from "./ProductCommentWrite.queries";
import { useRouter } from "next/router";
import { Modal } from "antd";
export default function ProductCommentWrite(props) {
  const router = useRouter();
  const [comment, setComment] = useState();
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);
  const onChangeComment = (event) => {
    setComment(event.target.value);
    console.log(comment);
  };

  const onClickEditBtn = async () => {
    const input = {};
    if (comment) {
      input.contents = comment;
    }
    try {
      console.log(router.query.productNum);
      console.log(input);
      const result = await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: input,
          useditemQuestionId: String(props.e._id),
        },
      });
      console.log(result);
      Modal.success({ content: "댓글이 수정되었습니다." });
    } catch (error) {
      console.log(error.message);
    }
  };

  const onClickSubmitBtn = async () => {
    const input = {};
    if (comment) {
      input.contents = comment;
    }
    try {
      const result = await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: input,
          useditemId: router.query.productNum,
        },
      });
      console.log(result);
      Modal.success({ content: "댓글이 작성되었습니다." });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <ProductCommentWriteUI
      comment={comment}
      onChangeComment={onChangeComment}
      onClickSubmitBtn={onClickSubmitBtn}
      isEditing={props.isEditing}
      onClickEditBtn={onClickEditBtn}
    />
  );
}
