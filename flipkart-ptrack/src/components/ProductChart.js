import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import "./ProductChart.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function ProductChart({ chartData }) {
    return (
        // <div className="chart-container">
        //     <h3 className="chart-title">Price History Chart</h3>
        //     <div className="chart-content">
        //         <Line data={chartData} />
        //     </div>
        // </div>
         <div style={{ marginTop: "50px" }}>
          <h2 style={{ width: "300px", display: "block", margin: "auto" }}>Price vs Date Chart</h2>
          <div style={{ width: "60%", height: "300px", display: "block", margin: "auto" }}>
            <Line data={chartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
    );
}

export default ProductChart;
