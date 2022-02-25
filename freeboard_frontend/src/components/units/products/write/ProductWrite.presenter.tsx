import * as styles from "./ProductWrite.styles";
import "react-quill/dist/quill.snow.css";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import FileUpload from "./ProductWrite.imageUpload";

export default function ProductWriteUI(props) {
  return (
    <>
      <styles.Wrapper>
        <styles.WrapperContainer>
          <styles.WrapperHeader>
            상품 {props.isEditing ? "수정하기" : "등록하기"}
          </styles.WrapperHeader>

          <styles.ContentBox>
            <styles.TitleText>상품명</styles.TitleText>
            <styles.InputTitleBox
              defaultValue={props.data?.fetchUseditem.name}
              onChange={props.onChangeName}
              placeholder="상품명을 작성해주세요."
            ></styles.InputTitleBox>
          </styles.ContentBox>
          <styles.ContentBox>
            <styles.TitleText>한줄요약</styles.TitleText>
            <styles.InputTitleBox
              defaultValue={props.data?.fetchUseditem.remarks}
              placeholder="한줄요약을 작성해주세요."
              onChange={props.onChangeRemarks}
            ></styles.InputTitleBox>
          </styles.ContentBox>
          <styles.ContentBox>
            <styles.TitleText>상품설명</styles.TitleText>
            <styles.InputContentBox
              defaultValue={props.data?.fetchUseditem.contents}
              placeholder="상품을 설명해주세요."
              onChange={props.onChangeContents}
            ></styles.InputContentBox>
          </styles.ContentBox>
          <styles.ContentBox>
            <styles.TitleText>판매가격</styles.TitleText>
            <styles.InputTitleBox
              defaultValue={props.data?.fetchUseditem.price}
              placeholder="판매가격을 작성해주세요."
              onChange={props.onChangePrice}
            ></styles.InputTitleBox>
          </styles.ContentBox>
          <styles.ContentBox>
            <styles.TitleText>태그입력</styles.TitleText>
            <styles.InputTitleBox
              // defaultValue={props.data?.fetchBoard.title}

              placeholder="#태그 #태그 #태그"
            ></styles.InputTitleBox>
          </styles.ContentBox>
          <styles.ContentBox>
            <styles.TitleText>주소</styles.TitleText>
            <styles.AreaButtonBox>
              <styles.InputAreaNum
                placeholder="07250"
                value={
                  props.data?.fetchUseditem?.useditemAddress?.zipcode
                    ? props.data?.fetchUseditem?.useditemAddress?.zipcode
                    : props.zipcode
                }
                readOnly={true}
              ></styles.InputAreaNum>
              <styles.AreaNumSearchBtn
                type="button"
                onClick={props.onClickIsAddressModal}
              >
                우편번호 검색
              </styles.AreaNumSearchBtn>
              {props.isAddressModalOn && (
                <Modal
                  title="주소"
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
                props.data?.fetchUseditem?.useditemAddress?.address
                  ? props.data?.fetchUseditem?.useditemAddress?.address
                  : props.address
              }
              readOnly={true}
            ></styles.InputTitleBox>
            <styles.InputTitleBox
              onChange={props.onChangeAddressDetail}
              placeholder="상세주소"
              defaultValue={
                props.data?.fetchUseditem?.useditemAddress?.addressDetail
              }
            ></styles.InputTitleBox>
          </styles.ContentBox>
          <div id="map" style={{ width: "500px", height: "400px" }}></div>
          <styles.ContentBox>
            <styles.TitleText>사진 첨부</styles.TitleText>
            <styles.UploadBtnBox>
              {[1, 2, 3].map((e, idx) => {
                return (
                  <>
                    <FileUpload
                      e={e}
                      idx={idx}
                      images={props.images}
                      setImages={props.setImages}
                    />
                  </>
                );
              })}
            </styles.UploadBtnBox>
          </styles.ContentBox>

          <styles.Btn
            onClick={
              props.isEditing ? props.onClickUpdate : props.onClickSubmitBtn
            }
          >
            {props.isEditing ? "수정하기" : "등록하기"}
          </styles.Btn>
        </styles.WrapperContainer>
      </styles.Wrapper>
    </>
  );
}
