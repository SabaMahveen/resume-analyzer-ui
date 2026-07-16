import { createContext, useState } from "react";

export const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <ResumeContext.Provider
      value={{
        resume,
        setResume,
        jobDescription,
        setJobDescription,
        analysis,
        setAnalysis,
        loading,
        setLoading,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}