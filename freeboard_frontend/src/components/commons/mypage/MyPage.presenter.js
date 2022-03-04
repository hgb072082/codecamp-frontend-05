import MyPageMyProfile from "./MyPage.MyProfile";
import * as Styles from "./MyPage.styles";
import MyPageMyMarket from "./MyPageMyMarket";
import MyPageMyPoint from "./MyPageMyPoint";

export default function MypageUI(props) {
  console.log(props.naviNum);
  return (
    <Styles.Wrapper>
      <Styles.Nav>
        <Styles.NavHeaderTxt>MYPAGE</Styles.NavHeaderTxt>
        <Styles.NameTxt>{props.userInfo.name}</Styles.NameTxt>
        <Styles.Price>{props.userInfo.userPoint?.amount}</Styles.Price>
        <Styles.MyMarket
          onClick={props.onClcikSetNaviNum(0)}
          isActive={props.naviNum === 0}
        >
          내 장터
        </Styles.MyMarket>
        <Styles.MyMarket
          onClick={props.onClcikSetNaviNum(1)}
          isActive={props.naviNum === 1}
        >
          내 포인트
        </Styles.MyMarket>
        <Styles.MyMarket
          onClick={props.onClcikSetNaviNum(2)}
          isActive={props.naviNum === 2}
        >
          내 프로필
        </Styles.MyMarket>
      </Styles.Nav>

      <MyPageMyMarket id={0} naviNum={props.naviNum} />
      <MyPageMyPoint id={1} naviNum={props.naviNum} />
      <MyPageMyProfile id={2} naviNum={props.naviNum} />
    </Styles.Wrapper>
  );
}
