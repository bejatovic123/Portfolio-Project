import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div className='layout'>
        {/* <Header /> */}
        <div className='layout_body '>
          <Suspense fallback={<div>loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
