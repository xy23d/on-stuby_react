import React from "react";
import { Link } from "react-router-dom";

export const Article = (props) => {
  return (
    <>
        <Link to={"/articles/" + props.id}>{props.title}</Link>
        <br />
    </>
  );
}
