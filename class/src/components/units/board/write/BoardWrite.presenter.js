
import * as S from './BoardWrite.styles'
export default function BoardWriteUI (props) {


    return (
    
    
        <>
        작성자: <S.MyInput type="text" onChange={props.onChangeMyWriter} /><br />
        제목: <S.MyInput type="text" onChange={props.onChangeMyTitle} /><br />
        내용: <S.MyInput type="text" onChange={props.onChangeMyContents} /><br />
        <S.MyButton onClick={props.ccc} ggg={props.isActive}>GRAPHQL-API 요청하기!!!</S.MyButton>
        <div>{props.bbb}</div>
    </>
    
    
    )
    
    
    }