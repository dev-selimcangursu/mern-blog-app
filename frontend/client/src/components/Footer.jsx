import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer id="site-footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3 className="footer-title">© 2025 | Selimcan Gürsu</h3>
          <p className="footer-description">
            Bu web sitesinde yer alan tüm içerikler; 5846 Sayılı Fikir ve Sanat
            Eserleri Kanunu ile DMCA kapsamında yasal koruma altındadır. Sitede
            yayınlanan yazı, fotoğraf, video ve benzeri materyaller, kullanım
            şartlarında belirtilen hükümler doğrultusunda sadece izin alınarak
            kullanılabilir. İzinsiz kopyalanması, alıntılanması ya da başka
            platformlarda paylaşılması yasaktır.
          </p>
        </div>
        <div className="footer-right">
          <h5 className="developer-title">
            Selimcan Gürsu | Full Stack Web Developer
          </h5>
          <ul className="footer-links">
            <li>
              <a href="#">Kullanım Şartları</a>
            </li>
            <li>
              <a href="#">Gizlilik</a>
            </li>
            <li>
              <a href="#">Biz Kimiz</a>
            </li>
            <li>
              <a href="#">İletişim</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
