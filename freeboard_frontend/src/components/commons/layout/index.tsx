import LayoutNavigation from "./navigation/index";
import LayoutBanner from "./banner/index";
import LayoutHeader from "./header";
import LayoutFooter from "./footer";
import styled from "@emotion/styled";
const BodyWrapper = styled.div`
  display: flex;
`;

export default function Layout(props) {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <BodyWrapper></BodyWrapper>
      <LayoutFooter />
    </>
  );
}