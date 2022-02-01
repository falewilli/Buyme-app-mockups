import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import NavBar from './NavBar';
import logo from "../assets/logo.png";


export default function Header(){
    return (
        <div className={styles.header}>
            <div className={styles.top}>
                Envíos gratis a todo el país en compras mayores a $6.000!
            </div>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <img src={logo} width='200px' alt=''/>
                </div>
                <SearchBar/>
                <div className={styles.account}>Account</div>
            </div>
            <NavBar/>
        </div>
    )
}
