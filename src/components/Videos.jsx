import React from 'react'
import ReactPlayer from "react-player";
import video from '../static/videos/Intro.mp4'

export default function Videos() {
    return (
        <div>
            <center>
                <ReactPlayer
                    url={video}
                    playing={false}
                    controls={true}
                    width={444}
                    height={673}
                />
            </center>
        </div>
    )
}
