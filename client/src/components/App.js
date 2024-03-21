import * as React from 'react';
import './Navbar'
import Navbar from './Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Create from './Create';
import MedInfo from './MedInfo'
import UserMedInfo from './UserMedInfo';
import NotFound from './NotFound';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Tem from './Tem'
import AppAppBar from './AppAppBar';
import Footer from './Footer';
import getLPTheme from '../getLPTheme';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Records from './Records'
import Highlights from './Highlights';
import Hero from './Hero';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import {useLocation} from 'react-router-dom';



function App() {
  const [mode, setMode] = React.useState('dark');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });


  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}> 
    <CssBaseline />

    <Router>
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <Box sx={{ bgcolor: 'background.default' }}>
          <Routes>
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/" element={<Hero/>} />
            <Route path="/create" element={<Create/>} />
            <Route path="/records/:id" element={<MedInfo/>} />
            <Route path="/template" element={<Tem/>} />
            <Route path="/records" element={<Records/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        <Footer/>
        </Box>
    </Router>
    </ThemeProvider>
  );}

export default App;
