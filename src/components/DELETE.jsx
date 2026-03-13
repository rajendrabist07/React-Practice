import React, { useState } from "react";

const DELETE = ({ onDelete }) => {
    const [id, setId] = useState("");

    const handleDelete = () => {
        if (!id) {
            alert("Please enter product ID");
            return;
        }

        onDelete(id);
        setId("");
    };

    return (
        <div style={{ margin: "20px 0" }}>
            <h3>Delete Product</h3>

            <input
                type="number"
                placeholder="Enter Product ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />

            <button
                onClick={handleDelete}
                style={{ marginLeft: "10px" }}
            >
                Delete
            </button>
        </div>
    );
};

export default DELETE;