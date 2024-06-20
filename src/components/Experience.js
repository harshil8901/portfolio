import React from "react";
import { Container, Typography, Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const experiences = [
  {
    year: "May 2024-June 2024",
    title: " Web Developer",
    company: "Tata Power DDL ,Internship - Hybrid",
    description: `Led the development of an Employee Task Management Dashboard using React and Material-UI. Created interfaces for task monitoring, completion updates, and commenting. Integrated task filtering and secure user login. Improved usability and security, advancing my skills in web application development.`,
  },

  {
    year: "June 2023-July 2023",
    title: " Web Developer",
    company: "Solitaire Infosys,Internship - Remote",
    description: `Led five projects using React and JavaScript. Increased project efficiency by 20% and reduced response times by 30%. Achieved a 25% rise in client satisfaction ratings and frequently completed projects ahead of schedule.`,
  },

  {
    year: "May 2023-June 2023",
    title: "Web Developer",
    company: "Psychogems, Freelance - Remote",
    description: `Developed a client-centric website for a psychology therapist using React. Achieved a 40% increase in user engagement and a 25% rise in appointment bookings within three months. Enhanced responsiveness and service quality, leading to a 20% increase in client satisfaction.`,
  },
  // Add more experiences as needed
];

const Experience = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // Check if screen size is desktop or larger

  return (
    <Box
      id="experience"
      sx={{
        padding: { xs: "20px 0", md: "20px 0" }, // Adjusted padding to reduce top and bottom spacing
        backgroundColor: theme.palette.background.default,
        position: "relative",
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "20px",
          boxShadow: "0 -20px 20px -20px black",
        },
        "::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "20px",
          boxShadow: "0 20px 20px -20px black",
        },
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: isDesktop ? "row" : "column",
            alignItems: isDesktop ? "flex-start" : "center",
            position: "relative",
            margin: "0 auto", // Center the box horizontally
            padding: isDesktop ? "20px 0" : "20px 0", // Equal padding for top and bottom
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              color: theme.palette.text.primary,
              marginBottom: isDesktop ? "0" : "20px",
              writingMode: isDesktop ? "vertical-rl" : "horizontal-tb",
              textOrientation: isDesktop ? "upright" : "initial",
            }}
          >
            Experience
          </Typography>
          <Box
            sx={{
              backgroundColor: theme.palette.background.default,
              padding: "0 20px", // Reduced padding to remove extra spacing
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              flex: 1,
              boxShadow: "none",
              marginLeft: isDesktop ? "20px" : "0", // Adjust margin for desktop
            }}
          >
            {experiences.map((exp, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  marginBottom: index < experiences.length - 1 ? "30px" : 0, // Increased bottom margin
                }}
              >
                <Typography variant="subtitle1" color="text.secondary">
                  {exp.year}
                </Typography>
                <Box sx={{ marginLeft: "0", textAlign: "left" }}>
                  <Typography variant="h6">{exp.title}</Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {exp.company}
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: "10px" }}>
                    {exp.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
