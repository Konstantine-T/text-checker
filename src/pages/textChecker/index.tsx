import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  Checkbox,
} from "@mui/material";

const TextComparison: React.FC = () => {
  const [language, setLanguage] = useState<string>("ka");
  const [leftText, setLeftText] = useState<string>("");
  const [rightText, setRightText] = useState<string>("");

  const handleCompare = () => {
    // Add comparison logic here
    console.log("Comparing texts:", { leftText, rightText });
  };

  const handleAddContent = () => {
    // Add content logic here
    console.log("Adding content");
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: "24px",
        margin: "0 auto",
        fontFamily: "Roboto, Arial, sans-serif",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
          paddingBottom: "16px",
          borderBottom: "1px solid #EDEDED",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <FormControl>
            <Select
              value={language}
              variant="outlined"
              size="small"
              sx={{
                minWidth: "150px",
                backgroundColor: "white",

                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#e0e0e0",
                  borderRadius: "8px",
                },
                "& .MuiSelect-select": {
                  padding: "9px 14px",
                  fontSize: "14px",
                },
              }}
            >
              <MenuItem value="ka">ქართული</MenuItem>
              <MenuItem value="en">English</MenuItem>
            </Select>
          </FormControl>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Checkbox style={{ padding: "0", borderColor: "t" }} />
            <Typography
              sx={{
                fontWeight: "500",
                color: "#333",
                textAlign: "center",
                flex: 1,
                fontSize: "14px",
              }}
            >
              ფორმატის შენარჩუნება
            </Typography>
          </Box>
        </Box>
        <Button
          onClick={handleAddContent}
          sx={{
            backgroundColor: "#6c757d",
            color: "white",
            padding: "8px 16px",
            borderRadius: "6px",
            fontSize: "14px",
            fontWeight: "500",
            textTransform: "none",
            boxShadow: "none",
            minWidth: "auto",
            "&:hover": {
              backgroundColor: "#5a6268",
            },
          }}
        >
          + ახლის გახსნა
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "20px",
          marginBottom: "40px",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            multiline
            rows={12}
            value={leftText}
            onChange={(e) => setLeftText(e.target.value)}
            placeholder="დაიწყე წერა..."
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "white",
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
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "60px",
            height: "60px",
            backgroundColor: "white",
            borderRadius: "50%",
            fontSize: "20px",
            color: "#666",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            marginTop: "60px",
          }}
        >
          ⟷
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            multiline
            rows={12}
            value={rightText}
            onChange={(e) => setRightText(e.target.value)}
            placeholder="დაიწყე წერა..."
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "white",
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
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={handleCompare}
          sx={{
            backgroundColor: "#6c757d",
            color: "white",
            padding: "12px 40px",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "500",
            textTransform: "none",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#5a6268",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            },
            "&:active": {
              boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
            },
          }}
        >
          შედარება
        </Button>
      </Box>
    </Box>
  );
};

export default TextComparison;
