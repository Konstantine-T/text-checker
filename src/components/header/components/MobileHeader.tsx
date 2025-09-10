import { Box, IconButton, Typography } from "@mui/material";
import LogoSvg from "../svgs/LogoSvg";
import EnagramSvg from "../svgs/EnagramSvg";
import MenuIcon from "@mui/icons-material/Menu";

const MobileHeader: React.FC<{
  onMenuClick: () => void;
  activeTitle: string;
  activeIcon?: React.FC<any>;
}> = ({ onMenuClick, activeTitle, activeIcon: ActiveIcon }) => {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "60px",
          backgroundColor: "#132450",
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          zIndex: 1200,
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flex: 1,
          }}
        >
          <LogoSvg />
          <EnagramSvg />
        </Box>
        <IconButton
          onClick={onMenuClick}
          sx={{
            color: "white",
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          position: "fixed",
          top: "60px",
          height: "72px",
          left: 0,
          right: 0,
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          zIndex: 1199,
          borderBottom: "1px solid #e0e0e0",
          gap: "8px",
        }}
      >
        {ActiveIcon && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "20px",
              color: "#132450",
            }}
          >
            <ActiveIcon color="#132450" />
          </Box>
        )}
        <Typography
          sx={{
            color: "#132450",
            fontSize: "16px",
            fontWeight: 500,
          }}
        >
          {activeTitle}
        </Typography>
      </Box>
    </>
  );
};

export default MobileHeader;
