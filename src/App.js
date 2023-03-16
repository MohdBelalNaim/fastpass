import './App.css';
import {HashRouter ,Routes,Route} from 'react-router-dom'
import First from './pages/First';
import Second from './pages/Second';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<First/>}/>
        <Route path='/second' element={<Second/>}/>
      </Routes>
      <Footer/>
    </HashRouter>
  );
}

export default App;
