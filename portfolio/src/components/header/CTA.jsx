import React from 'react';
import CV from '../../assets/CV Bejatovic Bratislav (1).pdf';

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>
        Download CV
      </a>
      <a href='#contact' className='btn btn-primary'>
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
