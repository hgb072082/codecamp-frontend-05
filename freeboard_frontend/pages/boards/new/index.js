import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

import * as register from "../../../styles/register";


const CREATE_BOARD = gql`
  
mutation createBoard($createBoardInput:CreateBoardInput!) {

  
  createBoard(createBoardInput:$createBoardInput){
    _id
    writer
    title
    contents
    


  }


}



`
export default function Home() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
 
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);


 

  const onClickSubmit= async ()=> {

const result = await createBoard({

variables: {
createBoardInput:{
writer: userName,
password: password,
title: title,
contents:content


}
}



})


    if (!userName) {
                
      setUserNameError("red");
    } else if (userNameError) {
      setUserNameError("");
 
    }

    if (!password) {
     
      setPasswordError("red");
    } else if (passwordError) {
      setPasswordError("");
  
    }

    if (!title) {
      
      setTitleError("red");
    } else if (titleError) {
      setTitleError("");
    
    }

    if (!content) {
   
      setContentError("red");
    } else if (contentError) {
      setContentError("");
      
    }

    if (!userName || !password || !title || !content) {
      alert("입력하지 않은 칸이 있습니다.");
    } else if (userName && password && title && content) {
      alert("회원가입이 완료되었습니다.");
    }

console.log(result)

  }
  return (
    <>
      <register.Wrapper>
        <register.WrapperContainer>
          <register.WrapperHeader>게시물 등록</register.WrapperHeader>

          <register.ClientContentBox>
            <register.ClientBigBox>
              <register.TitleText>작성자</register.TitleText>
              <register.InputClientBox
                style={{ borderColor: userNameError }}
                placeholder="이름을 적어주세요."
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              ></register.InputClientBox>
              
            </register.ClientBigBox>
            <register.ClientBigBox>
              <register.TitleText>비밀번호</register.TitleText>
              <register.InputClientBox
                style={{ borderColor: passwordError }}
                type={"password"}
                placeholder="비밀번호를 입력해주세요."
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></register.InputClientBox>
              
            </register.ClientBigBox>
          </register.ClientContentBox>
          <register.ContentBox>
            <register.TitleText>제목</register.TitleText>
            <register.InputTitleBox
              style={{ borderColor: titleError }}
              placeholder="제목을 작성해주세요."
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></register.InputTitleBox>
            
          </register.ContentBox>
          <register.ContentBox>
            <register.TitleText>내용</register.TitleText>
            <register.InputContentBox
              style={{ borderColor: contentError }}
              placeholder="내용을 작성해주세요."
              onChange={(e) => {
                setContent(e.target.value);
              }}
            ></register.InputContentBox>
            
          </register.ContentBox>
          <register.ContentBox>
            <register.TitleText>주소</register.TitleText>
            <register.AreaButtonBox>
              <register.InputAreaNum placeholder="07250"></register.InputAreaNum>
              <register.AreaNumSearchBtn>
                우편번호 검색
              </register.AreaNumSearchBtn>
            </register.AreaButtonBox>
            {[1, 2].map(() => {
              return (
                <>
                  <register.InputTitleBox></register.InputTitleBox>
                </>
              );
            })}
          </register.ContentBox>
          <register.ContentBox>
            <register.TitleText>유튜브</register.TitleText>
            <register.InputTitleBox placeholder="링크를 복사해주세요."></register.InputTitleBox>
          </register.ContentBox>
          <register.ContentBox>
            <register.TitleText>사진 첨부</register.TitleText>
            <register.UploadBtnBox>
              {[1, 2, 3].map(() => {
                return (
                  <register.PictureUploadBtn>
                    <register.PicturePlusText>+</register.PicturePlusText>
                    <register.PictureUploadText>
                      Upload
                    </register.PictureUploadText>
                  </register.PictureUploadBtn>
                );
              })}
            </register.UploadBtnBox>
          </register.ContentBox>
          <register.ContentBox>
            <register.TitleText>메인 설정</register.TitleText>
            <register.SettingSelectBox>
              <register.SettingSelect name={"mainSet"} type={"radio"} />
              유튜브
              <register.SettingSelect name={"mainSet"} type={"radio"} />
              사진
            </register.SettingSelectBox>
          </register.ContentBox>
          <register.registerBtn
            onClick={onClickSubmit}
          >
            등록하기
          </register.registerBtn>
        </register.WrapperContainer>
      </register.Wrapper>
    </>
  );
}
