import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState, useEffect } from "react"
import styled from "styled-components"
import { sliderItems } from "../data"
import { useNavigate } from "react-router"
import { mobile, mobileXR, tablet, ipad } from "../responsive"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ height: "380px" })};
  ${mobileXR({ height: "380px" })};
  ${tablet({ height: "550px" })};
  ${ipad({ height: "600px" })};
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.4;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height:  100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
`

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`

const Image = styled.img`
  height: 80%;
  ${mobile({ width: "250px", height: "370px" })};
  ${mobileXR({ width: "360px", height: "375px" })};
  ${tablet({ width: "390px", height: "550px" })};
  ${ipad({ width: "600px", height: "550px" })};
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`

const Title = styled.h1`
  font-size: 70px;
  ${mobile({ fontSize: "9px", padding: "1px" })};
  ${mobileXR({ fontSize: "9px", padding: "1px" })};
  ${tablet({ fontSize: "10px" })};
  ${ipad({ fontSize: "15px" })};
`
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${mobile({ display: "none" })};
  ${mobileXR({ display: "none" })};
  ${tablet({ fontSize: "10px" })};
  ${ipad({ fontSize: "10px" })};
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;

  /* Add responsive styles for mobile and mobileXR */
  ${mobile({ fontSize: "6px" })};
  ${mobileXR({ fontSize: "7px" })};
  ${tablet({ fontSize: "12px" })};
  ${ipad({ fontSize: "15px" })};
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex < sliderItems.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/products/island")
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item
            .id}>
            <ImgContainer>
              <Image src={item.img} onClick={handleButton} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button onClick={handleButton}>OUR ESTATES</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider