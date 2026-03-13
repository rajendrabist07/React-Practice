import React, { useState, useEffect } from "react";
import Form from "./form";
import "./API.css";
import DELETE from "./DELETE";

const API = () => {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);

    const fetchData = async () => {
        try {
            const skip = (page - 1) * limit;

            const response = await fetch(
                `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
            );

            const result = await response.json();

            setProducts(result.products);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [limit, page]);

    const deleteProduct = async (id) => {
        try {
            const response = await fetch(
                `https://dummyjson.com/products/${id}`,
                {
                    method: "DELETE",
                }
            );

            const result = await response.json();

            console.log("Deleted:", result);

            // remove from UI
            setProducts((prev) =>
                prev.filter((product) => product.id !== Number(id))
            );

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="ui-container">

            <Form />

            {/* DELETE COMPONENT */}
            <DELETE onDelete={deleteProduct} />

            <div className="ui-grid">

                {products.map((post) => (
                    <div className="ui-card" key={post.id}>

                        <div className="ui-img">
                            <img src={post.images[0]} alt={post.title} />
                        </div>

                        <div className="ui-content">
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                            <p>Price: ${post.price}</p>

                            {/* Delete Button on Card */}
                            <button
                                onClick={() => deleteProduct(post.id)}
                            >
                                Delete
                            </button>

                        </div>

                    </div>
                ))}

            </div>

            <div className="ui-controls">

                <select
                    value={limit}
                    onChange={(e) => {
                        setLimit(Number(e.target.value));
                        setPage(1);
                    }}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={200}>200</option>
                </select>

                <div className="ui-pagination">

                    {page > 1 && (
                        <button onClick={() => setPage(page - 1)}>
                            Previous
                        </button>
                    )}

                    <span>Page {page}</span>

                    <button onClick={() => setPage(page + 1)}>
                        Next
                    </button>

                </div>

            </div>

        </div>
    );
};

export default API;