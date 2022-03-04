// import BoardCommentList from "../../boardComment/commentList/BoardCommentList.container";
// import BoardCommentWrite from "../../boardComment/comment/BoardCommentWrite.container";
import * as styles from "./ProductDetail.styles";
import ProductCommentWrite from "../comment/ProductCommentWrite.container";
import ProductCommentList from "../commentlist/ProductCommentList.container";
// import { IBoardDetailUIProps } from "./BoardDetail.types";
// import ReactPlayer from "react-player";
// import { getMyDate } from "../../../commons/libraries/utils";
// import { v4 as uuidv4 } from "uuid";
import { getMyDate } from "../../../commons/libraries/utils";
import { v4 as uuidv4 } from "uuid";

import { Modal, Avatar } from "antd";
import {
  LinkOutlined,
  UserOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

export default function ProductDetailUI(props) {
  return (
    <>
      <styles.Wrapper>
        <styles.Header>
          <Avatar size={55} icon={<UserOutlined />} />
          <styles.HeaderTextBox>
            <styles.HeaderNameText>
              {props.data?.fetchUseditem?.seller?.name}
            </styles.HeaderNameText>
            <styles.HeaderDateText>
              {getMyDate(props.data?.fetchUseditem.createdAt)}
            </styles.HeaderDateText>
          </styles.HeaderTextBox>

          <LinkOutlined style={{ fontSize: "30px" }} />
          <EnvironmentOutlined
            onClick={props.onClickGps}
            style={{ fontSize: "30px" }}
          />
          {props.isAddressFetchModalOn && (
            <Modal
              visible={true}
              onOk={props.onClickGps}
              onCancel={props.onClickGps}
            >
              {props.data?.fetchUseditem?.useditemAddress?.address}
              {props.data?.fetchUseditem?.useditemAddress?.addressDetail}
            </Modal>
          )}
        </styles.Header>

        <styles.BoardTitle>{props.data?.fetchUseditem.name}</styles.BoardTitle>

        <styles.BoardText>{props.data?.fetchUseditem.remarks}</styles.BoardText>
        <styles.BoardTitle>
          {props.data?.fetchUseditem.price}원
        </styles.BoardTitle>
        {props.data?.fetchUseditem?.images.map((el) =>
          el ? (
            <img
              key={uuidv4()}
              style={{ width: "80px", height: "80px" }}
              src={`https://storage.googleapis.com/${el}`}
            ></img>
          ) : (
            <></>
          )
        )}
        <styles.BoardText>
          {props.data?.fetchUseditem.contents}
        </styles.BoardText>

        <styles.BtnBox>
          <styles.Btn onClick={props.onClickMoveToList}>목록으로</styles.Btn>
          {props.data?.fetchUseditem?.seller._id === props.userInfo._id ? (
            <>
              <styles.Btn onClick={props.onClickMoveToEdit}>
                수정하기
              </styles.Btn>
              <styles.Btn onClick={props.onClickDelete}>삭제하기</styles.Btn>
            </>
          ) : (
            <styles.Btn onClick={props.onClickBuy}>구매하기</styles.Btn>
          )}
        </styles.BtnBox>
      </styles.Wrapper>
      <ProductCommentWrite />
      <ProductCommentList />
    </>
  );
}
