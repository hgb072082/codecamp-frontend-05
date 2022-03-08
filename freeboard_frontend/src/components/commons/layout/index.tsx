import LayoutHeader from "./header";
import styled from "@emotion/styled";
const BodyWrapper = styled.div`
  display: flex;
`;
const LayoutBody = styled.div``;
export default function Layout(props) {
  return (
    <>
      <LayoutHeader />
      {/* <LayoutBanner  />
      <LayoutNavigation /> */}
      <BodyWrapper>
        <LayoutBody> {props.children} </LayoutBody>{" "}
      </BodyWrapper>
      {/* <LayoutFooter /> */}
    </>
  );
}
