import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const experiences = [
  {
    year: "2021",
    title: "Senior Python Developer",
    company: "Scottech, Toledo",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. 
    Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
    Maecenas eget condimentum velit, sit amet feugiat lectus.`,
  },
  {
    year: "2021",
    title: "Python Developer",
    company: "AutoGrid Systems, Naperville",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. 
    Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
    Maecenas eget condimentum velit, sit amet feugiat lectus.`,
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
        padding: { xs: "30px 0", md: "50px 0" },
        backgroundColor: theme.palette.background.default,
        position: "relative",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <Divider
            sx={{
              bgcolor: theme.palette.primary.main,
              height: "2px",
              width: "50px",
              marginRight: "8px",
            }}
          />
          <Typography variant="h4" style={{ color: theme.palette.primary.main }}>
            Experience
          </Typography>
          <Divider
            sx={{
              bgcolor: theme.palette.primary.main,
              height: "2px",
              width: "50px",
              marginLeft: "8px",
            }}
          />
        </Box>
        <Card
          sx={{
            backgroundColor: theme.palette.background.paper,
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            padding: isDesktop ? "70px" : "20px", // Adjusted padding for mobile
            position: "relative",
            borderRadius: "20px",
            overflow: "hidden", // Ensures the pseudo element stays within the card
          }}
        >
          <CardContent>
            {experiences.map((exp, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: isDesktop ? "row" : "column",
                  alignItems: isDesktop ? "center" : "flex-start",
                  position: "relative",
                  marginBottom:
                    index < experiences.length ? (isDesktop ? "40px" : "20px") : 0,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: isDesktop ? "center" : "flex-start",
                    position: "relative",
                    minWidth: "50px",
                    zIndex: 1,
                    marginBottom: isDesktop ? "0" : "10px", // Adjusted for mobile
                    textAlign: "left", // Adjusted for mobile
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{
                      marginBottom: "3px",
                      position: isDesktop ? "absolute" : "relative",
                      left: isDesktop ? "-30px" : "0", // Adjusted for mobile
                      bottom: isDesktop ? "auto" : "0", // Adjusted for mobile
                      top: isDesktop ? "auto" : "0", // Adjusted for mobile
                      whiteSpace: "nowrap",
                    }}
                  >
                    {exp.year}
                  </Typography>
                  {isDesktop && (
                    <Box
                      sx={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: "50%",
                        boxShadow: `0 0 10px ${theme.palette.primary.main}`,
                        zIndex: 2,
                        position: "relative",
                      }}
                    />
                  )}
                  {isDesktop && index < experiences.length  && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "12px",
                        left: "23.5px",
                        width: "2px",
                        height: "calc(100% + 100px)",
                        backgroundColor: theme.palette.primary.main,
                        zIndex: 0,
                      }}
                    />
                  )}
                </Box>
                <Box sx={{ marginLeft: isDesktop ? "20px" : 0 }}>
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
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Experience;
