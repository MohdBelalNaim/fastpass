import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import First from './pages/First';
import Second from './pages/Second';
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<First/>}/>
        <Route path='/second' element={<Second/>}/>
      </Routes>
    </Router>
  );
}

export default App;
