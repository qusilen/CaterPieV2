import React, { useState } from "react";
import "./CaterpiePrime.css"

function CaterpiePrime() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
    registeredCards: ["1234 5678 9101 1121"], // Sample card number
    registeredAddresses: [],
    shippingCostCalculation: "Ptt Kargo 29.90, Sürat Kargo/MNG Kargo 39.90, Aras Kargo 49.90, UPS Kargo 79.90",
    orderTracking: "Mevcut siparişiniz bulunmamaktadır.",
    wallet: "1520 ₺",
    coupons: ["Mevcut Kuponunuz Bulunmamaktadır."],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement submission logic (e.g., update user info in database)
    console.log("Submitted user info:", userInfo);
    // Simulate success message
    alert("Kullanıcı bilgileri başarıyla güncellendi!");
    // Reset form or update UI as needed
    // For demonstration purposes, resetting the form
    setUserInfo({
      username: "",
      fullName: "",
      email: "",
      password: "",
      registeredCards: ["1234 5678 9101 1121"],
      registeredAddresses: [],
      shippingCostCalculation: "Ptt Kargo 29.90, Sürat Kargo/MNG Kargo 39.90, Aras Kargo 49.90, UPS Kargo 79.90",
      orderTracking: "Mevcut siparişiniz bulunmamaktadır.",
      wallet: "1520 ₺",
      coupons: ["Mevcut Kuponunuz Bulunmamaktadır."],
    });
  };

  const addNewCard = () => {
    const newCard = prompt("Yeni Kart Numarasını Giriniz:");
    if (newCard) {
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        registeredCards: [...prevUserInfo.registeredCards, newCard],
      }));
    }
  };

  const addNewAddress = () => {
    const newAddress = prompt("Yeni Adresinizi Giriniz:");
    if (newAddress) {
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        registeredAddresses: [...prevUserInfo.registeredAddresses, newAddress],
      }));
    }
  };

  const removeCard = (index) => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      registeredCards: prevUserInfo.registeredCards.filter((_, i) => i !== index),
    }));
  };

  const removeAddress = (index) => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      registeredAddresses: prevUserInfo.registeredAddresses.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="caterpiePrime">
      <div className="caterpiePrime__header">
        <h2>Kullanıcı Bilgileri</h2>
      </div>
      <div className="caterpiePrime__content">
        <div className="caterpiePrime__field">
          <label className="caterpiePrime__label">Kullanıcı Adı:</label>
          <input
            className="caterpiePrime__input"
            type="text"
            name="username"
            value={userInfo.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="caterpiePrime__field">
          <label className="caterpiePrime__label">Kullanıcı Soy Adı:</label>
          <input
            className="caterpiePrime__input"
            type="text"
            name="fullName"
            value={userInfo.fullName}
            onChange={handleInputChange}
          />
        </div>
        <div className="caterpiePrime__field">
          <label className="caterpiePrime__label">E-mail:</label>
          <input
            className="caterpiePrime__input"
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="caterpiePrime__field">
          <label className="caterpiePrime__label">Şifre Değiştir:</label>
          <input
            className="caterpiePrime__input"
            type="password"
            name="password"
            value={userInfo.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="caterpiePrime__field">
          <label className="caterpiePrime__label">Kayıtlı Kartlar:</label>
          <ul className="caterpiePrime__list">
            {userInfo.registeredCards.map((card, index) => (
              <li key={index} className="caterpiePrime__listItem">
                {card}
                <button
                  className="caterpiePrime__button"
                  onClick={() => removeCard(index)}
                >
                  Sil
                </button>
              </li>
            ))}
          </ul>
          <button className="caterpiePrime__button" onClick={addNewCard}>
            Yeni Kart Ekle
          </button>
        </div>
        <div className="caterpiePrime__field">
          <label className="caterpiePrime__label">Kayıtlı Adresler:</label>
          <ul className="caterpiePrime__list">
            {userInfo.registeredAddresses.map((address, index) => (
              <li key={index} className="caterpiePrime__listItem">
                {address}
                <button
                  className="caterpiePrime__button"
                  onClick={() => removeAddress(index)}
                >
                  Sil
                </button>
              </li>
            ))}
          </ul>
          <button className="caterpiePrime__button" onClick={addNewAddress}>
            Yeni Adres Kaydet
          </button>
        </div>
        <div className="caterpiePrime__field">
          <label className="caterpiePrime__label">Kargo Ücreti Hesaplama:</label>
          <p className="caterpiePrime__text">{userInfo.shippingCostCalculation}</p>
        </div>
        <div className="caterpiePrime__field">
          <label className="caterpiePrime__label">Sipariş Takibi:</label>
          <p className="caterpiePrime__text">{userInfo.orderTracking}</p>
        </div>
        <div className="caterpiePrime__field">
          <label className="caterpiePrime__label">Cüzdan:</label>
          <p className="caterpiePrime__text">{userInfo.wallet}</p>
        </div>
        <div className="caterpiePrime__field">
          <label className="caterpiePrime__label">Kuponlar:</label>
          <p className="caterpiePrime__text">{userInfo.coupons.join(", ")}</p>
        </div>
      </div>
      <div className="caterpiePrime__buttons">
        <button className="caterpiePrime__button" onClick={handleSubmit}>
          Bilgileri Güncelle
        </button>
        {/* Add buttons for other actions like "Şifre Değiştir", "Hesabı Sil" */}
      </div>
    </div>
  );
}

export default CaterpiePrime;
