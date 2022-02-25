import { CaretDownOutlined, UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Avatar } from "antd";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
const Wrapper = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogo = styled.div`
  display: flex;
`;
const HeaderLogoLeftTxt = styled.div`
  font-size: 33px;
  line-height: 53.28px;
  font-weight: 700;
  color: #ffd600;
`;
const HeaderLogoRigthTxt = styled.div`
  font-size: 33px;
  line-height: 53.28px;
  font-weight: 920;
`;
const UserIconBox = styled.div`
  width: 92px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default function LayoutHeader() {
  const { userInfo } = useContext(GlobalContext);
  console.log(userInfo?.name);

  return (
    <Wrapper>
      <Container>
        <HeaderLogo>
          <HeaderLogoLeftTxt>{"{ }"} </HeaderLogoLeftTxt>
          <HeaderLogoRigthTxt> code.camp</HeaderLogoRigthTxt>
        </HeaderLogo>
        <UserIconBox>
          <Avatar size={48} icon={<UserOutlined />} />
          {userInfo?.name}
          <CaretDownOutlined />
        </UserIconBox>
      </Container>
    </Wrapper>
  );
}
