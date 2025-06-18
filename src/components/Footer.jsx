import {
  MailOutline,
  Phone,
  Room
} from "@mui/icons-material";

import styled from "styled-components";
import { mobile, mobileXR, tablet } from "../responsive";
import { Box } from "@mui/material";
import logo from "../assests/Logo - Orange Background.png";

const Container = styled.div`
  background-color: #ee7e19;
  display: flex;
  ${mobile({ flexDirection: "column" })};
  ${mobileXR({ flexDirection: "column" })};
  ${tablet({ flexDirection: "column" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;

  img {
    max-width: auto;
    height: auto;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    img {
      max-height: 150px;
      max-width: 250px;
    }
  }

  background-color: #ee7e19;
  align-items: center;
  justify-content: flex-start;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #ee7e19;
  ${mobile({ display: "none" })};
  ${mobileXR({ display: "none" })};
  ${tablet({ display: "none" })};
`;

const Title = styled.h3`
  margin-bottom: 30px;
  background-color: #ee7e19;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  background-color: #ee7e19;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  background-color: #ee7e19;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #ee7e19;
  ${mobile({ backgroundColor: "#fff8f8" })};
  ${mobileXR({ backgroundColor: "#fff8f8", height: "100%" })};
  ${tablet({ backgroundColor: "#fff8f8", height: "100%" })};
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  background-color: #ee7e19;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Box height={{ xs: "120px", sm: "140px" }}>
          <img
            src={logo}
            alt="Romax Properties Ltd Logo"
            style={{
              backgroundColor: "#ee7e19",
              height: "200px",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order</ListItem>
          <ListItem>My Estate</ListItem>
          <ListItem>Properties</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room sx={{ marginRight: "10px" }} />
          622 Dixie Path, South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone sx={{ marginRight: "10px" }} />
          + (234) - 913 - 396 - 8613
        </ContactItem>
        <ContactItem>
          <MailOutline sx={{ marginRight: "10px" }} />
          contact@sell.dev
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
