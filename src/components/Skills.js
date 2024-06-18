import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  useMediaQuery
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
  const isLessThanDesktop = useMediaQuery(theme.breakpoints.down('md')); // Check if screen size is less than desktop

  return (
    <Box
      id="skills"
      sx={{
        padding: { xs: "20px 10px", md: "50px 0" },
        backgroundColor: theme.palette.background.default,
        position: "relative",
        color: theme.palette.text.primary,
        "::before": {
          content: '""',
          position: "absolute",
          width: "8px",
          height: "8px",
          backgroundColor: theme.palette.primary.main,
          borderRadius: "50%",
          right: isLessThanDesktop ? "auto" : "30px",
          top: isLessThanDesktop ? "auto" : "40%",
          bottom: isLessThanDesktop ? "-10px" : "auto",
          boxShadow: isLessThanDesktop
            ? "none"
            : `0 25px 0 ${theme.palette.primary.main}, 0 50px 0 ${theme.palette.primary.main}, 0 75px 0 ${theme.palette.primary.main}, 0 100px 0 ${theme.palette.primary.main}`,
        },
        "::after": {
          content: '""',
          position: "absolute",
          width: "8px",
          height: "8px",
          backgroundColor: theme.palette.primary.main,
          borderRadius: "50%",
          right: isLessThanDesktop ? "auto" : "10px",
          top: isLessThanDesktop ? "auto" : "45%",
          bottom: isLessThanDesktop ? "-10px" : "auto",
          boxShadow: isLessThanDesktop
            ? "none"
            : `0 25px 0 ${theme.palette.primary.main}, 0 50px 0 ${theme.palette.primary.main}, 0 75px 0 ${theme.palette.primary.main}, 0 100px 0 ${theme.palette.primary.main}`,
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
          <Divider
            sx={{
              bgcolor: theme.palette.primary.main,
              height: "2px",
              width: "50px",
              marginRight: "8px",
            }}
          />
          <Typography variant="h4" style={{ color: theme.palette.primary.main }}>
            Skills
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
        <Grid container spacing={2}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  borderRadius: "20px",
                  height: "150px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <skill.icon
                    style={{ width: "50px", height: "50px", marginBottom: "10px" }}
                  />
                  <Typography
                    variant="subtitle1"
                    style={{ color: theme.palette.text.primary, textAlign: "center" }}
                  >
                    {skill.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
