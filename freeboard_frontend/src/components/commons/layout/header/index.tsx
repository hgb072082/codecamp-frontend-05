import { CaretDownOutlined, UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Avatar } from "antd";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
const LOG_OUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;
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
const LoginTxt = styled.div`
  font-weight: 700;
  align-items: center;
  font-size: 16px;
`;
const JoinBtn = styled.div``;

export default function LayoutHeader() {
  const router = useRouter();
  const { userInfo } = useContext(GlobalContext);
  const [logoutUser] = useMutation(LOG_OUT_USER);
  const moveToLogin = () => {
    router.push("/login");
  };
  const onClickLogOut = async () => {
    try {
      logoutUser();
      localStorage.removeItem("userInfo");

      window.location.replace("/");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Wrapper>
      <Container>
        <HeaderLogo>
          <HeaderLogoLeftTxt>{"{ }"} </HeaderLogoLeftTxt>
          <HeaderLogoRigthTxt> code.camp</HeaderLogoRigthTxt>
        </HeaderLogo>
        {userInfo ? (
          <UserIconBox>
            <Avatar size={30} icon={<UserOutlined />} />
            <LoginTxt>{userInfo?.fetchUserLoggedIn?.name}</LoginTxt>
            <CaretDownOutlined onClick={onClickLogOut} />
          </UserIconBox>
        ) : (
          <LoginTxt onClick={moveToLogin}>로그인</LoginTxt>
        )}
      </Container>
    </Wrapper>
  );
}
