import React, { useState } from "react";

const ProductForm = (props) => {
  const [id, setId] = useState("");
  const [price, setPrice] = useState();
  const [name, setName] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const productData = {
      id: id,
      price: price,
      name: name,
    };

    localStorage.setItem(id, JSON.stringify(productData))
    
    props.onAddProduct(productData);

    setId('');
    setPrice('')
    setName('');
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>Product ID:- </label>
          <input
            type="number"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label>Selling Price:- </label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label>Product Name:- </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <button>Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
