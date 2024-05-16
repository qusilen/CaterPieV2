import React, { useState } from 'react';
import { TextField, Button, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleClick = () => {
    if (email.trim() === '') {
      alert('Lütfen email alanını doldurunuz!');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Geçerli bir mail adresi giriniz!');
      return;
    }

    alert('Sıfırlama linkiniz mail kutunuza başarıyla gönderildi!');
    navigate('/giris');
  }

  const isValidEmail = (email) => {
    // Burada email adresinin geçerli olup olmadığını kontrol eden bir fonksiyon kullanabilirsiniz.
    // Örneğin, bir regex kullanarak kontrol edebilirsiniz.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <Card sx={{ width: '600px', height: '300px', ml: '450px', mt: '100px' }}>
      <>
        {!sent ? (
          <form onSubmit={handleSubmit}>
            <TextField
              sx={{ ml: "75px", mt: "75px", width: "450px" }}
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={handleChange}
            />
            <Button onClick={handleClick} variant="contained" type="submit" sx={{ mt: "190px", ml: "-350px" }}>
              Şifre Sıfırlama Linki Gönder
            </Button>
          </form>
        ) : (
          <p>Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.</p>
        )}
      </>
    </Card>
  );
}

export default ForgotPassword;