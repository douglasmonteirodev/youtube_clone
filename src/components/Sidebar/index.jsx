import React from "react";

import { categories } from "../../utils/constants";
import "./sidebar.css";

const selectedCategory = "New";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {categories.map((category) => (
        <button
          className='sidebar__category-btn'
          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: "#fff",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "#fff" : "#f00",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
