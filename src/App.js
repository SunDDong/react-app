import React, {Component} from 'react';
import {Grid, Navbar, Jumbotron, Button} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar inverse fixedTop>
                        <Grid>
                            <Navbar.Header>
                                <Navbar.Brand>
                                    <Link to="/">风月有梦</Link>
                                </Navbar.Brand>
                                <Navbar.Toggle />
                            </Navbar.Header>
                            <ul>
                                <li><Link to="/dictionary">目录</Link></li>
                                <li><Link to="/about">关于</Link></li>
                            </ul>
                        </Grid>
                    </Navbar>
                </Router>
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
