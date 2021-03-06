import { useState } from "react";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { Modal } from "antd";
import { useRouter } from "next/router";
export default function BoardWrite(props) {
  const [images, setImages] = useState(["", "", ""]);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [isAddressModalOn, setIsAddressModalOn] = useState(false);

  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [zonecode, setZonecode] = useState("");
  const onCompleteDaumPostcode = (data: any) => {
    setAddress(data.address);
    setZonecode(data.zonecode);
    onClickIsAddressModal();
  };

  const onChangeDetailAddress = (event: any) => {
    setDetailAddress(event.target.value);
  };

  const onClickIsAddressModal = () => {
    setIsAddressModalOn((prev) => !prev);
  };
  const onChangeWriter = (e) => {
    setUserName(e.target.value);
    if (e.target.value && title && password && content) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value && title && userName && content) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    if (e.target.value && userName && password && content) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
    if (e.target.value && title && password && userName) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeYoutubeUrl = (e) => {
    setYoutubeUrl(e.target.value);
  };

  const onClickSubmit = async () => {
    console.log(images);
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
      alert("???????????? ?????? ?????? ????????????.");
    } else if (userName && password && title && content) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: userName,
              password: password,
              title: title,
              contents: content,
              youtubeUrl: youtubeUrl,
              images,

              boardAddress: {
                address: address,
                addressDetail: detailAddress,
                zipcode: zonecode,
              },
            },
          },
        });
        router.push(`/boards/${result.data.createBoard._id}`);
        Modal.success({ content: "????????? ?????????????????????." });
        console.log(props.data.createBoard);
      } catch (e) {
        console.log(e.massage);
      }
    }
  };

  async function onClickUpdate() {
    if (!title && !content && !address && !detailAddress) {
      Modal.error({ content: "?????? ????????? ?????????????????????." });
      return;
    }
    if (!password) {
      Modal.error({ content: "??????????????? ??????????????????." });
      return;
    }

    interface IMyUpdateBoardInput {
      title?: string;
      contents?: string;
      youtubeUrl?: string;
      boardAddress?: any;
    }

    const myUpdateBoardInput: IMyUpdateBoardInput = {};

    if (title) myUpdateBoardInput.title = title;
    if (content) {
      myUpdateBoardInput.contents = content;
    }
    if (youtubeUrl) myUpdateBoardInput.youtubeUrl = youtubeUrl;
    if (zonecode || address || detailAddress) {
      myUpdateBoardInput.boardAddress = {};
      if (zonecode) myUpdateBoardInput.boardAddress.zipcode = zonecode;
      if (address) myUpdateBoardInput.boardAddress.address = address;
      if (detailAddress)
        myUpdateBoardInput.boardAddress.addressDetail = detailAddress;
    }
    try {
      await updateBoard({
        variables: {
          boardId: router.query.boardNum,
          password: password,
          updateBoardInput: myUpdateBoardInput,
        },
      });
      Modal.success({ content: "????????? ?????????????????????." });
      router.push(`/boards/${router.query.boardNum}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      isActive={isActive}
      setIsActive={setIsActive}
      onClickSubmit={onClickSubmit}
      userNameError={userNameError}
      passwordError={passwordError}
      titleError={titleError}
      contentError={contentError}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
      userName={userName}
      password={password}
      content={content}
      title={title}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      isAddressModalOn={isAddressModalOn}
      setIsAddressModalOn={setIsAddressModalOn}
      onClickIsAddressModal={onClickIsAddressModal}
      address={address}
      zonecode={zonecode}
      onCompleteDaumPostcode={onCompleteDaumPostcode}
      onChangeDetailAddress={onChangeDetailAddress}
      detailAddress={detailAddress}
      images={images}
      setImages={setImages}
    />
  );
}
