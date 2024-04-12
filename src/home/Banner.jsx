import React, { useState } from "react";
import productData from "../products.json";
import { Link } from "react-router-dom";
import SelectCategory from "../Components/SelectCategory";
import "../App.css"
const title = (
  <h2>
    Search Your One From <span>Thousand</span> of Products{" "}
  </h2>
);
const des = "We have largest collection of products";
const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];
const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData);

  const handelSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    const filtered = productData.filter((prod) =>
      prod.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="benner-content">
          {title}
          <form style={{display:"flex"  ,boxShadow: "0 5px 10px rgba($title-color, $alpha: .10)"
}}>
            <SelectCategory select={"all"}  />
            <input
              style={{ width: "calc(100% - 132px)",
                border: "none",
                padding: "10px",
                paddingLeft: "40px",
                borderRadius :"30px"
              }}
              type="text"
              name="search"
              id="search"
              placeholder="Search your product"
              value={searchInput}
              onChange={handelSearch}
            />
            <button type="submit" style={{borderRadius:"10px"}}>
              <i className="icofont-search" ></i>
            </button>
          </form>
          <p className="mt-3 ms-3">{des}</p>
          <ul className="lab-ul">
            {searchInput &&
              filteredProducts.map((product, i) => (
                <li key={i}>
                  <Link to={`/shop ${product.id}`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
