import * as styles from "./ProductWrite.styles";

export default function ProductWriteUI(props) {
  return (
    <>
      <styles.Wrapper>
        <styles.WrapperContainer>
          <styles.WrapperHeader>
            상품 {props.isEdit ? "수정하기" : "등록하기"}
          </styles.WrapperHeader>

          <styles.ContentBox>
            <styles.TitleText>상품명</styles.TitleText>
            <styles.InputTitleBox
              defaultValue={props.data?.fetchUseditem.name}
              placeholder="상품명을 작성해주세요."
              onChange={props.onChangeInput("name")}
            ></styles.InputTitleBox>
          </styles.ContentBox>
          <styles.ContentBox>
            <styles.TitleText>한줄요약</styles.TitleText>
            <styles.InputTitleBox
              defaultValue={props.data?.fetchUseditem.remarks}
              placeholder="한줄요약을 작성해주세요."
              onChange={props.onChangeInput("remarks")}
            ></styles.InputTitleBox>
          </styles.ContentBox>
          <styles.ContentBox>
            <styles.TitleText>상품설명</styles.TitleText>
            <styles.InputContentBox
              defaultValue={props.data?.fetchUseditem.contents}
              placeholder="상품을 설명해주세요."
              onChange={props.onChangeInput("contents")}
            ></styles.InputContentBox>
          </styles.ContentBox>
          <styles.ContentBox>
            <styles.TitleText>판매가격</styles.TitleText>
            <styles.InputTitleBox
              defaultValue={props.data?.fetchUseditem.price}
              placeholder="판매가격을 작성해주세요."
              onChange={props.onChangeInput("price")}
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
            <styles.TitleText>사진 첨부</styles.TitleText>
          </styles.ContentBox>

          <styles.Btn
            onClick={
              props.isEdit ? props.onClickUpdate : props.onClickSubmitBtn
            }
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </styles.Btn>
        </styles.WrapperContainer>
      </styles.Wrapper>
    </>
  );
}
