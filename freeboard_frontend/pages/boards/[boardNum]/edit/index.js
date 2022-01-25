import BoardWrite from "../../../../src/components/units/boards/write/BoardWrite.container";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      createdAt
      youtubeUrl
      likeCount
      dislikeCount
      images
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export default function BoardEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardNum },
  });
  return <BoardWrite isEdit={true} data={data} />;
}
