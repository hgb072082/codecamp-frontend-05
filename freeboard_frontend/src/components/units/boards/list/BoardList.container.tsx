import BoardListUI from "./BoardList.presenter";

import { getMyDate } from "../../../commons/libraries/utils";
import { useRouter } from "next/router";

export default function BoardList(props) {
  
  const router = useRouter();
  function onClickMoveToBoardNew() {
    router.push("/boards/new");
  }

  function onClickMoveToBoardDetail(event) {
    router.push(`/boards/${event.target.id}`);
  }



  return (
    <BoardListUI
      getMyDate={getMyDate}
      data={props.data}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      
    />
  );
}
