import { useQuery } from "@apollo/client";
import { getMyDate } from "../../libraries/utils";
import * as Styles from "../MyPage.styles";
import { FETCH_POINT_TRANSACTIONS } from "../MyPage.queries";
export default function AllList(props) {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS);
  console.log(data);
  if (props.naviNum !== props.id) {
    return <></>;
  }
  return (
    <>
      <Styles.MyProductList>
        <Styles.List>
          <Styles.ListHeaderDateTxt>날짜</Styles.ListHeaderDateTxt>

          <Styles.ListHeaderProductNameTxt>
            내용
          </Styles.ListHeaderProductNameTxt>

          <Styles.ListHeaderPriceTxt>
            거래 및 충전내역
          </Styles.ListHeaderPriceTxt>
          <Styles.ListHeaderPriceTxt>잔액</Styles.ListHeaderPriceTxt>
        </Styles.List>
        {data?.fetchPointTransactions.map((el, i) => {
          return (
            <Styles.List key={el._id}>
              <Styles.ListDateTxt>{getMyDate(el.createdAt)}</Styles.ListDateTxt>
              {/* <Styles.ListNumTxt>{i + 1}</Styles.ListNumTxt> */}
              <Styles.ListPointContentsTxt
                isYellow={el.status === "충전" || el.status === "판매"}
              >
                {el.status}
              </Styles.ListPointContentsTxt>

              <Styles.ListPointFlexTxt
                isYellow={el.status === "충전" || el.status === "판매"}
              >
                {el.amount}
              </Styles.ListPointFlexTxt>
              <Styles.ListPriceTxt>{el.balance}</Styles.ListPriceTxt>
            </Styles.List>
          );
        })}
      </Styles.MyProductList>
    </>
  );
}
