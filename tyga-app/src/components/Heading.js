import React from 'react'
import Stack from 'react-bootstrap/Stack'
import iconImage from "./../assets/images/Tyga-icon.jpg";


function Heading() {
    return (
        <Stack direction="horizontal" gap={2}>
            <img 
                src={iconImage}
                className='d-inline-block align-top' 
                alt="Tyga caricature icon"
                width="125"
                height="auto"
                />
                <div><p>Tyga McHenry</p></div>
        </Stack>
    );
}

export default Heading;