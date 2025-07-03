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
    {value === index && <Box py={4}>{children}</Box>}
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
      {/* Tabs Header */}
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          sx={{
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 600,
              fontSize: "16px",
              px: 2,
            },
            "& .Mui-selected": {
              color: "primary.main",
            },
          }}
        >
          <Tab label="Property Description" />
          <Tab label="Payment Plan" />
        </Tabs>
      </Box>

      {/* Tab Panels */}
      <TabPanel value={selectedTab} index={0}>
        <Description desc={product?.desc} features={product?.features} />
      </TabPanel>

      <TabPanel value={selectedTab} index={1}>
        <Stack spacing={2}>
          <Typography variant="body1" color="text.secondary">
            50% initial deposit. Balance spread over 6 months.
          </Typography>

          {/* Contact Number */}
          <Stack spacing={1}>
            <Typography variant="subtitle2" fontWeight={600}>
              Contact Number
            </Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <PhoneIcon fontSize="small" color="primary" />
              <Typography variant="body2" color="text.secondary">
                09019876493
              </Typography>
            </Box>
          </Stack>

          {/* Toll-Free Hotline */}
          <Stack spacing={1}>
            <Typography variant="subtitle2" fontWeight={600}>
              Toll-Free Hotline
            </Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <PhoneIcon fontSize="small" color="primary" />
              <Typography variant="body2" color="text.secondary">
                0700080003
              </Typography>
            </Box>
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
