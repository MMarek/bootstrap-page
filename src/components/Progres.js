import React from "react";
import {ProgressBar} from 'react-bootstrap';

function Progres() {
return(
    <>
        <h3>1:</h3>
        <ProgressBar now={60} />

        <h3>2:</h3>
        <div>
            <ProgressBar variant="success" now={30} />
            <ProgressBar variant="info" now={20} />
            <ProgressBar variant="warning" now={60} />
            <ProgressBar variant="danger" now={80} />
        </div>

        <h3>3:</h3>
        <div>
            <ProgressBar striped variant="success" now={40} />
            <ProgressBar striped variant="info" now={20} />
            <ProgressBar striped variant="warning" now={60} />
            <ProgressBar striped variant="danger" now={80} />
        </div>

        <h3>4:</h3>
        <ProgressBar animated now={45} />

        <h3>4:</h3>
        <ProgressBar>
            <ProgressBar striped variant="success" now={35} key={1} />
            <ProgressBar variant="warning" now={20} key={2} />
            <ProgressBar striped variant="danger" now={10} key={3} />
        </ProgressBar>
    </>

)
}

export default Progres;