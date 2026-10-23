import React, { use, useEffect, useId, useMemo } from "react";

import { useState } from "react";
import { set } from "react-hook-form";

const FilterPage = () => {
  const PRODUCTS = [
    {
      id: 1,
      name: "Keyboard",
      category: "Electronics",
      price: 1500,
      rating: 4.5,
      inStock: true,
    },
    {
      id: 2,
      name: "Mouse",
      category: "Electronics",
      price: 800,
      rating: 4.2,
      inStock: true,
    },
    {
      id: 3,
      name: "Headphones",
      category: "Electronics",
      price: 1500,
      rating: 4.8,
      inStock: false,
    },
    {
      id: 4,
      name: "T-shirt",
      category: "Clothing",
      price: 600,
      rating: 4.1,
      inStock: true,
    },
    {
      id: 5,
      name: "Jeans",
      category: "Clothing",
      price: 1800,
      rating: 4.6,
      inStock: true,
    },
    {
      id: 6,
      name: "Jacket",
      category: "Clothing",
      price: 3000,
      rating: 4.7,
      inStock: false,
    },
    {
      id: 7,
      name: "JavaScript Book",
      category: "Books",
      price: 900,
      rating: 4.9,
      inStock: true,
    },
    {
      id: 8,
      name: "React Book",
      category: "Books",
      price: 1200,
      rating: 4.8,
      inStock: true,
    },
    {
      id: 9,
      name: "Notebook",
      category: "Books",
      price: 200,
      rating: 4.0,
      inStock: false,
    },
    {
      id: 10,
      name: "Speaker",
      category: "Electronics",
      price: 2500,
      rating: 4.6,
      inStock: true,
    },
    {
      id: 11,
      name: "Monitor",
      category: "Electronics",
      price: 12000,
      rating: 4.6,
      inStock: true,
    },
    {
      id: 12,
      name: "Webcam",
      category: "Electronics",
      price: 2200,
      rating: 4.2,
      inStock: false,
    },
    {
      id: 13,
      name: "USB Hub",
      category: "Electronics",
      price: 700,
      rating: 4.0,
      inStock: true,
    },
    {
      id: 14,
      name: "Laptop Stand",
      category: "Electronics",
      price: 1100,
      rating: 4.4,
      inStock: true,
    },
    {
      id: 15,
      name: "Microphone",
      category: "Electronics",
      price: 3500,
      rating: 4.7,
      inStock: false,
    },
    {
      id: 16,
      name: "Power Bank",
      category: "Electronics",
      price: 1600,
      rating: 4.3,
      inStock: true,
    },
    {
      id: 17,
      name: "Smartwatch",
      category: "Electronics",
      price: 4500,
      rating: 4.5,
      inStock: true,
    },
    {
      id: 18,
      name: "Tablet",
      category: "Electronics",
      price: 18000,
      rating: 4.8,
      inStock: false,
    },
    {
      id: 19,
      name: "Charger",
      category: "Electronics",
      price: 900,
      rating: 4.1,
      inStock: true,
    },
    {
      id: 20,
      name: "Earbuds",
      category: "Electronics",
      price: 2500,
      rating: 4.6,
      inStock: true,
    },
    {
      id: 21,
      name: "External SSD",
      category: "Electronics",
      price: 6000,
      rating: 4.9,
      inStock: true,
    },
    {
      id: 22,
      name: "Router",
      category: "Electronics",
      price: 2800,
      rating: 4.3,
      inStock: false,
    },
    {
      id: 23,
      name: "Printer",
      category: "Electronics",
      price: 8500,
      rating: 4.2,
      inStock: true,
    },
    {
      id: 24,
      name: "Game Controller",
      category: "Electronics",
      price: 3200,
      rating: 4.5,
      inStock: true,
    },
    {
      id: 25,
      name: "Desk Lamp",
      category: "Electronics",
      price: 1300,
      rating: 4.4,
      inStock: false,
    },
    {
      id: 26,
      name: "HDMI Cable",
      category: "Electronics",
      price: 350,
      rating: 3.9,
      inStock: true,
    },

    {
      id: 27,
      name: "Hoodie",
      category: "Clothing",
      price: 1600,
      rating: 4.5,
      inStock: true,
    },
    {
      id: 28,
      name: "Sweater",
      category: "Clothing",
      price: 1400,
      rating: 4.3,
      inStock: false,
    },
    {
      id: 29,
      name: "Formal Shirt",
      category: "Clothing",
      price: 1200,
      rating: 4.4,
      inStock: true,
    },
    {
      id: 30,
      name: "Casual Shirt",
      category: "Clothing",
      price: 950,
      rating: 4.1,
      inStock: true,
    },
    {
      id: 31,
      name: "Shorts",
      category: "Clothing",
      price: 550,
      rating: 4.0,
      inStock: false,
    },
    {
      id: 32,
      name: "Joggers",
      category: "Clothing",
      price: 1100,
      rating: 4.6,
      inStock: true,
    },
    {
      id: 33,
      name: "Track Pants",
      category: "Clothing",
      price: 850,
      rating: 4.2,
      inStock: true,
    },
    {
      id: 34,
      name: "Polo T-shirt",
      category: "Clothing",
      price: 750,
      rating: 4.3,
      inStock: false,
    },
    {
      id: 35,
      name: "Denim Jacket",
      category: "Clothing",
      price: 2400,
      rating: 4.7,
      inStock: true,
    },
    {
      id: 36,
      name: "Raincoat",
      category: "Clothing",
      price: 1300,
      rating: 4.1,
      inStock: true,
    },
    {
      id: 37,
      name: "Winter Coat",
      category: "Clothing",
      price: 4500,
      rating: 4.8,
      inStock: false,
    },
    {
      id: 38,
      name: "Kurta",
      category: "Clothing",
      price: 1700,
      rating: 4.5,
      inStock: true,
    },
    {
      id: 39,
      name: "Dress",
      category: "Clothing",
      price: 2200,
      rating: 4.6,
      inStock: true,
    },
    {
      id: 40,
      name: "Skirt",
      category: "Clothing",
      price: 900,
      rating: 4.2,
      inStock: false,
    },
    {
      id: 41,
      name: "Scarf",
      category: "Clothing",
      price: 350,
      rating: 4.0,
      inStock: true,
    },
    {
      id: 42,
      name: "Socks",
      category: "Clothing",
      price: 150,
      rating: 3.8,
      inStock: true,
    },
    {
      id: 43,
      name: "Gloves",
      category: "Clothing",
      price: 400,
      rating: 4.1,
      inStock: false,
    },

    {
      id: 44,
      name: "TypeScript Book",
      category: "Books",
      price: 1100,
      rating: 4.7,
      inStock: true,
    },
    {
      id: 45,
      name: "CSS Handbook",
      category: "Books",
      price: 650,
      rating: 4.4,
      inStock: true,
    },
    {
      id: 46,
      name: "HTML Guide",
      category: "Books",
      price: 450,
      rating: 4.1,
      inStock: false,
    },
    {
      id: 47,
      name: "Node.js Book",
      category: "Books",
      price: 1250,
      rating: 4.6,
      inStock: true,
    },
    {
      id: 48,
      name: "System Design Book",
      category: "Books",
      price: 1600,
      rating: 4.9,
      inStock: true,
    },
    {
      id: 49,
      name: "Algorithms Book",
      category: "Books",
      price: 1450,
      rating: 4.8,
      inStock: false,
    },
    {
      id: 50,
      name: "Data Structures Book",
      category: "Books",
      price: 1300,
      rating: 4.7,
      inStock: true,
    },
    {
      id: 51,
      name: "Python Book",
      category: "Books",
      price: 950,
      rating: 4.5,
      inStock: true,
    },
    {
      id: 52,
      name: "Clean Code Guide",
      category: "Books",
      price: 1200,
      rating: 4.6,
      inStock: false,
    },
    {
      id: 53,
      name: "Design Patterns Book",
      category: "Books",
      price: 1500,
      rating: 4.8,
      inStock: true,
    },
    {
      id: 54,
      name: "Web Accessibility Guide",
      category: "Books",
      price: 850,
      rating: 4.5,
      inStock: true,
    },
    {
      id: 55,
      name: "Frontend Interview Guide",
      category: "Books",
      price: 1000,
      rating: 4.7,
      inStock: false,
    },
    {
      id: 56,
      name: "Next.js Handbook",
      category: "Books",
      price: 1150,
      rating: 4.6,
      inStock: true,
    },
    {
      id: 57,
      name: "Testing Handbook",
      category: "Books",
      price: 900,
      rating: 4.3,
      inStock: true,
    },
    {
      id: 58,
      name: "Git Pocket Guide",
      category: "Books",
      price: 300,
      rating: 4.2,
      inStock: false,
    },
    {
      id: 59,
      name: "Browser Internals Book",
      category: "Books",
      price: 1800,
      rating: 4.9,
      inStock: true,
    },
    {
      id: 60,
      name: "Web Performance Guide",
      category: "Books",
      price: 1400,
      rating: 4.8,
      inStock: true,
    },
  ];
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");
  const [lowPrice, setLowPrice] = useState("");
  const [highPrice, setHighPrice] = useState("");
  const [priceError, setPriceError] = useState("");
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [checkedInstock, setcheckedInstock] = useState(false);
  const [appliedPrice, setAppliedPrice] = useState({
    min: "",
    max: "",
  });
  const [search, setSearch] = useState("");
  const PER_PAGE_SIZE = 5;

  const startIndex = (page - 1) * PER_PAGE_SIZE;
  function applyFilter() {
    console.log("called-1");
    if (
      lowPrice !== "" &&
      highPrice !== "" &&
      Number(lowPrice) > Number(highPrice)
    ) {
      setPriceError("Minimum price cannot exceed maximum price.");
      return;
    }

    setPriceError("");
    setAppliedPrice({
      min: lowPrice,
      max: highPrice,
    });
  }
 
  const filterByLowAndHighPrice = [...PRODUCTS]
    .filter((item) => {
      console.log("called-2");
      const matchesMin =
        appliedPrice.min === "" || item.price >= appliedPrice.min;
      const maxMatches =
        appliedPrice.max === "" || item.price <= appliedPrice.max;
      const catogorty =
        categoryFilter.length === 0 ||
        categoryFilter.includes(item.category.toLowerCase());
      const matchesStock = !checkedInstock || item.inStock;
      const searchMatches = item.name
        .toLowerCase()
        .includes(search.trim().toLowerCase());
       
        

      return (
        matchesMin && maxMatches && catogorty && matchesStock && searchMatches
      );
    })
    .sort((a, b) => {
      if (sort.toLocaleUpperCase() === "price-asc".toLocaleUpperCase()) {
        return a.price - b.price;
      }

      if (sort.toLocaleUpperCase() === "price-desc".toLocaleUpperCase()) {
        return b.price - a.price;
      }

      if (sort.toLocaleUpperCase() === "rating-desc".toLocaleUpperCase()) {
        return b.rating - a.rating;
      }

      if (sort.toLocaleUpperCase() === "name-asc".toLocaleUpperCase()) {
        return a.name - b.name;
      }
      return 0;
    });

  console.log("data", filterByLowAndHighPrice, page);

  const totalPage = Math.ceil(filterByLowAndHighPrice.length / PER_PAGE_SIZE);
  const pageinationData = filterByLowAndHighPrice.slice(
    startIndex,
    startIndex + PER_PAGE_SIZE
  );

  function useDebounce(val, delay) {
    const [debouncedValue, setDebouncedValue] = useState(val);
    useEffect(() => {
      let timer = setTimeout(() => {
        setDebouncedValue(val);
      }, delay);
      return () => clearTimeout(timer);
    }, [val, delay]);
    return debouncedValue;
  }
  const debouncedSearch = useDebounce(search, 500);
  useEffect(() => {
    setPage(1);
  }, [
    search,
    sort,
    appliedPrice.min,
    appliedPrice.max,
    categoryFilter,
    checkedInstock,
  ]);

  return (
    <div className="product-explorer">
      <header className="header">
        <div className="header-content">
          <h1>Product Explorer</h1>
          <p>Find your next favorite.</p>
        </div>

        <div className="search-control" role="search">
          <label htmlFor="product-search">Search products</label>
          <input
            type="search"
            id="product-search"
            name="search"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <p>Typing: {search}</p>
          <div>Debounced val {debouncedSearch}</div>
        </div>

        <div className="sort-control">
          <label htmlFor="sort">Sort by</label>
          <select
            id="sort"
            name="sort"
            defaultValue="price-asc"
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating-desc">Rating: High to Low</option>
            <option value="name-asc">Name: A–Z</option>
          </select>
        </div>
      </header>

      <main className="main-container">
        <aside className="filter-sidebar" aria-labelledby="filters-heading">
          <h2 id="filters-heading">Filters</h2>

          <fieldset className="category-filter">
            <legend>Categories</legend>

            <div className="filter-option">
              <input
                type="checkbox"
                id="electronics"
                name="category"
                value="electronics"
                checked={categoryFilter?.includes("electronics")}
                onChange={(e) => {
                  const { value, checked } = e.target;

                  setCategoryFilter((prev) =>
                    checked
                      ? [...prev, value]
                      : prev.filter((cat) => cat != value)
                  );
                }}
              />
              <label htmlFor="electronics">Electronics</label>
            </div>

            <div className="filter-option">
              <input
                type="checkbox"
                id="clothing"
                name="category"
                value="clothing"
                checked={categoryFilter?.includes("clothing")}
                onChange={(e) => {
                  const { value, checked } = e.target;

                  setCategoryFilter((prev) =>
                    checked
                      ? [...prev, value]
                      : prev?.filter((cat) => cat !== value)
                  );
                }}
              />
              <label htmlFor="clothing">Clothing</label>
            </div>

            <div className="filter-option">
              <input
                type="checkbox"
                id="books"
                name="category"
                value="books"
                checked={categoryFilter?.includes("books")}
                onChange={(e) => {
                  const { value, checked } = e.target;
                  setCategoryFilter((prev) =>
                    checked
                      ? [...prev, value]
                      : prev.filter((cat) => cat !== value)
                  );
                }}
              />
              <label htmlFor="books">Books</label>
            </div>
          </fieldset>

          <fieldset className="price-filter">
            <legend>Price Range</legend>

            <div className="price-input">
              <label htmlFor="min-price">Minimum price (₹)</label>
              <input
                type="number"
                id="min-price"
                name="minPrice"
                min="0"
                defaultValue={0}
                value={lowPrice}
                onChange={(e) => setLowPrice(e.target.value)}
              />
            </div>

            <div className="price-input">
              <label htmlFor="max-price">Maximum price (₹)</label>
              <input
                type="number"
                id="max-price"
                name="maxPrice"
                min="0"
                value={highPrice}
                defaultValue="100000"
                onChange={(e) => setHighPrice(e.target.value)}
              />
            </div>
          </fieldset>

          <div className="stock-filter">
            <input
              type="checkbox"
              id="in-stock"
              name="inStock"
              checked={checkedInstock}
              aria-describedby="stock-description"
              onChange={(e) => setcheckedInstock(e.target.checked)}
            />
            <label htmlFor="in-stock">In stock only</label>
            <p id="stock-description">Show only products that are in stock.</p>
          </div>

          <button type="button" className="apply-filters" onClick={applyFilter}>
            Apply filters
          </button>

          <button
            type="button"
            className="reset-filters"
            onClick={() => {
              setAppliedPrice({ min: "", max: "" });
              setCategoryFilter([]);
              setcheckedInstock(false);
            }}
          >
            Reset all
          </button>
        </aside>

        <section className="products-section" aria-labelledby="results-heading">
          <header className="results-header">
            {/* <h2 id="results-heading">products found</h2> */}

            <ul className="active-filters" aria-label="Active filters">
              <li>
                {categoryFilter?.map((item) => (
                  <button type="button" aria-label="Remove Electronics filter">
                    {item}{" "}
                    <span
                      aria-hidden="true"
                      onClick={() =>
                        setCategoryFilter((prev) =>
                          [...prev].filter((data) => data !== item)
                        )
                      }
                    >
                      ×
                    </span>
                  </button>
                ))}
              </li>
              {appliedPrice.max || appliedPrice.max ? (
                <li>
                  <button type="button" aria-label="Remove price range filter">
                    {appliedPrice.min} - {appliedPrice.max}{" "}
                    <span
                      aria-hidden="true"
                      onClick={() => {
                        setAppliedPrice({ min: "", max: "" });
                        setLowPrice("");
                        setHighPrice("");
                      }}
                    >
                      ×
                    </span>
                  </button>
                </li>
              ) : (
                <></>
              )}
              {checkedInstock ? (
                <li>
                  <button type="button" aria-label="Remove in stock filter">
                    In stock{" "}
                    <span
                      aria-hidden="true"
                      onClick={() => setcheckedInstock(false)}
                    >
                      ×
                    </span>
                  </button>
                </li>
              ) : (
                <></>
              )}
            </ul>
          </header>

          <div className="product-grid">
            {pageinationData.map((item, index) => {
              return (
                <article className="product-card" id={index}>
                  {/* <img
                    src="/images/t-shirt.jpg"
                    alt="Navy blue crew neck T-shirt"
                    width={280}
                    height={220}
                  /> */}
                  <span className="stock-badge">
                    {item.inStock ? "In stock" : "Out of stock"}
                  </span>
                  <h3>{item.name}</h3>
                  <p className="product-category">{item.category}</p>
                  <p className="product-rating">
                    <span aria-hidden="true">★</span>
                    {item.rating} out of 5.
                  </p>
                  <p className="product-price">{item.price}</p>
                  <button type="button">
                    {item.inStock ? "Add to cart" : "Sold out"}
                  </button>
                </article>
              );
            })}

            {/* <article className="product-card">
              <img
                src="/images/mouse.jpg"
                alt="Black wireless mouse"
                width={280}
                height={220}
              />
              <span className="stock-badge">In stock</span>
              <h3>Wireless Mouse</h3>
              <p className="product-category">Electronics</p>
              <p className="product-rating">
                <span aria-hidden="true">★</span> 4.2 out of 5 · 892 reviews
              </p>
              <p className="product-price">₹800</p>
              <button type="button">Add to cart</button>
            </article>

            <article className="product-card">
              <img
                src="/images/keyboard.jpg"
                alt="Black mechanical keyboard with colorful backlighting"
                width={280}
                height={220}
              />
              <span className="stock-badge">In stock</span>
              <h3>Mechanical Keyboard</h3>
              <p className="product-category">Electronics</p>
              <p className="product-rating">
                <span aria-hidden="true">★</span> 4.5 out of 5 · 1,240 reviews
              </p>
              <p className="product-price">₹1,500</p>
              <button type="button">Add to cart</button>
            </article>

            <article className="product-card">
              <img
                src="/images/jeans.jpg"
                alt="Folded blue slim fit jeans"
                width={280}
                height={220}
                loading="lazy"
              />
              <span className="stock-badge">In stock</span>
              <h3>Slim Fit Jeans</h3>
              <p className="product-category">Clothing</p>
              <p className="product-rating">
                <span aria-hidden="true">★</span> 4.6 out of 5 · 540 reviews
              </p>
              <p className="product-price">₹1,800</p>
              <button type="button">Add to cart</button>
            </article>

            <article className="product-card">
              <img
                src="/images/speaker.jpg"
                alt="Black portable Bluetooth speaker"
                width={280}
                height={220}
                loading="lazy"
              />
              <span className="stock-badge">In stock</span>
              <h3>Bluetooth Speaker</h3>
              <p className="product-category">Electronics</p>
              <p className="product-rating">
                <span aria-hidden="true">★</span> 4.6 out of 5 · 980 reviews
              </p>
              <p className="product-price">₹2,500</p>
              <button type="button">Add to cart</button>
            </article>

            <article className="product-card">
              <img
                src="/images/sneakers.jpg"
                alt="White low top sneakers with navy accents"
                width={280}
                height={220}
                loading="lazy"
              />
              <span className="stock-badge">In stock</span>
              <h3>Low Top Sneakers</h3>
              <p className="product-category">Clothing</p>
              <p className="product-rating">
                <span aria-hidden="true">★</span> 4.7 out of 5 · 650 reviews
              </p>
              <p className="product-price">₹2,800</p>
              <button type="button">Add to cart</button>
            </article> */}
          </div>

          <div className="pagination" aria-label="Product pagination">
            <button
              type="button"
              disabled={page <= 1}
              onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            >
              Previous
            </button>
            <button
              type="button"
              aria-current="page"
              aria-label="Page 1"
              disabled
            >
              {page} of {totalPage}
            </button>
            <button
              type="button"
              disabled={page >= totalPage}
              onClick={() => setPage((prev) => Math.min(totalPage, prev + 1))}
            >
              Next
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FilterPage;
