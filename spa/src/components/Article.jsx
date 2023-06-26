import React from "react";

export const Article = ({article}) => {
  return (
    <>
      <div className="text-2xl">{article.id}</div>
      <div className="text-2xl">{article.title}</div>
      <div className="text-2xl">{article.score}</div>
    </>
  );
}
