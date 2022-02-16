import * as Styles from "./Login.styles";

export default function LoginUI(props) {
  return (
    <>
      <Styles.Wrapper>
        <Styles.InnerWrapper onSubmit={props.handleSubmit(props.onClickSubmit)}>
          <Styles.HeaderText>로그인</Styles.HeaderText>
          <Styles.LoginSubText>이메일 주소</Styles.LoginSubText>
          <Styles.LoginInput
            type="text"
            {...props.register("email")}
          ></Styles.LoginInput>
          <Styles.LoginSubText>비밀번호</Styles.LoginSubText>
          <Styles.LoginInput
            type="text"
            {...props.register("password")}
          ></Styles.LoginInput>
          <Styles.LoginBtn onClick={props.onClickLogin}>로그인</Styles.LoginBtn>
        </Styles.InnerWrapper>
      </Styles.Wrapper>
    </>
  );
}
