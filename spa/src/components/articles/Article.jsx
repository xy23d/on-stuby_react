import React from "react";
import { Link } from "react-router-dom";

const Article = ({id, title}) => {
  return (
    <>
      <div className="bg-gradient-to-r from-sky-500 p-0.5 rounded-[10px] to-indigo-500" data-testid="div_1">
        <div className="bg-white flex flex-col rounded-[8px]" data-testid="div_2">
          <div className="mt-5 px-10" data-testid="div_3">
            <h3 className="font-bold text-2xl normal-case">{title}</h3>
          </div>
          <div className="mt-11 mb-3 text-center" data-testid="div_4">
            <Link className="font-bold inline-block max-w-full border-solid border-2 rounded-[30px] px-10 py-2 border-[transparent] text-white bg-sky-500" to={`/articles/${id}`}>GoTo</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article
