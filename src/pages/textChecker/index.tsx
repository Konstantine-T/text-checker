import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  Checkbox,
  useMediaQuery,
} from "@mui/material";
import PlusIcon from "./svgs/PlusIcon";
import RefreshIcon from "./svgs/RefreshIcon";
import type { DiffItem } from "./types";
import { computeDiff } from "./utils/diffUtils";
import { TextInput } from "./components/TextInput";

const TextComparison: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:320px)");
  const [leftText, setLeftText] = useState<string>("");
  const [rightText, setRightText] = useState<string>("");
  const [leftDiff, setLeftDiff] = useState<DiffItem[]>([]);
  const [rightDiff, setRightDiff] = useState<DiffItem[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleCompare = () => {
    if (!leftText.trim() || !rightText.trim()) {
      return;
    }

    const { left, right } = computeDiff(leftText, rightText);
    setLeftDiff(left);
    setRightDiff(right);
    setShowResults(true);
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: isMobile ? "16px" : "24px",
        height: "100vh",
        margin: "0 auto",
        fontFamily: "Roboto, Arial, sans-serif",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "flex-start" : "space-between",
          alignItems: isMobile ? "stretch" : "center",
          gap: isMobile ? "16px" : "0",
          marginBottom: "24px",
          paddingBottom: "16px",
          borderBottom: "1px solid #EDEDED",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "stretch" : "center",
            gap: isMobile ? "12px" : "24px",
          }}
        >
          <FormControl>
            <Select
              value={"ka"}
              variant="outlined"
              size="small"
              sx={{
                minWidth: isMobile ? "100%" : "150px",
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
          sx={{
            backgroundColor: "#6c757d",
            color: "white",
            padding: "8px 16px",
            width: isMobile ? "100%" : "150px",
            height: "42px",
            borderRadius: "6px",

            boxShadow: "none",
            minWidth: "auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: isMobile ? "center" : "space-between",
            "&:hover": {
              backgroundColor: "#5a6268",
            },
          }}
        >
          <PlusIcon />
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "400",
              textTransform: "none",
            }}
          >
            ახლის გახსნა
          </Typography>
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "16px" : "20px",
          marginBottom: "40px",
          alignItems: isMobile ? "stretch" : "flex-start",
        }}
      >
        <Box
          sx={{
            flex: isMobile ? "none" : 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextInput
            value={leftText}
            onChange={setLeftText}
            placeholder="დაიწყე წერა..."
            showResults={showResults}
            diffItems={leftDiff}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: isMobile ? "48px" : "60px",
            height: isMobile ? "48px" : "60px",
            backgroundColor: "white",
            borderRadius: "50%",
            fontSize: "14px",
            margin: isMobile ? "0 auto" : "60px 0 0 0",
            color: "#666",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            marginTop: "60px",
            transform: isMobile ? "rotate(90deg)" : "none",
          }}
        >
          ⟷
        </Box>

        <Box
          sx={{
            flex: isMobile ? "none" : 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextInput
            value={rightText}
            onChange={setRightText}
            placeholder="დაიწყე წერა..."
            showResults={showResults}
            diffItems={rightDiff}
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", gap: "16px" }}>
        {!showResults ? (
          <Button
            onClick={handleCompare}
            disabled={!leftText.trim() || !rightText.trim()}
            sx={{
              backgroundColor: leftText && rightText ? "#4571E4" : "#6c757d",
              color: "white",
              padding: isMobile ? "10px 30px" : "12px 40px",
              width: isMobile ? "100%" : "auto",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "500",
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: leftText && rightText ? "#365abd" : "#5a6268",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              },
              "&:active": {
                boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
              },
              "&:disabled": {
                backgroundColor: "#6c757d",
                color: "white",
              },
            }}
          >
            შედარება
          </Button>
        ) : (
          <Button
            onClick={() => setShowResults(false)}
            sx={{
              backgroundColor: "#4571E4",
              color: "white",
              padding: isMobile ? "10px 30px" : "12px 40px",
              width: isMobile ? "100%" : "auto",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "500",
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#365abd",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              },
              "&:active": {
                boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
              },
            }}
          >
            <RefreshIcon />
            შედარება
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default TextComparison;
