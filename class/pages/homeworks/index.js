import { gql, useQuery ,useMutation} from "@apollo/client";
import styled from "@emotion/styled";
const FETCH_PRODUCTS = gql`
  query fetchProducts($page:Int) {
    fetchProducts(page: $page) {
      seller
      name
      _id
      detail
      price
      createdAt
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID) {
    deleteProduct(productId: $productId) {
      _id
      number
      message
    }
  }
`;

const Column = styled.div`
  width: 20%;
`;
const Row = styled.div`
  display: flex;
`;
export default function MapCheckBoxDeletePage() {
  const [deleteProduct] = useMutation(DELETE_PRODUCT);
  const { data } = useQuery(FETCH_PRODUCTS);
  const onClickDelete = (event) => {
    deleteProduct({
      variable: { productId: event.target._id },
     
    });
  };
  return (
    <>
      {data?.fetchProducts.map((el) => (
        <Row key={el._id}>
          <Column>
            <input type="checkbox" />
          </Column>
          <Column>{el.seller}</Column>
          <Column>{el.name}</Column>
          <Column>{el.detail}</Column>
          <Column>{el.price}</Column>
          <Column>{el.createdAt}</Column>
          <Column>
            <button type="button" onClick={onClickDelete}>
              삭제
            </button>
          </Column>
        </Row>
      ))}
    </>
  );
}
