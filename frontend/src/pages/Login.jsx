import { useEffect, useRef } from "react";
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
import CircularProgress from "@mui/material/CircularProgress";
import { Formik } from "formik";
import * as yup from "yup";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Close } from "@mui/icons-material";
import { login } from "../redux/apiCalls";
import { resetState } from "../redux/userRedux";
import Swal from "sweetalert2";


const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    fontSize: "14px",
    borderRadius: "10px",
  },
  "& .MuiInputLabel-root": {
    fontSize: "14px",
  },
});

const loginSchema = yup.object().shape({
  username: yup.string().required("required"),
  password: yup.string().required("required"),
});

const initialValues = {
  username: "",
  password: "",
};

const Login = ({ bgcolor, handleClose }) => {
  const dispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const location = useLocation();
  const { isFetching, error, currentUser, errorMessage } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();

  const formikRef = useRef(null);

const hasShownAlert = useRef(false);

useEffect(() => {
  if (currentUser && !hasShownAlert.current) {
    hasShownAlert.current = true;

    Swal.fire({
      icon: "success",
      title: "Login Successful",
      text: `Welcome back, ${currentUser.username || "User"}!`,
      timer: 1500,
      showConfirmButton: false,
    }).then(() => {
      if (location.pathname === "/login") {
        navigate("/");
      }
      handleClose?.();
    });
  }

  if (error && !hasShownAlert.current) {
    hasShownAlert.current = true;

    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: errorMessage || "Something went wrong. Please try again.",
    }).then(() => {
      dispatch(resetState());
      hasShownAlert.current = false;
    });
  }
}, [
  currentUser,
  error,
  errorMessage,
  location.pathname,
  navigate,
  handleClose,
  dispatch,
]);



  // 🔧 Detect browser autofill after component mounts
  useEffect(() => {
    const timeout = setTimeout(() => {
      const formik = formikRef.current;
      if (formik) {
        if (formik.values.username) formik.setFieldTouched("username", true);
        if (formik.values.password) formik.setFieldTouched("password", true);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

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
          padding: isNonMobile ? "2rem 3rem" : "2rem 1.5rem",
          position: "relative",
        }}
      >
        {handleClose && (
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 10, right: 10 }}
          >
            <Close />
          </IconButton>
        )}

        <Formik
          innerRef={formikRef}
          onSubmit={(values) => {
            login(dispatch, values);
          }}
          initialValues={initialValues}
          validationSchema={loginSchema}
          validateOnMount
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isValid,
          }) => (
            <form onSubmit={handleSubmit}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Box>
                  <img
                    src="https://static.wixstatic.com/media/38c36f_cf2679a5ddd4403fa15dda614149c8f9~mv2.png/v1/fill/w_187,h_113,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PHOTO-2021-09-15-13-59-41_edited.png"
                    alt="Romax Properties Ltd Logo"
                    style={{
                      margin: "0 auto",
                      display: "block",
                    }}
                  />
                </Box>
              </Link>

              <Typography
                variant="body2"
                mt={1}
                mb={4}
                textAlign="center"
                letterSpacing="1px"
                fontSize="17px"
              >
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
                disabled={!isValid || isFetching}
                sx={{
                  textTransform: "none",
                  bgcolor:
                    !isValid || isFetching
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
                    backgroundColor: "#fc973f",
                  },
                }}
              >
                {isFetching ? (
                  <CircularProgress
                    size={24}
                    sx={{
                      color: "white",
                    }}
                  />
                ) : (
                  "Login"
                )}
              </Button>
            </form>
          )}
        </Formik>

        <Stack direction="row" spacing={1} justifyContent="center" mt={3}>
          <Typography variant="subtitle2">Don't have account?</Typography>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Typography
              variant="subtitle1"
              color="#2b3445"
              sx={{
                fontWeight: 500,
                transition: "color 0.3s",
                "&:hover": {
                  color: "#eb8150",
                },
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
          <Link to="/forgot-password" style={{ textDecoration: "none" }}>
            <Typography
              variant="subtitle1"
              color="#2b3445"
              sx={{
                fontWeight: 500,
                transition: "color 0.3s",
                "&:hover": {
                  color: "#eb8150",
                },
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

export default Login;
