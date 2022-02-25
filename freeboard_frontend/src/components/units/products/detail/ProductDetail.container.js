import ProductDetailUI from "./ProductDetail.presenter";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_USED_ITEM, DELETE_USED_ITEM } from "./ProductDetail.queries";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { useState } from "react";

export default function ProductDetail() {
  const router = useRouter();
  const [isAddressFetchModalOn, setIsAddressFetchModalOn] = useState(false);
  const onClickGps = () => {
    setIsAddressFetchModalOn((prev) => !prev);
  };
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productNum },
  });
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const onClickMoveToList = () => {
    router.push("/products");
  };

  const onClickMoveToEdit = () => {
    router.push(`/products/${router.query.productNum}/edit`);
  };

  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: router.query.productNum },
      });
      Modal.success({ content: "삭제를 완료하였습니다!" });
      router.push("/products");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  return (
    <>
      <ProductDetailUI
        data={data}
        onClickMoveToList={onClickMoveToList}
        onClickMoveToEdit={onClickMoveToEdit}
        onClickDelete={onClickDelete}
        isAddressFetchModalOn={isAddressFetchModalOn}
        onClickGps={onClickGps}
      />
    </>
  );
}
