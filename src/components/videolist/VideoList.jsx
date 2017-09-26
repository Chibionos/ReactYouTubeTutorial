import React, { Component } from 'react';

import { VideoThumbnail } from '../videothumbnail/VideoThumbnail';

export class VideoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            onVideoSelect: () => { }
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            videos: nextProps.videos,
            onVideoSelect: nextProps.onVideoSelect
        });
    }

    render() {

        const videoItems = this.state.videos.map((video) => {
            return (
                <VideoThumbnail
                    key={ video.etag }
                    video={ video }
                    onVideoSelect={ this.state.onVideoSelect }
                />
            );
        });

        return (
            <div>
                { videoItems }
            </div>
        );
    }
}

export default VideoList;