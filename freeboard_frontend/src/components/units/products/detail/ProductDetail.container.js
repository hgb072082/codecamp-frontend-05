import ProductCommentWrite from "../comment/ProductCommentWrite.container";
import ProductCommentList from "../commentlist/ProductCommentList.container";

export default function ProductDetail() {
  return (
    <>
      <ProductCommentWrite />
      <ProductCommentList />
    </>
  );
}
