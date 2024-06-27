import React, { useState } from 'react';

const ProductReviewForm = () => {
  const [puan, setPuan] = useState(0); // Puan
  const [yorum, setYorum] = useState(''); // Yorum
  const [foto, setFoto] = useState(null); // Fotoğraf

  const handleSubmit = (event) => {
    event.preventDefault();
    if (puan === 0 || yorum.trim() === '') {
      alert('Lütfen puanınızı ve yorumunuzu girin!');
      return;
    }
    // Form gönderimini burada işleyin, örneğin sunucuya veri gönderin veya durumu güncelleyin
    alert('İnceleme başarıyla gönderildi!');
    // Gerekirse form alanlarını sıfırlayın
    setPuan(0);
    setYorum('');
    setFoto(null);
  };

  const handleYorumDegisikligi = (event) => {
    setYorum(event.target.value);
  };

  const handleFotoDegisikligi = (event) => {
    const dosya = event.target.files[0];
    setFoto(dosya);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
      <div style={{ width: '90%', backgroundColor: 'rgb(240, 220, 206)', border: '1px solid #ddd', borderRadius: '4px', padding: '10px', margin: '20px 0', display: 'flex', marginLeft:"78px" }}>
        <div style={{ flex: '1', marginRight: '10px' }}>
          <img src="https://ktnimg2.mncdn.com/products/2024/04/04/2559211/3d6c1f29-f4ec-40a6-9e9d-649ae0995893_size870x1142.jpg" alt="Product" style={{ width: '50%', borderRadius: '4px' , marginLeft: '200px'}} />
        </div>
        <div style={{ flex: '2', textAlign: 'left', marginTop:"155px" }}>
          <p style={{ fontWeight: 'bold' }}>Ürün: Koton Paçası Yırtık Straight Fit Kot Pantolon</p>
          <p style={{ fontWeight: 'bold' }}>Fiyat: 150₺</p>
        </div>
      </div>
      {/* Review Form */}
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <label style={{ marginLeft: '100px' }}>Puan:</label>
          <div>
            <input
              type="number"
              min="0"
              max="5"
              step="0.5"
              value={puan}
              onChange={(event) => setPuan(Number(event.target.value))}
              required
            />
          </div>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <textarea
            id="yorum"
            placeholder="Yorumunuzu buraya yazın"
            rows="3" // Reduced from 4 rows
            style={{
                width: '90%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                height: '150px',
                marginLeft: "75px"
            }}
            value={yorum}
            onChange={handleYorumDegisikligi}
            required
          />
        </div>
        <div style={{ marginLeft: '100px', marginBottom: '20px' }}>
          <input
            accept="image/*"
            id="foto"
            type="file"
            onChange={handleFotoDegisikligi}
          />
        </div>
        <div style={{ textAlign: 'right', marginRight:"100px" }}>
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#e46904', color: '#fff', border: 'none', borderRadius: '4px' }}>
            Gönder
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductReviewForm;
