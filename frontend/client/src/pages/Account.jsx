import React, { useEffect, useState } from "react";
import "./Account.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { updateUserInfo } from "../api/authApi";

function Account() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  function updateNameInput(e) {
    setNewName(e.target.value);
  }
  function updateEmailInput(e) {
    setNewEmail(e.target.value);
  }
  function updatePasswordInput(e) {
    setNewPassword(e.target.value);
  }

  async function updateUserInfoFunc(e) {
    e.preventDefault();
    let response = await updateUserInfo({
      id: user.id,
      name: newName,
      email: newEmail,
      password: newPassword,
    });
    if (response.success) {
      console.log(response.message);

      if (response.user) {
        setUser(response.user);
        setNewName(response.user.name);
        setNewEmail(response.user.email);
        setNewPassword(""); // Şifre inputunu temizlemek için
      }
    }
  }

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
      setNewName(decoded.name);
      setNewEmail(decoded.email);
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
              src="https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?uid=R190373578&ga=GA1.1.750660428.1742764870&semt=ais_hybrid&w=740"
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
              <label>Kayıt Numarası</label>
              <input disabled type="text" value={user.id} />
            </div>
            <div className="form-group">
              <label>Ad Soyad</label>
              <input onChange={updateNameInput} type="text" value={newName} />
            </div>

            <div className="form-group">
              <label>E-Posta</label>
              <input
                onChange={updateEmailInput}
                type="email"
                value={newEmail}
              />
            </div>

            <div className="form-group">
              <label>Şifreyi Değiştir</label>
              <input
                onChange={updatePasswordInput}
                type="password"
                placeholder="Yeni şifre girin"
                value={newPassword}
              />
            </div>

            <button onClick={updateUserInfoFunc} className="update-button">
              Bilgileri Güncelle
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Account;
