import { NextPage } from 'next';
import React from 'react';
import style from './Contact.module.scss'

const Contact: NextPage = () => {
  return (
    <main className={style.contactContainer}>
      <div className="container">
        <h1>Contact Page</h1>
        <p className={style.emptyMessage}>Not available yet</p>
      </div>
    </main>
  );
};

export default Contact;
