import './Navbar'
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Create from './Create';
import UserMedInfo from './UserMedInfo';
import NotFound from './NotFound';


function App() {
  const title = "Welcome to the app"
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<Create/>} />
            <Route path="/medical-information/:id" element={<UserMedInfo/>} />
            <Route path="*" element={<NotFound/>} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
