import React, { useEffect, useState } from "react";
import "./CreateProduct.css";

const CreateProduct = () => {

    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);

    const fetchData = async () => {

        const skip = (page - 1) * limit;

        const response = await fetch(
            `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        );

        const result = await response.json();

        setProducts(result.products);
    };

    useEffect(() => {
        fetchData();
    }, [limit, page]);



    const nextPage = () => {
        setPage(page + 1);
    };

    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };



    return (
        <div className="prod-wrapper">

            <div className="prod-select">
                <label>Products Limit: </label>

                <select
                    value={limit}
                    onChange={(e) => {
                        setLimit(Number(e.target.value));
                        setPage(1);
                    }}
                >
                    <option value={1}>1</option>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                </select>
            </div>



            <div className="prod-grid">

                {products.map((product) => {

                    return (
                        <div className="prod-card" key={product.id}>

                            <img
                                src={product.images[0]}
                                alt={product.title}
                                className="prod-img"
                            />

                            <h3>{product.title}</h3>
                            <p>{product.category}</p>
                            <p>${product.price}</p>

                        </div>
                    );
                })}

            </div>



            <div className="prod-buttons">

                <button onClick={prevPage}>Previous</button>

                <span>Page {page}</span>

                <button onClick={nextPage}>Next</button>

            </div>

        </div>
    );
};

export default CreateProduct;