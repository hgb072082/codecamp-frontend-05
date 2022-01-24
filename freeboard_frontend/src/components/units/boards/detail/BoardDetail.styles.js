import styled from "@emotion/styled";



export const Wrapper= styled.div`
width: 1200px;
border: 1px solid black;
margin: 100px;
padding-top: 80px;
padding-bottom: 80px;
padding-left: 102px;
padding-right: 102px;
display: flex;
flex-direction: column;
align-items: center;
border: none;
box-shadow: 0px 0px 10px gray;

`;

export const Header=styled.div`

width:100%;
height:80px;
display:flex;
flex-direction:row;
border:1px solid #BDBDBD;
justify-content:flex-start;
`;

export const HeaderProfileImg = styled.img`

width:46.67px;
height:46.67px;
background-color:red;


`;

export const HeaderTextBox= styled.div`
height:60px;
display:flex;
flex-direction: column;
`;

export const HeaderNameText= styled.div`
width:67px;
height:36px;
font-size:24px;
font-weight:500;

`;

export const HeaderDateText= styled.div`
width:126px;
height:24px;
font-size:16px;
color:#828282;
`; 

export const HeaderYellowImgBox=styled.div`

width:86.67px;
height:13.33px;


`;

export const HeaderYellowImg= styled.img`
width:32px;
height:32px;


`;

export const BoardTitle=styled.div`
padding-top:80px;
padding-bottom:40px;
width:100%;
font-weight:700;
font-size:36px;
`;

export const BoardImg= styled.img`
padding-bottom:40px;
width:100%;
height:520px;


`;
export const BoardText= styled.div`

font-weight:400;
font-size:16px;
width:100%;

`;

export const BoardVideo=styled.div`
height:360px;
padding-top:120px;

`;

export const GoodBadBox=styled.div`
height:293px;
width:120px;
padding-bottom:80px;
padding-top:160px;
`;

export const GoodBadImg= styled.img`
width:40px;
height:51px;
`;

export const Btn=styled.button`
margin-top:80px;
width:179px;
height:52px;
text-align:center;
background-color: ${(props) => props.isActive ? "yellow" : "none"};
border:none;
`;

export const BtnBox= styled.div`
width:400px;
display: flex;
flex-direction:row;
justify-content:center;
align-items: center;
`