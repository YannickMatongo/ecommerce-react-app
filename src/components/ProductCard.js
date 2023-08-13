import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from '../images/prodcompare.svg';
import wish from '../images/wish.svg';
import wishlist from '../images/wish.svg';
import watch from '../images/watch.jpg';
import watch3 from '../images/watch-3.jpg';
import view from '../images/view.svg';
import smartwatch from '../images/smartwatch.jpg';
import smartwatch2 from '../images/smartwatch-1.jpg';
import addcart from "../images/add-cart.svg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div
        className={` ${
          location.pathname == "/store" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={smartwatch} alt="product image" />
            {/* image transition */}
            <img src={smartwatch2} alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels </h6>
            <h5 className="product-title">
              Kids headphones bulk pack multi colored for students
            </h5>
            <p className="price">€100.00</p>
            <ReactStars
              count={5}
              size={24}
              value={4}
              // edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam, animi suscipit impedit, ipsa cum, est tempora esse sunt
              itaque cupiditate quas temporibus aliquam delectus. Delectus ullam
            </p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button>
                <img src={prodcompare} alt="productcompare" />
              </button>
            </div>
            <div className="d-flex flex-column">
              <button>
                <img src={view} alt="view" />
              </button>
            </div>
            <div className="d-flex flex-column">
              <button>
                <img src={addcart} alt="add" />
              </button>
            </div>
          </div>
        </Link>
      </div>

      <div
        className={` ${
          location.pathname == "/store" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="" />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/smartwatch.jpg" alt="product image" />
            {/* image transition */}
            <img src="images/smartwatch-1.jpg" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels </h6>
            <h5 className="product-title">
              Kids headphones bulk pack multi colored for students
            </h5>
            <p className="price">€100.00</p>
            <ReactStars
              count={5}
              size={24}
              value={4}
              // edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam, animi suscipit impedit, ipsa cum, est tempora esse sunt
              itaque cupiditate quas temporibus aliquam delectus. Delectus ullam
            </p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button>
                <img src={prodcompare} alt="productcompare" />
              </button>
            </div>
            <div className="d-flex flex-column">
              <button>
                <img src={view} alt="view" />
              </button>
            </div>
            <div className="d-flex flex-column">
              <button>
                <img src={addcart} alt="add" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
