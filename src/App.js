// Dependencies to import icon and router dom  
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import {BrowserRouter as Switch,Route,Link} from 'react-router-dom';
import Overview from './pages/Overview.js';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './pages/Team';

//Using the componets in the recat app 
function App() {
  return (
    <Router>
      <Sidebar/>
      <Routes> 
        <Route path='/overview' exact component={Overview} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/team' exact component={Team} />
      </Routes>
    </Router>
  );
}

export default App;