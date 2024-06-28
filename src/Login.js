// Login.js

import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase'; // Firebase auth modülünü import edin

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetEmail, setResetEmail] = useState(''); // Şifre sıfırlama için email state'i

  const signIn = async (e) => {
    e.preventDefault();
  
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      console.log('Giriş yapıldı:', user);
      history.push('/'); // Ana sayfaya yönlendir
    } catch (error) {
      console.error('Giriş sırasında hata:', error);
      alert(error.message); // Hata mesajını kullanıcıya göster
    }
  };
  
  const resetPassword = async (e) => {
    e.preventDefault();
  
    try {
      await auth.sendPasswordResetEmail(resetEmail);
      alert('Şifre sıfırlama linki e-posta adresinize gönderildi!');
      setResetEmail(''); // Şifre sıfırlama email state'ini sıfırla
    } catch (error) {
      console.error('Şifre sıfırlama sırasında hata:', error);
      alert(error.message); // Hata mesajını kullanıcıya göster
    }
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className="login__logo"
          src='https://resmim.net/cdn/2024/06/19/fUmf4j.png' 
          alt="Caterpie Logo"
        />
      </Link>

      <div className='login__container'>
        <h1>Caterpie Giriş</h1>

        <form onSubmit={signIn}>
          <h5>E-mail</h5>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Şifre</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

          <button type='submit' className='login__signInButton'>Giriş Yap</button>
        </form>

        <p>
          Oturum açarak Caterpie Kullanım ve Satış Koşullarını kabul etmiş olursunuz. Lütfen
          Gizlilik Bildirimimize, Çerez Bildirimimize ve İlgi Alanına Dayalı Reklam Bildirimimize bakınız.
        </p>

        <button onClick={() => history.push('/register')} className='login__registerButton'>Caterpie Hesabı Oluşturun</button>

        <div className='login__forgotPassword'>
          <h5>Şifremi Unuttum</h5>
          <input
            type='text'
            placeholder='E-mail adresinizi girin'
            value={resetEmail}
            onChange={e => setResetEmail(e.target.value)}
          />
          <button onClick={resetPassword} className='login__resetButton'>Şifre Sıfırlama Linki Gönder</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
