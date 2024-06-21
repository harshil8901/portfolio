import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Import images (assuming these imports are correctly configured)
import leaveManagementImg1 from "../assets/images/leaveManagement1.png";
import leaveManagementImg2 from "../assets/images/leaveManagement2.png";
import leaveManagementImg3 from "../assets/images/leaveManagement3.png";
import leaveManagementImg4 from "../assets/images/leaveManagement4.png";

import moneyMentorImg1 from "../assets/images/moneyMentor1.png";
import moneyMentorImg2 from "../assets/images/moneyMentor2.png";
import moneyMentorImg3 from "../assets/images/moneyMentor3.png";
import moneyMentorImg4 from "../assets/images/moneyMentor4.png";

import taskAssignmentImg1 from "../assets/images/taskAssignment1.png";
import taskAssignmentImg2 from "../assets/images/taskAssignment2.png";
import taskAssignmentImg3 from "../assets/images/taskAssignment3.png";
import taskAssignmentImg4 from "../assets/images/taskAssignment4.png";
import taskAssignmentImg5 from "../assets/images/taskAssignment5.png";

const projects = [
  {
    title: "Automated Leave Management System",
    description:
      "Revolutionized leave management by developing an automated system streamlining application, approval, and tracking workflows via a user-friendly interface. Empowered employees and HR with real-time visibility, leave balance tracking, eliminating manual errors, and optimizing organizational productivity.",
    technologies: ["React", "Node.js"],
    github: "https://github.com/harshil8901/Leave-Management-System",
    images: [leaveManagementImg1, leaveManagementImg2, leaveManagementImg3, leaveManagementImg4],
  },
  {
    title: "Money Mentor",
    description:
      "Pioneered a revolutionary personal finance platform, integrating expense tracking, SIP calculator, live stock market data, and a sophisticated algorithm for mutual fund recommendations. Enhanced financial efficiency, empowered users with streamlined planning, and delivered exponential growth potential in investments.",
    technologies: ["React", "Node.js"],
    github: "https://github.com/harshil8901/Money-Mentor",
    images: [moneyMentorImg1, moneyMentorImg2, moneyMentorImg3, moneyMentorImg4],
  },
  {
    title: "Task Assignment App",
    description:
      "Developed a task assignment application to manage and assign tasks effectively within a team. The app allows for real-time updates, task tracking, and ensures efficient project management.",
    technologies: ["React", "Node.js"],
    github: "https://github.com/harshil8901/task-assignment.git",
    images: [
      taskAssignmentImg1,
      taskAssignmentImg2,
      taskAssignmentImg3,
      taskAssignmentImg4,
      taskAssignmentImg5,
    ],
  },
];

const Projects = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // Define styles for the carousel images
  const imageContainerStyle = {
    padding: "5px",
  };

  const imageStyle = {
    width: "100%",
    height: "auto", // Adjusted to maintain aspect ratio
    objectFit: "cover",
    borderRadius: "16px",
  };

  return (
    <Box
      id="projects"
      sx={{
        padding: { xs: "40px 0", md: "80px 0" },
        backgroundColor: theme.palette.background.default,
        position: "relative",
        minHeight: "100vh",
        "::before": {
          content: isDesktop ? '""' : "none",
          position: "absolute",
          width: "8px",
          height: "8px",
          backgroundColor: theme.palette.primary.main,
          borderRadius: "50%",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          boxShadow: `0 25px 0 ${theme.palette.primary.main}, 0 50px 0 ${theme.palette.primary.main}, 0 75px 0 ${theme.palette.primary.main}, 0 100px 0 ${theme.palette.primary.main}`,
        },
        "::after": {
          content: isDesktop ? '""' : "none",
          position: "absolute",
          width: "8px",
          height: "8px",
          backgroundColor: theme.palette.primary.main,
          borderRadius: "50%",
          left: "30px",
          top: "calc(50% + 40px)",
          transform: "translateY(-50%)",
          boxShadow: `0 25px 0 ${theme.palette.primary.main}, 0 50px 0 ${theme.palette.primary.main}, 0 75px 0 ${theme.palette.primary.main}, 0 100px 0 ${theme.palette.primary.main}`,
        },
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <Typography
            variant="h4"
            style={{
              color: theme.typography.h4.color,
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Projects
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={3} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={10} md={6} key={index}>
              <Card
                sx={{
                  background: "linear-gradient(to right top, #242426, #2a2a2c, #303032, #363638, #3c3c3e)",
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                }}
              >
                <Carousel
                  showArrows={true}
                  showThumbs={false}
                  infiniteLoop={true}
                  autoPlay={true}
                  interval={3000}
                  dynamicHeight={false}
                  showStatus={false}
                >
                  {project.images.map((image, imgIndex) => (
                    <div key={imgIndex} style={imageContainerStyle}>
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${imgIndex + 1}`}
                        style={imageStyle}
                      />
                    </div>
                  ))}
                </Carousel>
                <CardContent
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Typography
                      variant="h6"
                      style={{
                        color: theme.typography.h6.color,
                        textAlign: "left",
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        color: theme.typography.body1.color,
                        textAlign: "left",
                        marginTop: "10px",
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        color: theme.typography.body2.color,
                        textAlign: "left",
                        marginTop: "10px",
                      }}
                    >
                      Technologies Used: {project.technologies.join(", ")}
                    </Typography>
                  </div>
                  <Button
                    variant="contained"
                    color="primary"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<GitHubIcon />}
                    style={{ alignSelf: "flex-start", marginTop: "20px" }}
                  >
                    View on GitHub
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
