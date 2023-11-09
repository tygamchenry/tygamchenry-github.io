import React from 'react';
import { BsFillEnvelopeFill, BsLinkedin, BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function SocialIcons() {
    return (
        <div>
            <BsFillEnvelopeFill />
            <BsLinkedin />
            <BsGithub />
        </div>
    )
};