import { useEffect, useState } from "react";
import axios from "axios";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Box, Typography, Stack } from "@mui/material";
import Loader from "./Loader";

const Timelines = () => {
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

  return loading ? (
    <Loader />
  ) : (
    <VerticalTimeline lineColor="#ddd">
      {timelines.map((item) => (
        <VerticalTimelineElement
          key={item._id}
          date={item.dateText}
          contentStyle={{ background: "#fff", boxShadow: "none" }}
          contentArrowStyle={{ borderRight: "7px solid #ddd" }}
          iconStyle={{ background: "#eb8510", color: "#fff" }}
        >
          <Box px={{ xs: 1, sm: 2 }} pt={1}>
            <Stack spacing={3}>
              {item.img && (
                <Box
                  sx={{
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
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
                <Typography variant="subtitle2" fontWeight={500} color="text.secondary">
                  {item.subtitle}
                </Typography>
                <Typography variant="body2" color="text.secondary" lineHeight={1.8}>
                  {item.paragraph}
                </Typography>
                {item.paragraph2 && (
                  <Typography variant="body2" color="text.secondary" lineHeight={1.8}>
                    {item.paragraph2}
                  </Typography>
                )}
              </Stack>
            </Stack>
          </Box>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timelines;
