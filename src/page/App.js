import React, {Component} from 'react';
import '../sass/index.css';
import Header from './common/header';
import Footer from  './common/footer';
import {BrowserRouter as Router} from 'react-router-dom';
import Myrouter from './router';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header key='header'/>
                    <section className="dd-section" key="section">
                        <div className="wrapper-contetn">
                            <Myrouter />
                        </div>
                    </section>
                    <Footer key='footer'/>
                </div>
            </Router>
        )
    }
}

export default App;
