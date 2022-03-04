import { useQuery } from "@apollo/client";
import { getMyDate } from "../../libraries/utils";
import { FETCH_USED_ITEMS_I_PICKED } from "../MyPage.queries";
import * as Styles from "../MyPage.styles";

export default function MyPicked() {
  const { data } = useQuery(FETCH_USED_ITEMS_I_PICKED);
  console.log(data);
  return data?.length > 0 ? (
    <>
      <Styles.MyProductList>
        <Styles.List>
          <Styles.ListHeaderNumTxt>번호</Styles.ListHeaderNumTxt>
          <Styles.ListHeaderProductNameTxt>
            상품명
          </Styles.ListHeaderProductNameTxt>
          <Styles.ListHeaderPriceTxt>판매가격</Styles.ListHeaderPriceTxt>
          <Styles.HeaderIsSoldOut>판매자</Styles.HeaderIsSoldOut>

          <Styles.ListHeaderDateTxt>날짜</Styles.ListHeaderDateTxt>
        </Styles.List>
        {data?.fetchUseditemsIPicked.map((el, i) => {
          return (
            <Styles.List key={el._id}>
              <Styles.ListNumTxt>{i + 1}</Styles.ListNumTxt>
              <Styles.ListProductNameTxt>{el.name} </Styles.ListProductNameTxt>

              <Styles.ListPriceTxt>{el.price}</Styles.ListPriceTxt>
              <Styles.ListPriceTxt>{el.seller.name}</Styles.ListPriceTxt>

              <Styles.ListDateTxt>
                {getMyDate(el.soldAt) ||
                  getMyDate(el.updatedAt) ||
                  getMyDate(el.createdAt)}
              </Styles.ListDateTxt>
            </Styles.List>
          );
        })}
      </Styles.MyProductList>
    </>
  ) : (
    <div> 찜한게 없어용 </div>
  );
}
