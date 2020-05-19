import React, {Component} from "react";
import {OverlayTrigger, Tooltip, Button} from 'react-bootstrap';

class Body extends Component {

    render() {
        return (
            <>
                {['top', 'right', 'bottom', 'left'].map((placement) => (
                    <>
                        <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                                <Tooltip id={`tooltip-${placement}`}>
                                    Tooltip on <strong>{placement}</strong>.
                                </Tooltip>
                            }
                        >
                            <Button variant="secondary">Tooltip on {placement}</Button>
                        </OverlayTrigger>{' '}
                    </>
                ))}
            </>        )
    }
}

export default Body;