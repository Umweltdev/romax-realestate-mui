/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Autocomplete,
  useMediaQuery,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import PlaceIcon from "@mui/icons-material/Place";
import Header from "./Header";
import { statesInNigeria } from "./data";
import { userRequest } from "../../requestMethods";

// Schema
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const addressSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number is required"),
  address: yup.string().required("Address is required"),
  state: yup.string().required("State is required"),
});

const Address = ({ openDrawer }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:968px)");
  const [address, setAddress] = useState(null);

  const fetchAddress = async () => {
    try {
      const res = await userRequest.get(`/address/${id}`);
      setAddress(res.data);
    } catch (error) {
      console.error("Failed to fetch address:", error);
    }
  };

  useEffect(() => {
    if (id !== "new") fetchAddress();
  }, [id]);

  const handleSave = async (values) => {
    try {
      if (id === "new") {
        await userRequest.post(`/address`, values);
      } else {
        await userRequest.put(`/address/${id}`, values);
      }
      navigate("/user/addresses");
    } catch (error) {
      console.error("Failed to save address:", error);
    }
  };

  const initialValues = {
    fullName: address?.fullName || "",
    phone: address?.phone || "",
    address: address?.address || "",
    state: address?.state || "",
  };

  return (
    <Stack spacing={2}>
      <Header
        Icon={PlaceIcon}
        title={id === "new" ? "Add Address" : "Edit Address"}
        openDrawer={openDrawer}
        button="Back To Address"
        link="/user/addresses"
      />

      <Paper
        elevation={0}
        sx={{
          bgcolor: "white",
          px: isNonMobile ? 5 : 2,
          py: 4,
        }}
      >
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={addressSchema}
          onSubmit={handleSave}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            setFieldValue,
            handleSubmit,
            isValid,
            dirty,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <TextField
                  fullWidth
                  size="small"
                  label="Enter Fullname"
                  name="fullName"
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.fullName && Boolean(errors.fullName)}
                  helperText={touched.fullName && errors.fullName}
                  sx={{
                    gridColumn: "span 2",
                    "& .MuiInputBase-root": { fontSize: "15px" },
                  }}
                  InputLabelProps={{ style: { fontSize: "14px" } }}
                />

                <TextField
                  fullWidth
                  size="small"
                  label="Enter Phone-Number"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
                  sx={{
                    gridColumn: "span 2",
                    "& .MuiInputBase-root": { fontSize: "15px" },
                  }}
                  InputLabelProps={{ style: { fontSize: "14px" } }}
                />

                <TextField
                  fullWidth
                  size="small"
                  label="Address"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.address && Boolean(errors.address)}
                  helperText={touched.address && errors.address}
                  sx={{
                    gridColumn: "span 2",
                    "& .MuiInputBase-root": { fontSize: "15px" },
                  }}
                  InputLabelProps={{ style: { fontSize: "14px" } }}
                />

                <Autocomplete
                  fullWidth
                  options={statesInNigeria}
                  value={values.state || ""}
                  onChange={(e, newValue) => setFieldValue("state", newValue || "")}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      size="small"
                      label="State"
                      name="state"
                      onBlur={handleBlur}
                      error={touched.state && Boolean(errors.state)}
                      helperText={touched.state && errors.state}
                      InputLabelProps={{ style: { fontSize: "14px" } }}
                      sx={{
                        gridColumn: "span 2",
                        "& .MuiInputBase-root": { fontSize: "15px" },
                      }}
                    />
                  )}
                  sx={{ gridColumn: "span 2" }}
                />
              </Box>

              <Button
                type="submit"
                disabled={!isValid || (!dirty && id === "new")}
                sx={{
                  mt: 4,
                  textTransform: "none",
                  bgcolor:
                    !isValid || (!dirty && id === "new")
                      ? "#0000001f !important"
                      : "primary.main",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: 500,
                  px: "20px",
                  py: "8px",
                  "&:hover": { backgroundColor: "#fc973f" },
                }}
              >
                {id === "new" ? "Save Address" : "Save Changes"}
              </Button>
            </form>
          )}
        </Formik>
      </Paper>
    </Stack>
  );
};

export default Address;
