import styled from "@emotion/styled";

export const Wrapper = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 1200px;
  align-items: center;
`;
export const SearchBox = styled.div`
  display: flex;
`;

export const SearchInput = styled.input`
  min-width: 100px;
`;
export const SearchBtn = styled.button`
  width: 100px;
  height: 100px;
`;
export const RowBox = styled.div`
  width: 100%;
  height: 53px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #bdbdbd;
`;

export const ColumnNumber = styled.div`
  height: 100%;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: #4f4f4f;
`;

export const ColumnTitle = styled.div`
  height: 100%;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  color: #4f4f4f;

  flex: 7;
`;

export const ColumnWriter = styled.div`
  height: 100%;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
  color: #4f4f4f;
`;
export const ColumnDate = styled.div`
  height: 100%;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  color: #4f4f4f;

  flex: 2;
`;
export const CheckBox = styled.button`
  flex: 1;
`;
// Header styles

export const HeaderColumnNumber = styled.div`
  height: 100%;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const HeaderColumnTitle = styled.div`
  height: 100%;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;

  flex: 7;
`;

export const HeaderColumnWriter = styled.div`
  height: 100%;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
`;
export const HeaderColumnDate = styled.div`
  height: 100%;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;

  flex: 2;
`;

export const BoardBtnBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BoardBtn = styled.button`
  width: 171px;
  height: 52px;
`;
