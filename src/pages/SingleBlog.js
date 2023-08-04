import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
    </>
  );
};

export default SingleBlog;