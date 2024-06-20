import React from "react";
import {
  Link,
  Container,
  Typography,
  Box,
  Divider,
  useMediaQuery,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "@mui/material/styles";
import profileImage from "../assets/images/profile.JPG"; // Import the image

const SocialLinks = ({ direction, justifyContent, isLaptop }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: direction,
      justifyContent: justifyContent,
      alignItems: "center",
      padding: "10px",
      borderRadius: "12px",
      backgroundColor: "#fff",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)", // Added more shadow
      width: isLaptop ? "250px" : "auto",  // Adjust width for laptop
      height: isLaptop ? "40px" : "auto",  // Adjust height for laptop
    }}
  >
    <Typography variant="body1" sx={{ marginRight: "10px", fontWeight: "bold", color: "black" }}>
      Connect with Me
    </Typography>
    <Link
      href="https://www.linkedin.com/in/harshil-kataria-96a6121a6"
      target="_blank"
      rel="noopener noreferrer"
      sx={{ margin: "0 5px" }}
    >
      <LinkedInIcon sx={{ color: "black", fontSize: "24px" }} />
    </Link>
    <Link
      href="https://github.com/harshil8901"
      target="_blank"
      rel="noopener noreferrer"
      sx={{ margin: "0 5px" }}
    >
      <GitHubIcon sx={{ color: "black", fontSize: "24px" }} />
    </Link>
  </Box>
);

const About = () => {
  const theme = useTheme();
  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down("md")); // Check if screen size is tablet or mobile

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
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          position: "relative", // Ensure the parent container is relatively positioned
        }}
      >
        <Box sx={{ flex: 3, textAlign: "left", marginRight: { md: "30px" } }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: "bold",
            }}
          >
            Hi, I'm Harshil Kataria
          </Typography>
          <Typography
            variant="h6"
            component="h2"
            sx={{ marginTop: "8px", fontSize: { xs: "1rem", md: "1.25rem" } }}
          >
            Web Developer & 4th Year Computer Science Student
          </Typography>
        </Box>
        
        {/* Profile Image and Social Icons for Laptop View */}
        {!isTabletOrMobile && (
          <Box
            sx={{
              width: "15%",
              position: "absolute",
              right: "20px", // Adjust position as per your design
              top: "0px", // Move image further up
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={profileImage}
              alt="Profile"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                marginBottom: "10px", // Reduce margin-bottom
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)", // Added more shadow
              }}
            />
            <SocialLinks direction="row" justifyContent="center" isLaptop />
          </Box>
        )}
      </Container>
      <Container sx={{ marginTop: { xs: "20px", md: "40px" } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Divider
            sx={{
              bgcolor: theme.palette.text.primary,
              height: "2px",
              width: "50px",
              marginRight: "8px",
            }}
          />

          <Typography
            variant="h4"
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: "1.5rem", md: "2rem" },
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            ABOUT ME
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            marginTop: "20px",
            fontSize: { xs: "0.9rem", md: "1.1rem" },
            textAlign: "left",
            width: { md: "75%" }, // About me description takes up 75% of the width
          }}
        >
          A dedicated and innovative Computer Science Student with a passion for
          web development and a strong command of technologies like React,
          Node.js, and MongoDB. Committed to delivering efficient, user-centric
          solutions through meticulous project management and seamless client
          communication. Skilled in full-stack development and adept at
          leveraging cutting-edge tools to drive impactful outcomes.
        </Typography>
      </Container>
      {/* Social Icons for Mobile View */}
      {isTabletOrMobile && (
        <>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <img
              src={profileImage}
              alt="Profile"
              style={{
                width: "150px",
                height: "auto",
                borderRadius: "8px",
                marginBottom: "20px",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)", // Added more shadow
              }}
            />
          </Container>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <SocialLinks direction="row" justifyContent="center" />
          </Container>
        </>
      )}
    </Box>
  );
};

export default About;
