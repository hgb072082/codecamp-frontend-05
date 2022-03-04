import { useState, useContext } from "react";
import { GlobalContext } from "../../../../pages/_app";
import MypageUI from "./MyPage.presenter";

export default function MypageContainer() {
  const { userInfo } = useContext(GlobalContext);
  const [naviNum, setNaviNum] = useState(0);
  const onClcikSetNaviNum = (num) => () => {
    if (num === naviNum) {
      return;
    }
    setNaviNum(num);
  };

  return (
    <MypageUI
      userInfo={userInfo}
      naviNum={naviNum}
      onClcikSetNaviNum={onClcikSetNaviNum}
    />
  );
}
