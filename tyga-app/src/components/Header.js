import React from 'react'
//import Stack from 'react-bootstrap/Stack'
import iconImage from "./../assets/images/Tyga-icon.jpg";
import styles from "./Header.module.scss";


export default function Header() {
    return (
        <header>
            <div className={`${styles.logo}`}>
                <p>tyga mchenry.</p>
                <p>web developer</p>
            </div>
        </header>
    );
}