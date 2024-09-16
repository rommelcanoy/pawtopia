import { NextPage } from 'next';
import React from 'react';

import style from './About.module.scss';

const About: NextPage = () => {
  return (
    <main className={style.aboutContainer}>
      <div className="container">
        <h1>About Page</h1>
      </div>
    </main>
  );
};

export default About;
