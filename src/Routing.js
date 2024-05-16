import SignUp from './sayfalar/SignUp';
import { Route, Routes } from 'react-router-dom';
import Home from './sayfalar/home';
import Sepetim from './sayfalar/Sepetim';
import SifremiUnuttum from './sayfalar/SifremiUnuttum';
export default function routing() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/giris' element={<SignUp />} />
                <Route path='/sepetim' element={<Sepetim />} />
                <Route path='/giris/sifremi_unuttum' element={<SifremiUnuttum />} />
            </Routes>
            </div>
    )
}