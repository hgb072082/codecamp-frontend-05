import ProductListUI from "./ProductList.presenter";
import { FETCH_USED_ITEMS } from "./ProductList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
export default function ProductList() {
  const router = useRouter();

  useEffect(() => {
    const temp = [];
    if (localStorage.getItem("basket")) {
      temp.push(JSON.parse(localStorage.getItem("basket")));
    }
    setIsSaw(temp);
  }, []);
  const [isSaw, setIsSaw] = useState([]);
  const { data } = useQuery(FETCH_USED_ITEMS, {
    variables: { page: 1, search: "", isSoldout: false },
  });
  // const { data } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);
  console.log(data);
  const onClickProduct = (el) => () => {
    let isExist = false;
    console.log(el);

    const baskets = JSON.parse(localStorage.getItem("basket") || "[]"); // [{_id: 1, writer: 영희}, {_id: 2, writer: 훈이}, {_id: 3, writer: 철수}]
    // const temp = baskets.filter((basketEl) => basketEl._id === el._id);

    const { __typename, ...newEl } = el;
    baskets.forEach((basketEl, i) => {
      if (basketEl._id === el._id) {
        isExist = true;
        return false;
      }
    });
    if (!isExist) {
      baskets.push(newEl);
      localStorage.setItem("basket", JSON.stringify(baskets));
    }
    router.push(`/products/${el._id}`);
  };

  return <ProductListUI data={data} onClickProduct={onClickProduct} />;
}
