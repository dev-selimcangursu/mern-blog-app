import React, { useEffect } from "react";
import "./NavLinks.css";
import { FaAngleRight, FaSearch } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchGetCategories,
  fetchGetSubCategories,
} from "../features/categoriesSlice";

function NavLinks() {
  const dispatch = useDispatch();
  const getCategories = useSelector((state) => state.categories.value);
  const getSubCategories = useSelector(
    (state) => state.categories.subcategories
  );

  useEffect(() => {
    dispatch(fetchGetCategories());
    dispatch(fetchGetSubCategories());
  }, [dispatch]);

  return (
    <div className="header__bottom__menus">
      <ul className="main-menu">
        {getCategories?.map((category) => (
          <li key={category._id}>
            <a href="#" className="menu__link">
              {category.category_name}
            </a>

            <div className="menu__link__main">
              <ul className="submenu">
                {getSubCategories
                  .filter((sub) => sub.parent_category_id === category._id)
                  .map((sub) => {
                    const childSubcategories = getSubCategories.filter(
                      (child) => child.parent_category_id === sub._id
                    );

                    return (
                      <li className="submenu__item" key={sub._id}>
                        <div className="submenu__link__wrapper">
                          <a href="#" className="submenu__link">
                            {sub.category_name}
                          </a>
                          {childSubcategories.length > 0 && <FaAngleRight />}
                        </div>

                        {/* Yalnızca alt alt kategori varsa göster */}
                        {childSubcategories.length > 0 && (
                          <div className="submenu__link__main">
                            <ul>
                              {childSubcategories.map((child) => (
                                <li key={child._id}>
                                  <a
                                    href={`/category/${child.category_name}`}
                                  >
                                    {child.category_name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </li>
        ))}

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
