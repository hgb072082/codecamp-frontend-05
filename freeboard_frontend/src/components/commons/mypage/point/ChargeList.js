import { useQuery } from "@apollo/client";
import { getMyDate } from "../../libraries/utils";
import * as Styles from "../MyPage.styles";
import { FETCH_POINT_TRANSACTIONS_OF_LOADING } from "../MyPage.queries";

export default function ChargeList(props) {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS_OF_LOADING);
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
            결제 ID
          </Styles.ListHeaderProductNameTxt>

          <Styles.ListHeaderPriceTxt>충전내역</Styles.ListHeaderPriceTxt>
          <Styles.ListHeaderPriceTxt>잔액</Styles.ListHeaderPriceTxt>
        </Styles.List>
        {data?.fetchPointTransactionsOfLoading.map((el, i) => {
          return (
            <Styles.List key={el._id}>
              <Styles.ListDateTxt>{getMyDate(el.createdAt)}</Styles.ListDateTxt>
              {/* <Styles.ListNumTxt>{i + 1}</Styles.ListNumTxt> */}
              <Styles.ListHeaderProductNameTxt>
                {el.impUid}
              </Styles.ListHeaderProductNameTxt>

              <Styles.ListPointFlexTxt isYellow={el.status === "충전"}>
                +{el.amount}
              </Styles.ListPointFlexTxt>
              <Styles.ListPriceTxt>{el.balance}</Styles.ListPriceTxt>
            </Styles.List>
          );
        })}
      </Styles.MyProductList>
    </>
  );
}
