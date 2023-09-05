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