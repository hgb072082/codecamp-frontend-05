import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";

import { useQuery } from "@apollo/client";
import { getMyDate } from "../../../commons/libraries/utils";
import { useRouter } from "next/router";
export default function BoardList(props) {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();
  function onClickMoveToBoardNew() {
    router.push("/boards/new");
  }

  function onClickMoveToBoardDetail(event) {
    console.log(`/boards/${event.target.id}`);
    router.push(`/boards/${event.target.id}`);
  }

  return (
    <BoardListUI
      getMyDate={getMyDate}
      data={data}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
    />
  );
}
