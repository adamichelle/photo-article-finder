import React from 'react';
const unsplashAPIKeY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
const nyTimesAPIKey = process.env.REACT_APP_NYTIMES_API_KEY;

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
            loading: false,
            error: null
        }
    
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.fetchPhoto(this.state.searchTerm);
        this.fetchArticles(this.state.searchTerm);

        this.setState({searchTerm: ""});
    }

    fetchPhoto(searchTerm) {
        this.setState({loading: true}, () => {
            this.props.addSpinner(this.state.loading);
            fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchTerm}&client_id=${unsplashAPIKeY}`)
            .then((response) => { 
                if(response.ok) {
                    return response.json(); 
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then((data) => {
                this.props.addPhoto(data.results[0], searchTerm);
            })
            .catch((error) => { 
                this.setState({error, loading: false}, 
                () => { 
                    this.props.handleErrorsPic(this.state.error); 
                    this.props.addSpinner(this.state.loading);
                })
            })
        })
    }

    fetchArticles(searchTerm) {
        this.setState({loading: true}, () => {
            this.props.addSpinner(this.state.loading);
            fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=${nyTimesAPIKey}`)
            .then((response) => { 
                if(response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong...')
                }
            })
            .then((data) => {
                this.props.addArticles(data.response.docs);
            })
            .catch((error) => {
                this.setState({error, loading:false}, 
                () => { 
                    this.props.handleErrorsArticle(this.state.error); 
                    this.props.addSpinner(this.state.loading);
            })
            })
        })
    }

    render() {
        return(
            <form className="search-form" onSubmit={this.handleSubmit}>
                <input
                type="text"
                className="search-input"
                id="search-keyword"
                name="search-keyword"
                value={this.state.searchTerm}
                placeholder={"e.g. Android"}
                onChange={event => {this.setState({searchTerm: event.target.value})}}
                />
                <input className="submit-btn" type="submit" value="Submit" />
            </form>        
        )
    }
}

export default SearchBar;