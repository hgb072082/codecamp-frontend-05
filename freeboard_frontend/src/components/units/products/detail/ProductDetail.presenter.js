// import BoardCommentList from "../../boardComment/commentList/BoardCommentList.container";
// import BoardCommentWrite from "../../boardComment/comment/BoardCommentWrite.container";
import * as styles from "./ProductDetail.styles";
import ProductCommentWrite from "../comment/ProductCommentWrite.container";
import ProductCommentList from "../commentlist/ProductCommentList.container";
// import { IBoardDetailUIProps } from "./BoardDetail.types";
// import ReactPlayer from "react-player";
// import { getMyDate } from "../../../commons/libraries/utils";
// import { v4 as uuidv4 } from "uuid";
import { Avatar } from "antd";
import { LinkOutlined, UserOutlined } from "@ant-design/icons";

export default function ProductDetailUI(props) {
  console.log(props.data);
  return (
    <>
      <styles.Wrapper>
        <styles.Header>
          <Avatar size={55} icon={<UserOutlined />} />
          <styles.HeaderTextBox>
            <styles.HeaderNameText>판매자</styles.HeaderNameText>
            <styles.HeaderDateText></styles.HeaderDateText>
          </styles.HeaderTextBox>

          <LinkOutlined style={{ fontSize: "30px" }} />
        </styles.Header>

        <styles.BoardTitle>{props.data?.fetchUseditem.name}</styles.BoardTitle>

        <styles.BoardText>{props.data?.fetchUseditem.remarks}</styles.BoardText>
        <styles.BoardTitle>{props.data?.fetchUseditem.price}</styles.BoardTitle>
        <img
          src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
        ></img>

        <styles.BtnBox>
          <styles.Btn onClick={props.onClickMoveToList}>목록으로</styles.Btn>
          <styles.Btn onClick={props.onClickMoveToEdit}>수정하기</styles.Btn>
          <styles.Btn onClick={props.onClickDelete}>삭제하기</styles.Btn>
        </styles.BtnBox>
      </styles.Wrapper>
      <ProductCommentWrite />
      <ProductCommentList />
    </>
  );
}
