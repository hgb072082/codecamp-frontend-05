import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import ProductWrite from "../../../src/components/units/products/write/ProductWrite.container";
const ProductPage = () => {
  console.log("페이지는 실행됨");
  return (
    <>
      <ProductWrite />
    </>
  );
};

export default withAuth(ProductPage);
