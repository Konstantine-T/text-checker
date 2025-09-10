import React, { useState } from "react";

import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
  styled,
} from "@mui/material";
import LogoSvg from "./svgs/LogoSvg";
import EnagramSvg from "./svgs/EnagramSvg";
import SpellCheckerSvg from "./svgs/SpellCheckerSvg";
import VoiceToTextSvg from "./svgs/VoiceToTextSvg";
import TextToVoiceSvg from "./svgs/TextToVoiceSvg";
import PdfSvg from "./svgs/PdfSvg";
import TextCheckerSvg from "./svgs/TextCheckerSvg";
import SidebarChevron from "./svgs/SidebarChevron";
import ThreeDots from "./svgs/ThreeDots";

interface StyledListItemProps {
  active: boolean;
}

const StyledListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "active",
})<StyledListItemProps>(({ active }) => ({
  padding: "14px 11px",
  borderRadius: "30px 0 0 30px",
  cursor: "pointer",
  color: active ? "#132450" : "rgba(255,255,255,0.7)",
  transition: "all 0.2s ease",
  fontWeight: 700,
  "&:hover": !active
    ? {
        backgroundColor: "rgba(255,255,255,0.1)",
        color: "white",
      }
    : {},
  backgroundColor: active ? "rgb(255, 255, 255)" : "transparent",
}));

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("textChecker");

  const menuItems: { id: string; label: string; icon: React.FC<any> }[] = [
    { id: "spellChecker", label: "მართლმწერი", icon: SpellCheckerSvg },
    { id: "textChecker", label: "ტექსტის შედარება", icon: TextCheckerSvg },
    { id: "voice-text", label: "ხმა → ტექსტი", icon: VoiceToTextSvg },
    { id: "text-voice", label: "ტექსტი → ხმა", icon: TextToVoiceSvg },
    { id: "pdf", label: "PDF კონვერტაცია", icon: PdfSvg },
  ];

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
  };

  return (
    <Box
      sx={{
        width: "240px",
        minWidth: "240px",
        height: "100vh",
        backgroundColor: "#132450",
        color: "white",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Roboto, Arial, sans-serif",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          width: "100%",
          padding: "12px 27px 13px 0",
        }}
      >
        <SidebarChevron />
      </Box>
      <Box
        sx={{
          padding: "0 20px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          gap: "10px",
          top: "45px",
          left: "24px",
          marginBottom: "37px",
        }}
      >
        <LogoSvg />
        <EnagramSvg />
      </Box>

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
                sx={{ fontFamily: "Helvetica" }}
              />
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
          <Typography variant="body2" sx={{ fontSize: "14px" }}>
            თამარ ოზბანი
          </Typography>
        </Box>
        <ThreeDots />
      </Box>
    </Box>
  );
};

export default Sidebar;
