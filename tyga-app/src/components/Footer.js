import React from 'react';
import './Footer.module.scss';

const year = new Date().getFullYear();

export default function Footer() {
    return (
        <footer>
            <p>© {year} Tyga McHenry. All rights reserved.</p>
        </footer>
    );
}