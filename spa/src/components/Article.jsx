import React from "react";

const style = {
  "font-size": "16px",
}

export const Article = (props) => {
  const {article} = props

  return (
    <>
      <div style={style}>{article.id}</div>
      <div style={style}>{article.title}</div>
      <div style={style}>{article.score}</div>
    </>
  );
}
