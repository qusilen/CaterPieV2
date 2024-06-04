import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import Home from './sayfalar/home';
import Sepetim from './sayfalar/Sepetim';
import SifremiUnuttum from './sayfalar/SifremiUnuttum';
import SignUp from './sayfalar/SignUp';
import Favoriler from './sayfalar/Favoriler';
import CPDeck from './sayfalar/CPDeck';
import UrunDegerlendirme from './sayfalar/UrunDegerlendirme';
import Degerlendirmelerim from './sayfalar/Degerlendirmelerim';
import Odeme from './sayfalar/Odeme';
import TekrarSatinAl from './sayfalar/TekrarSatinAl';
import OnerilenUrunler from './sayfalar/OnerilenUrunler';
import KayitliAdres from "./sayfalar/KayitliAdres";
import Siparislerim from './sayfalar/Siparislerim';
import Premium from './sayfalar/Premium';
import SellerPage from './sayfalar/SellerPage';


function App() {

  return (
    <div className='ana_sayfa' >
      <Navbar/>
      <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/giris' element={<SignUp />} />
                <Route path='/sepetim' element={<Sepetim />} />
                <Route path='/giris/sifremi_unuttum' element={<SifremiUnuttum />} />
                <Route path='/favoriler' element={<Favoriler/>}/>
                <Route path='/cpdeck' element={<CPDeck/>}/>
                <Route path='/urundegerlendirme' element={<UrunDegerlendirme/>}/>
                <Route path='/degerlendirmelerim' element={<Degerlendirmelerim/>}/>
                <Route path='/odeme' element={<Odeme/>}/>
                <Route path='/tekrarsatinal' element={<TekrarSatinAl/>}/>
                <Route path='/onerilenurunler' element={<OnerilenUrunler/>}/>
                <Route path="/kayitliAdresler" element={<KayitliAdres/>}/> 
                <Route path="/siparislerim" element={<Siparislerim/>}/> 
                <Route path="/premium" element={<Premium/>}/>
                <Route path='/SellerPage ' element={<SellerPage />} /> 


            </Routes>    
            </div>
  );
}

export default App;