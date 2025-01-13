import Header from './Header.jsx';
import Footer from './Footer.jsx';
import * as React from 'react';

export const pageWrapper = ele => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex-grow'>
      {ele}
      </div>
      <Footer />
    </div>
  );
};
