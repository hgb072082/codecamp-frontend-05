import * as S from "./BoardCommentList.styles";
import "antd/dist/antd.css";
import { Modal } from "antd";
import BoardCommentListElement from "./BoardCommentListElement";
export default function BoardCommentListUI(props) {
  return (
    <>
      <S.Wrapper>
      {props.deleteIsOpen && (
                <Modal
                  title="Basic Modal"
                  visible={true}
                  onOk={props.onClickDelete}
                  onCancel={props.onChangeIsOpen}
                 
                >
            <S.PasswordInput
            type="password"
            onChange={props.onChangePassword}
          />



                </Modal>
              )}
        {props.data?.fetchBoardComments.map((e) => (
          <BoardCommentListElement id={e._id} e={e} key={e.id}  onClickDeleteBtn={props.onClickDeleteBtn}/>
        
        ))
        
        
        }
      </S.Wrapper>
    </>
  );
}
