import React, { useState } from 'react';
import './SupportPage.css';

const SupportPage = () => {
  const [subject, setSubject] = useState('');
  const [summary, setSummary] = useState('');
  const [email, setEmail] = useState(''); // E-posta durumu ekleyin
  const [file, setFile] = useState(null);

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleSummaryChange = (e) => {
    setSummary(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form verilerini işleme veya gönderme işlemleri burada yapılabilir
    console.log('Gönderilen veriler:');
    console.log('Konu:', subject);
    console.log('Özet:', summary);
    console.log('E-posta:', email);
    if (file) {
      console.log('Dosya:', file);
    }

    // İşlem tamamlandıktan sonra form alanlarını sıfırlayabilirsiniz
    setSubject('');
    setSummary('');
    setEmail('');
    setFile(null);
  };

  return (
    <div className="support-page">
      <h1>Destek</h1>
      <p className="note">Eğer sitemize üye olduysanız lütfen giriş yaparak destek talebinde bulunun. Size daha hızlı dönüş sağlanacaktır.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">E-posta</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="E-posta adresinizi girin"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Konu</label>
          <select id="subject" value={subject} onChange={handleSubjectChange} required>
            <option value="">Konu Seçin</option>
            <option value="Siparişim hakkında bilgi almak istiyorum">Siparişim hakkında bilgi almak istiyorum</option>
            <option value="Siparişim eksik/yanlış geldi">Siparişim eksik/yanlış geldi</option>
            <option value="Site ile ilgili hata alıyorum">Site ile ilgili hata alıyorum</option>
            <option value="Kuponumu kullanamıyorum">Kuponumu kullanamıyorum</option>
            <option value="Bakiye Yüklemesi gerçekleştiremiyorum">Bakiye Yüklemesi gerçekleştiremiyorum</option>
            <option value="Diğer">Diğer</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="summary">Özet</label>
          <textarea
            id="summary"
            value={summary}
            onChange={handleSummaryChange}
            rows="4"
            placeholder="Sorununuzu veya sorununuzu kısaca açıklayın"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="file">Dosya Ekle (Opsiyonel)</label>
          <input id="file" type="file" onChange={handleFileChange} accept="image/*, video/*" />
        </div>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default SupportPage;
