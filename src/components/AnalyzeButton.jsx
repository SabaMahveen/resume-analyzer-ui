import { Button, CircularProgress } from "@mui/material";
import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";
import api from "../services/api";

function AnalyzeButton() {
  const {
    resume,
    jobDescription,
    loading,
    setLoading,
    setAnalysis,
  } = useContext(ResumeContext);
  const canAnalyze = Boolean(resume && jobDescription.trim());

  const handleAnalyze = async () => {
    if (!canAnalyze || loading) {
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("resume", resume);
      formData.append("jobDescription", jobDescription);

      const response = await api.post("/Analyze", formData);

      setAnalysis(response.data);
    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.message ||
          "Failed to analyze resume. Make sure the API is running and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant="contained"
      size="large"
      onClick={handleAnalyze}
      disabled={!canAnalyze || loading}
      sx={{
        px: 6,
        py: 1.5,
        borderRadius: "30px",
        textTransform: "none",
        fontSize: "1rem",
        fontWeight: 600,
        minWidth: 220,
        maxWidth: "100%",
        whiteSpace: "normal",
        textAlign: "center",
      }}
    >
      {loading && <CircularProgress size={20} color="inherit" sx={{ mr: 1.25 }} />}
      {loading ? "Analyzing Resume..." : "Analyze Resume"}
    </Button>
  );
}

export default AnalyzeButton;
