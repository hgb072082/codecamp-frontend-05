import BoardCommentList from "../../boardComment/commentList/BoardCommentList.container";
import BoardCommentWrite from "../../boardComment/comment/BoardCommentWrite.container";
import * as styles from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import ReactPlayer from "react-player";
import { getMyDate } from "../../../commons/libraries/utils";
import { v4 as uuidv4 } from "uuid";
import { Modal, Avatar } from "antd";
import {
  LinkOutlined,
  LikeOutlined,
  DislikeOutlined,
  UserOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <>
      <styles.Wrapper>
        <styles.Header>
          <Avatar size={55} icon={<UserOutlined />} />
          <styles.HeaderTextBox>
            <styles.HeaderNameText>
              {props.data?.fetchBoard.writer}
            </styles.HeaderNameText>
            <styles.HeaderDateText>
              {getMyDate(props.data?.fetchBoard.createdAt)}
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
              {props.data?.fetchBoard?.boardAddress?.address}
              {props.data?.fetchBoard?.boardAddress?.addressDetail}
            </Modal>
          )}
        </styles.Header>

        <styles.BoardTitle>{props.data?.fetchBoard.title}</styles.BoardTitle>

        <styles.BoardText>{props.data?.fetchBoard.contents}</styles.BoardText>

        <styles.BoardVideo>
          <ReactPlayer url={props.data?.fetchBoard.youtubeUrl}></ReactPlayer>
        </styles.BoardVideo>

        {props.data?.fetchBoard.images.map((el) =>
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

        <styles.GoodBadBox>
          <LikeOutlined
            onClick={props.onClickLikeUpdate}
            style={{ fontSize: "40px" }}
          />
          <div>{props.data?.fetchBoard.likeCount}</div>
          <DislikeOutlined
            onClick={props.onClickDisLikeUpdate}
            style={{ fontSize: "40px" }}
          />
          <div>{props.data?.fetchBoard.dislikeCount}</div>
        </styles.GoodBadBox>
        <styles.BtnBox>
          <styles.Btn onClick={props.onClickMoveToList}>목록으로</styles.Btn>
          <styles.Btn onClick={props.onClickMoveToEdit}>수정하기</styles.Btn>
          <styles.Btn onClick={props.onClickDelete}>삭제하기</styles.Btn>
        </styles.BtnBox>
      </styles.Wrapper>
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
