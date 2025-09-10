import { Outlet } from "react-router-dom";
import Sidebar from "../header";
import { Box, useMediaQuery } from "@mui/material";

const DefaultLayout = () => {
  const isMidScreen = useMediaQuery("(max-width:768px)");
  return (
    <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
      <Sidebar />
      <Box
        sx={{
          flex: 1,
          paddingTop: isMidScreen ? "112px" : "0",
          width: "100%",
          height: "100%",
          overflow: "auto",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default DefaultLayout;
