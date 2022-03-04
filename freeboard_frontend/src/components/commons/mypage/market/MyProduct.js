import { useQuery } from "@apollo/client";
import { getMyDate } from "../../libraries/utils";
import { FETCH_USED_ITEMS_I_SOLD } from "../MyPage.queries";
import * as Styles from "../MyPage.styles";
export default function MyProduct() {
  const { data } = useQuery(FETCH_USED_ITEMS_I_SOLD, {
    variables: { page: 1 },
  });
  console.log("데이터는");
  console.log(data);
  return (
    <>
      <Styles.MyProductList>
        <Styles.List>
          <Styles.ListHeaderNumTxt>번호</Styles.ListHeaderNumTxt>
          <Styles.ListHeaderProductNameTxt>
            상품명
          </Styles.ListHeaderProductNameTxt>
          <Styles.HeaderIsSoldOut>판매여부</Styles.HeaderIsSoldOut>
          <Styles.ListHeaderPriceTxt>판매가격</Styles.ListHeaderPriceTxt>
          <Styles.ListHeaderDateTxt>날짜</Styles.ListHeaderDateTxt>
        </Styles.List>
        {data?.fetchUseditemsISold.map((el, i) => {
          return (
            <Styles.List key={el._id}>
              <Styles.ListNumTxt>{i + 1}</Styles.ListNumTxt>
              <Styles.ListProductNameTxt>{el.name} </Styles.ListProductNameTxt>
              {el.soldAt ? (
                <Styles.IsSoldOut isSold={!!el.soldAt}>
                  판매완료
                </Styles.IsSoldOut>
              ) : (
                <Styles.IsSoldOut isSold={!!el.soldAt}>판매중</Styles.IsSoldOut>
              )}
              <Styles.ListPriceTxt>{el.price}</Styles.ListPriceTxt>
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
  );
}
