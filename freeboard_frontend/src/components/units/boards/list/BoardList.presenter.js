import * as S from "./BoardList.styles";
export default function BoardListUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.RowBox>
          <S.HeaderColumnNumber>번호</S.HeaderColumnNumber>
          <S.HeaderColumnTitle>제목</S.HeaderColumnTitle>
          <S.HeaderColumnWriter>작성자</S.HeaderColumnWriter>
          <S.HeaderColumnDate>날짜</S.HeaderColumnDate>
        </S.RowBox>

        {props.data?.fetchBoards.map((el, index) => {
          return (
            <>
              <S.RowBox key={el._id}>
                <S.ColumnNumber id={el.number}>{index+1}</S.ColumnNumber>
                <S.ColumnTitle>{el.title}</S.ColumnTitle>
                <S.ColumnWriter>{el.writer}</S.ColumnWriter>
                <S.HeaderColumnDate>{el.createdAt}</S.HeaderColumnDate>
              </S.RowBox>
            </>
          );
        })}
      </S.Wrapper>
      
    </>
  );
}
