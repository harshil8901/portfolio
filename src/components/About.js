import React from "react";
import { Link, Container, Typography, Box, Divider, useMediaQuery } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from "@mui/material/styles";

const About = () => {
  const theme = useTheme();
  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down('md')); // Check if screen size is tablet or mobile

  return (
    <Box
      id="about"
      sx={{
        padding: { xs: "20px 10px", md: "50px 0" },
        backgroundColor: theme.palette.background.default,
        position: "relative",
        color: "#fff",
      }}
    >
      <Container sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", justifyContent: "space-between" }}>
        <Box sx={{ flex: 1, textAlign: "left" }}>
          <Typography variant="h4" component="h1" sx={{ color: theme.palette.primary.main, fontSize: { xs: "2rem", md: "2.5rem" } }}>
            Hi, I'm Harshil Kataria
          </Typography>
          <Typography variant="h6" component="h2" sx={{ marginTop: "8px", fontSize: { xs: "1rem", md: "1.25rem" } }}>
            Web Developer & 4th Year Computer Science Student
          </Typography>
        </Box>
        {!isTabletOrMobile && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "absolute",
              right: "50px",
              top: "50px",
              marginTop: "20px",
            }}
          >
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                bgcolor: theme.palette.primary.main,
                width: "2px",
                height: "150px",
                marginBottom: "20px",
                marginLeft: "20px"
              }}
            />
            <Link
              href="https://www.linkedin.com/in/harshil-kataria-96a6121a6"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ marginBottom: "16px" }}
            >
              <LinkedInIcon
                sx={{ color: theme.palette.primary.main, fontSize: "40px" }}
              />
            </Link>
            <Link
              href="https://github.com/harshil8901"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ marginBottom: "8px" }}
            >
              <GitHubIcon
                sx={{ color: theme.palette.primary.main, fontSize: "40px" }}
              />
            </Link>
          </Box>
        )}
      </Container>
      <Container sx={{ marginTop: { xs: "20px", md: "40px" } }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
          <Divider
            sx={{
              bgcolor: theme.palette.primary.main,
              height: "2px",
              width: "50px",
              marginRight: "8px",
            }}
          />
          <Typography variant="h4" sx={{ color: theme.palette.primary.main, fontSize: { xs: "1.5rem", md: "2rem" }, textAlign: "left" }}>
            About
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ marginTop: "20px", fontSize: { xs: "0.9rem", md: "1.1rem" }, textAlign: "left" }}>
          A dedicated and innovative Computer Science Student with a passion
          for web development and a strong command of technologies like React,
          Node.js, and MongoDB. Committed to delivering efficient,
          user-centric solutions through meticulous project management and
          seamless client communication. Skilled in full-stack development and
          adept at leveraging cutting-edge tools to drive impactful outcomes.
        </Typography>
      </Container>
      {isTabletOrMobile && (
        <Container sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <Link
            href="https://www.linkedin.com/in/harshil-kataria-96a6121a6"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ margin: "0 10px" }}
          >
            <LinkedInIcon
              sx={{ color: theme.palette.primary.main, fontSize: "30px" }}
            />
          </Link>
          <Link
            href="https://github.com/harshil8901"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ margin: "0 10px" }}
          >
            <GitHubIcon
              sx={{ color: theme.palette.primary.main, fontSize: "30px" }}
            />
          </Link>
        </Container>
      )}
    </Box>
  );
};

export default About;
