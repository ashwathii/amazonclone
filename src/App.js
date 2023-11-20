import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homee from './pages/Homee';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="App">
    <Header/>
    <Routes>
     
      <Route path='/' element={<Homee/>}/>

      
    </Routes>
    <Footer/>
    </div>
    </>
  );
}

export default App;
