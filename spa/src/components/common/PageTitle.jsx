import React from 'react';

const PageTitle = ({ page_title }) => {
  return (
    <h2 className='font-extrabold mx-auto mb-3 text-center text-2xl'>
      {page_title}
    </h2>
  );
};

export default PageTitle;
