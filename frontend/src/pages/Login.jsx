// import { useState, useEffect } from "react";
// import styled from "styled-components"
// import { mobile, mobileXR, tablet } from "../responsive";
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [showError, setShowError] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isFetching, error } = useSelector((state) => state.user);

//   const handleClick = (e) => {
//     e.preventDefault()
//     login(dispatch, { username, password });
//   };

//   const handleRegister = () => {
//     navigate("/signup")
//   }

//   const handleReset = () => {
//     navigate("/reset")
//   }

//   useEffect(() => {
//     // Set the error display to true when an error occurs
//     if (error) {
//       setShowError(true);

//       // Use setTimeout to hide the error message after 5 seconds
//       const timeout = setTimeout(() => {
//         setShowError(false);
//       }, 3000);

//       // Clear the timeout when the component unmounts or the error changes
//       return () => clearTimeout(timeout);
//     }
//   }, [error]);

//   return (
//     <Container>
//       <Wrapper>
//         <Title>SIGN IN</Title>
//         <Form>
//           <Input
//             placeholder="username"
//             onChange={(e) => setUsername(e.target.value)} />
//           <Input
//             type="password"
//             placeholder="password"
//             onChange={(e) => setPassword(e.target.value)} />

//           <Button onClick={handleClick} disabled={isFetching}>LOG IN</Button>
//           {showError && <Error>Wrong Credentials...</Error>}
//           <Link onClick={handleReset}>DO NOT REMEMBER YOUR PASSWORD?</Link>
//           <Link onClick={handleRegister}>CREATE A NEW ACCOUNT</Link>
//         </Form>
//       </Wrapper>
//     </Container>
//   )
// }
// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: linear-gradient(
//     rgba(255, 255, 255, 0.5),
//     rgba(255, 255, 255, 0.5)
//   ),
//   url("https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fstatic-christiesrealestate-cms-production.gtsstatic.net%2Fresources%2Fv_4_19_0_380%2Fsiteresources%2Fmy%20folder%2Fresponsive%2Flifestyles%2Fbeach%2Fcarousel%2Fvilla%20baan%20sang.jpg&option=N&permitphotoenlargement=false&w=1200&fallbackimageurl=https%3A%2F%2Fstatic-christiesrealestate-cms-production.gtsstatic.net%2Fresources%2Fv_4_19_0_380%2Flayouts%2Fcommon%2Fimages%2Fno-photo.jpg")
//     center;
//   background-size: cover;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `
// const Wrapper = styled.div`
//   width: 25%;
//   padding: 20px;
//   background-color: rgba(255,255,255,0.5);
//   ${mobile({ width: "75%" })};
//   ${mobileXR({ width: "75%" })};
//   ${tablet({ width: "75%" })};
// `
// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `
// const Title = styled.h1`
//   font-size: 24px;
//   fontweight: 300;
// `
// const Input = styled.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 10px 0;
//   padding: 10px;
// `

// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: teal;
//   color: white;
//   cursor: pointer;
//   margin-bottom: 10px;
//   &:disabled{
//     color: green;
//     cursor: not-allowed;
//   }
// `

// const Link = styled.a`
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
// `

// const Error = styled.span`
//   color: red;
// `;

// export default Login

import { useEffect, useRef, useState } from "react";
import {
  Typography,
  Box,
  Stack,
  Button,
  Paper,
  TextField,
  styled,
  IconButton,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import makeToast from "../toaster";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Close } from "@mui/icons-material";
import { login } from "../redux/apiCalls";
import { resetState } from "../redux/userRedux";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    fontSize: "14px",
    // height: "45px",
    borderRadius: "10px",
    "& fieldset": {},
    "&:hover fieldset": {},
    "&.Mui-focused fieldset": {},
  },
  "& .MuiInputLabel-root": {
    fontSize: "14px",
  },
});
const Login = ({ bgcolor, handleClose }) => {
  const dispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const location = useLocation();
  const { isFetching, error, currentUser, errorMessage } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      makeToast("success", "Login Sucessful!");
      if (location.pathname === "/login") {
        navigate("/");
      }
      handleClose();
    }

    if (error) {
      makeToast("error", errorMessage);
      dispatch(resetState());
    }
  }, [isFetching, error, currentUser, handleClose]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        bgcolor,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          bgcolor: "white",
          borderRadius: "10px",
          width: isNonMobile ? "500px" : "95%",
          padding: isNonMobile ? "2rem 3rem" : "2rem 2rem",
          position: "relative",
          // boxShadow: "0px 1px 3px rgba(3, 0, 71, 0.09)",
        }}
      >
        {handleClose && (
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
          >
            <Close />
          </IconButton>
        )}
        <Formik
          onSubmit={(values, { resetForm }) => {
            const { username, password } = values;
            login(dispatch, { username, password });
          }}
          initialValues={initialValues}
          validationSchema={loginSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isValid,
            dirty,
          }) => (
            <form onSubmit={handleSubmit}>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                {/* <img
                  src="https://bazaar.ui-lib.com/assets/images/bazaar-black-sm.svg"
                  alt="bazaar logo"
                  style={{
                    margin: "0 auto",
                    display: "block",
                  }}
                /> */}
                <Typography
                  variant="h5"
                  letterSpacing="2px"
                  color="teal"
                  textAlign="center"
                >
                  Romax
                </Typography>
              </Link>

              <Typography variant="body2" mt={1} mb={4} textAlign="center">
                Welcome To Romax
              </Typography>

              <Box mb={2}>
                <Typography
                  variant="subtitle1"
                  fontSize="12px"
                  color="#4b566b"
                  mb={1.5}
                >
                  Username
                </Typography>
                <CustomTextField
                  fullWidth
                  variant="outlined"
                  type="text"
                  placeholder="JohnDoe"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.username}
                  name="username"
                  error={!!touched.username && !!errors.username}
                  helperText={touched.username && errors.username}
                />
              </Box>
              <Box mb={2}>
                <Typography
                  variant="subtitle1"
                  fontSize="12px"
                  color="#4b566b"
                  mb={1.5}
                >
                  Password
                </Typography>
                <CustomTextField
                  fullWidth
                  variant="outlined"
                  type="password"
                  placeholder="*********"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                />
              </Box>
              <Button
                type="submit"
                disabled={!isValid || !dirty || isFetching}
                sx={{
                  textTransform: "none",

                  bgcolor:
                    !isValid || !dirty || isFetching
                      ? "#0000001f !important"
                      : "primary.main",
                  color: "white",
                  fontSize: "16px",
                  paddingY: "13px",
                  fontWeight: 600,
                  width: "100%",
                  marginTop: "10px",
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "#E3364E",
                  },
                }}
              >
                Login
              </Button>
            </form>
          )}
        </Formik>

        <Stack direction="row" spacing={1} justifyContent="center" mt={3}>
          <Typography variant="subtitle2">Don't have account?</Typography>
          <Link to={"/signup"} style={{ textDecoration: "none" }}>
            <Typography
              variant="subtitle1"
              color="#2b3445"
              sx={{
                borderBottom: "1.5px solid #2b3445",
              }}
            >
              Sign Up
            </Typography>
          </Link>
        </Stack>

        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          mt={3}
          sx={{
            bgcolor: "#f3f5f9",
            paddingY: "20px",
            borderRadius: "10px",
          }}
        >
          <Typography variant="subtitle2">Forgot your password?</Typography>
          <Link to={"/forgot-password"} style={{ textDecoration: "none" }}>
            <Typography
              variant="subtitle1"
              color="#2b3445"
              sx={{
                borderBottom: "1.5px solid #2b3445",
              }}
            >
              Reset It
            </Typography>
          </Link>
        </Stack>
      </Paper>
    </Box>
  );
};

const loginSchema = yup.object().shape({
  username: yup.string().required("required"),
  password: yup.string().required("required"),
});
const initialValues = {
  username: "",
  password: "",
};
export default Login;
