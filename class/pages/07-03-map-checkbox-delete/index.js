import { gql, useQuery ,useMutation} from "@apollo/client";
import styled from "@emotion/styled";
const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      createdAt
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
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
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);
  const onClickDelete = (event) => {
    deleteBoard({
      variable: { number: Number(event.target.id) },
      refetchQueries:[{query:FETCH_BOARDS}]
    });
  };
  return (
    <>
      {data?.fetchBoards.map((el) => (
        <Row key={el.number}>
          <Column>
            <input type="checkbox" />
          </Column>
          <Column>{el.number}</Column>
          <Column>{el.title}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.createdAt}</Column>
          <Column>
            <button id={el.number} type="button" onClick={onClickDelete}>
              삭제
            </button>
          </Column>
        </Row>
      ))}
    </>
  );
}
