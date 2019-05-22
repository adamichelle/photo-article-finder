import React from 'react';

const Photo = (props) => {
    return (
        <div>
            <figure>
                <img src={props.url} alt={props.caption}></img>
                <figcaption>{props.caption} by <a href={props.link}>{props.name}</a> on <a href="https://unsplash.com/">Unsplash</a></figcaption>
            </figure>
        </div>
    )
}

export default Photo;