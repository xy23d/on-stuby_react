import React from 'react';

const Article = ({ article }) => {
  return (
    <>
      <div className='flex flex-col'>
        <header>
          <h1 className='font-extrabold text-4xl'>{article.title}</h1>
        </header>
        <div className='px-2 text-2xl' data-testid='div_author'>
          {' '}
          by {article.author}
        </div>
        <div className='m-5 text-2xl'>
          {article.description.split('\n').map((row, index) => {
            return <p key={index}>{row}</p>;
          })}
        </div>
      </div>
    </>
  );
};

export default Article;
