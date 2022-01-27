import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from '@emotion/styled'
import Slider from "react-slick";
export const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  
`;
const Img = styled.div`
  width: 100%;
  height: 100%;
  
  & img {
    width: 100vw;
    height: 30vw;
  }
  `
export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
  <Wrapper>
    <Slider {...settings}>
      <Img>
        <img src="/1monthBenefitImg.jpeg" />
      </Img>
      <Img>
      <img src="/25DayLuxuryImg.jpeg" />
      </Img>
      <Img>
      <img src="/giveYouBagImg.jpeg" />
      </Img>
      <Img>
      <img src="/steadlyLovedImg.jpeg" />
      </Img>
      <Img>
      <img src="/ifFirstWrapImg.jpeg" />
      </Img>
      <Img>
      <img src="/newYearFreeImg.jpeg" />
      </Img>
    </Slider>
  </Wrapper>
  );
}
