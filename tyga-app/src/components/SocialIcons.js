import React from 'react';
import { PiCodepenLogoLight, PiLinkedinLogoLight, PiGithubLogoLight } from 'react-icons/pi';
import { IconContext } from 'react-icons';
import styles from './SocialIcons.module.scss';

export default function SocialIcons() {
    return (
        <IconContext.Provider value={{ color: 'purple', size: '40px'}}>
            <div className={styles.socialIcon}>
                <a href="https://www.codepen.io" target='_blank' rel="noopener noreferrer"><PiCodepenLogoLight /></a>
                <a href="https://www.linkedin.com/in/tygamchenry" target='_blank' rel="noopener noreferrer"><PiLinkedinLogoLight /></a>
                <a href="https://github.com/tygamchenry" target='_blank' rel="noopener noreferrer"><PiGithubLogoLight /></a>
            </div>
        </IconContext.Provider>
    )
};