import React, {useState} from "react";
import {Button, Collapse, Fade} from 'react-bootstrap';

function Example() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                click
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </Collapse>
        </>
    );
}

function Example2() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-fade-text"
                aria-expanded={open}
            >
                Toggle text
            </Button>
            <Fade in={open}>
                <div id="example-fade-text">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </Fade>
        </>
    );
}


function Ultilities() {
    return (
        <>
            <h3>1:</h3>
            <Example/>

            <h3>2:</h3>
            <Example2/>
        </>

    )
}

export default Ultilities;