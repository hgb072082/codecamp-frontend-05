import LayoutNavigation from "./navigation/index";
import LayoutBanner from "./banner/index";
import LayoutHeader from "./header";
import LayoutFooter from "./footer";
import styled from "@emotion/styled";
const BodyWrapper = styled.div`
  display: flex;
`;
const LayoutBody = styled.div``;
export default function Layout(props) {
  return (
    <>
      {/* <LayoutHeader />
      <LayoutBanner  />
      <LayoutNavigation /> */}
      <BodyWrapper>
        <LayoutBody> {props.children} </LayoutBody>{" "}
      </BodyWrapper>
      {/* <LayoutFooter /> */}
    </>
  );
}
