import axios from "axios";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";


const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationArgsProduct() {
  const [mySeller, setMySeller] = useState("");
  const [myProductName, setMyProductName] = useState("");
  const [myProductContents, setMyProductContents] = useState("");
  const [myProductPrice, setMyProductPrice] = useState("");
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const router = useRouter();
 

  const onClickSubmit = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1");
    const result = await createProduct({
      variables: {
        seller: mySeller,
        createProductInput: {
          name: myProductName,
          detail: myProductContents,
          price: Number(myProductPrice),
        },
      },
    });
    console.log(result.data.createProduct._id)
   if(result.data.createProduct._id){ router.push(`/05-08-dynamic-routed-product/${result.data.createProduct._id}`)};
  };

  return (
    <>
      판매자:{" "}
      <input
        type={"text"}
        onChange={(e) => {
          setMySeller(e.target.value);
        }}
      />{" "}
      <br />
      상품명:{" "}
      <input
        type={"text"}
        onChange={(e) => {
          setMyProductName(e.target.value);
        }}
      />
      <br />
      상품내용:{" "}
      <input
        type={"text"}
        onChange={(e) => {
          setMyProductContents(e.target.value);
        }}
      />
      <br />
      상품가격:{" "}
      <input
        type={"text"}
        onChange={(e) => {
          setMyProductPrice(e.target.value);
        }}
      />
      <br />
      <button onClick={onClickSubmit}>상품등록하기</button>
      <div>{}</div>
    </>
  );
}
