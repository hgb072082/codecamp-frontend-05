
import {useState} from 'react'
import { useMutation } from '@apollo/client'
import BoardWriteUI from './BoardWrite.presenter'
import {CREATE_BOARD} from './BoardWrite.queries'

import { useRouter } from "next/router";
export default function BoardWrite () {
    const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);
const [isActive,setIsActive]=useState(false);
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

<BoardWriteUI 
setUserName={setUserName}
setPassword={setPassword}
setTitle={setTitle}
setContent={setContent}
setUserNameError={setUserNameError}
setPasswordError={setPasswordError}
setTitleError={setTitleError}
setContentError={setContentError}
isActive={isActive}
setIsActive={setIsActive}
onClickSubmit={onClickSubmit}
userNameError={userNameError}
passwordError={passwordError}
titleError={titleError}
contentError={contentError}
userName={userName}
password={password}
title={title}
content={content}
/>
)


}