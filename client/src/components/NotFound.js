import React from 'react';
import { Link as RouterLink, useLocation, useNavigate, } from 'react-router-dom';
import { Container, Typography, Button, CssBaseline } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom'; 


const RootContainer = styled(Container)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

const ErrorContainer = styled('div')({
  textAlign: 'center',
});

const ErrorCode = styled(Typography)({
  fontSize: '120px',
  fontWeight: '700',
  color: (theme) => theme.palette.secondary.main,
  margin: 0,
});

const ErrorMessage = styled(Typography)({
  fontSize: '24px',
  color: (theme) => theme.palette.text.secondary,
  margin: '10px 0',
});

const BackToHomeButton = styled(Button)({
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: (theme) => theme.palette.secondary.main,
  color: (theme) => theme.palette.common.white,
  textDecoration: 'none',
  borderRadius: '5px',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: (theme) => theme.palette.secondary.dark,
  },
});

const NotFoundPage = () => {

  const navigate  = useNavigate();

  return (
    <RootContainer>
      <CssBaseline />
      <ErrorContainer>
        <ErrorCode variant="h1">404</ErrorCode>
        <ErrorMessage variant="h5">Oops! Page not found.</ErrorMessage>

        <Button
                color="primary"
                style={{ color: "white", backgroundColor: "rgb(70, 120, 140)"}} 
                size="small"
                component="a"
                onClick={() => navigate('/')}
                target="_blank"
              >

Back Home
              </Button>

 
      </ErrorContainer>
    </RootContainer>
  );
};

export default NotFoundPage;
