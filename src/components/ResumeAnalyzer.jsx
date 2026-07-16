import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography
} from "@mui/material";

function ResumeAnalyzer() {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Card elevation={5}>
        <CardContent>

          <Typography variant="h4" gutterBottom>
            AI Resume Analyzer
          </Typography>

          <Button
            variant="contained"
            component="label"
            sx={{ mb: 3 }}
          >
            Upload Resume
            <input hidden type="file" />
          </Button>

          <TextField
            fullWidth
            multiline
            rows={8}
            label="Job Description"
            sx={{ mb: 3 }}
          />

          <Box textAlign="center">
            <Button
              variant="contained"
              size="large"
            >
              Analyze Resume
            </Button>
          </Box>

        </CardContent>
      </Card>
    </Container>
  );
}

export default ResumeAnalyzer;