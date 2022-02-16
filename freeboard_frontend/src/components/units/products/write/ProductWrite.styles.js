import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 16px 16px 16px 16px;
  width: 730px;
`;
export const Header = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  width: 100%;
  margin-bottom: 20px;
`;
export const Title = styled.input`
  width: 100%;
  padding: 10px 16px 9px 16px;
  border: 1px solid #dddfe4;
  line-height: 19px;
  font-size: 16px;
  margin-bottom: 10px;
`;
export const UploadFileBtn = styled.button`
  width: 100%;
  padding: 10px 16px 9px 16px;
  border: 1px solid #dddfe4;
  line-height: 19px;
  font-size: 16px;
  margin-bottom: 10px;
  background-color: white;
  color: #7b858e;
  display: flex;
  justify-content: flex-start;
`;

export const ContentsInput = styled.textarea`
  width: 100%;
  min-height: 480px;
  padding: 16px 25px 0px 25px;
  font-size: 13px;
  line-height: 19px;
  border: 1px solid #dddfe4;
`;

export const BottomBtnBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

export const BottomCancelBtn = styled.button`
  width: 154px;
  height: 48px;
  line-height: 19px;
  font-size: 16px;
  color: #7b858e;
  border-radius: 4px;

  border: 1px solid #dddfe4;
`;

export const BottomCompleteBtn = styled.button`
  width: 154px;
  height: 48px;
  line-height: 19px;
  font-size: 16px;
  color: #fff;
  border-radius: 4px;
  background-color: #46cfa7;
  border: none;
`;
