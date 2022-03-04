import { useQuery } from "@apollo/client";
import { getMyDate } from "../../libraries/utils";
import * as Styles from "../MyPage.styles";
import { FETCH_POINT_TRANSACTIONS_OF_SELLING } from "../MyPage.queries";

export default function SoldList(props) {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS_OF_SELLING);
  console.log(data);
  if (props.naviNum !== props.id) {
    return <></>;
  }
  return (
    <Styles.MyProductList>
      <Styles.List>
        <Styles.ListHeaderDateTxt>거래일</Styles.ListHeaderDateTxt>

        <Styles.ListHeaderProductNameTxt>
          상품명
        </Styles.ListHeaderProductNameTxt>

        <Styles.ListHeaderPriceTxt>거래내역</Styles.ListHeaderPriceTxt>
        <Styles.ListHeaderPriceTxt>거래 후 잔액</Styles.ListHeaderPriceTxt>
      </Styles.List>
      {data?.fetchPointTransactionsOfSelling.map((el, i) => {
        return (
          <Styles.List key={el._id}>
            <Styles.ListDateTxt>{getMyDate(el.createdAt)}</Styles.ListDateTxt>
            {/* <Styles.ListNumTxt>{i + 1}</Styles.ListNumTxt> */}
            <Styles.ListHeaderProductNameTxt>
              {el.useditem.name}
            </Styles.ListHeaderProductNameTxt>

            <Styles.ListPointFlexTxt isYellow={true}>
              +{el.amount}
            </Styles.ListPointFlexTxt>
            <Styles.ListPriceTxt>{el.balance}</Styles.ListPriceTxt>
          </Styles.List>
        );
      })}
    </Styles.MyProductList>
  );
}
