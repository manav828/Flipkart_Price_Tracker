// import React from "react";

// function FilterProducts({
//     searchTitle,
//     minPrice,
//     maxPrice,
//     setSearchTitle,
//     setMinPrice,
//     setMaxPrice,
//     filterProducts,
//     resetFilters,
// }) {
//     return (
//         <div style={{ marginTop: "20px" }}>
//             <h3>Filter Products</h3>
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Search by Title"
//                     value={searchTitle}
//                     onChange={(e) => setSearchTitle(e.target.value)}
//                 />
//                 <input
//                     type="number"
//                     placeholder="Min Price"
//                     value={minPrice}
//                     onChange={(e) => setMinPrice(e.target.value)}
//                 />
//                 <input
//                     type="number"
//                     placeholder="Max Price"
//                     value={maxPrice}
//                     onChange={(e) => setMaxPrice(e.target.value)}
//                 />
//                 <button onClick={filterProducts}>Apply Filters</button>
//                 <button onClick={resetFilters} style={{ marginLeft: "10px" }}>Reset Filters</button>
//             </div>
//         </div>
//     );
// }

// export default FilterProducts;









import React from "react";

const styles = {
    container: {
        marginTop: "20px",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        maxWidth: "800px",
        margin: "0 auto",
    },
    heading: {
        fontSize: "24px",
        fontWeight: "600",
        color: "#2c3e50",
        marginBottom: "20px",
        textAlign: "center",
    },
    inputContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
    },
    input: {
        width: "30%",
        padding: "6px 10px",  // Reduced padding
        fontSize: "14px",
        border: "2px solid #e2e8f0",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
        transition: "all 0.3s ease",
        outline: "none",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
        height: "30px", // Reduced height
    },
    button: {
        padding: "6px 12px",  // Reduced padding
        fontSize: "14px",
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
    resetButton: {
        padding: "6px 12px",  // Reduced padding
        fontSize: "14px",
        fontWeight: "500",
        color: "#ffffff",
        backgroundColor: "#e74c3c",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        outline: "none",
        boxShadow: "0 2px 4px rgba(231, 76, 60, 0.3)",
    },
    resetButtonHover: {
        backgroundColor: "#c0392b",
        transform: "translateY(-1px)",
        boxShadow: "0 4px 8px rgba(231, 76, 60, 0.4)",
    },
};


function FilterProducts({
  searchTitle,
  minPrice,
  maxPrice,
  setSearchTitle,
  setMinPrice,
  setMaxPrice,
  filterProducts,
  resetFilters,
}) {
  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Filter Products</h3>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Search by Title"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          style={styles.input}
        />
        <button
          onClick={filterProducts}
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#2980b9")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#3498db")}
        >
          Apply Filters
        </button>
        <button
          onClick={resetFilters}
          style={styles.resetButton}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#c0392b")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#e74c3c")}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}

export default FilterProducts;
