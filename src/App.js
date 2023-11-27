import { Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Home from './home/Home';
import PropMgmt from './management/PropMgmt';
import PrevTrans from './prevtrans/PrevTrans';
import FTBR from './ftbr/FTBR';
import About from './about/About';
import Footer from './footer/Footer';
import './App.css';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/prevtrans" element={<PrevTrans />}></Route>
        <Route path="/ftbr" element={<FTBR />}></Route>
        <Route path="/management" element={<PropMgmt />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
