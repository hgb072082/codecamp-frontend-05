import { useAuth } from "../../src/components/commons/hooks/useAuth";
import ProductList from "../../src/components/units/products/list/ProductList.container";
export default function ProductsListPage() {
  const { isLoading } = useAuth();
  if (isLoading) {
    return <></>;
  } else {
    return <ProductList />;
  }
}
