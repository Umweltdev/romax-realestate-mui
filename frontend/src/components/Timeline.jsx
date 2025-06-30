import React, { useEffect, useState } from "react";
import axios from "axios";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import { Grid, useMediaQuery, Box, Typography, Stack, Fade } from "@mui/material";
import Loader from "./Loader";

const Timelines = () => {
  const isNonMobile = useMediaQuery("(min-width:968px)");
  const [timelines, setTimelines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://romax-real-estate.onrender.com/api/timeline")
      .then((response) => {
        setTimelines(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Timeline lineColor="#ddd">
          {timelines.map((item) => (
            <TimelineItem
              key={item._id}
              dateText={
                <Box
                  sx={{
                    backgroundColor: "#eb8510",
                    color: "white",
                    px: 2,
                    py: 0.5,
                    fontWeight: 600,
                    fontSize: "14px",
                    borderRadius: "4px",
                  }}
                >
                  {item.dateText}
                </Box>
              }
            >
              <Box px={{ xs: 1, sm: 2 }} pt={1}>
                <Stack spacing={3}>
                  {/* Image */}
                  {item.img && (
                    <Box
                      sx={{
                        backgroundImage: `url(${item.img})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        height: 350,
                        borderRadius: "10px",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                  )}

                  <Stack spacing={2}>
                    <Typography variant="h5" fontWeight={700} color="#1c1c1c">
                      {item.title}
                    </Typography>

                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      color="text.secondary"
                    >
                      {item.subtitle}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      lineHeight={1.8}
                    >
                      {item.paragraph}
                    </Typography>

                    {item.paragraph2 && (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        lineHeight={1.8}
                      >
                        {item.paragraph2}
                      </Typography>
                    )}
                  </Stack>
                </Stack>
              </Box>
            </TimelineItem>
          ))}
        </Timeline>
      )}
    </>
  );
};

export default Timelines;
