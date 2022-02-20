import ProductCommentWriteUI from "./ProductCommentWrite.presenter";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM_QUESTION } from "./ProductCommentWrite.queries";
import { useRouter } from "next/router";
export default function ProductCommentWrite() {
  const router = useRouter();
  const [comment, setComment] = useState();
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const onChangeComment = (event) => {
    setComment(event.target.value);
    console.log(comment);
  };

  const onClickSubmitBtn = async () => {
    const input = {};
    if (comment) {
      input.contents = comment;
    }
    try {
      console.log(localStorage.getItem("accessToken"));
      console.log(router.query.productNum);
      console.log(input);
      const result = await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: input,
          useditemId: router.query.productNum,
        },
      });
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <ProductCommentWriteUI
      comment={comment}
      onChangeComment={onChangeComment}
      onClickSubmitBtn={onClickSubmitBtn}
    />
  );
}
