import * as Styles from "./Join.styles";

export default function JoinUI(props) {
  return (
    <>
      <Styles.Wrapper>
        <Styles.InnerWrapper>
          <Styles.HeaderText>회원가입</Styles.HeaderText>
          <Styles.LoginSubText>이메일 주소</Styles.LoginSubText>
          <Styles.LoginInput
            id="email"
            onChange={props.onChangeInput}
          ></Styles.LoginInput>
          <Styles.LoginSubText>비밀번호</Styles.LoginSubText>
          <Styles.LoginInput
            id="password"
            onChange={props.onChangeInput}
          ></Styles.LoginInput>
          <Styles.LoginBtn onClick={props.onClickJoinBtn}>
            회원가입
          </Styles.LoginBtn>
        </Styles.InnerWrapper>
      </Styles.Wrapper>
    </>
  );
}
