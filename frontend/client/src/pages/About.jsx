import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./About.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGetAbout } from "../features/aboutSlice";

function About() {
  const dispatch = useDispatch();
  const about = useSelector((state) => state.about.about);

  useEffect(() => {
    dispatch(fetchGetAbout());
  }, [dispatch]);
  return (
    <>
      <Header />
      <main className="about__wrapper">
        <div className="about__left">
          <section className="about__intro">
            <h1>Biz Kimiz?</h1>
            <p>
              2005 yılından beri sektörümüzde lider konumda olan firmamız,
              yenilikçi çözümler ve müşteri odaklı hizmet anlayışıyla büyümeye
              devam ediyor. Amacımız, teknoloji ve deneyimi bir araya getirerek
              en kaliteli hizmeti sunmaktır.
            </p>
          </section>

          <section className="about__mission">
            <h2>Misyonumuz</h2>
            <p>
              Müşterilerimizin ihtiyaçlarına en uygun çözümleri sunarak, onların
              işlerini kolaylaştırmak ve sürdürülebilir başarı sağlamalarına
              katkıda bulunmak.
            </p>
          </section>

          <section className="about__vision">
            <h2>Vizyonumuz</h2>
            <p>
              Teknolojide öncü, güvenilir ve global ölçekte tanınan bir marka
              olmak, aynı zamanda sosyal sorumluluk projeleriyle topluma değer
              katmak.
            </p>
          </section>

          <section className="about__values">
            <h2>Değerlerimiz</h2>
            <ul>
              <li>
                <strong>Dürüstlük:</strong> Şeffaf ve açık iletişim her zaman
                önceliğimizdir.
              </li>
              <li>
                <strong>İnovasyon:</strong> Sürekli gelişim ve yenilikçiliği
                destekliyoruz.
              </li>
              <li>
                <strong>Müşteri Odaklılık:</strong> Her zaman müşterilerimizin
                memnuniyetini hedefliyoruz.
              </li>
              <li>
                <strong>Takım Ruhu:</strong> Başarıyı birlikte inşa ediyoruz.
              </li>
              <li>
                <strong>Sosyal Sorumluluk:</strong> Topluma ve çevreye karşı
                duyarlıyız.
              </li>
            </ul>
          </section>

          <section className="about__history">
            <h2>Kuruluş Hikayemiz</h2>
            <p>
              2005 yılında küçük bir girişim olarak başlayan yolculuğumuz,
              disiplinli çalışma ve yüksek kalite standartlarıyla bugün sektörün
              öncü şirketlerinden biri haline geldi. İlk günkü heyecanımızı
              koruyarak büyümeye devam ediyoruz.
            </p>
          </section>

          <section className="about__team">
            <h2>Ekibimiz</h2>
            <p>
              Alanında uzman profesyonellerden oluşan ekibimiz, her projede
              yüksek performans ve müşteri memnuniyeti için çalışır.
            </p>
            <ul>
              <li>Ahmet Yılmaz - CEO</li>
              <li>Ayşe Demir - CTO</li>
              <li>Mehmet Kaya - Pazarlama Müdürü</li>
              <li>Elif Şahin - Yazılım Geliştirici</li>
              <li>Deniz Aksoy - Proje Yöneticisi</li>
            </ul>
          </section>

          <section className="about__contact-info">
            <h2>İletişim Bilgileri</h2>
            <p>Daha fazla bilgi almak için bizimle iletişime geçebilirsiniz:</p>
            <address>
              <strong>Başlık:</strong> {about?.title}
              <br />
              <strong>Telefon:</strong> {about?.phone}
              <br />
              <strong>Email:</strong> {about?.email}
            </address>
          </section>
        </div>

        <div className="who__are__we__area">
          <img
            src="https://img.freepik.com/free-vector/flat-propose-day-illustration_23-2150078705.jpg?uid=R190373578&ga=GA1.1.750660428.1742764870&semt=ais_hybrid&w=740"
            alt="image"
          />
          <h1 className="who__are__we__area__title">Biz Kimiz</h1>
          <p>
            {about?.about ? about.about.slice(0, 350) + "..." : "Yükleniyor..."}
          </p>

          <div className="who__are__we__social__media">
            <h3 className="who__are__we__social__media__title">
              Bizi Takip Edin
            </h3>
            <div className="who__are__we__social__media__list">
              <a href={about.instagram}>
                <img
                  src="https://cdn-icons-png.freepik.com/256/2111/2111463.png?uid=R190373578&ga=GA1.1.750660428.1742764870&semt=ais_hybrid"
                  alt=""
                />
              </a>
              <a href={about.github}>
                <img
                  src="https://cdn-icons-png.freepik.com/256/3291/3291695.png?uid=R190373578&ga=GA1.1.750660428.1742764870&semt=ais_hybrid"
                  alt=""
                />
              </a>
              <a href={about.linkedin}>
                <img
                  src="https://cdn-icons-png.freepik.com/256/3536/3536505.png?uid=R190373578&ga=GA1.1.750660428.1742764870&semt=ais_hybrid"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </main>
      <br />
      <Footer />
    </>
  );
}

export default About;
