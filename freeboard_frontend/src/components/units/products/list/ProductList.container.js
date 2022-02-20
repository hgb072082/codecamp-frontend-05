import ProductListUI from "./ProductList.presenter";
import { FETCH_USED_ITEMS } from "./ProductList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
export default function ProductList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEMS, {
    variables: { page: 1, search: "", isSoldout: false },
  });
  // const { data } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);
  console.log(data);
  const onClickProduct = (el) => () => {
    router.push(`/products/${el._id}`);
  };

  return <ProductListUI data={data} onClickProduct={onClickProduct} />;
}
