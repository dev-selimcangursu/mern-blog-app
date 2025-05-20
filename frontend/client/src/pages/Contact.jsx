import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGetAbout } from "../features/aboutSlice";
import "./Contact.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
function Contact() {
  const dispatch = useDispatch();
  const about = useSelector((state) => state.about.about);

  useEffect(() => {
    dispatch(fetchGetAbout());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="contact-container" id="contact">
        <h2 className="contact-title">İletişim</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>İletişim Bilgileri</h3>
            <p>
              <strong>Telefon:</strong> {about?.phone || "Yükleniyor..."}
            </p>
            <p>
              <strong>Email:</strong> {about?.email || "Yükleniyor..."}
            </p>
            <p>
              <strong>Biz Kimiz :</strong> {about?.about || "Yükleniyor..."}
            </p>

            <div className="contact-social">
              <h4>Bizi Takip Edin</h4>
              <div className="social-links">
                {about?.instagram && (
                  <a href={about.instagram} target="_blank" rel="noreferrer">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                      alt="Instagram"
                    />
                  </a>
                )}
                {about?.github && (
                  <a href={about.github} target="_blank" rel="noreferrer">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png"
                      alt="GitHub"
                    />
                  </a>
                )}
                {about?.linkedin && (
                  <a href={about.linkedin} target="_blank" rel="noreferrer">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                      alt="LinkedIn"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Bizimle İletişime Geçin</h3>
            <form>
              <input type="text" placeholder="Adınız Soyadınız" required />
              <input type="email" placeholder="Email adresiniz" required />
              <textarea placeholder="Mesajınız..." required></textarea>
              <button type="submit">Gönder</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
