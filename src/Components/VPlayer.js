import React from 'react'
import ReactPlayer from 'react-player';

const VPlayer = (props) => {
    return (
        <div className="card my-5"  style={{ width:"100%", height:"300px"}} >
            <ReactPlayer
                url={props.src}
                width="100%"
                height="200px"
                controls
                />
                <h4>{props.title}</h4>
        </div>
    )
}

export default VPlayer
