import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {useLocation} from 'react-router-dom';
import { Link as RouterLink, } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/GitHub';
import { useAuthContext } from '../customHooks/useAuthContext';
import bmiLogo from './images/BMI_Tracker.png'

const logoStyle = {
  width: '140px',
  height: 'auto',
  padding: '10px',
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      <Link href="https://mui.com/">BMI Tracker&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  const location  = useLocation();
  const {user} = useAuthContext()



  return (
  <div>
  {location.pathname === "/signup" || location.pathname === "/signin"||  location.pathname === "/create" ? ""  :  

    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <Box sx={{ ml: '-15px' }}>
              <img
                src={
                  bmiLogo
                }
                style={logoStyle}
                alt="logo"
              />
            </Box>
            <Typography variant="body2" fontWeight={600} gutterBottom>
              For better health
            </Typography>
            <Box sx={{ maxWidth: '300px' }}>
            <Typography variant="body2" color="text.secondary" mb={2}>
            Monitor your BMI, set personalized goals, and receive tailored recommendations to achieve lasting results. 
            Take charge of your health journey and unlock a happier, healthier you today.
            </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Product
          </Typography>
          <Link component={RouterLink} color="text.secondary" to="/">
            Home
          </Link>
          {user &&
          <Link component={RouterLink} color="text.secondary" to="/create">
            Add Record
          </Link>
          }

          {!user &&
          <>
          <Link component={RouterLink} color="text.secondary" to="/signin">
            Sign In
          </Link>
          <Link component={RouterLink} color="text.secondary" to="/signup">
            Sign Up
          </Link>
          </>
          }
  
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Company
          </Typography>
          <Link component={RouterLink} color="text.secondary" to="/about">
            About us
          </Link>
        
        
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Legal
          </Typography>
          <Link component={RouterLink} color="text.secondary" to="/terms">
            Terms
          </Link>
 
     
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Link color="text.secondary" href="#">
            Terms of Service
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}    
        >
          <IconButton
            color="inherit"
            href="https://github.com/mui"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
    }
    </div>
  );
}