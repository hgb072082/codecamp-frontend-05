

import { FETCH_BOARDS_COUNT, FETCH_BOARDS } from "../../src/components/units/boards/list/BoardList.queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import BoardList from '../../src/components/units/boards/list/BoardList.container';
import  Pagination  from '../../src/components/units/Pagination/index';
export default function BoardListPage() {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  return (<><BoardList data={data} /><Pagination refetch={refetch} lastPage={lastPage} startPage={startPage} setStartPage={setStartPage}/></>)
}
