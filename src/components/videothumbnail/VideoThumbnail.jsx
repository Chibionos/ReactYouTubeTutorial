import React, { Component } from 'react';
import { Row, Media, Well } from 'react-bootstrap'

export class VideoThumbnail extends Component {

    constructor(props) {
        super(props);

        console.log("Video Thumbnail Props");
        console.log(props);

        this.state = {
            video: props.video,
            onVideoSelect: props.onVideoSelect
        };
    }

    render() {

        const imgUrl = this.state.video.snippet.thumbnails.default.url;
        const imgWidth = this.state.video.snippet.thumbnails.default.width;
        const imgHeight = this.state.video.snippet.thumbnails.default.height;
        const title = this.state.video.snippet.title;

        return (
            <Row onClick={() => {
                this.state.onVideoSelect(this.state.video);
            }} >
                <Well>
                    <Media>
                        <Media.Left>
                            <img width={imgWidth} height={imgHeight} src={imgUrl} alt="" />
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>{title}</Media.Heading>
                        </Media.Body>
                    </Media>
                </Well>
            </Row>
        );
    }
}

export default VideoThumbnail;