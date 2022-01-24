import { useState } from 'react';
import { useMutation } from '@apollo/client';
import BoardWriteUI from './BoardWrite.presenter';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries';

import { useRouter } from 'next/router';
export default function BoardWrite(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [contentError, setContentError] = useState('');
  const [createBoard] = useMutation(CREATE_BOARD);
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickSubmit = async () => {
    if (!userName) {
      setUserNameError('red');
    } else if (userNameError) {
      setUserNameError('');
    }

    if (!password) {
      setPasswordError('red');
    } else if (passwordError) {
      setPasswordError('');
    }

    if (!title) {
      setTitleError('red');
    } else if (titleError) {
      setTitleError('');
    }

    if (!content) {
      setContentError('red');
    } else if (contentError) {
      setContentError('');
    }

    if (!userName || !password || !title || !content) {
      alert('입력하지 않은 칸이 있습니다.');
    } else if (userName && password && title && content) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: userName,
              password: password,
              title: title,
              contents: content,
            },
          },
        });
        router.push(`/boards/${result.data.createBoard._id}`);
        alert('게시물 등록이 완료되었습니다.');
      } catch (e) {
        console.log(e.massage);
      }
    }
  };

  async function onClickUpdate() {
    if (!title & !content) {
      alert('둘중 하나는 입력해야합니다.');
      return;
    }
    if (!password) {
      alert('비밀번호 입력해주세요');
      return;
    }

    const myUpdateBoardInput = {};
    if (title) myUpdateBoardInput.title = title;
    if (content) {
      myUpdateBoardInput.contents = content;
    }
    try {
      await updateBoard({
        variables: {
          boardId: router.query.boardNum,
          password: password,
          updateBoardInput: myUpdateBoardInput,
        },
      });
      alert('수정이 완료되었습니다.');
      router.push(`/boards/${router.query.boardNum}`);
    } catch (error) {
      alert(error.message);
    }
  }

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
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}