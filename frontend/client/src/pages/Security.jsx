import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { fetchGetAbout } from "../features/aboutSlice";
import "./Security.css";

function Security() {
  const dispatch = useDispatch();
  const about = useSelector((state) => state.about.about);

  useEffect(() => {
    dispatch(fetchGetAbout());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className="security-page">
        <div className="privacy-content">
          <section className="privacy-section">
            <h1 className="privacy-title">Gizlilik Politikası</h1>
            <p>
              Bu gizlilik politikası, web sitemizi ziyaret eden kullanıcıların
              kişisel bilgilerinin toplanması, kullanılması ve korunmasına
              ilişkin esasları içermektedir. Amacımız, kullanıcılarımıza güvenli
              bir deneyim sunmak ve bilgilerini yasal çerçevede en iyi şekilde
              korumaktır.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="section-title">Kayıt Dosyaları</h2>
            <p>
              Web sitemiz, birçok standart web sunucusunda olduğu gibi günlük
              (log) dosyalarını kullanmaktadır. Bu dosyalar; IP adresleri,
              tarayıcı türü, internet servis sağlayıcısı (ISP), tarih/zaman
              damgası, yönlendiren/çıkış sayfaları ve tıklama sayısı gibi
              bilgileri içerebilir. Bu veriler hiçbir şekilde kişisel
              kimliğinizi ortaya koymaz, yalnızca eğilimleri analiz etmek,
              siteyi yönetmek ve kullanıcı hareketlerini takip etmek için
              kullanılır.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="section-title">Reklamlar</h2>
            <p>
              Sitemizde üçüncü parti reklam şirketlerinden reklamlar
              gösterilebilir. Bu şirketler, ilginizi çekebilecek reklamlar
              gösterebilmek için çerezleri ve benzeri teknolojileri
              kullanabilir. Bu süreçte sizin adınıza kişisel bilgiler (isim,
              e-posta vb.) toplanmaz, ancak ziyaret ettiğiniz sitelere dayalı
              olarak anonim verilerle hedefleme yapılabilir.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="section-title">Çerezler (Cookies)</h2>
            <p>
              Web sitemiz, kullanıcı deneyimini geliştirmek amacıyla çerezler
              kullanmaktadır. Çerezler, tarayıcınıza yerleştirilen küçük metin
              dosyalarıdır ve siteye tekrar giriş yaptığınızda sizi tanımamıza
              yardımcı olur. Dilerseniz tarayıcı ayarlarınızdan çerezleri devre
              dışı bırakabilir veya önceden kaydedilmiş çerezleri
              silebilirsiniz.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="section-title">Dış Bağlantılar</h2>
            <p>
              Web sitemiz üzerinden üçüncü taraf sitelere bağlantılar
              verilebilir. Bu bağlantıların yönlendirdiği sitelerin gizlilik
              politikaları ve içeriklerinden sitemiz sorumlu değildir. Bu tür
              sitelere yönlendirilmeden önce gizlilik politikalarını dikkatlice
              incelemeniz önerilir.
            </p>
          </section>
        </div>

        <aside className="about-sidebar">
          <img
            src="https://img.freepik.com/free-vector/flat-propose-day-illustration_23-2150078705.jpg"
            alt="Biz Kimiz"
            className="sidebar-image"
          />
          <h1 className="sidebar-title">Biz Kimiz</h1>
          <p>
            {about?.about ? about.about.slice(0, 350) + "..." : "Yükleniyor..."}
          </p>

          <div className="social-media">
            <h3 className="social-title">Bizi Takip Edin</h3>
            <div className="social-icons">
              <a href={about.instagram}>
                <img
                  src="https://cdn-icons-png.freepik.com/256/2111/2111463.png"
                  alt="Instagram"
                />
              </a>
              <a href={about.github}>
                <img
                  src="https://cdn-icons-png.freepik.com/256/3291/3291695.png"
                  alt="Github"
                />
              </a>
              <a href={about.linkedin}>
                <img
                  src="https://cdn-icons-png.freepik.com/256/3536/3536505.png"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
        </aside>
      </main>
      <Footer />
    </>
  );
}

export default Security;
