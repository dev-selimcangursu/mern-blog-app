import React, { useEffect, useState } from "react";
import "./Account.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const parseJwt = (token) => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
      return JSON.parse(jsonPayload);
    } catch (e) {
      return null;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const decoded = parseJwt(token);
    if (!decoded) {
      console.error("Token çözümlenemedi");
      navigate("/login");
    } else {
      setUser(decoded);
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <>
      <Header />
      <div className="account-container">
        <div className="account-card">
          <h2 className="account-title">Hesabım</h2>

          <div className="account-profile">
            <img
              src="https://via.placeholder.com/100"
              alt="Profil Fotoğrafı"
              className="profile-image"
            />
            <div>
              <h3 className="profile-name">{user.name}</h3>
              <p className="profile-email">{user.email}</p>
            </div>
          </div>

          <div className="account-form">
            <div className="form-group">
              <label>Ad Soyad</label>
              <input type="text" value={user.name} readOnly />
            </div>

            <div className="form-group">
              <label>E-Posta</label>
              <input type="email" value={user.email} readOnly />
            </div>

            <div className="form-group">
              <label>Şifreyi Değiştir</label>
              <input type="password" placeholder="Yeni şifre girin" />
            </div>

            <button className="update-button">Bilgileri Güncelle</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Account;
