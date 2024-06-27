
import React from 'react';
import { useHistory } from 'react-router-dom';
import ProductReviewForm from './ProductReviewForm';

const PurchaseHistory = () => {
  const history = useHistory();

  const handleReview = () => {
    history.push('./ProductReviewForm'); // React Router'daki uygun rotayı belirtin
  };

  const handleBuyAgain = () => {
    alert('Ürün tekrar satın alınacak!');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Banner Image */}
      <img src="https://cdn.discordapp.com/attachments/1055562289547321437/1255662442416050176/Satin_Alma_Gecmisi.png?ex=667df247&is=667ca0c7&hm=bde49728680b0e203f6e75e1f5aa89756abf11fcf7decb9844af64ad094ffe40&" alt="Banner" style={{ width: '100%', marginBottom: '20px' }} />

      
      <hr style={{ width: '90%' }} />

      {/* Product 1 */}
      <div style={{ width: '80%', backgroundColor: 'rgb(240, 220, 206)', border: '1px solid #ddd', borderRadius: '4px', padding: '10px', margin: '20px 0', display: 'flex' }}>
        <div style={{ flex: '1', marginRight: '10px' }}>
          <img src="https://ktnimg2.mncdn.com/products/2024/04/04/2559211/3d6c1f29-f4ec-40a6-9e9d-649ae0995893_size870x1142.jpg" alt="Product" style={{ width: '50%', borderRadius: '4px' , marginLeft: '50px'}} />
        </div>
        <div style={{ flex: '2', textAlign: 'left' , marginTop: "115px"}}>
          <p style={{ fontWeight: 'bold' }}>Ürün: Koton Paçası Yırtık Straight Fit Kot Pantolon</p>
          <p style={{ fontWeight: 'bold' }}>Fiyat: 150₺</p>
          <button onClick={handleReview} style={{ backgroundColor: '#cd9042', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 16px', marginRight: '10px' }}>
            Ürünü Değerlendir
          </button>
          <button onClick={handleBuyAgain} style={{ backgroundColor: '#cd9042', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 16px' }}>
            Ürünü Tekrar Satın Al
          </button>
        </div>
      </div>

      {/* Product 2 */}
      <div style={{ width: '80%', backgroundColor: 'rgb(240, 220, 206)', border: '1px solid #ddd', borderRadius: '4px', padding: '10px', margin: '20px 0', display: 'flex' }}>
        <div style={{ flex: '1', marginRight: '10px' }}>
          <img src="https://ktnimg2.mncdn.com/products/2024/04/04/2559211/3d6c1f29-f4ec-40a6-9e9d-649ae0995893_size870x1142.jpg" alt="Product" style={{ width: '50%', borderRadius: '4px', marginLeft: '50px' }} />
        </div>
        <div style={{ flex: '2', textAlign: 'left' , marginTop: "115px"}}>
          <p style={{ fontWeight: 'bold' }}>Ürün: Example Product 2</p>
          <p style={{ fontWeight: 'bold' }}>Fiyat: 100₺</p>
          <button onClick={handleReview} style={{ backgroundColor: '#cd9042', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 16px', marginRight: '10px' }}>
            Ürünü Değerlendir
          </button>
          <button onClick={handleBuyAgain} style={{ backgroundColor: '#cd9042', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 16px' }}>
            Ürünü Tekrar Satın Al
          </button>
        </div>
      </div>

      {/* Product 3 */}
      <div style={{ width: '80%', backgroundColor: 'rgb(240, 220, 206)', border: '1px solid #ddd', borderRadius: '4px', padding: '10px', margin: '20px 0', display: 'flex' }}>
        <div style={{ flex: '1', marginRight: '10px' }}>
          <img src="https://ktnimg2.mncdn.com/products/2024/04/04/2559211/3d6c1f29-f4ec-40a6-9e9d-649ae0995893_size870x1142.jpg" alt="Product" style={{ width: '50%', borderRadius: '4px', marginLeft: '50px' }} />
        </div>
        <div style={{ flex: '2', textAlign: 'left' , marginTop: "115px"}}>
          <p style={{ fontWeight: 'bold' }}>Ürün: Example Product 3</p>
          <p style={{ fontWeight: 'bold' }}>Fiyat: 120₺</p>
          <button onClick={handleReview} style={{ backgroundColor: '#cd9042', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 16px', marginRight: '10px' }}>
            Ürünü Değerlendir
          </button>
          <button onClick={handleBuyAgain} style={{ backgroundColor: '#cd9042', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 16px' }}>
            Ürünü Tekrar Satın Al
          </button>
        </div>
      </div>

      {/* Product 4 */}
      <div style={{ width: '80%', backgroundColor: 'rgb(240, 220, 206)', border: '1px solid #ddd', borderRadius: '4px', padding: '10px', margin: '20px 0', display: 'flex' }}>
        <div style={{ flex: '1', marginRight: '10px' }}>
          <img src="https://ktnimg2.mncdn.com/products/2024/04/04/2559211/3d6c1f29-f4ec-40a6-9e9d-649ae0995893_size870x1142.jpg" alt="Product" style={{ width: '50%', borderRadius: '4px' , marginLeft: '50px'}} />
        </div>
        <div style={{ flex: '2', textAlign: 'left' , marginTop: "115px"}}>
          <p>Ürün: Example Product 4</p>
          <p>Fiyat: 130₺</p>
          <button onClick={handleReview} style={{ backgroundColor: '#cd9042', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 16px', marginRight: '10px' }}>
            Ürünü Değerlendir
          </button>
          <button onClick={handleBuyAgain} style={{ backgroundColor: '#cd9042', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 16px' }}>
            Ürünü Tekrar Satın Al
          </button>
        </div>
      </div>

    </div>
  );
};

export default PurchaseHistory;
