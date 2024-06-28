import React from 'react';
import './Footer.css'; // Footer stil dosyası
import { Link } from 'react-router-dom'; // React Router'dan Link import edin

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>About Us</h3>
        <p>Caterpie ailesi olarak müşterilerimize en iyi ürünleri sunmayı amaçlıyoruz.</p>
      </div>
      <div className="footer-section">
        <h3>Kampanyalar</h3>
        <p>Son kampanyalarımızı kaçırmayın! Hemen indirimlerden faydalanın.</p>
      </div>
      <div className="footer-section">
        <h3>Yardım</h3>
        <p>Sıkça Sorulan Sorular ve <Link to="/destek">destek almak için bize ulaşın</Link>.</p>
      </div>
    </footer>
  );
};

export default Footer;
