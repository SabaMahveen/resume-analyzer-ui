import { Paper, Typography, Chip, Grid, LinearProgress, Box, Stack } from "@mui/material";
import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

const cardSx = { p: { xs: 2.5, sm: 3 }, borderRadius: 3, height: "100%", boxSizing: "border-box" };

function ResultCard({ title, children }) {
  return (
    <Paper elevation={2} sx={cardSx}>
      <Typography variant="h6" fontWeight={700} gutterBottom>{title}</Typography>
      {children}
    </Paper>
  );
}

function AnalysisResult() {
  const { analysis } = useContext(ResumeContext);
  if (!analysis) return null;

  const matchedSkills = analysis.matchedSkills || [];
  const missingSkills = analysis.missingSkills || [];
  const reasons = analysis.reasons || [];
  const score = Math.min(100, Math.max(0, Number(analysis.matchPercentage) || 0));
  const verdictColor = analysis.verdict === "Qualified" ? "success" : analysis.verdict === "Almost There" ? "warning" : "error";

  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>Analysis Result</Typography>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={2} sx={{ ...cardSx, position: "relative" }}>
            <Typography variant="h6" fontWeight={700} mb={1}>ATS Score</Typography>
            <Typography
              variant="h4"
              fontWeight={800}
              color="primary.main"
              sx={{ position: "absolute", top: { xs: 18, sm: 24 }, right: { xs: 20, sm: 24 } }}
            >
              {score}%
            </Typography>
            <Typography color="text.secondary" mb={1}>Resume match</Typography>
            <LinearProgress variant="determinate" value={score} sx={{ height: 12, borderRadius: 10 }} />
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <ResultCard title="Verdict">
            <Typography color="text.secondary" mb={2}>Overall fit for this role</Typography>
            <Chip label={analysis.verdict || "Not Yet"} color={verdictColor} sx={{ fontWeight: 700, px: 1 }} />
          </ResultCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <ResultCard title={`Matched Skills (${matchedSkills.length})`}>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {matchedSkills.length ? matchedSkills.map((skill) => <Chip key={skill} label={skill} color="success" />) : <Typography color="text.secondary">No matched skills found.</Typography>}
            </Box>
          </ResultCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <ResultCard title={`Missing Skills (${missingSkills.length})`}>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {missingSkills.length ? missingSkills.map((skill) => <Chip key={skill} label={skill} color="error" />) : <Typography color="text.secondary">No missing skills found.</Typography>}
            </Box>
          </ResultCard>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <ResultCard title="Reasons">
            <Box component="ul" sx={{ my: 0, pl: 3 }}>
              {reasons.length ? reasons.map((reason, index) => <li key={`${index}-${reason}`}><Typography>{reason}</Typography></li>) : <Typography color="text.secondary">No reasons were provided.</Typography>}
            </Box>
          </ResultCard>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AnalysisResult;
