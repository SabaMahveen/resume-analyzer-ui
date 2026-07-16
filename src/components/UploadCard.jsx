import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";
import { Paper, Typography, Box, Button, Stack } from "@mui/material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

function formatFileSize(bytes) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function UploadCard() {
  const { resume, setResume } = useContext(ResumeContext);

  return (
    <Paper elevation={3} sx={{ p: { xs: 2.5, sm: 4 }, borderRadius: 3, height: "100%", boxSizing: "border-box" }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>Upload Resume</Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>Upload your resume in PDF format</Typography>

      <Box sx={{ border: "2px dashed #90caf9", borderRadius: 3, p: { xs: 3, sm: 5 }, textAlign: "center", backgroundColor: "#fafcff", minWidth: 0 }}>
        {resume ? (
          <Stack alignItems="center" spacing={1.25}>
            <CheckCircleRoundedIcon color="success" sx={{ fontSize: 56 }} />
            <Typography variant="h6" fontWeight={700}>📄 Resume Uploaded</Typography>
            <Typography
              color="text.primary"
              fontWeight={600}
              sx={{ maxWidth: "100%", overflowWrap: "anywhere", wordBreak: "break-word" }}
            >
              {resume.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">{formatFileSize(resume.size)}</Typography>
            <Stack direction="row" spacing={0.75} alignItems="center" color="success.main">
              <CheckCircleRoundedIcon fontSize="small" />
              <Typography variant="body2" fontWeight={700}>Ready for Analysis</Typography>
            </Stack>
            <Button variant="text" component="label" size="small" sx={{ mt: 1 }}>
              Replace file
              <input hidden type="file" accept=".pdf" onChange={(e) => e.target.files.length > 0 && setResume(e.target.files[0])} />
            </Button>
          </Stack>
        ) : (
          <>
            <CloudUploadOutlinedIcon sx={{ fontSize: 60, color: "#1976d2", mb: 2 }} />
            <Typography variant="h6" gutterBottom>Drag & Drop Resume</Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>or click below to browse</Typography>
            <Button variant="contained" component="label">
              Browse File
              <input hidden type="file" accept=".pdf" onChange={(e) => e.target.files.length > 0 && setResume(e.target.files[0])} />
            </Button>
          </>
        )}
      </Box>
    </Paper>
  );
}

export default UploadCard;
