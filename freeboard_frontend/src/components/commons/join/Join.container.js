import { useState } from "react";
import JoinUI from "./Join.presenter";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
    }
  }
`;

export default function Join() {
  const [createUser] = useMutation(CREATE_USER);
  const [input, setInput] = useState({
    email: "",
    password: "",
    name: "",
  });
  const onChangeInput = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const onClickJoinBtn = async () => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            ...input,
          },
        },
      });
      console.log(result);
      Modal.success({ content: "회원가입이 완료되었습니다!" });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  return (
    <JoinUI onChangeInput={onChangeInput} onClickJoinBtn={onClickJoinBtn} />
  );
}
