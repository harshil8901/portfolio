import React from "react";
import { AppBar, Toolbar, Button, Container, useMediaQuery } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "@mui/material/styles";

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Adjust breakpoint as needed

  if (isMobile) {
    return null; // Return null to completely remove NavBar on mobile phones
  }

  const navLinks = [
    { label: "Skills", to: "skills" },
    { label: "Experience", to: "experience" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
    { label: "Resume", href: "https://drive.google.com/file/d/1Pz5V50E25kzq6WDi9UrqvwnKfmrFoybh/view?usp=drive_link" }
  ];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.background.default,
        boxShadow: "none",
        color: theme.palette.text.primary,
      }}
      elevation={0}
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <Container sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          {/* Desktop and Tablet View */}
          {navLinks.map((link, index) => (
            <ScrollLink key={index} to={link.to} smooth={true} duration={500} style={{ textDecoration: "none" }}>
              <Button sx={{ color: theme.palette.primary.main }}>{link.label}</Button>
            </ScrollLink>
          ))}
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
