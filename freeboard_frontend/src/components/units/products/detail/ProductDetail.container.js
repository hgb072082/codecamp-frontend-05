import ProductDetailUI from "./ProductDetail.presenter";
import { useQuery, useMutation, useApolloClient } from "@apollo/client";
import {
  FETCH_USED_ITEM,
  DELETE_USED_ITEM,
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  FETCH_USER_LOGGED_IN,
} from "./ProductDetail.queries";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";

export default function ProductDetail() {
  const client = useApolloClient();

  const { userInfo, setUserInfo } = useContext(GlobalContext);
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
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const onClickBuy = async () => {
    try {
      const result = await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: router.query.productNum },
      });
      console.log(result);
      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
      });
      const userInfo = resultUserInfo.data.fetchUserLoggedIn;
      console.log("유저인포는");
      console.log(userInfo);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      setUserInfo(userInfo);

      Modal.success({ content: "상품구매가 완료되었습니다." });
    } catch (e) {
      Modal.error({ content: e.message });
    }
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
        userInfo={userInfo}
        onClickBuy={onClickBuy}
      />
    </>
  );
}
