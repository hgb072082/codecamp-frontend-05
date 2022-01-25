import BoardCommentList from "../../boardComment/commentList/BoardCommentList.container";
import BoardCommentWrite from "../../boardComment/comment/BoardCommentWrite.container";
import * as styles from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import ReactPlayer from "react-player";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <>
      <styles.Wrapper>
        <styles.Header>
          <styles.HeaderProfileImg
            src={`/Users/hwang-gyubin/Desktop/codecamp-frontend-05-gyubin/freeboard_frontend/public/profileImg.png`}
          />
          <styles.HeaderTextBox>
            <styles.HeaderNameText>
              {props.data?.fetchBoard.writer}
            </styles.HeaderNameText>
            <styles.HeaderDateText>Date: 2021.02.18</styles.HeaderDateText>
          </styles.HeaderTextBox>
          <styles.HeaderYellowImgBox>
            <styles.HeaderYellowImg></styles.HeaderYellowImg>
          </styles.HeaderYellowImgBox>
        </styles.Header>

        <styles.BoardTitle>{props.data?.fetchBoard.title}</styles.BoardTitle>
        <styles.BoardImg></styles.BoardImg>

        <styles.BoardText>{props.data?.fetchBoard.contents}</styles.BoardText>

        <styles.BoardVideo>
          <ReactPlayer url={props.data?.fetchBoard.youtubeUrl}></ReactPlayer>
        </styles.BoardVideo>

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
          <div>{props.data?.fetchBoard.disLikeCount}</div>
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
