import { CaretDownOutlined, UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Avatar, Menu, Modal } from "antd";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import Head from "next/head";
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      userPoint {
        _id
        amount
        createdAt
        updatedAt
        deletedAt
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
const LOG_OUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;
const Wrapper = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;
const Container = styled.div`
  width: 1200px;
  /* margin: 0 auto; */
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
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

const OnModal = styled.div`
  width: 258px;
  height: 226px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 2px gray;
  border: none;
  border-radius: 16px;
  position: absolute;
  z-index: 2;
  background: #ffffff;
  top: 50px;
  right: 0;
`;
const ModalBox = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  top: 0;
  right: 0;
`;

const ModalProfileBox = styled.div`
  width: 100%;
  height: 96px;
  padding: 24px 0 24px 26px;
  display: flex;
  border-bottom: 1px solid black;
`;
const ModalProfileTxtBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
  margin-left: 15px;
`;
const ModalProfileNameTxt = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;
const ModalProfilePointTxt = styled.div`
  font-size: 12px;
  line-height: 20px;
  font-weight: 700;
`;
const ModalBottomBox = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: column;
`;
const ModalBottomEl = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  padding: 20px 0 20px 39px;
`;
const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      balance
      status
      statusDetail
    }
  }
`;
// ????????????
declare const window: typeof globalThis & {
  IMP: any;
};
// const PigImg = styled.img``;
const PlzSelectTxt = styled.div``;
const { SubMenu } = Menu;
// const ChargeBtn = styled.button``;

export default function LayoutHeader() {
  const client = useApolloClient();
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  console.log("???..?");
  const router = useRouter();
  const { userInfo, setUserInfo } = useContext(GlobalContext);
  const [logoutUser] = useMutation(LOG_OUT_USER);
  console.log(userInfo);
  const [isHeaderModalOn, setIsHeaderModalOn] = useState(false);
  const onClickIsHeaderModal = () => {
    setIsHeaderModalOn((prev) => !prev);
  };
  const [currentPrice, setCurrentPrice] = useState("");
  const onClickPrice = (price) => () => {
    setCurrentPrice(price);
  };
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
  // ??????;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const onClickChargeBtn = async () => {
    try {
      setIsModalVisible(false);
      const IMP = window.IMP; // ?????? ??????
      IMP.init("imp49910675"); // Example: imp00000000

      // IMP.request_pay(param, callback) ????????? ??????
      await IMP.request_pay(
        {
          // param
          pg: "html5_inicis",
          pay_method: "card",
          // merchant_uid: "ORD20180131-0000011",
          name: "????????????",
          amount: currentPrice,
          buyer_email: "gildong@gmail.com",
          buyer_name: userInfo?.name,
          buyer_tel: "010-4242-4242",
          buyer_addr: "??????????????? ????????? ?????????",
          buyer_postcode: "01181",
          // m_redirect_url: ????????? ????????? ????????? ??????!!
        },
        async (rsp) => {
          // callback
          if (rsp.success) {
            // ?????? ?????? ??? ??????,
            console.log(rsp);

            // ???????????? ???????????? ????????? ????????????
            // => ???, ???????????? ????????????!!!
            // ex, createPointTransactionsOfLoading
            console.log(rsp);
            createPointTransactionOfLoading({
              variables: { impUid: rsp.imp_uid },
            });
            const resultUserInfo = await client.query({
              query: FETCH_USER_LOGGED_IN,
            });
            const userInfo = resultUserInfo.data.fetchUserLoggedIn;
            console.log("???????????????");
            console.log(userInfo);
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            setUserInfo(userInfo);
            Modal.success({ content: "????????? ?????????????????????." });
          } else {
            // ?????? ?????? ??? ??????,
          }
        }
      );
    } catch (e) {
      Modal.error({ content: e.message });
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleClick = (e) => {};

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <Wrapper>
        <Container>
          <HeaderLogo>
            <HeaderLogoLeftTxt>{"{ }"} </HeaderLogoLeftTxt>
            <HeaderLogoRigthTxt> code.camp</HeaderLogoRigthTxt>
          </HeaderLogo>
          {Object.keys(userInfo).length > 0 ? (
            <>
              <ModalBox>
                <UserIconBox>
                  <Avatar size={30} icon={<UserOutlined />} />
                  <LoginTxt>{userInfo?.name}</LoginTxt>
                  <CaretDownOutlined onClick={onClickIsHeaderModal} />
                </UserIconBox>
                {isHeaderModalOn && (
                  <OnModal>
                    <ModalProfileBox>
                      <Avatar size={50} icon={<UserOutlined />} />
                      <ModalProfileTxtBox>
                        <ModalProfileNameTxt>
                          {userInfo?.name}
                        </ModalProfileNameTxt>
                        <ModalProfilePointTxt>
                          {`${userInfo?.userPoint?.amount}P`}
                        </ModalProfilePointTxt>
                      </ModalProfileTxtBox>
                    </ModalProfileBox>
                    <ModalBottomBox>
                      <ModalBottomEl onClick={showModal}>
                        ????????????
                      </ModalBottomEl>
                      <ModalBottomEl onClick={onClickLogOut}>
                        ????????????
                      </ModalBottomEl>
                    </ModalBottomBox>
                  </OnModal>
                )}
              </ModalBox>
            </>
          ) : (
            <>
              <LoginTxt onClick={moveToLogin}>?????????</LoginTxt>
              <JoinBtn onClick={onClickJoin}>????????????</JoinBtn>
            </>
          )}
        </Container>
        <Modal
          title="????????????"
          visible={isModalVisible}
          onOk={onClickChargeBtn}
          onCancel={handleCancel}
        >
          <PlzSelectTxt>???????????? ????????? ??????????????????!</PlzSelectTxt>
          <Menu onClick={handleClick} style={{ width: 256 }} mode="inline">
            <SubMenu
              key="sub4"
              icon={<></>}
              title={currentPrice || "????????? ??????"}
            >
              <Menu.Item onClick={onClickPrice(100)}>100</Menu.Item>
              <Menu.Item onClick={onClickPrice(500)}>500</Menu.Item>
              <Menu.Item onClick={onClickPrice(2000)}>2,000</Menu.Item>
              <Menu.Item onClick={onClickPrice(5000)}>5,000</Menu.Item>
            </SubMenu>
          </Menu>
        </Modal>
      </Wrapper>
    </>
  );
}
