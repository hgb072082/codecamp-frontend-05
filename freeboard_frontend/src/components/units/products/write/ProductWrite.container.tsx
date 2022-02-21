import { useState } from "react";
import { useMutation } from "@apollo/client";
import ProductWriteUI from "./ProductWrite.presenter";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./ProductWrite.queries";
export default function BoardWrite(props) {
  const router = useRouter();
  const [createUseditemInput, setCreateUseditemInput] = useState({
    name: "",
    remarks: "",
    contents: "",
    price: 0,
  });
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const onChangeInput = (input) => (event) => {
    setCreateUseditemInput({
      ...createUseditemInput,
      [input]: event.target.value,
    });
  };

  const onClickSubmitBtn = async () => {
    try {
      const temp = { ...createUseditemInput };
      temp.price = Number(temp.price);
      setCreateUseditemInput(temp);
      const result = await createUseditem({
        variables: { createUseditemInput: temp },
      });
      console.log(result);
      router.push(`/products/${result?.data.createUseditem._id}`);
      Modal.success({ content: "상품이 등록되었습니다." });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  const onClickUpdate = async () => {
    try {
      const temp = { ...createUseditemInput };
      temp.price = Number(temp.price);
      setCreateUseditemInput(temp);
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: temp,
          useditemId: router.query.productNum,
        },
      });
      console.log(result);
      router.push(`/products/${router.query.productNum}`);
      Modal.success({ content: "상품이 수정되었습니다." });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  return (
    <ProductWriteUI
      createUseditemInput={createUseditemInput}
      onChangeInput={onChangeInput}
      onClickSubmitBtn={onClickSubmitBtn}
      isEdit={props.isEdit}
      data={props.data}
      onClickUpdate={onClickUpdate}
    />
  );
}
