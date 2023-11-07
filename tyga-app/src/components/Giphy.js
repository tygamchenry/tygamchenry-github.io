import React from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';
import {useState} from 'react';
import TextList from './TextList';
import Error from './Error';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const giphy = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY)

function Giphy () {
    const [text, setText] = useState('')
    const [results, setResults] = useState([])
    const [err, setErr] = useState(false)

    const handleInput = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        if(text.length === 0) {
      
        //set error state to true
        setErr(true)
        return
    }

    console.log(text)

    const apiCall = async () => {
        const res = await giphy.animate(text, {limit: 20})
        console.log(res.data)
        setResults(res.data)
    }
    
    apiCall()
    setText('')
    setErr(false)

  }
  
  return (
    <Container>
        <Row>
            <Col className="Giphy_API">
            <h1>Animated Text Generator</h1>
        <h3>Type text into the form and hit submit</h3>
        <input className='input-field' value={text} onChange={handleInput} />
        <button className='submit-btn' onClick={handleSubmit}>Submit</button>
        <Error isError={err} text='need length longer than 0 for input'/>
        {results && <TextList gifs={results}  />}
            </Col>
        </Row>
    </Container>
  )
}


export default Giphy;