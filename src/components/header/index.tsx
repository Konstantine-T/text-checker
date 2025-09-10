import React, { useState } from "react";

import { Box, useMediaQuery, Drawer } from "@mui/material";
import SpellCheckerSvg from "./svgs/SpellCheckerSvg";
import VoiceToTextSvg from "./svgs/VoiceToTextSvg";
import TextToVoiceSvg from "./svgs/TextToVoiceSvg";
import PdfSvg from "./svgs/PdfSvg";
import TextCheckerSvg from "./svgs/TextCheckerSvg";
import MobileHeader from "./components/MobileHeader";
import SidebarContent from "./components/Sidebar";

const Sidebar: React.FC = () => {
  const [activeItem] = useState<string>("textChecker");
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");

  const menuItems: { id: string; label: string; icon: React.FC<any> }[] = [
    { id: "spellChecker", label: "მართლმწერი", icon: SpellCheckerSvg },
    { id: "textChecker", label: "ტექსტის შედარება", icon: TextCheckerSvg },
    { id: "voice-text", label: "ხმა → ტექსტი", icon: VoiceToTextSvg },
    { id: "text-voice", label: "ტექსტი → ხმა", icon: TextToVoiceSvg },
    { id: "pdf", label: "PDF კონვერტაცია", icon: PdfSvg },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  if (isMobile) {
    const activeMenuItem = menuItems.find((item) => item.id === activeItem);
    const activeTitle = activeMenuItem ? activeMenuItem.label : "";
    const activeIcon = activeMenuItem ? activeMenuItem.icon : undefined;

    return (
      <>
        <MobileHeader
          onMenuClick={handleDrawerToggle}
          activeTitle={activeTitle}
          activeIcon={activeIcon}
        />
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              width: "280px",
              backgroundColor: "#132450",
              color: "white",
            },
          }}
        >
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <SidebarContent menuItems={menuItems} />
          </Box>
        </Drawer>
      </>
    );
  }

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
        boxSizing: "border-box",
      }}
    >
      <SidebarContent menuItems={menuItems} />
    </Box>
  );
};

export default Sidebar;
