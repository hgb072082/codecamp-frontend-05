import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARD_COMMENTS } from "../commentList/BoardCommentList.queries";
import { CREATE_BOARD_COMMENT,UPDATE_BOARD_COMMENT } from "./BoardCommentWrite.queries";
import { Modal } from "antd";

export default function BoardCommentWrite(props) {
  const router = useRouter();
  const [rating, setRating] = useState(3);
  const [writer, setWriter] = useState("");
  const [contents, setContents] = useState("");
  const [password, setPassword] = useState("");
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);
   
  }

  function onChangeRating(rating: number): void {
    setRating(rating);
  }

  async function onClickWrite() {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: writer,
            password: password,
            contents: contents,
            rating: rating,
          },
          boardId: String(router.query.boardNum),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: String(router.query.boardNum) },
          },
        ],
      });
      setWriter("");
      setPassword("");
      setContents("");
    } catch (error) {
      alert(error.message);
    }
  }



  const  onClickSubmitEdit = async () => {
    console.log(contents);
if(!contents && !rating){Modal.error({content:"둘중 하나는 입력해야합니다."})
return;}
if(!password){Modal.error({content:"비밀번호를 입력해주세요."});
return}
interface IUpdateBoardCommentInput {

contents?:string;
rating?:number;

} 

const updateBoardCommentInput: IUpdateBoardCommentInput ={};
if(contents){updateBoardCommentInput.contents = contents}
console.log(contents);
if(rating){updateBoardCommentInput.rating = rating}
    try{
   
    await updateBoardComment({
    variables: {updateBoardCommentInput,password,boardCommentId:props.selectedId},
    refetchQueries: [
      {
        query: FETCH_BOARD_COMMENTS,
        variables: { boardId: String(router.query.boardNum) },
      },
    ]
    
    })
    props.setIsEditing((prev)=>(!prev))
    
    Modal.success({content:"수정이 완료되었습니다."})
    
    
    } 
    
    
    catch(error){Modal.error({content:error.message});}
    
    // 작성화면에서 수정하기 뽞 눌렀을떄 !! 1. 업데이트가 되어야함. 2. refetch가 되어야함. 
    
      }

  return (
    <BoardCommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickWrite={onClickWrite}
      contents={contents}
      writer={writer}
      password={password}
      onChangeRating={onChangeRating}
      rating={rating}
      e={props.e}
      isEditing={props.isEditing}
      onClickSubmitEdit={onClickSubmitEdit}      
    />
  );
}
