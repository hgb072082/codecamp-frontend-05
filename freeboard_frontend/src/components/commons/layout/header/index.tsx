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

// const Modal = styled.div`
//   width: 258px;
//   height: 226px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: yellow;
// `;
// const ModalBox = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const ModalProfileBox = styled.div`
//   width: 100%;
//   height: 96px;
//   padding: 24px 0 24px 26px;
//   display: flex;
//   border-bottom: 1px solid black;
// `;
// const ModalBottomBox = styled.div`
//   width: 100%;
//   height: 130px;
//   display: flex;
//   flex-direction: column;
// `;
// const ModalBottomEl = styled.div`
//   width: 100%;
//   height: 65px;
//   display: flex;
//   padding: 20px 0 20px 39px;
// `;
export default function LayoutHeader() {
  const router = useRouter();
  const { userInfo, setUserInfo } = useContext(GlobalContext);
  console.log(userInfo);
  const [logoutUser] = useMutation(LOG_OUT_USER);
  const onClickJoin = () => {
    router.push("/join");
  };
  const moveToLogin = () => {
    router.push("/login");
  };
  const onClickLogOut = async () => {
    try {
      logoutUser();
      setUserInfo({});
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
        {Object.keys(userInfo).length > 0 ? (
          <>
            {/* <ModalBox> */}
            <UserIconBox>
              <Avatar size={30} icon={<UserOutlined />} />
              <LoginTxt>{userInfo?.fetchUserLoggedIn?.name}</LoginTxt>
              <CaretDownOutlined onClick={onClickLogOut} />
            </UserIconBox>
            {/* <Modal>
                <ModalProfileBox></ModalProfileBox>
                <ModalBottomBox>
                  <ModalBottomEl>충전하기</ModalBottomEl>
                  <ModalBottomEl>로그아웃</ModalBottomEl>
                </ModalBottomBox>
              </Modal>
            </ModalBox> */}
          </>
        ) : (
          <>
            <LoginTxt onClick={moveToLogin}>로그인</LoginTxt>
            <JoinBtn onClick={onClickJoin}>회원가입</JoinBtn>
          </>
        )}
      </Container>
    </Wrapper>
  );
}
