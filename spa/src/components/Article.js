import React, { useEffect, useState } from "react";
// import logo from './logo.svg';

import { Link } from "react-router-dom";

export const Article = (props) => {
  return (
    // <header className="Top-header">
    //     <img src={logo} className="Top-logo" alt="logo" />
    // </header>
    <>
        <Link to={"/articles/" + props.id}>{props.title}</Link>
        <br />
    </>
  );
}
