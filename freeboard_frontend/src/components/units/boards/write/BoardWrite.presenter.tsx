import { Modal } from "antd";
import { IBoardWriteProps } from "./BoardWrite.types";
import * as styles from "./BoardWrite.styles";

import DaumPostcode from "react-daum-postcode";
import FileUpload from "./BoardWrite.imageUpload";

export default function BoardWriteUI(props: IBoardWriteProps) {
  return (
    <>
      <styles.Wrapper>
        <styles.WrapperContainer>
          <styles.WrapperHeader>
            게시물 {props.isEdit ? "수정하기" : "등록하기"}
          </styles.WrapperHeader>

          <styles.ClientContentBox>
            <styles.ClientBigBox>
              <styles.TitleText>작성자</styles.TitleText>
              <styles.InputClientBox
                defaultValue={props.data?.fetchBoard.writer}
                readOnly={props.data?.fetchBoard.writer}
                style={{ borderColor: props.userNameError }}
                placeholder="이름을 적어주세요."
                onChange={props.onChangeWriter}
              ></styles.InputClientBox>
            </styles.ClientBigBox>
            <styles.ClientBigBox>
              <styles.TitleText>비밀번호</styles.TitleText>
              <styles.InputClientBox
                defaultValue={props.data?.fetchBoard.password}
                style={{ borderColor: props.passwordError }}
                type={"password"}
                placeholder="비밀번호를 입력해주세요."
                onChange={props.onChangePassword}
              ></styles.InputClientBox>
            </styles.ClientBigBox>
          </styles.ClientContentBox>
          <styles.ContentBox>
            <styles.TitleText>제목</styles.TitleText>
            <styles.InputTitleBox
              defaultValue={props.data?.fetchBoard.title}
              style={{ borderColor: props.titleError }}
              placeholder="제목을 작성해주세요."
              onChange={props.onChangeTitle}
            ></styles.InputTitleBox>
          </styles.ContentBox>
          <styles.ContentBox>
            <styles.TitleText>내용</styles.TitleText>
            <styles.InputContentBox
              defaultValue={props.data?.fetchBoard.contents}
              style={{ borderColor: props.contentError }}
              placeholder="내용을 작성해주세요."
              onChange={props.onChangeContent}
            ></styles.InputContentBox>
          </styles.ContentBox>
          <styles.ContentBox>
            <styles.TitleText>주소</styles.TitleText>
            <styles.AreaButtonBox>
              <styles.InputAreaNum
                placeholder="07250"
                value={
                  props.zonecode
                    ? props.zonecode
                    : props.data?.fetchBoard.boardAddress.zipcode
                }
              ></styles.InputAreaNum>
              <styles.AreaNumSearchBtn onClick={props.onClickIsAddressModal}>
                우편번호 검색
              </styles.AreaNumSearchBtn>
              {props.isAddressModalOn && (
                <Modal
                  title="Basic Modal"
                  visible={true}
                  onOk={props.onClickIsAddressModal}
                  onCancel={props.onClickIsAddressModal}
                >
                  <DaumPostcode onComplete={props.onCompleteDaumPostcode} />
                </Modal>
              )}
            </styles.AreaButtonBox>

            <styles.InputTitleBox
              value={
                props.address
                  ? props.address
                  : props.data?.fetchBoard.boardAddress.address
              }
            ></styles.InputTitleBox>
            <styles.InputTitleBox
              onChange={props.onChangeDetailAddress}
              placeholder="상세주소"
              defaultValue={props.data?.fetchBoard.boardAddress.addressDetail}
            ></styles.InputTitleBox>
          </styles.ContentBox>
          <styles.ContentBox>
            <styles.TitleText>유튜브</styles.TitleText>
            <styles.InputTitleBox
              defaultValue={props.data?.fetchBoard.youtubeUrl}
              onChange={props.onChangeYoutubeUrl}
              placeholder="링크를 복사해주세요."
            ></styles.InputTitleBox>
          </styles.ContentBox>
          <styles.ContentBox>
            <styles.TitleText>사진 첨부</styles.TitleText>
            <styles.UploadBtnBox>
              {[1, 2, 3].map((e,idx) => {
                return (<>
      <FileUpload e={e} idx={idx} images={props.images} setImages={props.setImages} />
                </>);
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

          <styles.Btn
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </styles.Btn>
        </styles.WrapperContainer>
      </styles.Wrapper>
    </>
  );
}
