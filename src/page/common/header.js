import React, {Component} from 'react';
import {Grid, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class extends Component {
    render() {
        return (
            <Navbar inverse fixedTop>
                <Grid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">風月有夢</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <ul>
                        <li><Link to="/dictionary"><i className="fa fa-book"></i>目录</Link></li>
                        <li><Link to="/about"><i className="fa fa-user-circle-o"></i>关于我</Link></li>
                    </ul>
                </Grid>
            </Navbar>
        )
    }
}