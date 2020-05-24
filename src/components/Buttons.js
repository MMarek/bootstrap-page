import React, {useState, useEffect} from "react";
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

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}

function LoadingButton() {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    return (
        <Button
            variant="primary"
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}
        >
            {isLoading ? 'Loading…' : 'Click to load'}
        </Button>
    );
}

function Buttons() {
    return (
        <header className="block">
            <h5 className='texts text-center'>Zwykłe guziki:</h5>
            <br/>

            <>
                <div className='buttons'>
                    <Button variant="primary">Primary</Button>{' '}
                    <Button variant="secondary">Secondary</Button>{' '}
                    <Button variant="success">Success</Button>{' '}
                    <Button variant="warning">Warning</Button>{' '}
                    <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
                    <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
                    <Button variant="link">Link</Button>
                </div>
            </>

            <br/>

            <>
                <div className='buttons'>
                    <Button variant="outline-primary">Primary</Button>{' '}
                    <Button variant="outline-secondary">Secondary</Button>{' '}
                    <Button variant="outline-success">Success</Button>{' '}
                    <Button variant="outline-warning">Warning</Button>{' '}
                    <Button variant="outline-danger">Danger</Button>{' '}
                    <Button variant="outline-info">Info</Button>{' '}
                    <Button variant="outline-light">Light</Button>{' '}
                    <Button variant="outline-dark">Dark</Button>
                </div>
            </>

            <br/>

            <>
                <h3 className='texts'>Tagi przycisków:</h3>
                <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
                <Button as="input" type="button" value="Input"/>{' '}
                <Button as="input" type="submit" value="Submit"/>{' '}
                <Button as="input" type="reset" value="Reset"/>
            </>

            <br/>

            <>
                <div className="text-right mb-2">

                    <h3 className='texts'>Rozmiary:</h3>

                    <Button variant="primary" size="lg">
                        Large button
                    </Button>{' '}
                    <Button variant="secondary" size="lg">
                        Large button
                    </Button>
                </div>
                <div className='text-right'>
                    <Button variant="primary" size="sm">
                        Small button
                    </Button>{' '}
                    <Button variant="secondary" size="sm">
                        Small button
                    </Button>
                </div>
            </>

            <br/>

            <>
                <h3 className='texts'>Obejmujące całą szerokość rodzica:</h3>
                <Button variant="primary" size="lg" block>
                    Block level button
                </Button>
                <Button variant="secondary" size="lg" block>
                    Block level button
                </Button>
            </>

            <br/>

            <div className='text-center'>
                <h3 className='texts'>Stan aktywny:</h3>
                <Button variant="primary" size="lg" active>
                    Primary button
                </Button>{' '}
                <Button variant="secondary" size="lg" active>
                    Button
                </Button>
            </div>

            <br/>

            <div className='text-center'>
                <h3 className='texts'>Stan nieaktywny:</h3>
                <Button variant="primary" size="lg" disabled>
                    Primary button
                </Button>{' '}
                <Button variant="secondary" size="lg" disabled>
                    Button
                </Button>{' '}
                <Button href="#" variant="secondary" size="lg" disabled>
                    Link
                </Button>
            </div>

            <br/>

            <div className='text-center'>
                <h3 className='texts'>Do wyboru:</h3>
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
            </div>

            <br/>

            <>
                <h3 className='texts'>Niekontrolowane:</h3>
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

            <br/>
            <div className='text-right'>
                <h3 className='texts'>Grupy guzików:</h3>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary">Left</Button>
                    <Button variant="secondary">Middle</Button>
                    <Button variant="secondary">Right</Button>
                </ButtonGroup>
            </div>

            <br/>

            <h3 className='texts'>Pasek guzików:</h3>
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

            <br/>

            <div className='text-center'>
                <h3 className='texts'>Mieszanie grup guzików:</h3>
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
            </div>

            <br/>

            <>
                <h3 className='texts'>Różne rozmiary:</h3>
                <ButtonGroup size="lg" className="mb-2">
                    <Button>Left</Button>
                    <Button>Middle</Button>
                    <Button>Right</Button>
                </ButtonGroup>
                <br/>
                <ButtonGroup className="mb-2">
                    <Button>Left</Button>
                    <Button>Middle</Button>
                    <Button>Right</Button>
                </ButtonGroup>
                <br/>
                <ButtonGroup size="sm">
                    <Button>Left</Button>
                    <Button>Middle</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </>

            <br/>
            <div className='text-right'>
                <h3 className='texts'>Zagnieżdżanie:</h3>
                <ButtonGroup>
                    <Button>1</Button>
                    <Button>2</Button>

                    <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                    </DropdownButton>
                </ButtonGroup>
            </div>

            <br/>

            <h3 className='texts'>Odchylenie pionowe:</h3>
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

            <br/>

            <div className='text-center'>
                <h3 className='texts'>Loading Button:</h3>
                <LoadingButton/>
            </div>

            <br/>
            <br/>

            <Button href="/" variant="outline-danger" size='md' block>Back to main-page</Button>

        </header>
    )
}

export default Buttons