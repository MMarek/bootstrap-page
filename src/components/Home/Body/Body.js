import React, {Component} from "react";
import {Button} from 'react-bootstrap';

class Body extends Component {

    render() {
        return (
            <>
                <Button href="#navbars" variant="primary" size="lg" block>
                    Navbars </Button>
                <Button href="#buttons" variant="secondary" size="lg" block>
                    Buttons </Button>
                <Button href="#cards" variant="success" size="lg" block>
                    Cards </Button>
                <Button href="#alerts" variant="warning" size="lg" block>
                    Alerts </Button>
                <Button href="#carousels" variant="danger" size="lg" block>
                    Carousels </Button>
                <Button href="#badges" variant="info" size="lg" block>
                    Badges </Button>
                <Button href="#forms" variant="light" size="lg" block>
                    Forms </Button>
                <Button href="#tooltips" variant="dark" size="lg" block>
                    Tooltips </Button>

                <Button href="#progres" variant="info" size="lg" block>
                    Progres-bars </Button>
                <Button href="#spinners" variant="danger" size="lg" block>
                    Spinners </Button>
                <Button href="#tables" variant="warning" size="lg" block>
                    Tables </Button>
                <Button href="#tabs" variant="success" size="lg" block>
                    Tabs </Button>
                <Button href="#ultilities" variant="secondary" size="lg" block>
                    Ultilities </Button>
                <Button href="#dropdowns" variant="primary" size="lg" block>
                    Dropdowns </Button>
                <Button href="#modals" variant="light" size="lg" block>
                    Modals </Button>
            </>)
    }
}

export default Body;