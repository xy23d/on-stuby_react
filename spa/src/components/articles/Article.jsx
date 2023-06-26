import React from "react";
import { Link } from "react-router-dom";

export const Article = ({id, title}) => {
  return (
    <>
        <Link className="text-blue-500" to={`/articles/${id}`}>{title}</Link>
        <br />
    </>
  );
}
