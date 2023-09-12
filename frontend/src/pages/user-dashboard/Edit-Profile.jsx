import { useEffect, useState } from "react";
import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
  Avatar,
  IconButton,
  useMediaQuery
} from "@mui/material";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { Formik } from "formik";
import * as yup from "yup";
import PersonIcon from "@mui/icons-material/Person";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";

const EditProfile = ({ openDrawer }) => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePictureFile, setProfilePictureFile] = useState(null);

  const isNonMobile = useMediaQuery("(min-width:968px)");
  const navigate = useNavigate();
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setProfilePictureFile(file);
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const user = {
    _id: "12345",
    image: "",
    fullName: "Ridwan Abdulsalam",
    email: "ridwansalam@gmail.com",
    dob: "23/5/23",
    phone: "09023450099",
  };

  const initialValues = {
    fullName: user?.fullName,
    email: user?.email,
    phone: user?.phone,
    dob: user?.dob,
    image: user?.image,
  };
  return (
    <Stack spacing={3}>
      <Header
        Icon={PersonIcon}
        title={"Edit Profile"}
        openDrawer={openDrawer}
        button="Back To Profile"
        link={`/user/profile`}
      />

      <Paper
        elevation={0}
        sx={{
          bgcolor: "white",
          paddingX: isNonMobile ? 5 : 2,
          paddingY: 4,
        }}
      >
        <Formik
          enableReinitialize={true}
          onSubmit={(values) => {
          }}
          initialValues={initialValues}
          validationSchema={editSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
            isValid,
            dirty,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="flex"
                alignItems={{ xs: "center", md: "flex-end" }}
                justifyContent={{ xs: "center", md: "flex-start" }}
                mb={3}
              >
                <Avatar
                  alt="profile-picture"
                  src={profilePicture || user?.image}
                  sx={{ width: 64, height: 64 }}
                />
                <Box ml="-15px">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                    id="profilePictureInput"
                  />
                  <label htmlFor="profilePictureInput">
                    <IconButton
                      component="span"
                      sx={{
                        backgroundColor: "#e3e9ef !important",
                        color: "#0F3460 !important",
                        padding: "7px",
                        "&:hover": {
                          backgroundColor: "#0f34600a !important",
                        },
                      }}
                    >
                      <CameraEnhanceIcon
                        sx={{
                          fontSize: "1.2rem",
                        }}
                      />
                    </IconButton>
                  </label>
                </Box>
              </Box>

              <Box
                display="grid"
                gap="20px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <TextField
                  fullWidth
                  variant="outlined"
                  type="text"
                  label="Full Name"
                  size="small"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.fullName}
                  name="fullName"
                  error={!!touched.fullName && !!errors.fullName}
                  helperText={touched.fullName && errors.fullName}
                  sx={{
                    gridColumn: "span 2",
                    "& .MuiInputBase-root": {
                      fontSize: "15px",
                    },
                  }}
                  InputLabelProps={{
                    style: { fontSize: "14px" },
                  }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  type="email"
                  label="Email"
                  size="small"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{
                    gridColumn: "span 2",
                    "& .MuiInputBase-root": {
                      fontSize: "15px",
                    },
                  }}
                  InputLabelProps={{
                    style: { fontSize: "14px" },
                  }}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  type="text"
                  label="Phone"
                  size="small"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone}
                  name="phone"
                  error={!!touched.phone && !!errors.phone}
                  helperText={touched.phone && errors.phone}
                  sx={{
                    gridColumn: "span 2",
                    "& .MuiInputBase-root": {
                      fontSize: "15px",
                    },
                  }}
                  InputLabelProps={{
                    style: { fontSize: "14px" },
                  }}
                />{" "}
                <DatePicker
                  fullWidth
                  label="Birth Date"
                  value={values.dob ? dayjs(values.dob) : null}
                  onChange={(date) => {
                    setFieldValue("dob", date.toISOString());
                  }}
                  slotProps={{
                    textField: {
                      size: "small",
                      helperText: touched.dob && errors.dob,
                      error: !!touched.dob && !!errors.dob,
                      name: "dob",
                      onBlur: handleBlur,
                    },
                  }}
                  sx={{
                    gridColumn: "span 2",
                    "& .MuiInputBase-root": {
                      fontSize: "15px",
                    },
                  }}
                />
              </Box>
              <Button
                type="submit"
                disabled={!isValid || !dirty}
                sx={{
                  mt: 4,
                  textTransform: "none",
                  bgcolor:
                    !isValid || !dirty
                      ? "#0000001f !important"
                      : "primary.main",
                  color: "white",
                  fontSize: "14px",
                  paddingX: "20px",
                  fontWeight: 500,
                  paddingY: "8px",
                  alignSelf: "start",
                  "&:hover": {
                    backgroundColor: "#E3364E",
                  },
                }}
              >
                Save Changes
              </Button>
            </form>
          )}
        </Formik>
      </Paper>
    </Stack>
  );
};
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const editSchema = yup.object().shape({
  fullName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  dob: yup.date().required("Birth Date is required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
});
export default EditProfile;
