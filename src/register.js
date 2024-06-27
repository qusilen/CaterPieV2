// register.js
import React, { useState } from 'react';
import './register.css'; // Gerekli stil dosyanızın yolu
import { Link, useHistory } from "react-router-dom"; // Link ve useHistory'yi import edin

// Firebase ve diğer importlar
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Register() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [birthdate, setBirthdate] = useState('');

    const register = async (e) => {
        e.preventDefault();

        if (password !== passwordConfirm) {
            alert("Şifreler uyuşmuyor");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('Kullanıcı başarıyla kaydedildi:', user);
            history.push('/'); // Başarılı kayıt sonrası yönlendirme
        } catch (error) {
            console.error('Kayıt işlemi sırasında hata:', error);
            alert(error.message); // Hata mesajını kullanıcıya gösterme
        }
    };

    return (
        <div className='register'>
            <Link to='/'>
                <img
                    className="register__logo"
                    src='https://resmim.net/cdn/2024/06/19/fUmf4j.png' 
                    alt="Caterpie Logo"
                />
            </Link>

            <div className='register__container'>
                <h1>Caterpie Hesabı Oluşturun</h1>

                <form onSubmit={register}>
                    <h5>Ad Soyad</h5>
                    <input type='text' value={name} onChange={e => setName(e.target.value)} />

                    <h5>Doğum Tarihi</h5>
                    <input type='date' value={birthdate} onChange={e => setBirthdate(e.target.value)} />

                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Şifre</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <h5>Şifre Tekrar</h5>
                    <input type='password' value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} />

                    <button type='submit' className='register__registerButton'>Hesap Oluştur</button>
                </form>

                <p>
                    Oturum açarak Caterpie Kullanım ve Satış Koşullarını kabul etmiş olursunuz. Lütfen
                    Gizlilik Bildirimimize, Çerez Bildirimimize ve İlgi Alanına Dayalı Reklam Bildirimimize bakınız.
                </p>
            </div>
        </div>
    )
}

export default Register;
