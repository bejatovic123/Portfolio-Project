import React from 'react';
import Cube from 'react-3d-cube';
import { Link } from 'react-router-dom';
import profile from '../../assets/profile.jpg';
import projects from '../../assets/projectS.jpg';
import sideprojects from '../../assets/sideProjcets.jpg';
import iContact from '../../assets/iContact.jpg';
import black from '../../assets/black.png';

const Home = () => {
  //   function everySecond() {
  //     var newDate = new Date();
  //     var s = newDate.getSeconds();
  //     //var m = newDate.getMinutes();
  //     //var h = newDate.getHours();
  //     var degreesToRotate = s * 6;

  //     s = modifyTime(s);
  //     //m = modifyTime(m);

  //     //document.getElementById('time').innerHTML = h + ':' + m + ':' + s;

  //     document.getElementsByClassName('home_cube').style({
  //       transform: 'rotate(' + degreesToRotate + 'deg ) ',
  //     });
  //   }

  //   function modifyTime(s) {
  //     if (s < 10) {
  //       s = '0' + s;
  //     }
  //     return s;
  //   }

  //   setInterval(everySecond, 1000);

  return (
    <>
      <div className='home'>
        <div>
          <div className='home_cube'>
            <Cube size={300} index='front'>
              <div className='home_projects'>
                <Link to='/'>
                  <img src={profile} alt='profile' />
                </Link>
              </div>
              <div className='home_projects'>
                <Link to='/projcts'>
                  <img src={projects} alt='projects' />
                </Link>
              </div>
              <div className='home_projects'>
                <Link to='/projcts'>
                  <img src={black} alt='projects' />
                </Link>
              </div>
              <div className='home_projects'>
                <Link to='/projcts'>
                  <img src={iContact} alt='projects' />
                </Link>
              </div>
              <div className='home_projects'>
                <Link to='/projcts'>
                  <img src={sideprojects} alt='projects' />
                </Link>
              </div>
              <div className='home_projects'>
                <Link to='/'>
                  <img src={black} alt='projects' />
                </Link>
              </div>
            </Cube>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
