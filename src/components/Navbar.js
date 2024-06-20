import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  useMediaQuery,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "@mui/material/styles";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/logos/logo.png'; // Adjust the path if necessary

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { label: "SKILLS", to: "skills" },
    { label: "EXPERIENCE", to: "experience" },
    { label: "PROJECTS", to: "projects" },
    { label: "CONTACT ME", to: "contact" },
    { label: "RESUME", href: "https://drive.google.com/file/d/1Pz5V50E25kzq6WDi9UrqvwnKfmrFoybh/view?usp=drive_link" }
  ];

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleNavClick = () => {
    setDrawerOpen(false); // Close drawer when a navigation link is clicked
  };

  const drawerList = () => (
    <Box
      sx={{ width: '100vw', backgroundColor: theme.palette.background.default, height: '100vh', paddingTop: "10px" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <IconButton onClick={toggleDrawer(false)} sx={{ color: theme.palette.primary.main }}>
          <CloseIcon />
        </IconButton>
        {navLinks.map((link, index) => (
          <ListItem button key={index}>
            {link.href ? (
              <Button
                sx={{ color: 'white', textTransform: "none", fontSize: "1rem", width: "100%" }}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </Button>
            ) : (
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={500}
                style={{ textDecoration: "none", width: "100%" }}
                onClick={handleNavClick} // Close drawer when link is clicked
              >
                <ListItemText primary={link.label} sx={{ color: 'white', textAlign: 'center' }} />
              </ScrollLink>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'black',
          boxShadow: "none",
          color: 'white',
        }}
        elevation={0}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {isMobile ? (
            <>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Box sx={{ flexGrow: 1 }} /> {/* Ensures logo is on the right */}
              <img src={logo} alt="Logo" style={{ height: '40px' }} />
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt="Logo" style={{ height: '40px' }} />
            </Box>
          )}
          <Container
            sx={{
              display: isMobile ? "none" : "flex",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            {navLinks.map((link, index) => (
              <React.Fragment key={index}>
                {index !== 0 && <Box sx={{ borderLeft: `1px solid white`, height: "auto" }} />}
                {link.href ? (
                  <Button
                    sx={{ color: 'white', textTransform: "none", fontSize: "1.2rem" }}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </Button>
                ) : (
                  <ScrollLink to={link.to} smooth={true} duration={500} style={{ textDecoration: "none" }}>
                    <Button sx={{ color: 'white', textTransform: "none", fontSize: "1.2rem" }}>{link.label}</Button>
                  </ScrollLink>
                )}
              </React.Fragment>
            ))}
          </Container>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { width: '100vw', top: 0 } // Adjust top position as needed
        }}
      >
        {drawerList()}
      </Drawer>
    </>
  );
};

export default NavBar;