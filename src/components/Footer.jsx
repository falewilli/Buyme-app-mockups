import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import social_media from "../assets/social_media.png";


export default function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <div className={styles.logo}>
                            <img src={logo} width='200px'  alt=''/>
                        </div>
                        <div className={styles.social}>
                            <img src={social_media} width='200px'  alt=''/>
                        </div>
                    </div>
                    <div className={styles.column}>
                        Customer service:<br/>
                        <span className={styles.phones}>0810 222 5342</span><br/>
                        <span className={styles.hours}>Mon-Fri from 09 am to 6 pm<br/>
                        Sat from 09 am to 1 pm</span>
                    </div>
                    <div className={styles.column}>
                        Sales:<br/>
                        <span className={styles.phones}>0810 333 2137</span><br/>
                        <span className={styles.hours}>Mon-Fri from 09 am to 8 pm<br/>
                        Sat from 09 am to 7 pm</span>
                    </div>
                    <div className={styles.column}>
                        Corporate Sales:<br/>
                        <span className={styles.phones}>0810 555 5724</span><br/>
                        <span className={styles.hours}>Mon-Fri from 09 am to 6 pm</span>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.column}>
                    <span className={styles.titles}>Subscribe to our newsletter:</span><br/>
                            <input
                            type='text'
                            // value={name}
                            className={styles.input}
                            placeholder='Enter your email'
                            // onChange={(e) => handleInputChange(e)}
                            />
                            {/* <button className={styles.go} type='submit' onClick={(e) => handleSubmit(e)}>SUBSCRIBE</button> */}
                            <button className={styles.go} type='submit'>SUBSCRIBE</button>
                    </div>
                    <div className={styles.column}>
                        <span className={styles.titles}>About</span><br/>
                        <span className={styles.text}>SmartTech<br/>
                        Terms & Conditions<br/>
                        Sustainability</span>
                    </div>
                    <div className={styles.column}>
                    <span className={styles.titles}>My account</span><br/>
                        <span className={styles.text}>Overview<br/>
                        Cart<br/>
                        Favourites</span>
                    </div>
                    <div className={styles.column}>
                        <span className={styles.titles}>Help</span><br/>
                        <span className={styles.hours}>Frequently asked questions<br/>
                        Contact us<br/>
                        Work with us</span>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.legal}>Copyright © 2022 SmartTech | All rights reserved</div>
                </div>
            </div>
        </div>
    )
}
