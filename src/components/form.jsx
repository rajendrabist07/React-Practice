import React, { useState } from "react";

const Form = () => {
    const [title, setTitle] = useState("");

    const addProduct = async () => {
        try {
            const response = await fetch(
                "https://dummyjson.com/products/add",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title: title
                    })
                }
            );

            const result = await response.json();

            console.log(result);

            setTitle("");

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="ui-form">

            <input
                type="text"
                placeholder="Enter product title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <button onClick={addProduct}>
                Add Product
            </button>

        </div>
    );
};

export default Form;