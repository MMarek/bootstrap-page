import React from "react";
import {Button, ProgressBar} from 'react-bootstrap';

function Progres() {
return(
    <div className='block'>
        <h3 className='texts'>Paski postępu:</h3>

        <br/>

        <h3 className='texts'>1 - zwykły:</h3>
        <ProgressBar now={60} />

        <h3 className='texts'>2 - różne kolory:</h3>
        <div>
            <ProgressBar variant="success" now={30} />
            <ProgressBar variant="info" now={20} />
            <ProgressBar variant="warning" now={60} />
            <ProgressBar variant="danger" now={80} />
        </div>

        <h3 className='texts'>3 w paski:</h3>
        <div>
            <ProgressBar striped variant="success" now={40} />
            <ProgressBar striped variant="info" now={20} />
            <ProgressBar striped variant="warning" now={60} />
            <ProgressBar striped variant="danger" now={80} />
        </div>

        <h3 className='texts'>4 animowane paski:</h3>
        <ProgressBar animated now={45} />

        <h3 className='texts'>4:</h3>
        <ProgressBar>
            <ProgressBar striped variant="success" now={35} key={1} />
            <ProgressBar variant="warning" now={20} key={2} />
            <ProgressBar striped variant="danger" now={10} key={3} />
        </ProgressBar>

        <br/>
        <br/>

        <Button className='navBtn' href="/" variant="outline-danger" size='md' block>Back to main-page</Button>

    </div>

)
}

export default Progres;