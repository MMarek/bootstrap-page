import React from "react";
import {
    Button,
    ButtonGroup,
    ToggleButton,
    ToggleButtonGroup,
    ButtonToolbar,
    InputGroup,
    FormControl,
    DropdownButton,
    Dropdown
} from 'react-bootstrap';


function Buttons() {
    return (
        <>
            <>
                <h3>Zwykłe guziki:</h3>
                <Button variant="primary">Primary</Button>{' '}
                <Button variant="secondary">Secondary</Button>{' '}
                <Button variant="success">Success</Button>{' '}
                <Button variant="warning">Warning</Button>{' '}
                <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
                <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
                <Button variant="link">Link</Button>
            </>

            <>
                <h3>Guziki konspektowe:</h3>
                <Button variant="outline-primary">Primary</Button>{' '}
                <Button variant="outline-secondary">Secondary</Button>{' '}
                <Button variant="outline-success">Success</Button>{' '}
                <Button variant="outline-warning">Warning</Button>{' '}
                <Button variant="outline-danger">Danger</Button>{' '}
                <Button variant="outline-info">Info</Button>{' '}
                <Button variant="outline-light">Light</Button>{' '}
                <Button variant="outline-dark">Dark</Button>
            </>

            <>
                <h3>Tagi przycisków:</h3>
                <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
                <Button as="input" type="button" value="Input"/>{' '}
                <Button as="input" type="submit" value="Submit"/>{' '}
                <Button as="input" type="reset" value="Reset"/>
            </>

            <>
                <h3>Rozmiary:</h3>
                <>
                    <div className="mb-2">
                        <Button variant="primary" size="lg">
                            Large button
                        </Button>{' '}
                        <Button variant="secondary" size="lg">
                            Large button
                        </Button>
                    </div>
                    <div>
                        <Button variant="primary" size="sm">
                            Small button
                        </Button>{' '}
                        <Button variant="secondary" size="sm">
                            Small button
                        </Button>
                    </div>
                </>
            </>

            <>
                <h3>Obejmujące całą szerokość rodzica:</h3>
                <Button variant="primary" size="lg" block>
                    Block level button
                </Button>
                <Button variant="secondary" size="lg" block>
                    Block level button
                </Button>
            </>

            <>
                <h3>Stan aktywny:</h3>
                <Button variant="primary" size="lg" active>
                    Primary button
                </Button>{' '}
                <Button variant="secondary" size="lg" active>
                    Button
                </Button>
            </>

            <>
                <h3>Stan nieaktywny:</h3>
                <Button variant="primary" size="lg" disabled>
                    Primary button
                </Button>{' '}
                <Button variant="secondary" size="lg" disabled>
                    Button
                </Button>{' '}
                <Button href="#" variant="secondary" size="lg" disabled>
                    Link
                </Button>
            </>
            <>
                <h3>Do wyboru:</h3>
                <ButtonGroup toggle className="mb-2">
                    <ToggleButton type="checkbox" defaultChecked value="1">
                        Checked
                    </ToggleButton>
                </ButtonGroup>
                <br/>
                <ButtonGroup toggle>
                    <ToggleButton type="radio" name="radio" defaultChecked value="1">
                        Active
                    </ToggleButton>
                    <ToggleButton type="radio" name="radio" value="2">
                        Radio
                    </ToggleButton>
                    <ToggleButton type="radio" name="radio" value="3">
                        Radio
                    </ToggleButton>
                </ButtonGroup>
            </>

            <>
                <h3>Niekontrolowane:</h3>
                <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
                    <ToggleButton value={1}>Checkbox 1 (pre-checked)</ToggleButton>
                    <ToggleButton value={2}>Checkbox 2</ToggleButton>
                    <ToggleButton value={3}>Checkbox 3 (pre-checked)</ToggleButton>
                </ToggleButtonGroup>
                <br/>
                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                    <ToggleButton value={1}>Radio 1 (pre-checked)</ToggleButton>
                    <ToggleButton value={2}>Radio 2</ToggleButton>
                    <ToggleButton value={3}>Radio 3</ToggleButton>
                </ToggleButtonGroup>
            </>


            <h3>Grupy guzików:</h3>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Left</Button>
                <Button variant="secondary">Middle</Button>
                <Button variant="secondary">Right</Button>
            </ButtonGroup>

            <h3>Pasek guzików:</h3>
            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="mr-2" aria-label="First group">
                    <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
                </ButtonGroup>
                <ButtonGroup className="mr-2" aria-label="Second group">
                    <Button>5</Button> <Button>6</Button> <Button>7</Button>
                </ButtonGroup>
                <ButtonGroup aria-label="Third group">
                    <Button>8</Button>
                </ButtonGroup>
            </ButtonToolbar>

            <>
                <h3>Mieszanie grup guzików:</h3>
                <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                    <ButtonGroup className="mr-2" aria-label="First group">
                        <Button variant="secondary">1</Button>{' '}
                        <Button variant="secondary">2</Button>{' '}
                        <Button variant="secondary">3</Button>{' '}
                        <Button variant="secondary">4</Button>
                    </ButtonGroup>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            type="text"
                            placeholder="Input group example"
                            aria-label="Input group example"
                            aria-describedby="btnGroupAddon"
                        />
                    </InputGroup>
                </ButtonToolbar>

                <ButtonToolbar
                    className="justify-content-between"
                    aria-label="Toolbar with Button groups">
                    <ButtonGroup aria-label="First group">
                        <Button variant="secondary">1</Button>{' '}
                        <Button variant="secondary">2</Button>{' '}
                        <Button variant="secondary">3</Button>{' '}
                        <Button variant="secondary">4</Button>
                    </ButtonGroup>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            type="text"
                            placeholder="Input group example"
                            aria-label="Input group example"
                            aria-describedby="btnGroupAddon2"
                        />
                    </InputGroup>
                </ButtonToolbar>
            </>

            <>
                <h3>Różne rozmiary:</h3>
                <ButtonGroup size="lg" className="mb-2">
                    <Button>Left</Button>
                    <Button>Middle</Button>
                    <Button>Right</Button>
                </ButtonGroup>
                <br />
                <ButtonGroup className="mb-2">
                    <Button>Left</Button>
                    <Button>Middle</Button>
                    <Button>Right</Button>
                </ButtonGroup>
                <br />
                <ButtonGroup size="sm">
                    <Button>Left</Button>
                    <Button>Middle</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </>

            <h3>Zagnieżdżanie:</h3>
            <ButtonGroup>
                <Button>1</Button>
                <Button>2</Button>

                <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>
            </ButtonGroup>

            <h3>dchylenie pionowe:</h3>
            <ButtonGroup vertical>
                <Button>Button</Button>
                <Button>Button</Button>

                <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>

                <Button>Button</Button>
                <Button>Button</Button>

                <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-2">
                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>

                <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-3">
                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>
            </ButtonGroup>
        </>
    )
}

export default Buttons

