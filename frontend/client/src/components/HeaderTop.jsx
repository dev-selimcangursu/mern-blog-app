import React from "react";
import "./HeaderTop.css";
import { FaLinkedin, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function HeaderTop() {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="header__top">
      <div className="header__top__main">
        <div className="header__top__left">
          <FaLinkedin />
          <FaInstagram />
          <FaYoutube />
          <FaGithub />
        </div>
        <div className="header__top__right">
          <a href="/contact">İletişim</a>
          <a href="/about">Biz Kimiz</a>
          <a href="/security">Gizlilik</a>
          <a href="/terms-of-use">Kullanım Şartları</a>
          {token ? (
            <>
              <a href="/account">Hesabım</a>
              <a
                href="#!"
                onClick={(e) => {
                  e.preventDefault();
                  handleLogout();
                }}
              >
                Çıkış Yap
              </a>
            </>
          ) : (
            <a href="/login">Giriş Yap / Kayıt Ol</a>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
