import { useState } from "react";
import MyPicked from "./market/MyPicked";
import MyProduct from "./market/MyProduct";
import * as Styles from "./MyPage.styles";
export default function MyPageMyMarket(props) {
  const onClickIsMyProductOn = (boolean) => () => {
    setIsMyProductOn((prev) => prev !== boolean && !prev);
  };
  const [isMyProductOn, setIsMyProductOn] = useState(true);
  if (props.id !== props.naviNum) {
    return <></>;
  } else
    return (
      <>
        <Styles.Container>
          <Styles.HeaderBox>
            <Styles.HeaderSelectorBox>
              <Styles.HeaderProductSelector
                onClick={onClickIsMyProductOn(true)}
                isMyProductOn={isMyProductOn}
              >
                나의상품
              </Styles.HeaderProductSelector>
              <Styles.HeaderSelector> | </Styles.HeaderSelector>
              <Styles.HeaderPickedSelector
                onClick={onClickIsMyProductOn(false)}
                isMyProductOn={isMyProductOn}
              >
                마이찜
              </Styles.HeaderPickedSelector>
            </Styles.HeaderSelectorBox>
            <Styles.SearchBox>
              <Styles.SearchInput placeholder="필요한 내용을 검색해주세요."></Styles.SearchInput>
              <Styles.SearchBtn>검색</Styles.SearchBtn>
            </Styles.SearchBox>
          </Styles.HeaderBox>
          {isMyProductOn ? <MyProduct /> : <MyPicked />}
        </Styles.Container>
      </>
    );
}
