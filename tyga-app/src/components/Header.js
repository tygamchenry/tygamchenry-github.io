import React from 'react'
import Stack from 'react-bootstrap/Stack'
import iconImage from "./../assets/images/Tyga-icon.jpg";


export default function Header() {
    return (
        <header>
            <Stack direction="horizontal" >
                <img 
                    src={iconImage}
                    className="avatar"
                    alt="Tyga McHenry"
                    width={125}
                    height={'auto'}
                    />
                    <div><p>Tyga McHenry</p></div>
            </Stack>
        </header>
    );
}