import 'bootstrap/dist/css/bootstrap.min.css';
import './css/my_reset.css';
import './css/App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';

import ShopAll from './pages/ShopAll';
import Detail from './pages/Detail';
import Cart from './pages/Cart';

import Company from './pages/Company';
import Ceo from './pages/Ceo';
import Organization from './pages/Organization';
import Ci from './pages/Ci';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ShopAll" element={<ShopAll />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Company" element={<Company />}>
          <Route path="Ceo" element={<Ceo />} />
          <Route path="Organization" element={<Organization />} />
          <Route path="Ci" element={<Ci />} />
        </Route>
        <Route path="*" element={<h1>페이지가 없습니다.</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
