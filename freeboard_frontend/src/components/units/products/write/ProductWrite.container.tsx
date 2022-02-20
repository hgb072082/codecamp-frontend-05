import { useState } from "react";
import { useMutation } from "@apollo/client";
import ProductWriteUI from "./ProductWrite.presenter";
import { Modal } from "antd";
import { useRouter } from "next/router";
export default function BoardWrite(props) {
  const router = useRouter();
  const [createUseditemInput, setCreateUseditemInput] = useState();
  return <ProductWriteUI createUseditemInput={createUseditemInput} />;
}
