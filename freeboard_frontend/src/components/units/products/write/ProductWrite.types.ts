import { ChangeEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  data: any;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  isActive: boolean;
  setIsActive: (boolean) => void;
  onClickSubmit: () => void;
  userNameError: string;
  passwordError: string;
  titleError: string;
  contentError: string;
  userName: string;
  password: string;
  title: string;
  content: string;
  onClickUpdate: () => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  isAddressModalOn: boolean;
  setIsAddressModalOn: (boolean) => void;
  onClickIsAddressModal: () => void;
  address: string;
  zonecode: string;
  onCompleteDaumPostcode: (any) => void;
  onChangeDetailAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  detailAddress: string;
  images: Array<string>;
  setImages: (Array) => void;
}
