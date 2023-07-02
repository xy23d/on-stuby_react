import React from "react";

export const Article = ({ article }) => {
  return (
    <>
      <div className="flex flex-col">
        <header>
          <h1 className="font-extrabold text-4xl">{ article.title }</h1>
        </header>
        <div className="px-2 text-2xl"> by {article.author}</div>
        <div className="m-5 text-2xl">
          {
            article.description.split('\n').map((row) => {
              return (
                <p>{row}</p>
              );
            })
          }
        </div>
      </div>
    </>
  );
}
