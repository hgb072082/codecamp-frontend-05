import { useState } from "react";


export default function Pagination(props) {

  const [isSelected,setIsSelected]= useState(1);



  const onClickPage = (event) => {
    
    props.refetch({ page: Number(event.target.id) });
    setIsSelected(Number(event.target.id))
  };

  const onClickPrevPage = () => {
    if (props.startPage === 1) return;
    props.setStartPage((prev) => prev - 10);
    props.refetch({ page: props.startPage - 10 });
  };

  const onClickNextPage = () => {
    if (props.startPage + 10 > props.lastPage) return;
    props.setStartPage((prev) => prev + 10);
    props.refetch({ page: props.startPage + 10 });
  };

  return (
    <div>
      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + props.startPage <= props.lastPage && (
            <span
              key={index + props.startPage}
              onClick={onClickPage}
              id={String(index + props.startPage)}

             style={(index+props.startPage===isSelected) ? {color:"red"} : {color:"black"}}
            >
              {` ${index + props.startPage} `}
            </span>
          )
      )}
      <span onClick={onClickNextPage}>다음페이지</span>
    </div>
  );
}
