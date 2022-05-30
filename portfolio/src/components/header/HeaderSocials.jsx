import React from 'react';
import { ImLinkedin } from 'react-icons/im';
import { ImGithub } from 'react-icons/im';
import { ImXing } from 'react-icons/im';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com' targer='_blank'>
        <ImLinkedin />
      </a>
      <a href='https://github.com' targer='_blank'>
        <ImGithub />
      </a>
      <a href='https://xing.com' targer='_blank'>
        <ImXing />
      </a>
    </div>
  );
};

export default HeaderSocials;
