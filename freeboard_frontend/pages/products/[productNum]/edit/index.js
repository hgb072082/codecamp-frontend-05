import ProductWrite from "../../../../src/components/units/products/write/ProductWrite.container";

import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
      useditemAddress {
        zipcode
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;

export default function ProductEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productNum },
  });
  console.log(data);
  return <ProductWrite isEditing={true} data={data} />;
}
