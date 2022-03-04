import AllList from "./point/AllList";
import ChargeList from "./point/ChargeList";
import BuyList from "./point/BuyList";
import SoldList from "./point/SoldList";
import * as Styles from "./MyPage.styles";
import { useState } from "react";

export default function MyPageMyPoint(props) {
  const [naviNum, setNaviNum] = useState(0);
  const onClickNaviNum = (num) => () => {
    if (num !== naviNum) {
      setNaviNum(num);
    }
  };
  if (props.id !== props.naviNum) {
    return <></>;
  } else
    return (
      <>
        <Styles.Container>
          <Styles.HeaderBox>
            <Styles.HeaderSelectorBox>
              <Styles.HeaderListSelector
                id={0}
                naviNum={naviNum}
                onClick={onClickNaviNum(0)}
              >
                전체내역
              </Styles.HeaderListSelector>
              <Styles.HeaderSelector> | </Styles.HeaderSelector>
              <Styles.HeaderListSelector
                id={1}
                onClick={onClickNaviNum(1)}
                naviNum={naviNum}
              >
                충전내역
              </Styles.HeaderListSelector>
              <Styles.HeaderSelector> | </Styles.HeaderSelector>
              <Styles.HeaderListSelector
                id={2}
                onClick={onClickNaviNum(2)}
                naviNum={naviNum}
              >
                구매내역
              </Styles.HeaderListSelector>
              <Styles.HeaderSelector> | </Styles.HeaderSelector>
              <Styles.HeaderListSelector
                id={3}
                onClick={onClickNaviNum(3)}
                naviNum={naviNum}
              >
                판매내역
              </Styles.HeaderListSelector>
            </Styles.HeaderSelectorBox>
          </Styles.HeaderBox>

          <AllList id={0} naviNum={naviNum} />
          <ChargeList id={1} naviNum={naviNum} />
          <BuyList id={2} naviNum={naviNum} />
          <SoldList id={3} naviNum={naviNum} />
        </Styles.Container>
      </>
    );
}
