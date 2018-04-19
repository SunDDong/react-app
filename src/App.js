import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button, Nav, NavItem} from 'react-bootstrap';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar inverse fixedTop>
                    <Grid>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="/">React App</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Nav bsStyle="pills" activeKey={1}>
                            <NavItem eventKey={1} href="/home">导航条目 1 的内容</NavItem>
                            <NavItem eventKey={2} title="Item">导航条目 2 的内容</NavItem>
                            <NavItem eventKey={3} disabled>导航条目 3 的内容</NavItem>
                        </Nav>
                    </Grid>
                </Navbar>
                <Jumbotron>
                    <Grid>
                        <h1>Welcome to React</h1>
                        <p>
                            <Button
                                bsStyle="success"
                                bsSize="large"
                                href="http://react-bootstrap.github.io/components.html"
                                target="_blank">
                                View React Bootstrap Docs
                            </Button>
                        </p>
                    </Grid>
                </Jumbotron>
            </div>
        );
    }
}

export default App;
