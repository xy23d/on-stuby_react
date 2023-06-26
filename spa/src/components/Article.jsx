import React from "react";

export const Article = (props) => {
  const {article} = props

  return (
    <>
      <div>{article.id}</div>
      <div>{article.title}</div>
      <div>{article.score}</div>
    </>
  );
}
