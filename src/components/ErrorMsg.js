import React from 'react';

const Photo = (props) => {
    if(props.type === 'photo') {
        return (
            <div className="error-no-image">
                <div>{props.errorMsg}</div>
            </div>
        )
    }

    if(props.type === 'article') {
        return (
            <div>
                <div className="error-no-articles">{props.errorMsg}</div>
            </div>
        )
    }
}

export default Photo;