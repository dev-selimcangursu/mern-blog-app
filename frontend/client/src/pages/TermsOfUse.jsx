import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { fetchGetAbout } from "../features/aboutSlice";
import "./TermsOfUse.css";

function TermsOfUse() {
  const dispatch = useDispatch();
  const about = useSelector((state) => state.about.about);

  useEffect(() => {
    dispatch(fetchGetAbout());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className="terms-page">
        <div className="terms-content">
          <section className="terms-section">
            <h1 className="terms-title">Site Kullanım Şartları</h1>
            <p>
              Bu internet sitesini kullanarak, aşağıda belirtilen kullanım şartlarını kabul etmiş sayılırsınız. 
              Lütfen bu şartları dikkatlice okuyunuz. Siteyi kullanmaya devam etmeniz halinde bu şartları peşinen 
              kabul etmiş sayılırsınız. Web sitemiz tüm ziyaretçilere açık olup, içeriklerden yararlanmanız 
              tamamen sizin sorumluluğunuz altındadır.
            </p>
            <p>
              Kullanıcılar, sitedeki içeriklerin doğruluğu, güncelliği ve eksiksizliği konusunda nihai kontrolleri
              yapmakla yükümlüdür. Site yönetimi, herhangi bir zamanda içeriği değiştirme veya kaldırma hakkını 
              saklı tutar. Kullanıcılar, site üzerinden gerçekleştirecekleri her türlü işlem ve paylaşımda 
              yürürlükteki yasal düzenlemelere ve etik kurallara uymakla yükümlüdür.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="section-heading">Telif Hakları</h2>
            <p>
              Bu web sitesinde yer alan tüm içerikler (metin, görsel, grafik, video, logo, tasarım ve yazılım dahil), 
              aksi belirtilmediği sürece tarafımıza aittir ve telif hakları kapsamında korunmaktadır. Söz konusu 
              içeriklerin izinsiz olarak kopyalanması, dağıtılması, çoğaltılması veya ticari amaçla kullanılması 
              kesinlikle yasaktır.
            </p>
            <p>
              Sitenin içeriğini kullanmak isteyen kişiler, yazılı izin almakla yükümlüdür. Telif haklarına aykırı 
              hareket eden kullanıcılar hakkında yasal işlem başlatılabilir.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="section-heading">Gizlilik Politikası</h2>
            <p>
              Kullanıcı gizliliği bizim için önemlidir. Bu web sitesi, kullanıcı deneyimini geliştirmek amacıyla 
              çerezler (cookies) ve benzeri teknolojiler kullanmaktadır. Siteyi ziyaret ettiğinizde, IP adresiniz, 
              tarayıcı türünüz, erişim saatleriniz ve yönlendiren sayfalar gibi bilgiler otomatik olarak 
              toplanabilir. Bu veriler, yalnızca analiz yapmak ve hizmet kalitesini artırmak amacıyla kullanılmaktadır.
            </p>
            <p>
              Kişisel verileriniz, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında korunmaktadır. 
              Verileriniz, yalnızca yasal zorunluluklar çerçevesinde ve onayınız doğrultusunda paylaşılır.
            </p>
          </section>
        </div>

        <aside className="about-box">
          <img
            src="https://img.freepik.com/free-vector/flat-propose-day-illustration_23-2150078705.jpg"
            alt="Biz Kimiz"
            className="about-image"
          />
          <h1 className="about-title">Biz Kimiz</h1>
          <p>
            {about?.about ? about.about.slice(0, 350) + "..." : "Yükleniyor..."}
          </p>

          <div className="social-section">
            <h3 className="social-heading">Bizi Takip Edin</h3>
            <div className="social-icons">
              <a href={about.instagram} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn-icons-png.freepik.com/256/2111/2111463.png"
                  alt="Instagram"
                />
              </a>
              <a href={about.github} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn-icons-png.freepik.com/256/3291/3291695.png"
                  alt="Github"
                />
              </a>
              <a href={about.linkedin} target="_blank" rel="noopener noreferrer">
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

export default TermsOfUse;
