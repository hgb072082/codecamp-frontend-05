import { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "./ProductAnswerWrite.queries";
import { useRouter } from "next/router";
import { Modal } from "antd";
import ProductAnswerWriteUI from "./ProductAnswerWrite.presenter";
export default function ProductAnswerWrite(props) {
  const router = useRouter();
  const [answer, setAnswer] = useState();
  const [createUseditemAnswer] = useMutation(CREATE_USED_ITEM_QUESTION_ANSWER);
  const [updateUseditemAnswer] = useMutation(UPDATE_USED_ITEM_QUESTION_ANSWER);
  const onChangeAnswer = (event) => {
    setAnswer(event.target.value);
    console.log(answer);
  };

  const onClickEditBtn = async () => {
    const input = {};
    if (answer) {
      input.contents = answer;
    }
    try {
      console.log(props.e._id);
      const result = await updateUseditemAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: input,
          useditemQuestionAnswerId: String(props.e._id),
        },
      });
      console.log(result);
      Modal.success({ content: "대댓글이 수정되었습니다." });
    } catch (error) {
      console.log(error.message);
    }
  };

  const onClickSubmitBtn = async () => {
    const input = {};
    if (answer) {
      input.contents = answer;
    }
    try {
      console.log(props.e._id);
      const result = await createUseditemAnswer({
        variables: {
          createUseditemQuestionAnswerInput: input,
          useditemQuestionId: props.e._id,
        },
      });
      console.log(result);
      Modal.success({ content: "대댓글이 작성되었습니다." });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <ProductAnswerWriteUI
      answer={answer}
      onChangeAnswer={onChangeAnswer}
      onClickSubmitBtn={onClickSubmitBtn}
      isEditing={props.isEditing}
      onClickEditBtn={onClickEditBtn}
    />
  );
}
