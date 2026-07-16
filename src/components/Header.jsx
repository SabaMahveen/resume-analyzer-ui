import { AppBar, Toolbar, Typography, Box } from "@mui/material";

function Header() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "#ffffff",
        color: "#1f2937",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "#2563eb",
          }}
        >
          ResumeAI Pro
        </Typography>

        <Box>
          <Typography
            variant="body2"
            sx={{
              color: "#6b7280",
            }}
          >
            AI Powered Resume Analyzer
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;