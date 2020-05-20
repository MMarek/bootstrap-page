import React from "react";
import {Button, OverlayTrigger, Tooltip, Popover} from 'react-bootstrap';

function Tooltips() {
    return (
        <>
        <>
            <h3>1:</h3>
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
        </>

    <>
        <h3>2:</h3>
        {['top', 'right', 'bottom', 'left'].map((placement) => (
            <>
                <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                        <Popover id={`popover-positioned-${placement}`}>
                            <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
                            <Popover.Content>
                                <strong>Holy guacamole!</strong> Check this info.
                            </Popover.Content>
                        </Popover>
                    }
                >
                    <Button variant="secondary">Popover on {placement}</Button>
                </OverlayTrigger>{' '}
            </>
        ))}
    </>
            <h3>3:</h3>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>
  <span className="d-inline-block">
    <Button disabled style={{ pointerEvents: 'none' }}>
      Disabled button
    </Button>
  </span>
            </OverlayTrigger>
    </>
    )
}

export default Tooltips;