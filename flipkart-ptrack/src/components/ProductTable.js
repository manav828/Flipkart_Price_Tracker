// import React from "react";
// import "./ProductTable.css"; // External CSS file

// function ProductTable({ products, createChartData }) {
//     return (
//         <div className="table-container">
//             <h2 className="table-title">All Products</h2>
//             <table className="product-table">
//                 <thead>
//                     <tr>
//                         <th className="table-header">Title</th>
//                         <th className="table-header">Price</th>
//                         <th className="table-header">Reviews</th>
//                         <th className="table-header">Description</th>
//                         <th className="table-header">Chart</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {products.map((product, index) => (
//                         <tr key={index} className="table-row">
//                             <td className="table-cell">{product.Title}</td>
//                             <td className="table-cell">${product.Price}</td>
//                             <td className="table-cell">{product.Reviews}</td>
//                             <td className="table-cell">
//                                 {product.Description.length > 100
//                                     ? product.Description.substring(0, 150) + "..."
//                                     : product.Description}
//                             </td>
//                             <td className="table-cell">
//                                 <button className="chart-button" onClick={() => createChartData(product.Title)}>Show Chart</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default ProductTable;










import React from "react";
import "./ProductTable.css"; // External CSS file

function ProductTable({ products, createChartData }) {
    return (
        <div className="table-container">
            <h2 className="table-title">All Products</h2>
            <div className="table-scroll">
                <table className="product-table">
                    <thead>
                        <tr>
                            <th className="table-header">Title</th>
                            <th className="table-header">Price</th>
                            <th className="table-header">Reviews</th>
                            <th className="table-header">Description</th>
                            <th className="table-header">Chart</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index} className="table-row">
                                <td className="table-cell">{product.Title}</td>
                                <td className="table-cell">${product.Price}</td>
                                <td className="table-cell">{product.Reviews}</td>
                                <td className="table-cell">
                                    {product.Description.length > 100
                                        ? product.Description.substring(0, 150) + "..."
                                        : product.Description}
                                </td>
                                <td className="table-cell">
                                    <button className="chart-button" onClick={() => createChartData(product.Title)}>Show Chart</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductTable;
