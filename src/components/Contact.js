import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';
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
        <Typography variant="h4" sx={{ color: '#fff', textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center', marginBottom: '30px' }}>
          Contact ME
        </Typography>
        {/* Contact Information */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <Card sx={{ width: { xs: '100%', sm: '300px' }, backgroundColor: 'theme.palette.text.primary', boxShadow: '0px 3px 6px rgba(255, 255, 255, 0.5)', borderRadius: '12px' }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <EmailIcon sx={{ marginRight: '8px', color: theme.palette.primary.primary }} />
              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.primary, cursor: 'pointer', textAlign: 'center' }}
                onClick={handleEmailClick}
              >
                harshilkataria11@gmail.com
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: { xs: '100%', sm: '300px' }, backgroundColor: 'theme.palette.text.primary', boxShadow: '0px 3px 6px rgba(255, 255, 255, 0.5)', borderRadius: '12px' }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PhoneIcon sx={{ marginRight: '8px', color: theme.palette.text.primary }} />
              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.primary, cursor: 'pointer', textAlign: 'center' }}
                onClick={handlePhoneClick}
              >
                +91 8930840933
              </Typography>
            </CardContent>
          </Card>
        </Box>
        
      </Container>
    </Box>
  );
};

export default Contact;
