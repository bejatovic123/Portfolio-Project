import React from 'react';
import Cube from 'react-3d-cube';

const Home = () => {
  return (
    <>
      <div className='home'>
        <div>
          <div
            className='home_cube'
            style={{
              width: 300,
              height: 300,
            }}
          >
            <Cube size={300} index='front'>
              <div>front</div>
              <div>right</div>
              <div>back</div>
              <div>left</div>
              <div>top</div>
              <div>bottom</div>
            </Cube>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
