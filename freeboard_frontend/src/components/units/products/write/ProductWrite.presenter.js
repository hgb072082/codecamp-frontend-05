import * as Styles from "./ProductWrite.styles";
import "antd/dist/antd.css";
import { LinkOutlined } from "@ant-design/icons";
export default function ProductWriteUI() {
  return (
    <>
      <Styles.Wrapper>
        <Styles.Header>글쓰기</Styles.Header>
        <Styles.Title placeholder="제목"></Styles.Title>
        <Styles.UploadFileBtn>
          <LinkOutlined style={{ marginRight: "5px" }} /> 클릭하여 이미지 또는
          파일을 첨부해주세요. (선택)
        </Styles.UploadFileBtn>
        <Styles.ContentsInput placeholder="불법촬영물등을 게재할 경우 전기통신사업법 제22조의5제1항에 따라 삭제-접속차단 등의 조치가 취해질 수 있으며 관련 법률에 따라 처벌받을 수 있습니다."></Styles.ContentsInput>

        <Styles.BottomBtnBox>
          <Styles.BottomCancelBtn>취소</Styles.BottomCancelBtn>
          <Styles.BottomCompleteBtn>작성완료</Styles.BottomCompleteBtn>
        </Styles.BottomBtnBox>
      </Styles.Wrapper>
    </>
  );
}
