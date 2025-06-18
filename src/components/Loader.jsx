import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { keyframes } from '@emotion/react';

const spinGlow = keyframes`
  0% {
    box-shadow: 0 0 0px #f57c00;
  }
  50% {
    box-shadow: 0 0 20px #f57c00;
  }
  100% {
    box-shadow: 0 0 0px #f57c00;
  }
`;

const Loader = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      <Box
        sx={{
          padding: 2,
          borderRadius: '50%',
          animation: `${spinGlow} 1.5s infinite ease-in-out`,
        }}
      >
        <CircularProgress size={70} thickness={5} color="warning" />
      </Box>
      <Typography variant="h6" color="text.secondary">
        Loading content, please wait...
      </Typography>
    </Box>
  );
};

export default Loader;
