import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, Button, Divider, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Import images
import leaveManagementImg1 from '../assets/images/leaveManagement1.png';
import leaveManagementImg2 from '../assets/images/leaveManagement2.png';
// import moneyMentorImg1 from '..assets/images/moneyMentor1.png';
// import moneyMentorImg2 from '../assets/images/moneyMentor2.png';
// import taskAssignmentImg1 from '../assets/images/taskAssignment1.png';
// import taskAssignmentImg2 from '../assets/images/taskAssignment2.png';

const projects = [
  {
    title: 'Automated Leave Management System',
    description: 'Revolutionized leave management by developing an automated system streamlining application, approval, and tracking workflows via a user-friendly interface. Empowered employees and HR with real-time visibility, leave balance tracking, eliminating manual errors, and optimizing organizational productivity.',
    technologies: ['React', 'Node.js'],
    github: 'https://github.com/harshil8901/Leave-Management-System',
    images: [leaveManagementImg1, leaveManagementImg2]
  },
//   {
//     title: 'Money Mentor',
//     description: "Pioneered a revolutionary personal finance platform, integrating expense tracking, SIP calculator, live stock market data, and a sophisticated algorithm for mutual fund recommendations. Enhanced financial efficiency, empowered users with streamlined planning, and delivered exponential growth potential in investments.",
//     technologies: ['React', 'Node.js'],
//     github: 'https://github.com/harshil8901/Money-Mentor',
//     images: [moneyMentorImg1, moneyMentorImg2]
//   },
//   {
//     title: 'Task Assignment App',
//     description: 'Developed a task assignment application to manage and assign tasks effectively within a team. The app allows for real-time updates, task tracking, and ensures efficient project management.',
//     technologies: ['React', 'Node.js'],
//     github: 'https://github.com/harshil8901/Task-Assignment-website-.git',
//     images: [taskAssignmentImg1, taskAssignmentImg2]
//   }
];

const Projects = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  // Define styles for the carousel images
  const imageContainerStyle = {
    padding: '5px', // Adjust padding as needed
  };

  const imageStyle = {
    width: '100%',
    height: '280px', // Adjust height as needed to maintain the aspect ratio
    objectFit: 'cover',
  };

  return (
    <Box
      id="projects"
      sx={{
        padding: { xs: '40px 0', md: '80px 0' },
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        minHeight: '100vh',
        '::before': {
          content: isDesktop ? '""' : 'none',
          position: 'absolute',
          width: '8px',
          height: '8px',
          backgroundColor: theme.palette.primary.main,
          borderRadius: '50%',
          left: '10px', // Adjust distance from left
          top: '50%', // Adjust vertical position to align with the header
          transform: 'translateY(-50%)', // Center vertically relative to parent
          boxShadow: `0 25px 0 ${theme.palette.primary.main}, 0 50px 0 ${theme.palette.primary.main}, 0 75px 0 ${theme.palette.primary.main}, 0 100px 0 ${theme.palette.primary.main}`,
        },
        '::after': {
          content: isDesktop ? '""' : 'none',
          position: 'absolute',
          width: '8px',
          height: '8px',
          backgroundColor: theme.palette.primary.main,
          borderRadius: '50%',
          left: '30px', // Adjust distance from left for the second column
          top: 'calc(50% + 40px)', // Adjust vertical position to create misalignment
          transform: 'translateY(-50%)', // Center vertically relative to parent
          boxShadow: `0 25px 0 ${theme.palette.primary.main}, 0 50px 0 ${theme.palette.primary.main}, 0 75px 0 ${theme.palette.primary.main}, 0 100px 0 ${theme.palette.primary.main}`,
        },
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px' }}>
          <Divider
            sx={{
              bgcolor: theme.palette.primary.main,
              height: '2px',
              width: '50px',
              marginRight: '8px',
            }}
          />
          <Typography variant="h4" style={{ color: theme.palette.primary.main }}>Projects</Typography>
          <Divider
            sx={{
              bgcolor: theme.palette.primary.main,
              height: '2px',
              width: '50px',
              marginLeft: '8px',
            }}
          />
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={3} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={10} md={12} key={index}>
              {isDesktop ? (
                <Card style={{ 
                  backgroundColor: theme.palette.background.paper, 
                  borderRadius: '16px', 
                  display: 'flex', 
                  height: '100%',
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)", 
                }}>
                  <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <Typography variant="h6" style={{ color: theme.palette.primary.main, textAlign: 'left' }}>{project.title}</Typography>
                      <Typography variant="body1" style={{ color: theme.palette.text.primary, textAlign: 'left', marginTop: '10px' }}>{project.description}</Typography>
                      <Typography variant="body2" style={{ color: theme.palette.text.secondary, textAlign: 'left', marginTop: '10px' }}>Technologies: {project.technologies.join(', ')}</Typography>
                    </div>
                    <Button
                      variant="contained"
                      color="primary"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<GitHubIcon />}
                      style={{ alignSelf: 'flex-start', marginTop: '20px' }}
                    >
                      View on GitHub
                    </Button>
                  </CardContent>
                  <Carousel 
                    style={{ flex: '1', paddingLeft: '20px' }} 
                    showArrows={true} 
                    showThumbs={false} 
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                    dynamicHeight={false}
                    showStatus={false} // Hide the pagination
                  >
                    {project.images.map((image, imgIndex) => (
                      <div key={imgIndex} style={imageContainerStyle}>
                        <img src={image} alt={`${project.title} screenshot ${imgIndex + 1}`} style={imageStyle} />
                      </div>
                    ))}
                  </Carousel>
                </Card>
              ) : (
                <Card style={{ 
                  backgroundColor: theme.palette.background.paper, 
                  borderRadius: '16px', 
                  display: 'flex', 
                  flexDirection: 'column',
                  height: '100%',
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)", 
                }}>
                  <Carousel 
                    style={{ flex: '1' }} 
                    showArrows={true} 
                    showThumbs={false} 
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                    dynamicHeight={false}
                    showStatus={false} // Hide the pagination
                  >
                    {project.images.map((image, imgIndex) => (
                      <div key={imgIndex} style={imageContainerStyle}>
                        <img src={image} alt={`${project.title} screenshot ${imgIndex + 1}`} style={imageStyle} />
                      </div>
                    ))}
                  </Carousel>
                  <CardContent style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <Typography variant="h6" style={{ color: theme.palette.primary.main, textAlign: 'left' }}>{project.title}</Typography>
                      <Typography variant="body1" style={{ color: theme.palette.text.primary, textAlign: 'left', marginTop: '10px' }}>{project.description}</Typography>
                      <Typography variant="body2" style={{ color: theme.palette.text.secondary, textAlign: 'left', marginTop: '10px' }}>Technologies: {project.technologies.join(', ')}</Typography>
                    </div>
                    <Button
                      variant="contained"
                      color="primary"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<GitHubIcon />}
                      style={{ alignSelf: 'flex-start', marginTop: '20px' }}
                    >
                      View on GitHub
                    </Button>
                  </CardContent>
                </Card>
              )}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
