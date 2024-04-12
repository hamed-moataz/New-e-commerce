import React, { useState } from "react";
import PageHeader from "../Components/PageHeader";
import data from "../products.json";
import ProductCards from "./ProductCards";
import Pagination from "./Pagination";
import Search from "./Search";
import ShopCategory from "./ShopCategory";

const showResults = "Showing 01 - 12 of 139 Results";

const Shop = () => {
  const [gridList, setGridList] = useState(true);
  const [products, setProducts] = useState(data);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFristProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFristProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [selectedCategory, setSelectedCategory] = useState("All");
  const menuItems = [...new Set(data.map((val) => val.category))];


  const filterItem = (curcat) => {
    const newItem = data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setSelectedCategory(curcat);
    setProducts(newItem);
  };
  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop" />

      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="shop-title d-flex flex-warp justify-content-between">
                  <p>{showResults}</p>
                  <div
                    className={`product-view-mode ${
                      gridList ? "gridActive" : "listActive"
                    } `}
                  >
                    <a className="grid" onClick={() => setGridList(!gridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridList(!gridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>

                <div>
                  <ProductCards
                    gridList={gridList}
                    products={currentProducts}
                  />
                </div>

                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} gridList={gridList} />
                <ShopCategory
                  filterItem={filterItem}
                  setItem={setProducts}
                  menuItems={menuItems}
                  setProducts={setProducts}
                  selectedCategory={selectedCategory}
                />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
