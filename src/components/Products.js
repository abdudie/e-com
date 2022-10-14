import React, { useEffect } from "react";
import "./products.css";
import { add } from "../store/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/ProductSlice";
import { STATUSES } from "../store/ProductSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading...</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Ooops...Something went Wrong!</h2>;
  }
  return (
    <div className="productsWrapper">
      {products.map((e) => {
        return (
          <>
            <div className="card" key={e.id}>
              <img className="productImg" src={e.image} alt=""></img>
              <h4>{e.title}</h4>
              <h3>{e.price} $</h3>
              <button onClick={() => handleAdd(e)} className="btn">
                <i>Add to Cart</i>
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Products;
