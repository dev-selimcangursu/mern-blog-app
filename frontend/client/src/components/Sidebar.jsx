import React, { useState } from "react";
import "./Sidebar.css";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

function Sidebar({ status, closeSidebar }) {
  const [openMenus, setOpenMenus] = useState({});

  const toggleSubMenu = (menuName) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const menuItems = [
    {
      name: "Anasayfa",
      link: "#",
    },
    {
      name: "Türkiye",
      children: [
        "Akdeniz Bölgesi",
        "Anadolu Bölgesi",
        "Ege Bölgesi",
        "Karadeniz Bölgesi",
        "Marmara Bölgesi",
      ],
    },
    {
      name: "Dünya",
      children: ["Avrupa", "Asya", "Afrika", "Amerika", "Okyanusya"],
    },
    {
      name: "Seyehat Rehberi",
      children: [
        "Akdeniz Bölgesi",
        "Anadolu Bölgesi",
        "Ege Bölgesi",
        "Karadeniz Bölgesi",
        "Marmara Bölgesi",
      ],
    },
    {
      name: "Aktif Yaşam",
      children: ["Sağlık", "Spor", "Beslenme", "Psikoloji", "Motivasyon"],
    },
    {
      name: "Mağaza",
      link: "#",
    },
  ];

  return (
    <div className={`mobile_sidebar ${status ? "open" : ""}`}>
      <div className="sidebar_header">
        <button className="close_btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>

      <ul className="sidebar_menu">
        {menuItems.map((item, idx) => (
          <li key={idx}>
            <div
              className="sidebar_menu_item"
              onClick={() => item.children && toggleSubMenu(item.name)}
            >
              <a href={item.link || "#"}>{item.name}</a>
              {item.children &&
                (openMenus[item.name] ? <FaChevronUp /> : <FaChevronDown />)}
            </div>

            {item.children && openMenus[item.name] && (
              <ul className="sidebar_submenu">
                {item.children.map((sub, subIdx) => (
                  <li key={subIdx}>
                    <a href="#">{sub}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
