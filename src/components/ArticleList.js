import React from 'react';
import UUID from 'uuid';
import ArticleListItem from './ArticleListItem';

const ArticleList = (props) => {
    const articleItems = props.articlesList.map((article) => {
        
        return (
            <ArticleListItem 
                key={UUID()}
                url={article.web_url}
                headline={article.headline.main}
                snippet={article.snippet}
            />
        )
    });

    return (
        <div>
            <ul>
                {articleItems}
            </ul>
        </div>
    )
}

export default ArticleList;