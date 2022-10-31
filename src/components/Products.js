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
    <div className="container bg-white">
      <div className="row">
        {products.map((e) => {
          return (
            <>
              <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                <div
                  className="card mb-4"
                  key={e.id}
                  // style={{ height: "60vh" }}
                >
                  <img
                    className="card-img rounded-circle"
                    src={e.image}
                    alt="img"
                    style={{ height: "18vw", width: "20vw" }}
                  ></img>
                  <div className="card-body">
                    <h6
                      className="card-title text-dark"
                      // style={{ fontSize: "1.5vw" }}
                    >
                      {e.title}
                    </h6>
                    <h3
                      className="card-text text-success"
                      // style={{ fontSize: "3vw" }}
                    >
                      {e.price} $
                    </h3>

                    <button
                      onClick={() => handleAdd(e)}
                      className="btn btn-secondary"
                      // style={{ width: "10vw", fontSize: "1vw" }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
