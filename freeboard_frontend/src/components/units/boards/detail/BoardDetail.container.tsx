import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_BOARD, FETCH_BOARD, UPDATE_BOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";
export default function BoardDetail() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: {
          boardId: String(router.query.boardNum),
        },
      });
      alert("삭제가 완료되었습니다!");

      router.push(`/boards/list`);
    } catch (e) {
      console.log(e.massage);
    }
  };
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardNum,
    },
  });
  console.log(data);

  async function onClickLikeUpdate() {
    try {
      await updateBoard({
        variables: {
          boardId: router.query.boardNum,

          likeCount: data.fetchBoard.likeCount + 1,
        },
      });
      alert("수정이 완료되었습니다.");
    } catch (error) {
      alert(error.message);
    }
  }

  async function onClickDisLikeUpdate() {
    try {
      await updateBoard({
        variables: {
          boardId: router.query.boardNum,

          dislikeCount: data.fetchBoard.dislikeCount + 1,
        },
      });
      alert("수정이 완료되었습니다.");
    } catch (error) {
      alert(error.message);
    }
  }

  const onClickMoveToList = () => {
    router.push("/boards");
  };
  const onClickMoveToEdit = () => {
    router.push(`/boards/${router.query.boardNum}/edit`);
  };

  return (
    <>
      <BoardDetailUI
        data={data}
        onClickDelete={onClickDelete}
        onClickMoveToList={onClickMoveToList}
        onClickMoveToEdit={onClickMoveToEdit}
        onClickLikeUpdate={onClickLikeUpdate}
        onClickDisLikeUpdate={onClickDisLikeUpdate}
      />
    </>
  );
}
