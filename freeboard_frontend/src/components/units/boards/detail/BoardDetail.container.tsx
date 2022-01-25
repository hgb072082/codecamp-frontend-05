import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import {
  DELETE_BOARD,
  FETCH_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";
export default function BoardDetail() {
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [isAddressFetchModalOn, setIsAddressFetchModalOn] = useState(false);
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

  async function onClickLikeUpdate() {
    try {
      await likeBoard({
        variables: {
          boardId: router.query.boardNum,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.boardNum },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  }

  async function onClickDisLikeUpdate() {
    try {
      await dislikeBoard({
        variables: {
          boardId: router.query.boardNum,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.boardNum },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  }
  const onClickGps = () => {
    setIsAddressFetchModalOn((prev) => !prev);
  };
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
        setIsAddressFetchModalOn={setIsAddressFetchModalOn}
        isAddressFetchModalOn={isAddressFetchModalOn}
        onClickGps={onClickGps}
      />
    </>
  );
}
