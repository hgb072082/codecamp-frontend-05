import { QuestionOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import * as Styles from "./ProductList.styles";

export default function ProductListUI(props) {
  return (
    <>
      <Styles.OutWrapper>
        <Styles.Wrapper>
          {/* 베스트상품은 Component 따로만들어서하자 */}
          {/* <Styles.BestProductText>베스트 상품</Styles.BestProductText>

        <Styles.BestProductBox>
          {data?.fetchUseditemsOfTheBest.map((el) => (
            <Styles.BestProduct key={el}>
              <Styles.BestProductImg src="https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2021/12/08/11/7/c4d22a72-cf28-4116-a3ba-c527ad2c0781.jpg" />
              <Styles.BestProductBottomBox>
                <Styles.BestProductLeftBox>
                  <Styles.BestProductTitle>{el.name}</Styles.BestProductTitle>
                  <Styles.BestProductRemarks>
                    {el.remarks}
                  </Styles.BestProductRemarks>
                  <Styles.BestProductPrice>{el.price}</Styles.BestProductPrice>
                </Styles.BestProductLeftBox>
                <Styles.BestProductRightBox>
                  <Styles.BestProductLike></Styles.BestProductLike>
                </Styles.BestProductRightBox>

                <Styles.BestProductRightBox></Styles.BestProductRightBox>
              </Styles.BestProductBottomBox>
            </Styles.BestProduct>
          ))}
        </Styles.BestProductBox> */}

          {props.data?.fetchUseditems.map((el) => (
            <Styles.ProductBox key={el._id} onClick={props.onClickProduct(el)}>
              {el.images[0] ? (
                <Styles.ProductImg
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                />
              ) : (
                <QuestionOutlined style={{ width: "160px", height: "160px" }} />
              )}
              <Styles.ProductInfo>
                <Styles.ProductTitle>{el.name}</Styles.ProductTitle>
                <Styles.ProductRemarks>{el.remarks}</Styles.ProductRemarks>
                <Styles.ProductTags>{el.tag}</Styles.ProductTags>
                <Styles.SellerBox>
                  <Styles.Seller>{el.seller}</Styles.Seller>
                </Styles.SellerBox>
                <Styles.Like>{el.pickedCount}</Styles.Like>
              </Styles.ProductInfo>
              <Styles.PriceBox>
                <Styles.Price>{el.price}원</Styles.Price>
              </Styles.PriceBox>
            </Styles.ProductBox>
          ))}

          <div>
            {useEffect(() => {
              return JSON.parse(localStorage.getItem("basket") || "[]").map(
                (el) => el.name + "/"
              );
            }, [])}
          </div>
          <Styles.RegisterProductBtn>상품 등록하기</Styles.RegisterProductBtn>
        </Styles.Wrapper>

        <Styles.TodaySawBox>
          <Styles.TodaySawTitleText>오늘 본 상품</Styles.TodaySawTitleText>
          {props.isSaw.map((el) => (
            <Styles.TodaySaw
              key={el._id}
              onClick={props.onClickTodaySaw(el._id)}
            >
              <Styles.LikedBox>
                <Styles.LikedImg />
                <Styles.Liked></Styles.Liked>
              </Styles.LikedBox>
              {el.images[0] ? (
                <Styles.SawImg
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                />
              ) : (
                <></>
              )}
              <Styles.SawName>{el.name}</Styles.SawName>
              <Styles.SawRemarks>{el.remarks}</Styles.SawRemarks>
              <Styles.SawPrice>{el.price}원</Styles.SawPrice>
            </Styles.TodaySaw>
          ))}
        </Styles.TodaySawBox>
      </Styles.OutWrapper>
    </>
  );
}
