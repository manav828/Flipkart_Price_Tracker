import React from "react";

const defaultProductData = {
    Title: "Sample Product",
    Price: "0.00",
    Reviews: "0",
    Description: "No description available",
    SKU: "N/A",
    Category: "Uncategorized"
};

const styles = {
    container: {
        width: "100%",
        maxWidth: "600px",
        margin: "20px auto",
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        overflow: "hidden"
    },
    header: {
        borderBottom: "1px solid #eee",
        padding: "24px"
    },
    title: {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#333"
    },
    content: {
        padding: "24px"
    },
    priceReviewContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "24px"
    },
    priceTag: {
        padding: "8px 16px",
        borderRadius: "20px",
        backgroundColor: "#f3f4f6",
        color: "#333",
        fontSize: "18px",
        fontWeight: "600"
    },
    starsContainer: {
        display: "flex",
        alignItems: "center",
        gap: "4px"
    },
    star: {
        fontSize: "20px",
        color: "#fbbf24"
    },
    starInactive: {
        fontSize: "20px",
        color: "#d1d5db"
    },
    reviewCount: {
        marginLeft: "8px",
        fontSize: "14px",
        color: "#666"
    },
    descriptionTitle: {
        fontSize: "14px",
        fontWeight: "500",
        color: "#666",
        marginBottom: "8px"
    },
    description: {
        color: "#444",
        lineHeight: "1.5"
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "16px",
        marginTop: "24px"
    },
    gridItem: {
        backgroundColor: "#f9fafb",
        padding: "16px",
        borderRadius: "8px"
    },
    gridLabel: {
        fontSize: "14px",
        fontWeight: "500",
        color: "#666",
        marginBottom: "4px"
    },
    gridValue: {
        color: "#333"
    }
};

function ProductDetails({ productData = defaultProductData }) {
    const data = { ...defaultProductData, ...productData };

    const renderStars = (reviews) => {
        const rating = parseInt(reviews) || 0;
        return (
            <div style={styles.starsContainer}>
                {[...Array(5)].map((_, index) => (
                    <span
                        key={index}
                        style={index < rating ? styles.star : styles.starInactive}
                    >
                        ★
                    </span>
                ))}
                <span style={styles.reviewCount}>({reviews} reviews)</span>
            </div>
        );
    };

    const formatPrice = (price) => {
        const numPrice = parseFloat(price) || 0;
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(numPrice);
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h2 style={styles.title}>{data.Title}</h2>
            </div>

            <div style={styles.content}>
                <div style={styles.priceReviewContainer}>
                    <span style={styles.priceTag}>
                        {formatPrice(data.Price)}
                    </span>
                    {renderStars(data.Reviews)}
                </div>

                <div>
                    <h3 style={styles.descriptionTitle}>Description</h3>
                    <p style={styles.description}>{data.Description}</p>
                </div>

                
            </div>
        </div>
    );
}

export default ProductDetails;