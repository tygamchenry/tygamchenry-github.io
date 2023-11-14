import React from 'react';
import './Footer.module.scss';

const year = new Date().getFullYear();

export default function Footer() {
    return (
        <>
            <p>© {year} Tyga McHenry. All rights reserved.</p>
        </>
    );
}