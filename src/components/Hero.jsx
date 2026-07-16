import { Box, Typography } from "@mui/material";

function Hero() {
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 6,
        mb: 5,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          color: "#1f2937",
          mb: 2,
        }}
      >
        AI Resume Analyzer
      </Typography>

      <Typography
        variant="h6"
        sx={{
          color: "#6b7280",
          maxWidth: "700px",
          mx: "auto",
          lineHeight: 1.7,
        }}
      >
        Compare your resume against any job description using AI to maximize
        your chances of getting shortlisted.
      </Typography>
    </Box>
  );
}

export default Hero;