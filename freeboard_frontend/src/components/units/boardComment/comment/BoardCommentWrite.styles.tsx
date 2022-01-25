import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const Header = styled.div`
  height: 67px;
  padding-bottom: 40px;
`;

export const UserInputBox = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
`;

export const UserInput = styled.input`
  padding-right: 24px;
  width: 204px;
  height: 52px;
`;

export const StarBox = styled.div`
  width: 180px;
  height: 52px;
`;

export const ContentBox = styled.div`
  height: 181px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Content = styled.input`
  height: 108px;
  width: 100%;
`;

export const ContentFooter = styled.div`
  height: 52px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentLength = styled.div`
  font-size: 16px;
`;

export const ContentSubmitBtn = styled.button`
  width: 91px;
  height: 52px;
  background-color: black;
  color: white;
`;
