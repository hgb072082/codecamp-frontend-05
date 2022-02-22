import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
`;
export const Header = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
export const ContentBox = styled.div`
  height: 161px;
  width: 1200px;
  display: flex;
  flex-direction: column;
  border: 1px solid #bdbdbd;
`;
export const Content = styled.textarea`
  height: 108px;
  width: 100%;

  font-size: 16px;
  font-weight: 500;
  line-height: 23.68px;
  padding: 20px;
`;
export const ContentFooter = styled.div`
  display: flex;
  height: 52px;
  border-top: #f2f2f2;
`;

export const ContentLength = styled.div`
  width: 1108px;
  height: 100%;
  padding: 14px 20px 14px 20px;
  color: #bdbdbd;
`;

export const CommentSubmitBtn = styled.button`
  width: 91px;
  height: 52px;
  text-align: center;
  background-color: black;
  color: white;
`;
