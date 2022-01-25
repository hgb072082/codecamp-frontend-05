import styled from "@emotion/styled";

export const MyInput = styled.input``;

interface IProps {
  isActive: boolean;
}

export const Wrapper = styled.div`
  width: 1200px;
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const WrapperHeader = styled.div`
  height: 53px;
  font-size: 36px;
  text-align: center;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
`;

export const WrapperContainer = styled.div`
  display: flex;
  width: 1000px;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

export const ClientContentBox = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
`;

export const NeedRevise = styled.div`
  font-size: 12px;
  color: red;
`;

export const ContentBox = styled.div`
  width: 100%;
  height: auto;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

export const ClientBigBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 486px;
  height: 100%;
`;

export const ContentTitle = styled.div``;

export const ClientDataBox = styled.div``;

export const TitleText = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const InputClientBox = styled.input`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  margin-top: 16px;
  border: 1px solid #bdbdbd;
  padding: 0 16px 0 16px;
`;

export const InputTitleBox = styled.input`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  margin-top: 16px;
  border: 1px solid #bdbdbd;
  padding: 0 16px 0 16px;
`;

export const InputContentBox = styled.textarea`
  width: 100%;
  height: 480px;
  margin-top: 16px;
  border: 1px solid #bdbdbd;
  padding: 8px 8px 0 8px;
`;

export const AreaButtonBox = styled.div`
  width: auto;
  height: 52px;
  display: flex;
  flex-direction: row;
  margin-top: 16px;
`;

export const InputAreaNum = styled.input`
  width: 77px;
  height: 100%;
  border: 1px solid #bdbdbd;
  padding: 0 16px 0 16px;
`;

export const AreaNumSearchBtn = styled.button`
  width: 124px;
  height: 100%;
  background-color: black;
  color: white;
  margin-left: 16px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`;

export const UploadBtnBox = styled.div`
  height: auto;
  width: auto;
  margin-top: 16px;
  display: flex;
`;

export const PictureUploadBtn = styled.button`
  width: 78px;
  height: 78px;
  margin-right: 20px;
  border: none;
  background-color: #bdbdbd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const PicturePlusText = styled.div`
  width: 14px;
  height: 14px;
  color: #4f4f4f;
  font-size: 14px;
  text-align: center;
`;

export const PictureUploadText = styled.div`
  font-size: 12px;
  color: #4f4f4f;
  text-align: center;
  margin-top: 3px;
`;

export const SettingSelectBox = styled.div`
  display: flex;
  margin-top: 16px;
  width: 130px;
  justify-content: space-between;
`;

export const SettingSelect = styled.input``;

export const Btn = styled.button`
  margin-top: 80px;
  width: 179px;
  height: 52px;
  text-align: center;
  background-color: ${(props: IProps) => (props.isActive ? "yellow" : "none")};
  border: none;
`;
