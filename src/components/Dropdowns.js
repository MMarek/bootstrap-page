import React, {useState} from "react";
import {Dropdown, DropdownButton, ButtonGroup, Button, SplitButton, FormControl} from 'react-bootstrap';

function Dropdown1() {
    return (
        <>
            {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
                (variant) => (
                    <>
                        <DropdownButton
                            as={ButtonGroup}
                            key={variant}
                            id={`dropdown-variants-${variant}`}
                            variant={variant.toLowerCase()}
                            title={variant}
                        >
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3" active>
                                Active Item
                            </Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </DropdownButton>{' '}
                    </>
                ),
            )}
        </>
    )
}

function Dropdown2() {
    return (
        <>
            {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
                (variant) => (
                    <>
                        <SplitButton
                            key={variant}
                            id={`dropdown-split-variants-${variant}`}
                            variant={variant.toLowerCase()}
                            title={variant}
                        >
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3" active>
                                Active Item
                            </Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </SplitButton>{' '}
                    </>
                ),
            )}
        </>
    )
}

function Dropdowns() {
    return (
        <>
            <h3>1:</h3>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <h3>2:</h3>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else</Dropdown.Item>
            </DropdownButton>

            <h3>3:</h3>
            <Dropdown1/>

            <h3>4:</h3>
            <Dropdown as={ButtonGroup}>
                <Button variant="success">Split Button</Button>

                <Dropdown.Toggle split variant="success" id="dropdown-split-basic"/>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <h3>5:</h3>
            <Dropdown2/>

            <h3>6:</h3>
            <>
                <div className="mb-2">
                    {['up', 'down', 'left', 'right'].map((direction) => (
                        <>
                            <DropdownButton
                                as={ButtonGroup}
                                key={direction}
                                id={`dropdown-button-drop-${direction}`}
                                drop={direction}
                                variant="secondary"
                                title={` Drop ${direction} `}
                            >
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                            </DropdownButton>{' '}
                        </>
                    ))}
                </div>

                <div>
                    {['up', 'down', 'left', 'right'].map((direction) => (
                        <>
                            <SplitButton
                                key={direction}
                                id={`dropdown-button-drop-${direction}`}
                                drop={direction}
                                variant="secondary"
                                title={`Drop ${direction}`}
                            >
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                            </SplitButton>{' '}
                        </>
                    ))}
                </div>
            </>
        </>

    )
}

export default Dropdowns