import React from 'react';

const Photo = (props) => {
    return (
        <div>
            <figure>
                <img src={props.url} alt={props.caption}></img>
                <figcaption>{props.caption} by {props.name}</figcaption>
            </figure>
        </div>
    )
}

export default Photo;