import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Checkout = () => {
  return (
    <>
      <Meta title={"Checkout"} />
      <BreadCrumb title="Checkout" />

      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">Dev Corner</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item active" aria-current="page">
                      Library
                    </li>
                  </ol>
                </nav>
                <h4 className="title">Contact Information</h4>
                <p className="user-details">
                  nom prenom client(mailClient@gmail.com)
                </p>
                <form
                  action=""
                  className="d-flex gap-15 flex-wrap justify-content-between"
                >
                  <div className="w-100">
                    <select
                      name=""
                      className="form-control form-select"
                      id=""
                    >
                        <option value="" selected disabled>Select Country</option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" placeholder="First Name" className="form-control" />
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" placeholder="Last Name" className="form-control" />
                  </div>
                  <div className="w-100">
                    <input type="text" className="form-control" />
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" className="form-control" />
                  </div>
                  <div className="flex-grow-1">
                    <select
                      name=""
                      className="form-control form-select"
                      id=""
                    ></select>
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" className="form-control" />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
