import React from 'react';

const ArticleListItems = (props) => {
    return(
        <div>
            <li className="article">
                <h2><a href={props.url}>{props.headline}</a></h2>
                <p>{props.snippet}</p>
            </li>
        </div>
    )
}

export default ArticleListItems;