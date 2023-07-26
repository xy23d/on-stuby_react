import React from 'react';

import PageTitle from '../components/common/PageTitle';

const NotFound = () => {
  return (
    <div className='w-full px-16' data-testid='div_1'>
      <PageTitle page_title='404 Not Found' />
      <p className='text-center'>
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
