import { MailOutline, Phone, Room } from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile, tablet } from "../responsive";

const logo =
  "https://static.wixstatic.com/media/38c36f_cf2679a5ddd4403fa15dda614149c8f9~mv2.png";

const usefulLinks = [
  { label: "Home", to: "/" },
  { label: "My Account", to: "/user/profile" },
  { label: "My Order", to: "/orders" },
  { label: "My Estate", to: "/estate" },
  { label: "Properties", to: "/products" },
  { label: "Terms", to: "/terms" },
];

const contactDetails = [
  {
    icon: <Room />,
    text: "622 Dixie Path, South Tobinchester 98336",
    href: "https://www.google.com/maps/search/622+Dixie+Path,+South+Tobinchester+98336",
  },
  {
    icon: <Phone />,
    text: "+ (234) - 913 - 396 - 8613",
    href: "tel:+2349133968613",
  },
  {
    icon: <MailOutline />,
    text: "contact@sell.dev",
    href: "mailto:contact@sell.dev",
  },
];

// const FooterStrip = styled.div`
//   background-color: #ee7e19;
//   height: 3px;
//   width: 100%;
// `;

const FooterWrapper = styled.footer`
  background-color: #ee7e19;
  border-top: 1px solid #ddd;
  padding: 50px 80px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  text-align: left;

  ${tablet(`
    display: block;
    padding: 40px 30px;
    text-align: center;
  `)}

  ${mobile(`
    display: block;
    padding: 30px 20px;
    text-align: center;
  `)}
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  ${tablet(`
    align-items: center;
  `)}

  ${mobile(`
    align-items: center;
  `)}
`;

const LogoBox = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    height: 80px;
    object-fit: contain;
  }

  ${tablet(`
    justify-content: center;
  `)}

  ${mobile(`
    justify-content: center;

    img {
      height: 60px;
    }
  `)}
`;

const SectionTitle = styled.h3`
  color: #222;
  font-size: 20px;
  margin-bottom: 24px;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 12px;

    a {
      color: #444;
      text-decoration: none;
      font-size: 16px;
      transition: all 0.3s ease;

      &:hover {
        color: #ffffff;
        text-decoration: underline;
      }
    }
  }
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  color: #444;
  text-decoration: none;
  font-size: 15px;
  transition: all 0.3s ease;

  svg {
    margin-right: 10px;
  }

  &:hover {
    color: #ffffff;
  }

  ${tablet(`
    justify-content: center;
  `)}

  ${mobile(`
    justify-content: center;
  `)}
`;

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <Column>
          <LogoBox to="/">
            <img src={logo} alt="Romax Properties Ltd Logo" />
          </LogoBox>
        </Column>

        <Column>
          <SectionTitle>Useful Links</SectionTitle>
          <LinkList>
            {usefulLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </LinkList>
        </Column>

        <Column>
          <SectionTitle>Contact</SectionTitle>
          {contactDetails.map((item, index) => (
            <ContactItem
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
              {item.text}
            </ContactItem>
          ))}
        </Column>
      </FooterWrapper>
    </>
  );
};

export default Footer;
