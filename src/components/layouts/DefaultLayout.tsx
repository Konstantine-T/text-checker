import { Outlet } from "react-router-dom";
import Sidebar from "../header";
import { Box } from "@mui/material";

const DefaultLayout = () => {
  return (
    <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
      <Sidebar />
      <Outlet />
    </Box>
  );
};

export default DefaultLayout;
