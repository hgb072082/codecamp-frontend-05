import * as styles from './BoardWrite.styles';
export default function BoardWriteUI(props) {
  return (
    <>
      <styles.Wrapper>
        <styles.WrapperContainer>
          <styles.WrapperHeader>
            게시물 {props.isEdit ? '수정하기' : '등록하기'}
          </styles.WrapperHeader>

          <styles.ClientContentBox>
            <styles.ClientBigBox>
              <styles.TitleText>작성자</styles.TitleText>
              <styles.InputClientBox
                defaultValue={props.data?.fetchBoard.writer}
                readOnly={props.data?.fetchBoard.writer}
                style={{ borderColor: props.userNameError }}
                placeholder="이름을 적어주세요."
                onChange={(e) => {
                  props.setUserName(e.target.value);
                  if (
                    e.target.value &&
                    props.title &&
                    props.password &&
                    props.content
                  ) {
                    props.setIsActive(true);
                  } else {
                    props.setIsActive(false);
                  }
                }}
              ></styles.InputClientBox>
            </styles.ClientBigBox>
            <styles.ClientBigBox>
              <styles.TitleText>비밀번호</styles.TitleText>
              <styles.InputClientBox
                defaultValue={props.data?.fetchBoard.password}
                style={{ borderColor: props.passwordError }}
                type={'password'}
                placeholder="비밀번호를 입력해주세요."
                onChange={(e) => {
                  props.setPassword(e.target.value);
                  if (
                    e.target.value &&
                    props.title &&
                    props.userName &&
                    props.content
                  ) {
                    props.setIsActive(true);
                  } else {
                    props.setIsActive(false);
                  }
                }}
              ></styles.InputClientBox>
            </styles.ClientBigBox>
          </styles.ClientContentBox>
          <styles.ContentBox>
            <styles.TitleText>제목</styles.TitleText>
            <styles.InputTitleBox
              defaultValue={props.data?.fetchBoard.title}
              style={{ borderColor: props.titleError }}
              placeholder="제목을 작성해주세요."
              onChange={(e) => {
                props.setTitle(e.target.value);
                if (
                  e.target.value &&
                  props.userName &&
                  props.password &&
                  props.content
                ) {
                  props.setIsActive(true);
                } else {
                  props.setIsActive(false);
                }
              }}
            ></styles.InputTitleBox>
          </styles.ContentBox>
          <styles.ContentBox>
            <styles.TitleText>내용</styles.TitleText>
            <styles.InputContentBox
              defaultValue={props.data?.fetchBoard.content}
              style={{ borderColor: props.contentError }}
              placeholder="내용을 작성해주세요."
              onChange={(e) => {
                props.setContent(e.target.value);
                if (
                  e.target.value &&
                  props.title &&
                  props.password &&
                  props.userName
                ) {
                  props.setIsActive(true);
                } else {
                  props.setIsActive(false);
                }
              }}
            ></styles.InputContentBox>
          </styles.ContentBox>
          <styles.ContentBox>
            <styles.TitleText>주소</styles.TitleText>
            <styles.AreaButtonBox>
              <styles.InputAreaNum placeholder="07250"></styles.InputAreaNum>
              <styles.AreaNumSearchBtn>우편번호 검색</styles.AreaNumSearchBtn>
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
                    <styles.PictureUploadText>Upload</styles.PictureUploadText>
                  </styles.PictureUploadBtn>
                );
              })}
            </styles.UploadBtnBox>
          </styles.ContentBox>
          <styles.ContentBox>
            <styles.TitleText>메인 설정</styles.TitleText>
            <styles.SettingSelectBox>
              <styles.SettingSelect name={'mainSet'} type={'radio'} />
              유튜브
              <styles.SettingSelect name={'mainSet'} type={'radio'} />
              사진
            </styles.SettingSelectBox>
          </styles.ContentBox>

          <styles.Btn
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? '수정하기' : '등록하기'}
          </styles.Btn>
        </styles.WrapperContainer>
      </styles.Wrapper>
    </>
  );
}
