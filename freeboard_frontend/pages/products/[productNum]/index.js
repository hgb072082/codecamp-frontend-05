import ProductDetail from "../../../src/components/units/products/detail/ProductDetail.container";
import { useAuth } from "../../../src/components/commons/hooks/useAuth";
export default function ProductDetailPage() {
  const { isLoading } = useAuth();
  if (isLoading) {
    return <></>;
  }
  return <ProductDetail />;
}
