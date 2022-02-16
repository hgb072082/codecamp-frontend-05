import LoginUI from "./LogIn.presenter";
import * as yup from "yup";
import { gql, useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { Modal } from "antd";
import { GlobalContext } from "../../../../pages/_app";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;
const schema = yup.object().shape({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요.")
    .max(15, "비밀번호는 최대 15자리로 입력해주세요.")
    .required("비밀번호는 필수 입력사항입니다."),
});
export default function LogIn() {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  const { setAccessToken } = useContext(GlobalContext);

  const [loginUser] = useMutation(LOGIN_USER);

  const onClickSubmit = async (data) => {
    try {
      console.log(data);
      const result = await loginUser({
        variables: { ...data },
      });
      const accessToken = result?.data?.loginUser.accessToken;
      setAccessToken(accessToken);
      console.log(result?.data?.loginUser.accessToken);
      localStorage.setItem("accessToken", accessToken);

      Modal.success({ content: "로그인 성공!" });
      router.push("/products/new");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <LoginUI
      formState={formState}
      onClickSubmit={onClickSubmit}
      handleSubmit={handleSubmit}
      register={register}
    />
  );
}
