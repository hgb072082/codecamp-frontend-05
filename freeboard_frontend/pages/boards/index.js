import {
  FETCH_BOARDS_COUNT,
  FETCH_BOARDS,
} from "../../src/components/units/boards/list/BoardList.queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import BoardList from "../../src/components/units/boards/list/BoardList.container";
import Pagination from "../../src/components/units/Pagination/index";
export default function BoardListPage() {
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });

  const onClickSearch = () => {
    refetch({ search: search, page: 1 });
    // 검색한 결과가 1페이지부터 보여질 수 있도록 page에 1을 삽입해줘야함.
    setKeyword(search);
    console.log(search);

    // input에 있는 값을 keyword에 담아줌
  };

  const onClickPage = (event) => {
    refetch({ search: keyword, page: Number(event?.target.id) });
  };
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  return (
    <>
      <BoardList
        onClickSearch={onClickSearch}
        search={search}
        setSearch={setSearch}
        data={data}
      />
      <Pagination
        refetch={refetch}
        lastPage={lastPage}
        startPage={startPage}
        setStartPage={setStartPage}
        onClickPage={onClickPage}
        keyword={keyword}
      />
    </>
  );
}
