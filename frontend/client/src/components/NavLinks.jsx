import React from "react";
import "./NavLinks.css";
import { FaAngleRight, FaSearch } from "react-icons/fa";

function NavLinks() {
  return (
    <div className="header__bottom__menus">
      <ul className="main-menu">
        <li>
          <a href="#" className="menu__link">
            Türkiye
          </a>
          <div className="menu__link__main">
            <ul className="submenu">
              <li className="submenu__item">
                <div className="submenu__link__wrapper">
                  <a href="#" className="submenu__link">
                    Akdeniz Bölgesi
                  </a>
                  <FaAngleRight />
                </div>
                <div className="submenu__link__main">
                  <ul>
                    <li>
                      <a href="#">Fransa</a>
                    </li>
                    <li>
                      <a href="#">Almanya</a>
                    </li>
                    <li>
                      <a href="#">İtalya</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="submenu__item">
                <div className="submenu__link__wrapper">
                  <a href="#" className="submenu__link">
                    Anadolu Bölgesi
                  </a>
                  <FaAngleRight />
                </div>
                <div className="submenu__link__main">
                  <ul>
                    <li>
                      <a href="#">Fransa</a>
                    </li>
                    <li>
                      <a href="#">Almanya</a>
                    </li>
                    <li>
                      <a href="#">İtalya</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="submenu__item">
                <div className="submenu__link__wrapper">
                  <a href="#" className="submenu__link">
                    Ege Bölgesi
                  </a>
                  <FaAngleRight />
                </div>
                <div className="submenu__link__main">
                  <ul>
                    <li>
                      <a href="#">Fransa</a>
                    </li>
                    <li>
                      <a href="#">Almanya</a>
                    </li>
                    <li>
                      <a href="#">İtalya</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="submenu__item">
                <div className="submenu__link__wrapper">
                  <a href="#" className="submenu__link">
                    Karadeniz Bölgesi
                  </a>
                  <FaAngleRight />
                </div>
                <div className="submenu__link__main">
                  <ul>
                    <li>
                      <a href="#">Fransa</a>
                    </li>
                    <li>
                      <a href="#">Almanya</a>
                    </li>
                    <li>
                      <a href="#">İtalya</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="submenu__item">
                <div className="submenu__link__wrapper">
                  <a href="#" className="submenu__link">
                    Marmara Bölgesi
                  </a>
                  <FaAngleRight />
                </div>
                <div className="submenu__link__main">
                  <ul>
                    <li>
                      <a href="#">Fransa</a>
                    </li>
                    <li>
                      <a href="#">Almanya</a>
                    </li>
                    <li>
                      <a href="#">İtalya</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#" className="menu__link">
            Dünya
          </a>
          <div className="menu__link__main">
            <ul className="submenu">
              <li className="submenu__item">
                <div className="submenu__link__wrapper">
                  <a href="#" className="submenu__link">
                    Avrupa
                  </a>
                  <FaAngleRight />
                </div>
                <div className="submenu__link__main">
                  <ul>
                    <li>
                      <a href="#">Fransa</a>
                    </li>
                    <li>
                      <a href="#">Almanya</a>
                    </li>
                    <li>
                      <a href="#">İtalya</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="submenu__item">
                <div className="submenu__link__wrapper">
                  <a href="#" className="submenu__link">
                    Asya
                  </a>
                  <FaAngleRight />
                </div>
                <div className="submenu__link__main">
                  <ul>
                    <li>
                      <a href="#">Fransa</a>
                    </li>
                    <li>
                      <a href="#">Almanya</a>
                    </li>
                    <li>
                      <a href="#">İtalya</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="submenu__item">
                <div className="submenu__link__wrapper">
                  <a href="#" className="submenu__link">
                    Amerika
                  </a>
                  <FaAngleRight />
                </div>
                <div className="submenu__link__main">
                  <ul>
                    <li>
                      <a href="#">Fransa</a>
                    </li>
                    <li>
                      <a href="#">Almanya</a>
                    </li>
                    <li>
                      <a href="#">İtalya</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#" className="menu__link">
            Seyahat Rehberi
          </a>
          <div className="menu__link__main">
            <ul>
              <li>
                <a href="">Kiralık Evler</a>
              </li>
              <li>
                <a href="">Pasaport</a>
              </li>
              <li>
                <a href="">Vize İşlemleri</a>
              </li>
              <li>
                <a href="">Ulaşım</a>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <a href="#" className="menu__link">
            Aktif Yaşam
          </a>
          <div className="menu__link__main">
            <ul>
              <li>
                <a href="">Kiralık Evler</a>
              </li>
              <li>
                <a href="">Pasaport</a>
              </li>
              <li>
                <a href="">Vize İşlemleri</a>
              </li>
              <li>
                <a href="">Ulaşım</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#" className="menu__link">
            Mağaza
          </a>
        </li>
        <li>
          <a href="#" className="menu__link">
            <FaSearch />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
