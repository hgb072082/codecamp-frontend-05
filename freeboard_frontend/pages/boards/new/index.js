import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import * as styles from "../../../styles/create";


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

const router= useRouter();
 

  const onClickSubmit= async ()=> {




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
      try{
        
        const result = await createBoard({

          variables: {
          createBoardInput:{
          writer: userName,
          password:password,
          title:title,
          contents:content
          
          
          }
          }
          
          
          
          })
        router.push(`/boards/${result.data.createBoard._id}`)
      alert("게시물 등록이 완료되었습니다.");} catch(e) {console.log(e.massage)}
     
    }



  };

  
  return (
    <>
      <styles.Wrapper>
        <styles.WrapperContainer>
          <styles.WrapperHeader>게시물 등록</styles.WrapperHeader>

          <styles.ClientContentBox>
            <styles.ClientBigBox>
              <styles.TitleText>작성자</styles.TitleText>
              <styles.InputClientBox
                style={{ borderColor: userNameError }}
                placeholder="이름을 적어주세요."
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              ></styles.InputClientBox>
              
            </styles.ClientBigBox>
            <styles.ClientBigBox>
              <styles.TitleText>비밀번호</styles.TitleText>
              <styles.InputClientBox
                style={{ borderColor: passwordError }}
                type={"password"}
                placeholder="비밀번호를 입력해주세요."
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></styles.InputClientBox>
              
            </styles.ClientBigBox>
          </styles.ClientContentBox>
          <styles.ContentBox>
            <styles.TitleText>제목</styles.TitleText>
            <styles.InputTitleBox
              style={{ borderColor: titleError }}
              placeholder="제목을 작성해주세요."
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></styles.InputTitleBox>
            
          </styles.ContentBox>
          <styles.ContentBox>
            <styles.TitleText>내용</styles.TitleText>
            <styles.InputContentBox
              style={{ borderColor: contentError }}
              placeholder="내용을 작성해주세요."
              onChange={(e) => {
                setContent(e.target.value);
              }}
            ></styles.InputContentBox>
            
          </styles.ContentBox>
          <styles.ContentBox>
            <styles.TitleText>주소</styles.TitleText>
            <styles.AreaButtonBox>
              <styles.InputAreaNum placeholder="07250"></styles.InputAreaNum>
              <styles.AreaNumSearchBtn>
                우편번호 검색
              </styles.AreaNumSearchBtn>
            </styles.AreaButtonBox>
            {[1, 2].map(() => {
              return (
                <>
                  <styles.InputTitleBox></styles.InputTitleBox>
                </>
              );
            })}
          </styles.ContentBox>
          <styles.ContentBox>
            <styles.TitleText>유튜브</styles.TitleText>
            <styles.InputTitleBox placeholder="링크를 복사해주세요."></styles.InputTitleBox>
          </styles.ContentBox>
          <styles.ContentBox>
            <styles.TitleText>사진 첨부</styles.TitleText>
            <styles.UploadBtnBox>
              {[1, 2, 3].map(() => {
                return (
                  <styles.PictureUploadBtn>
                    <styles.PicturePlusText>+</styles.PicturePlusText>
                    <styles.PictureUploadText>
                      Upload
                    </styles.PictureUploadText>
                  </styles.PictureUploadBtn>
                );
              })}
            </styles.UploadBtnBox>
          </styles.ContentBox>
          <styles.ContentBox>
            <styles.TitleText>메인 설정</styles.TitleText>
            <styles.SettingSelectBox>
              <styles.SettingSelect name={"mainSet"} type={"radio"} />
              유튜브
              <styles.SettingSelect name={"mainSet"} type={"radio"} />
              사진
            </styles.SettingSelectBox>
          </styles.ContentBox>
          <styles.registerBtn
            onClick={onClickSubmit}
          >
            등록하기
          </styles.registerBtn>
        </styles.WrapperContainer>
      </styles.Wrapper>
    </>
  );
}