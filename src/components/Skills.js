import React from "react";
import {
  Container,
  Grid,
  Card,
  Box,
  useMediaQuery,
  Typography
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Import skill logos
import { ReactComponent as CppLogo } from "../assets/logos/c++.svg";
import { ReactComponent as HtmlLogo } from "../assets/logos/html.svg";
import { ReactComponent as CssLogo } from "../assets/logos/css.svg";
import { ReactComponent as JavascriptLogo } from "../assets/logos/javascript.svg";
import { ReactComponent as ReactLogo } from "../assets/logos/react.svg";
import { ReactComponent as NodeLogo } from "../assets/logos/nodejs.svg";
import { ReactComponent as ExpressLogo } from "../assets/logos/express.svg";
import { ReactComponent as NextLogo } from "../assets/logos/next.svg";
import { ReactComponent as MongoDBLogo } from "../assets/logos/mongodb.svg";
import { ReactComponent as VsCodeLogo } from "../assets/logos/vscode.svg";
import { ReactComponent as GitLogo } from "../assets/logos/git.svg";
import { ReactComponent as GitHubLogo } from "../assets/logos/github.svg";

const skills = [
  { name: "C++", icon: CppLogo },
  { name: "HTML", icon: HtmlLogo },
  { name: "CSS", icon: CssLogo },
  { name: "JavaScript", icon: JavascriptLogo },
  { name: "ReactJs", icon: ReactLogo },
  { name: "NodeJs", icon: NodeLogo },
  { name: "Express", icon: ExpressLogo },
  { name: "NextJs", icon: NextLogo },
  { name: "MongoDB", icon: MongoDBLogo },
  { name: "VS Code", icon: VsCodeLogo },
  { name: "Git", icon: GitLogo },
  { name: "GitHub", icon: GitHubLogo },
];

const Skills = () => {
  const theme = useTheme();
  const isLessThanDesktop = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="skills"
      sx={{
        padding: { xs: "20px 10px", md: "50px 0" },
        backgroundColor: theme.palette.background.default,
        position: "relative",
        color: theme.palette.text.primary,
        // Background grid lines (light grey)
        backgroundImage: `
          linear-gradient(to bottom, rgba(55,51,51,0.6) 1px, transparent 2px),
          linear-gradient(to right, rgba(55,51,51,0.6) 1px, transparent 2px)
        `,
        backgroundSize: "40px 40px", // Larger grid size
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Fixed background for better grid visibility
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          backgroundColor: theme.palette.background.default,
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <Typography variant="h4" style={{ textTransform: 'uppercase', fontWeight: 'bold', color: theme.palette.common.white }}>
            Skills {/* Skills heading in uppercase */}
          </Typography>
        </Box>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Card
              sx={{
                backgroundColor: theme.palette.background.paper,
                boxShadow: "0 5px 30px rgba(255,255,255,0.3)", // White shadow
                borderRadius: "20px",
                padding: "20px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: isLessThanDesktop ? "30px" : "40px", // Increased gap between logos
                width: isLessThanDesktop ? "100%" : "50%", // Adjust width for different screens
                margin: "auto", // Center the card horizontally
              }}
            >
              {skills.map((skill, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "50px", // Adjust logo size
                    height: "50px", // Adjust logo size
                  }}
                >
                  <skill.icon style={{ width: "100%", height: "100%" }} />
                </Box>
              ))}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
