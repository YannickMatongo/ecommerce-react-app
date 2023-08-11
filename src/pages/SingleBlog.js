import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { Link } from "react-router-dom";
import blog from "../images/blog-1.jpg";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                < HiOutlineArrowLeft className="fs-4"/>
                Go back to blogs</Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img
                  src={blog}
                  className="img-fluid w-100 my-4"
                  alt=""
                />
                <p>
                  You're only as good as your last collection, which is an
                  enormous pressure. I think there is something about luxury -
                  it's not something people need. I have a fantastic
                  relationship with money. Scelerisque sociosqu ullmancorper
                  urna nisl mollis vestibulum prtium commodo inceptos cum
                  condiemntum placerat diam venenatis blandit hac eget dis lacus
                  a parturient a accumsan nisl nate vestibulum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
