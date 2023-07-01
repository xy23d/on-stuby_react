import React from "react";
import { Link } from "react-router-dom";

export const Article = ({id, title}) => {
  return (
    <>
      <div className="bg-gradient-to-r from-sky-500 p-0.5 to-indigo-500">
        <div class="bg-white flex flex-col gap-2">
          <div className="px-10">
            <h3 class="font-bold text-3xl normal-case">{title}</h3>
          </div>
          <div className="mt-11 text-center">
            <Link className="font-bold inline-block overflow-hidden max-w-full transition-all focus-visible:outline-4 focus-visible:outline-state-focus focus-visible:outline-offset-[-2px] border-solid border-2 rounded-[30px] focus-visible:outline-none tracking-ff-tight text-body-base leading-none px-[1.75rem] py-[1.1875rem] border-[transparent] text-white bg-sky-500 hover:bg-shade-70 active:bg-shade-50 disabled:bg-shade-20 disabled:text-shade-30" to={`/articles/${id}`}>GoTo</Link>
          </div>
        </div>
      </div>
    </>
  );
}
