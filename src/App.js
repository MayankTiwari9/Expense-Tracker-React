import { useState } from "react";
import "./App.css";
import ProductForm from "./Components/ProductForm/ProductForm";
import ProductList from "./Components/Products/ProductList";
import TotalValue from "./Components/Products/TotalValue";

function App() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const addProductHandler = (product) => {
    setProducts((prevProducts) => {
      const newProducts = [product, ...prevProducts];
      updateTotal(newProducts);
      return newProducts;
    });
  };

  const updateProductsHandler = (updatedProducts) => {
    setProducts(updatedProducts);
    updateTotal(updatedProducts);
  };

  const updateTotal = (productList) => {
    let newTotal = 0;
    productList.forEach((item) => {
      newTotal += Number(item.price);
    });
    setTotal(newTotal);
  };

  console.log(total);
  console.log(products);

  console.log(products);

  return (
    <div className="App">
      <ProductForm onAddProduct={addProductHandler} />
      <ProductList
        products={products}
        onUpdateProducts={updateProductsHandler}
      />
      <TotalValue total={total} />
    </div>
  );
}

export default App;
