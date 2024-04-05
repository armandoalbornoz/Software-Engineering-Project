import * as React from 'react';
import { Link as RouterLink, useLocation, useNavigate, } from 'react-router-dom';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import {useParams} from "react-router-dom";
import { useLogout } from '../customHooks/useLogout';
import { useAuthContext } from '../customHooks/useAuthContext';
import bmilogo from './images/BMI_Tracker.png'

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
  padding: '15px',
};

function AppAppBar() {
  //const {param} = useParams() //Grabs the url param
  const navigate  = useNavigate();
  const location  = useLocation();
  const {logout} = useLogout()
  const {user} = useAuthContext()


  return (
    <div>
      {location.pathname === "/signup" || location.pathname === "/signin" || location.pathname === "/create" ? "" :  

      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor: theme.palette.mode ===  'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: theme.palette.mode === '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <img
                src={
                  bmilogo
                }
                style={logoStyle}
                alt="logo"
                pad
              />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem sx={{ py: '6px', px: '12px' }} >
                  <Typography variant="body2" color="text.primary">                  
                    <Link component={RouterLink} to="/" variant="body1"> Home </Link>
                  </Typography>
                </MenuItem>
                {user && 
                <>
                <MenuItem sx={{ py: '6px', px: '12px' }}>
                  <Typography variant="body2" color="text.primary">
                    <Link component={RouterLink} to="/create" variant="body1"> Add Record </Link>
                  </Typography>
                </MenuItem>
                <MenuItem sx={{ py: '6px', px: '12px' }}>
                  <Typography variant="body2" color="text.primary">
                    <Link component={RouterLink} to="/records" variant="body1"> Records </Link>
                  </Typography>
                </MenuItem>
                </>
                }
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              
            {!user &&<><Button
                color="primary"
                style={{ color: "white", backgroundColor: "rgb(70, 120, 140)"}} 
                size="small"
                component="a"
                onClick={() => navigate('/signin')}
                target="_blank"
              >
                
                Sign in
              </Button>
              <Button
                color="primary"
                style={{ color: "white", backgroundColor: "rgb(70, 120, 140)"}} 
                size="small"
                component="a"
                onClick={() => navigate('/signup')}
                target="_blank"
              >
                Sign up
              </Button></> }

              {user && <Button
                color="primary"
                style={{ color: "white", backgroundColor: "rgb(70, 120, 140)"}} 
                size="small"
                component="a"
                onClick={() => logout()}
                target="_blank"
              >
                Log out
              </Button>}

              
            </Box>
          
          </Toolbar>
        </Container>
      </AppBar>
      }
    </div>
  );
}


export default AppAppBar;