import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from './Landing.module.css';

export default function Landing(){
    return (
        <div className={styles.main}>
            <Header />
            <Footer />
        </div>
    )
}
