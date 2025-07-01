import { useState } from "react";
import { Tabs, Tab, Box, Stack, Typography, Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import Description from "./Description";

const TabPanel = ({ children, value, index }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`tabpanel-${index}`}
    aria-labelledby={`tab-${index}`}
  >
    {value === index && <Box py={3}>{children}</Box>}
  </div>
);

const TabComponent = ({ product }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleCallNow = () => {
    window.location.href = "tel:09019876493";
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          <Tab
            label="Estate Description"
            sx={{
              textTransform: "none",
              fontSize: "16px",
            }}
          />
          <Tab
            label="Contact Info"
            sx={{
              textTransform: "none",
              fontSize: "16px",
            }}
          />
        </Tabs>
      </Box>

      <TabPanel value={selectedTab} index={0}>
        <Description desc={product.desc} features={product.features} />
      </TabPanel>

      <TabPanel value={selectedTab} index={1}>
        <Stack spacing={3} mt={2}>
          <Typography variant="body1" color="text.secondary">
            Reach out to us for more information or to book a visit.
          </Typography>

          <Stack spacing={1}>
            <Typography variant="h6" fontWeight={600}>
              Contact Number
            </Typography>
            <Typography variant="body1" color="text.secondary">
              09019876493
            </Typography>
          </Stack>

          <Stack spacing={1}>
            <Typography variant="h6" fontWeight={600}>
              Toll-Free Hotline
            </Typography>
            <Typography variant="body1" color="text.secondary">
              0700080003
            </Typography>
          </Stack>

          <Box pt={2}>
            <Button
              variant="contained"
              startIcon={<PhoneIcon />}
              onClick={handleCallNow}
              sx={{
                textTransform: "none",
                borderRadius: "16px",
                fontWeight: 600,
                px: 3,
                py: 1.2,
              }}
            >
              Call Now
            </Button>
          </Box>
        </Stack>
      </TabPanel>
    </Box>
  );
};

export default TabComponent;
