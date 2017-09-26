import React, { Component } from 'react';
import { Well, Row, ResponsiveEmbed } from 'react-bootstrap'

export class VideoDetails extends Component {

    constructor(props) {
        super(props);

        this.state = { video: props.video };
    }

    componentWillReceiveProps({ video }) {
        console.log("Video Details");
        console.log(video);
        this.setState({ video });
    }

    render() {

        if (this.state && !this.state.video) {
            return <div>Loading...</div>;
        }

        const videoUrl = `https:/www.youtube.com/embed/${this.state.video.id.videoId}`;
        const desc = this.state.video.snippet.description;
        const title = this.state.video.snippet.title;

        return (
          <Row>
            <Row>
                <ResponsiveEmbed a16by9>
                    <iframe src={videoUrl}></iframe>
                </ResponsiveEmbed>
            </Row>

            <Row>
                <Well>
                    <h4>{title}</h4>
                    <Row>
                        <p>{desc}</p>
                    </Row>
                </Well>
            </Row>


          </Row>
        );
    }
}

export default VideoDetails;