import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://wallpaperboat.com/wp-content/uploads/2021/04/20/76396/juice-wrld-06-920x518.jpg"
        ></img>
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket.map((item) => {
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />;
          })}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
