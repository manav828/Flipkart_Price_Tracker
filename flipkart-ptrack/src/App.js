

import React, { useState, useEffect } from "react";
import ProductDetails from "./components/ProductDetails";
import ProductTable from "./components/ProductTable";
import FilterProducts from "./components/FilterProducts";
import ProductChart from "./components/ProductChart";

const styles = {
  container: {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif",
  },
  header: {
    fontSize: "32px",
    fontWeight: "600",
    color: "#2c3e50",
    marginBottom: "30px",
    textAlign: "center",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
    marginBottom: "30px",
  },
  input: {
    width: "500px",
    padding: "12px 20px",
    fontSize: "16px",
    border: "2px solid #e2e8f0",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    transition: "all 0.3s ease",
    outline: "none",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
  },
  inputFocus: {
    borderColor: "#3498db",
    boxShadow: "0 2px 8px rgba(52, 152, 219, 0.2)",
  },
  button: {
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "500",
    color: "#ffffff",
    backgroundColor: "#3498db",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    outline: "none",
    boxShadow: "0 2px 4px rgba(52, 152, 219, 0.3)",
  },
  buttonHover: {
    backgroundColor: "#2980b9",
    transform: "translateY(-1px)",
    boxShadow: "0 4px 8px rgba(52, 152, 219, 0.4)",
  },
  error: {
    color: "#e74c3c",
    fontSize: "14px",
    textAlign: "center",
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#fdeaea",
    borderRadius: "6px",
    border: "1px solid #fadbd8",
  },
};

function App() {
  const [url, setUrl] = useState("");
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [chartData, setChartData] = useState(null);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  // Fetch all products from MongoDB
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
        const data = await response.json();
        if (response.ok) {
          setAllProducts(data);
          setFilteredProducts(data);
        } else {
          setError(data.error || "Failed to fetch all products.");
        }
      } catch (err) {
        setError("Error connecting to the server.");
      }
    };
    fetchAllProducts();
  }, []);

  // Handle product scraping
  const handleSubmit = async () => {
    if (!url) {
      setError("URL is required");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/scrape?url=${encodeURIComponent(url)}`);
      const data = await response.json();
      if (response.ok) {
        setProductData(data);
        setError(null);
        createChartData(data.Title); // Create chart data when we get product data
      } else {
        setError(data.error || "Failed to fetch product data.");
      }
    } catch (err) {
      setError("Error connecting to the server.");
    }
  };

  // Create chart data for the product's price history
  const createChartData = (title) => {
    const productHistory = allProducts
      .filter((product) => product.Title === title)
      .sort((a, b) => new Date(a.Date) - new Date(b.Date));

    const labels = productHistory.map((product) => product.Time);
    const prices = productHistory.map((product) => product.Price);

    setChartData({
      labels,
      datasets: [
        {
          label: `Price history of ${title}`,
          data: prices,
          borderColor: "rgba(75,192,192,1)",
          backgroundColor: "rgba(75,192,192,0.2)",
          borderWidth: 2,
        },
      ],
    });
  };

  // Filter products based on search and price range
  const filterProducts = () => {
    let filtered = allProducts;

    if (searchTitle) {
      filtered = filtered.filter((product) =>
        product.Title.toLowerCase().includes(searchTitle.toLowerCase())
      );
    }
    if (minPrice) {
      filtered = filtered.filter((product) => parseFloat(product.Price) >= parseFloat(minPrice));
    }
    if (maxPrice) {
      filtered = filtered.filter((product) => parseFloat(product.Price) <= parseFloat(maxPrice));
    }

    setFilteredProducts(filtered);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Flipkart Product Scraper</h1>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter Flipkart product URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          style={{
            ...styles.input,
            ...(isInputFocused ? styles.inputFocus : {}),
          }}
        />
        <button
          onClick={handleSubmit}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          style={{
            ...styles.button,
            ...(isButtonHovered ? styles.buttonHover : {}),
          }}
        >
          Scrape Product
        </button>
      </div>

      {error && <div style={styles.error}>{error}</div>}

      {productData && <ProductDetails productData={productData} />}

      <FilterProducts
        searchTitle={searchTitle}
        minPrice={minPrice}
        maxPrice={maxPrice}
        setSearchTitle={setSearchTitle}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        filterProducts={filterProducts}
        resetFilters={() => {
          setSearchTitle("");
          setMinPrice("");
          setMaxPrice("");
          setFilteredProducts(allProducts);
        }}
      />

      <ProductTable products={filteredProducts} createChartData={createChartData} />

      {chartData && <ProductChart chartData={chartData} />}
    </div>
  );
}

export default App;
