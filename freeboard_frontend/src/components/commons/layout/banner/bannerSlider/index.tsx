import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from '@emotion/styled'
import Slider from "react-slick";
const Img = styled.div`
  width: 100%;
  height: 500px;
`
export default function SimpleSlider() {

    
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swiperToSlde: true
  };
  return (
    <Slider {...settings}>
      <Img>
        <h3>1242131231</h3>
      </Img>
      <Img>
        <h3>2213123</h3>
      </Img>
      <Img>
        <h3>3</h3>
      </Img>
      <Img>
        <h3>4</h3>
      </Img>
      <Img>
        <h3>5</h3>
      </Img>
      <Img>
        <h3>6</h3>
      </Img>
    </Slider>
  );
}