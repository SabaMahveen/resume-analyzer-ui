import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

import { Paper, Typography, TextField, Box } from "@mui/material";

function JobDescriptionCard() {
  const { jobDescription, setJobDescription } = useContext(ResumeContext);
  return (
    <Paper
      elevation={3}
      sx={{
        p: { xs: 2.5, sm: 4 },
        borderRadius: 3,
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        gutterBottom
      >
        Job Description
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        mb={3}
      >
        Paste the job description below
      </Typography>

      <Box>
        <TextField
  fullWidth
  multiline
  rows={12}
  placeholder="Paste the Job Description here..."
  variant="outlined"
  sx={{
    "& .MuiInputBase-root": { alignItems: "flex-start" },
  }}
  value={jobDescription}
  onChange={(e) => setJobDescription(e.target.value)}
/>
      </Box>
    </Paper>
  );
}

export default JobDescriptionCard;
