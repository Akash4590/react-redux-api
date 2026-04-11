import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./redux/slice";
import { useEffect } from "react";
import { fetchProducts } from "./redux/productsSlice";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productSelector = useSelector(
    (state) => state.products.items
  );

  const cartSelector = useSelector(
    (state) => state.cart.items
  );

  return (
    <div className="grid">
      {productSelector.map((item) => (
        <div key={item.id} className="card">
          <img src={item.thumbnail} alt="" />

          <div className="content">
            <div className="title">{item.title}</div>
            <div className="brand">{item.brand}</div>
            <div className="price">${item.price}</div>
            <div className="rating">{item.rating}</div>

            {cartSelector.find(
              (cartItem) => cartItem.id === item.id
            ) ? (
              <button
                onClick={() => dispatch(removeItem(item))}
                className="btn remove-button"
              >
                Remove from cart
              </button>
            ) : (
              <button
                onClick={() => dispatch(addItem(item))}
                className="btn"
              >
                Add To Cart
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;