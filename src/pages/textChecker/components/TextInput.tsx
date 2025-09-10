import React from "react";
import { Box, TextField, useMediaQuery } from "@mui/material";
import type { DiffItem } from "../types";
import { DiffRenderer } from "./DiffRenderer";

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  showResults: boolean;
  diffItems: DiffItem[];
}

export const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
  showResults,
  diffItems,
}) => {
  const isMobile = useMediaQuery("(max-width:320px)");

  if (!showResults) {
    return (
      <TextField
        multiline
        rows={isMobile ? 7.5 : 19}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        variant="outlined"
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#F0F7FF",
            borderRadius: "8px",
            "& fieldset": {
              borderColor: "#e0e0e0",
            },
            "&:hover fieldset": {
              borderColor: "#b0b0b0",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#1976d2",
            },
          },
          "& .MuiInputBase-input": {
            fontSize: "14px",
            lineHeight: "1.5",
          },
        }}
      />
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: "#F0F7FF",
        borderRadius: "8px",
        border: "1px solid #e0e0e0",
        padding: "14px",
        minHeight: isMobile ? "200px" : "500px",
        fontSize: "14px",
        lineHeight: "1.5",
        fontFamily: "inherit",
        overflow: "auto",
        whiteSpace: "pre-wrap",
      }}
    >
      <DiffRenderer diffItems={diffItems} />
    </Box>
  );
};