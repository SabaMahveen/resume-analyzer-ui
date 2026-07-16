import { Box, Grid } from "@mui/material";
import UploadCard from "./UploadCard";
import JobDescriptionCard from "./JobDescriptionCard";
import AnalyzeButton from "./AnalyzeButton";
import AnalysisResult from "./AnalysisResult";

function ResumeForm() {
  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        px: { xs: 2, sm: 3 },
        pb: 4,
      }}
    >
      <Grid container spacing={{ xs: 2, md: 3 }} alignItems="stretch">
        <Grid size={{ xs: 12, md: 6 }} sx={{ minWidth: 0 }}>
          <UploadCard />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} sx={{ minWidth: 0 }}>
          <JobDescriptionCard />
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: { xs: 3, sm: 4 },
          mb: 0,
          px: 1,
        }}
      >
        <AnalyzeButton />
      </Box>

      <AnalysisResult />
    </Box>
  );
}

export default ResumeForm;
