import React from 'react';

import YouTubeAPI from 'youtube-api-search';

import { Grid, Row, Col, Navbar } from 'react-bootstrap';
import { SearchBar } from '../searchbar/SearchBar';
import { VideoList } from '../videolist/VideoList';
import { VideoDetails } from '../videodetails/VideoDetails';
import { Constants } from '../../js/Constants';

import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        
        // updating the base videos state with the data from cat videos
        YouTubeAPI({ key: Constants.API_KEY, term: 'cats' }, (videos) => {

            let selectedVideo = null;

            if (videos.length > 0) {
                selectedVideo = videos[0];
            }

            this.setState({
                videos: videos,
                selectedVideo: selectedVideo
            })
        });
    }

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
                    <Row>
                        <Col xs={12} md={7}>
                            <VideoDetails video={ this.state.selectedVideo } />                 
                        </Col>
                        <Col xs={0} md={1}>
                        </Col>
                        <Col xs={12} md={4}>
                            <VideoList
                                onVideoSelect={selectedVideo => this.setState({ selectedVideo }) }
                                videos={this.state.videos} />
                        </Col>  
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App;