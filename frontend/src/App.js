import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/layouts/Navbar/Navbar';
import Footer from './components/layouts/Footer/Footer';
import ProductDetails from './components/Product/ProductDetails';



function App() {
  return (
    <div className="app">
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
    </Routes>
    <Footer/>
    

    
    </div>
  );
}

export default App;
