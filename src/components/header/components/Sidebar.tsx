import {
  Box,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
  useMediaQuery,
  IconButton,
  ListItem,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ThreeDots from "../svgs/ThreeDots";
import LogoSvg from "../svgs/LogoSvg";
import EnagramSvg from "../svgs/EnagramSvg";
import SidebarChevron from "../svgs/SidebarChevron";
import { useState } from "react";
import styled from "@emotion/styled";

interface StyledListItemProps {
  active: boolean;
}

interface MenuItem {
  id: string;
  label: string;
  icon: any;
}

const StyledListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "active",
})<StyledListItemProps>(({ active }) => ({
  position: "relative",
  padding: "14px 11px",
  borderRadius: "30px 0 0 30px",
  cursor: "pointer",
  color: active ? "#132450" : "rgba(255,255,255,0.7)",
  fontWeight: 700,
  "&:hover": !active
    ? {
        zIndex: 10,
        backgroundColor: "rgba(255,255,255,0.1)",
        color: "white",
      }
    : {},
  backgroundColor: active ? "rgb(255, 255, 255)" : "transparent",
}));

const SidebarContent: React.FC<{ menuItems: MenuItem[] }> = ({ menuItems }) => {
  const [activeItem, setActiveItem] = useState<string>("textChecker");
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMidScreen = useMediaQuery("(max-width:768px)");

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    if (isMidScreen) {
      setMobileOpen(false);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: isMidScreen ? "space-between" : "end",
          alignItems: "center",
          width: "100%",
          padding: "12px 27px 13px 20px",
        }}
      >
        {isMidScreen && (
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <LogoSvg />
            <EnagramSvg />
          </Box>
        )}
        {isMidScreen ? (
          <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        ) : (
          <SidebarChevron />
        )}
      </Box>

      {!isMidScreen && (
        <Box
          sx={{
            padding: "0 20px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            gap: "10px",
            marginBottom: "37px",
          }}
        >
          <LogoSvg />
          <EnagramSvg />
        </Box>
      )}

      <Box
        sx={{
          flex: 1,
          padding: "0 0 0 12px",
        }}
      >
        <List
          sx={{
            padding: 0,
            gap: "4px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {menuItems.map((item) => (
            <StyledListItem
              key={item.id}
              active={activeItem === item.id}
              onClick={() => handleItemClick(item.id)}
            >
              <ListItemIcon sx={{ minWidth: "auto", marginRight: "9px" }}>
                <Box sx={{ fontSize: "20px" }}>
                  <item.icon
                    color={activeItem === item.id ? "#132450" : "#fff"}
                  />
                </Box>
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: "14px",
                  fontWeight: 700,
                }}
              />
              {activeItem === item.id && (
                <Box
                  sx={{
                    width: "16px",
                    height: "calc(100% + 20px)",
                    backgroundColor: "#ffff",
                    color: "transparent",
                    position: "absolute",
                    right: 0,
                    borderRadius: "0.5rem 0 0 0.5rem",
                    "&::before, &::after": {
                      content: '""',
                      position: "absolute",
                      right: 0,
                      width: "20px",
                      height: "20px",
                      backgroundColor: "transparent",
                    },
                    "&::before": {
                      top: "-20px",
                      boxShadow: "0 10px 0 0 #132450",
                      borderBottomRightRadius: "0.5rem",
                    },
                    "&::after": {
                      bottom: "-20px",
                      boxShadow: "0 -10px 0 0 #132450",
                      borderTopRightRadius: "0.5rem",
                    },
                  }}
                ></Box>
              )}
            </StyledListItem>
          ))}
        </List>
      </Box>

      <Box
        sx={{
          padding: "20px 14px 20px 12px",
          display: "flex",
          alignItems: "center",
          borderTop: "1px solid #9EB9FF33",
        }}
      >
        <Avatar
          sx={{
            width: "32px",
            height: "32px",
            backgroundColor: "#9EC8FF",
            fontSize: "14px",
            fontWeight: "bold",
            color: "#132450",
            border: "2px solid #fff",
            marginRight: "5px",
          }}
        >
          თ
        </Avatar>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
            }}
          >
            თამარ ონიანი
          </Typography>
        </Box>
        <ThreeDots />
      </Box>
    </>
  );
};

export default SidebarContent;
