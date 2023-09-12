import { useEffect } from "react";
import {
  Typography,
  Stack,
  Button,
  Paper,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import Header from "./Header";

const Address = ({ _id, fullName, address, phone, state }) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Paper
      elevation={0}
      sx={{
        paddingX: 2,
        paddingY: 1,
        display: "flex",
        bgcolor: "white",
        borderRadius: "10px",
        alignItems: "center",
        textTransform: "capitalize",
        gap: 1,
        flexWrap: "wrap",
        flexDirection: isNonMobile ? "row" : "column",
        columnGap: 1.5,
        // justifyContent: "space-between"
      }}
    >
      <Typography variant="subtitle2" flex={"1 1 0"} whiteSpace="pre">
        {fullName}
      </Typography>

      <Typography variant="subtitle2" flex="1 1 0" whiteSpace="pre">
        {phone}
      </Typography>

      <Typography
        variant="subtitle2"
        flex={{ xs: "1 1 0", sm: "1 1 200px" }}
        whiteSpace="pre"
      >
        {` ${address} ${state} State`}
      </Typography>
      {/* <Typography variant="subtitle2" flex="1 1 0">
        { ` ${state} State`}
      </Typography> */}
      <Stack direction="row" justifyContent="end">
        <Link
          to={`/user/addresses/${_id}`}
          style={{
            textDecoration: "none",
          }}
        >
          <IconButton>
            <EditIcon />
          </IconButton>
        </Link>

        <IconButton onClick={() => {}}>
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Paper>
  );
};

const Addresses = ({ openDrawer }) => {
  const addresses = [
    {
      fullName: "Vincent Mark",
      phone: "090494943422",
      address: "123 Maryland Ikeja",
      state: "Lagos",
    },
    {
      fullName: "Musa Garba",
      phone: "090494943422",
      address: "123 Tudun Wada",
      state: "Oyo",
    },
  ];
  return (
    <Stack spacing={2}>
      <Header
        Icon={PlaceIcon}
        title={"My Addresses"}
        openDrawer={openDrawer}
        button="Add New Address"
        link={`/user/addresses/new`}
      />

      <Stack spacing={2}>
        {addresses.map((address, index) => (
          <Address {...address} key={index} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Addresses;
