import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 450px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 48px 40px 0px 40px;
`;
export const InnerWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const HeaderText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

export const LoginSubText = styled.div`
  font-weight: 400;
  font-size: 16px;
`;

export const LoginInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 0 11px 0;
  border: none;
  border-bottom: 1px solid #dddfe4;
  font-size: 16px;
`;

export const LoginBtn = styled.button`
  width: 100%;
  height: 56px;
  padding: 0 20px 0 20px;
  text-align: center;
  font-size: 16px;
  background-color: #1ea1f7;
  line-height: 56px;
  border: none;
`;
