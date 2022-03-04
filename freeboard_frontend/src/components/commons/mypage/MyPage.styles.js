import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
`;

export const Nav = styled.div`
  width: 103px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 75px;
`;
export const NavHeaderTxt = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 35.52px;
`;
export const Img = styled.img``;
export const NameTxt = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 35.52px;
  text-align: center;
`;
export const PriceImg = styled.img``;
export const Price = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 23.68px;
`;
export const MyMarket = styled.div`
  font-size: 18px;
  line-height: 26.64px;
  font-weight: ${(props) => (props.isActive ? 700 : 400)};
  color: ${(props) => (props.isActive ? "black" : " #828282")};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderSelectorBox = styled.div`
  display: flex;
`;

export const HeaderProductSelector = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 23.68px;
  color: ${(props) => (props.isMyProductOn ? "black" : "#828282")};
`;
export const HeaderPickedSelector = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 23.68px;
  color: ${(props) => (props.isMyProductOn ? "#828282" : "black")};
`;
export const HeaderSelector = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 23.68px;
  margin: 0 12px 0 12px;
  color: #828282;
`;

export const HeaderListSelector = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 23.68px;
  color: ${(props) => (props.naviNum === props.id ? "black" : "#828282")};
`;

export const SearchImg = styled.img``;
export const SearchBox = styled.div`
  width: 470px;
  display: flex;
  height: 52px;
`;
export const SearchInput = styled.input`
  width: 368px;
  height: 52px;
  padding: 14px 131px 14px 48px;
  background-color: #f2f2f2;
  border: none;
`;
export const SearchBtn = styled.button`
  width: 78px;
  height: 52px;
  text-align: center;
  background-color: black;
  color: white;
`;
export const MyProductList = styled.div`
  width: 980px;
  height: 583px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  display: flex;
  flex-direction: column;
`;

export const List = styled.div`
  height: 52px;
  display: flex;
  align-items: center;
  width: 100%;
`;
export const HeaderIsSoldOut = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 26.64px;
  text-align: center;
  flex: 3;
`;
export const IsSoldOut = styled.div`
  color: ${(props) => (props.isSold ? "#ffd600" : "black")};
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  flex: 3;
`;
export const ListHeaderNumTxt = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 26.64px;
  flex: 2;
  text-align: center;
`;
export const ListHeaderProductNameTxt = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 26.64px;
  flex: 6;
  text-align: center;
`;
export const ListHeaderPriceTxt = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 26.64px;
  flex: 3;
  text-align: center;
`;
export const ListHeaderDateTxt = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 26.64px;
  flex: 3;
  text-align: center;
`;

export const ListNumTxt = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 23.68px;
  flex: 2;
  text-align: center;
`;
export const ListProductNameTxt = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 23.68px;
  flex: 6;
  text-align: center;
`;
export const ListPointContentsTxt = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 23.68px;
  flex: 6;
  text-align: center;
  color: ${(props) => (props.isYellow ? "#FFD600" : "#0031E0")};
`;
export const ListPointFlexTxt = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 23.68px;
  flex: 3;
  text-align: center;
  color: ${(props) => (props.isYellow ? "#FFD600" : "#0031E0")};
`;

export const ListPriceTxt = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 23.68px;
  flex: 3;
  text-align: center;
`;
export const ListDateTxt = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 23.68px;
  flex: 3;
  text-align: center;
`;

export const Pagination = styled.div``;
