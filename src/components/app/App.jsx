import React from 'react';

import { Grid, Row, Col, Navbar } from 'react-bootstrap'
import { SearchBar } from '../searchbar/SearchBar'

import logo from '../../assets/logo.svg';

import './App.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="">You Tube API Tutorial</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Form>
                            <SearchBar/>
                        </Navbar.Form>
                    </Navbar.Collapse>

                </Navbar>

                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <div className = "App">
                                <div className = "App-header">
                                    <img src = { logo } className = "App-logo" alt = "logo" />
                                    <h2> Welcome to React </h2> 
                                    <h1> Something </h1>
                                </div>
                                <p className = "App-intro" > To get started, edit <code> src / App.js </code> and save to reload. </p> 
                            </div>                    
                        </Col>                        
                        <Col xs={6} md={4}>
                            <div className = "App">
                                <div className = "App-header">
                                    <img src = { logo } className = "App-logo" alt = "logo" />
                                    <h2> Welcome to React </h2> 
                                    <h1> Something </h1>
                                </div>
                                <p className = "App-intro" > To get started, edit <code> src / App.js </code> and save to reload. </p> 
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App;