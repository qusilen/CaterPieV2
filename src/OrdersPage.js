import React from 'react';
import { useHistory } from 'react-router-dom';
import ProductReviewForm from './ProductReviewForm';

const PurchaseHistory = () => {
  const history = useHistory();

  const handleReview = () => {
    history.push('./ProductReviewForm');
  };

  const handleBuyAgain = () => {
    alert('Ürün tekrar satın alınacak!');
  };

  const handleReturnOrExchange = () => {
    alert('Ürün iade veya değiştirme işlemi başlatılacak!');
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
          <p style={{ fontWeight: 'bold' }}>Fiyat: 849.90₺</p>
          <button onClick={handleReview} style={{ backgroundColor: '#cd9042', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 16px', marginRight: '10px' }}>
            Ürünü Değerlendir
          </button>
          <button onClick={handleBuyAgain} style={{ backgroundColor: '#cd9042', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 16px', marginRight: '10px' }}>
            Ürünü Tekrar Satın Al
          </button>
          <button onClick={handleReturnOrExchange} style={{ backgroundColor: '#cd9042', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 16px' }}>
            Ürünü İade et veya Değiştir
          </button>
        </div>
      </div>

      {/* Product 2 */}
      <div style={{ width: '80%', backgroundColor: 'rgb(240, 220, 206)', border: '1px solid #ddd', borderRadius: '4px', padding: '10px', margin: '20px 0', display: 'flex' }}>
        <div style={{ flex: '1', marginRight: '10px' }}>
          <img src="https://cdn.dsmcdn.com/ty1096/product/media/images/prod/SPM/PIM/20231218/12/c080da6a-8d9e-3a21-9cd1-41bf31cb6891/1_org_zoom.jpg" alt="Product" style={{ width: '50%', borderRadius: '4px', marginLeft: '50px' }} />
        </div>
        <div style={{ flex: '2', textAlign: 'left' , marginTop: "115px"}}>
          <p style={{ fontWeight: 'bold' }}>Ürün: Zara Erkek Beyaz Tişört</p>
          <p style={{ fontWeight: 'bold' }}>Fiyat: 549.90₺</p>
          <button onClick={handleReview} style={{ backgroundColor: '#cd9042', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 16px', marginRight: '10px' }}>
            Ürünü Değerlendir
          </button>
          <button onClick={handleBuyAgain} style={{ backgroundColor: '#cd9042', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 16px', marginRight: '10px' }}>
            Ürünü Tekrar Satın Al
          </button>
          <button onClick={handleReturnOrExchange} style={{ backgroundColor: '#cd9042', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 16px' }}>
            Ürünü İade et veya Değiştir
          </button>
        </div>
      </div>

      {/* Product 3 */}
      <div style={{ width: '80%', backgroundColor: 'rgb(240, 220, 206)', border: '1px solid #ddd', borderRadius: '4px', padding: '10px', margin: '20px 0', display: 'flex' }}>
        <div style={{ flex: '1', marginRight: '10px' }}>
          <img src="https://akn-barcin.a-cdn.akinoncloud.com/products/2022/09/23/640667/39a13440-4347-4c90-843e-615c58aa8135_size900x900_cropCenter.jpg" alt="Product" style={{ width: '50%', borderRadius: '4px', marginLeft: '50px' }} />
        </div>
        <div style={{ flex: '2', textAlign: 'left' , marginTop: "115px"}}>
          <p style={{ fontWeight: 'bold' }}>Nike Erkek Air Max 270 CO Spor Ayakkabı</p>
          <p style={{ fontWeight: 'bold' }}>Fiyat: 5549.90₺</p>
          <button onClick={handleReview} style={{ backgroundColor: '#cd9042', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 16px', marginRight: '10px' }}>
            Ürünü Değerlendir
          </button>
          <button onClick={handleBuyAgain} style={{ backgroundColor: '#cd9042', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 16px', marginRight: '10px' }}>
            Ürünü Tekrar Satın Al
          </button>
          <button onClick={handleReturnOrExchange} style={{ backgroundColor: '#cd9042', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 16px' }}>
            Ürünü İade et veya Değiştir
          </button>
        </div>
      </div>

      {/* Product 4 */}
      <div style={{ width: '80%', backgroundColor: 'rgb(240, 220, 206)', border: '1px solid #ddd', borderRadius: '4px', padding: '10px', margin: '20px 0', display: 'flex' }}>
        <div style={{ flex: '1', marginRight: '10px' }}>
          <img src="https://cdn.cimri.io/image/1200x1200/logitech-g-g733-siyah-kablosuz-7-1-surround-oyuncu-kulakligi_669220830.jpg" alt="Product" style={{ width: '50%', borderRadius: '4px' , marginLeft: '50px'}} />
        </div>
        <div style={{ flex: '2', textAlign: 'left' , marginTop: "115px"}}>
        Çok Satan Ürün!!
        <p style={{ fontWeight: 'bold' }}>Logitech G733 Oyuncu Kulaklığı Siyah</p>
        <p style={{ fontWeight: 'bold' }}>Fiyat: 4999.90₺</p>
          <button onClick={handleReview} style={{ backgroundColor: '#cd9042', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 16px', marginRight: '10px' }}>
            Ürünü Değerlendir
          </button>
          <button onClick={handleBuyAgain} style={{ backgroundColor: '#cd9042', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 16px', marginRight: '10px' }}>
            Ürünü Tekrar Satın Al
          </button>
          <button onClick={handleReturnOrExchange} style={{ backgroundColor: '#cd9042', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px  16px', marginRight: '10px' }}>
            Ürünü İade et veya Değiştir
          </button>
        </div>
      </div>

    </div>
  );
};

export default PurchaseHistory;

