// import React from "react";
// import Alert from 'react-bootstrap';
//
// function Alerts() {
//
//     return (
//         [
//             'primary',
//             'secondary',
//             'success',
//             'danger',
//             'warning',
//             'info',
//             'light',
//             'dark',
//         ].map((variant, idx) => (
//             <Alert key={idx} variant={variant}>
//                 This is a {variant} alert—check it out!
//             </Alert>
//         )));
//
// }
//
// export default Alerts;


import React from "react";
import {Alert} from 'react-bootstrap'

function Alerts() {
return (
    <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
            Aww yeah, you successfully read this important alert message. This example
            text is going to run a bit longer so that you can see how spacing within an
            alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things nice
            and tidy.
        </p>
    </Alert>
);
}

export default Alerts;