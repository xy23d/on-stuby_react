import React from "react";

export const Article = ({article}) => {
  if (!article) {
    return null;
  }

  return (
    <>
      <div className="text-2xl">{article.id}</div>
      <div className="text-2xl">{article.title}</div>
      <div className="text-2xl">{article.score}</div>
    </>
  );
}
