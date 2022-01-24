import * as styles from './BoardDetail.styles'

export default function BoardDetailUI(props){
    
    return(<>
    
        <styles.Wrapper>
    
    <styles.Header>
    
    
        <styles.HeaderProfileImg src={`/Users/hwang-gyubin/Desktop/codecamp-frontend-05-gyubin/freeboard_frontend/public/profileImg.png`} />
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
    
    <styles.BoardVideo></styles.BoardVideo>
    
    
    
    <styles.GoodBadBox>
    <styles.GoodBadImg /><styles.GoodBadImg />
    </styles.GoodBadBox>
    <styles.BtnBox>
    <styles.Btn onClick={props.onClickMoveToList}>
                목록으로
              </styles.Btn>
    <styles.Btn onClick={props.onClickMoveToEdit}>
                수정하기
              </styles.Btn>
              <styles.Btn onClick={props.onClickDelete}>
                삭제하기
              </styles.Btn>
              </styles.BtnBox>
        </styles.Wrapper>
    
    </>
    
    
    
    )
    
    
    }