import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Photo from './components/Photo';
import ArticleList from './components/ArticleList';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMsg from './components/ErrorMsg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: "",
      articles: "",
      loading: false,
      errorPic: null,
      errorArticle: null,
      picErrorMsg: "",
      articleErrorMsg: ""
    }

    this.addPhoto = this.addPhoto.bind(this);
    this.addArticles = this.addArticles.bind(this);
    this.addSpinner = this.addSpinner.bind(this);
    this.handleErrorsPic = this.handleErrorsPic.bind(this);
    this.handleErrorsArticle = this.handleErrorsArticle.bind(this);
  }

  addSpinner(isLoading) {
    this.setState({loading: isLoading});
  }

  addPhoto(photoInfo, searchTerm) {
   const photo = <Photo url={photoInfo.urls.small} name={photoInfo.user.name} link={photoInfo.user.links.html} caption={searchTerm}/>
   this.setState({
     photo: photo,
     loading: false
   })
  }

  addArticles(articlesArray, searchTerm) {
    const articlesList = <ArticleList articlesList={articlesArray}/>
    this.setState({
      articles: articlesList,
      loading: false
    })
  }

  handleErrorsPic(error) {
    const picErrorMsg = <ErrorMsg errorMsg={error.message} type={"photo"}/>;
    this.setState({errorPic:true, picErrorMsg: picErrorMsg})
  }

  handleErrorsArticle(error) {
    const articleErrorMsg = <ErrorMsg errorMsg={error.message} type={"article"} />;
    this.setState({errorArticle:true, articleErrorMsg: articleErrorMsg})
  }

  render() {
    return (
      <div>
        <header className="mast-head">
          <h1> What are you interested in today?</h1>
          <div className="site-container">
            <SearchBar 
              addPhoto={this.addPhoto} 
              addArticles={this.addArticles} 
              addSpinner={this.addSpinner} 
              handleErrorsPic={this.handleErrorsPic}
              handleErrorsArticle={this.handleErrorsArticle}
            />
          </div>
        </header>

        <div className="site-container">
          <div className="response-container">

            {this.state.errorPic ? this.state.picErrorMsg : ""}
            {this.state.errorArticle ? this.state.articleErrorMsg : ""}
            {this.state.loading ? <LoadingSpinner /> : this.state.photo}
            {this.state.loading ? <LoadingSpinner /> : this.state.articles}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
