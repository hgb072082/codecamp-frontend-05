import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin-left: 100px; ;
`;

export const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #bdbdbd;
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

export const MainContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameStarBox = styled.div`
  width: 100%;
  margin-bottom: 5px;
`;

export const Name = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin-right: 18px;
`;

export const StarBox = styled.div`
  width: 116px;
`;

export const Content = styled.div`
  width: 100%;
`;

export const Date = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 12px;
  font-weight: 400;
  color: #bdbdbd;
`;

export const ReviseDelete = styled.div`
  width: 50px;
  height: 18px;
`;

export const Btn = styled.button`
  width: 18px;
  height: 18px;
  background-color: red;
`;
