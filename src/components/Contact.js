import React from 'react';
import { Container, Typography, Box, Divider, Card, CardContent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';


const Contact = () => {
  const theme = useTheme();

  const handlePhoneClick = () => {
    window.location.href = 'tel:+918930840933';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:harshilkataria11@gmail.com';
  };

  return (
    <Box id="contact" sx={{ padding: { xs: '30px 0', md: '50px 0' }, backgroundColor: theme.palette.background.default }}>
      <Container>
        {/* Section Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: { xs: '20px', md: '30px' } }}>
          <Divider
            sx={{
              bgcolor: theme.palette.primary.main,
              height: '2px',
              width: '50px',
              marginRight: '8px',
            }}
          />
          <Typography variant="h4" sx={{ color: theme.palette.primary.main }}>Contact Me</Typography>
          <Divider
            sx={{
              bgcolor: theme.palette.primary.main,
              height: '2px',
              width: '50px',
              marginLeft: '8px',
            }}
          />
        </Box>
        {/* Contact Information */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <Card sx={{ width: { xs: '100%', sm: '300px' }, border: `2px solid ${theme.palette.primary.main}`, boxShadow: 3 }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <EmailIcon sx={{ marginRight: '8px', color: theme.palette.text.primary }} />
              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.primary, cursor: 'pointer', textAlign: 'center' }}
                onClick={handleEmailClick}
              >
                harshilkataria11@gmail.com
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: { xs: '100%', sm: '300px' }, border: `2px solid ${theme.palette.primary.main}`, boxShadow: 3 }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PhoneIcon sx={{ marginRight: '8px', color: theme.palette.text.primary }} />
              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.primary, cursor: 'pointer', textAlign: 'center' }}
                onClick={handlePhoneClick}
              >
                +918930840933
              </Typography>
            </CardContent>
          </Card>
        </Box>
        
      </Container>
    </Box>
  );
};

export default Contact;
