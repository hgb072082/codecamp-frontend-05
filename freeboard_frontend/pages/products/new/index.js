import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import ProductWrite from "../../../src/components/units/products/write/ProductWrite.container";
export default function ProductPage() {
  const { isLoading } = useAuth();
  if (isLoading) {
    return <></>;
  } else {
    return <ProductWrite />;
  }
}
