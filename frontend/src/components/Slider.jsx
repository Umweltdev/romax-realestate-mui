<<<<<<< HEAD
import * as React from 'react';
import styled from 'styled-components';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
//import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useNavigate } from 'react-router';
import { BiLocationPlus } from "react-icons/bi"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Abuja',
    imgPath:
      'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg',
  },
  {
    label: 'Lekki',
    imgPath:
      'https://i.ibb.co/Z1P0wJT/estate5-removebg-preview.png',
  },
  {
    label: 'Ikoyi',
    imgPath:
      'https://i.ibb.co/cLzT3N1/1-gp2gxe-removebg-preview.png',
  },
];

const Slider = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleRoute = () => {
    navigate("/products/:category")
  }

  return (
    <>
      <Title>FEATURED ESTATES</Title>
      <Box sx={{ maxWidth: 1500, flexGrow: 1 }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Paper
            square
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 50,
              pl: 2,
              bgcolor: 'background.default',
            }}
          >
            <Titles><BiLocationPlus /> {images[activeStep].label}</Titles>
          </Paper>
        </div>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Box onClick={handleRoute}
                    component="img"
                    sx={{
                      height: 600,
                      display: 'block',
                      maxWidth: 1500,
                      overflow: 'hidden',
                      width: '100%',
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                </div>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </>
  );
};
const Title = styled.h1`
  font-size: 40px;
  fontweight: 300;
  text-align: center; /* Center-align the text */
  display: flex;
  justify-content: center;
  align-items: center;
`

const Titles = styled.h1`
  font-size: 20px;
  fontweight: 300;
  text-align: center; /* Center-align the text */
  display: flex;
  justify-content: center;
  align-items: center;
`
export default Slider
=======
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState, useEffect } from "react"
import styled from "styled-components"
import { sliderItems } from "../data"
import { mobile, mobileXR, tablet, ipad } from "../responsive"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ height: "180px" })};
  ${mobileXR({ height: "225px" })};
  ${tablet({ height: "350px" })};
  ${ipad({ height: "400px" })};
`

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
  ${mobile({ height: "10px", width: "10px" })};
  ${mobileXR({ height: "20px", width: "20px" })};
  ${tablet({ height: "40px", width: "40px" })};
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
`

const Slide = styled.div`
  width: 100vw;
  height:  100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
  ${mobile({ height: "175px" })};
  ${mobileXR({ height: "220px" })};
  ${tablet({ height: "350px" })};
  ${ipad({ height: "400px" })};
`

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`

const Image = styled.img`
  height: 80%;
  ${mobile({ height: "150px" })};
  ${mobileXR({ height: "180px" })};
  ${tablet({ height: "270px" })};
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`

const Title = styled.h1`
  font-size: 70px;
  ${mobile({ fontSize: "10px" })};
  ${mobileXR({ fontSize: "12px" })};
  ${tablet({ fontSize: "20px" })};
`
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${mobile({ display: "none" })};
  ${mobileXR({ display: "none" })};
  ${tablet({ fontSize: "9px" })};
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  ${mobile({ fontSize: "6px" })};
  ${mobileXR({ fontSize: "7px" })};
  ${tablet({ fontSize: "8px" })};
`

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex < sliderItems.length - 1 ? prevIndex + 1 : 0
      );
    }, 8000); // 8000 milliseconds = 8 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);
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
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>OUR ESTATES</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider                                                                                                                                                                        
>>>>>>> c7d844e4d888b7d2856a331e858d3fcd2357ebec
