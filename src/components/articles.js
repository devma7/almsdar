import React from "react"
import Link from "gatsby"

export default  class Articles extends React.Component{
    render(){
        let articles = this.props.articles.map((article,i)=> 
            <Article key={i} 
            src={article.src} 
            cat={article.cat} 
            title={article.title} 
            text={article.text}
            link={article.link}
            readmore={article.readmore}>
            </Article> 
        )

        return (
            <div className="container mt-4">
                <div className="row">
                <div className="col-md-8">
                <h2 className="primary-color bold home-posts-title mb-4">{this.props.newArticles}</h2>
                  {articles}
                </div>
                <div className="col-md-4 mt-4 search">
                   <input name="search" className="d-block w-100 mb-4" type="text" placeholder={this.props.search} />
                   <button type="button" className="btn primary-bg text-white d-block w-100">{this.props.search}</button>
                </div>
                </div>
            </div>
        )
    }
}

 class Article extends React.Component{
    render(){
        let text = this.props.text.replace( /(<([^>]+)>)/ig, '');
        text = text.substring(0, 100);
        return (
            <article className="mb-4 text-right">
                <div className="row">
                <div className="col-md-6">
                    <img className="w-100" src={this.props.src} />
                </div>
                <div className="col-md-6">
                    <h4 className="post-cat">{this.props.cat}</h4>
                    <h3><a className="normal-color blue-hover" href={this.props.link}>{this.props.title}</a></h3>
                    <div>{text}</div>
                    <a className="readmore normal-color" href={this.props.link}>
                        {this.props.readmore}
                        <i className="fa fa-chevron-left mx-3" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            </article>
        )
    }
} 

export class FullArticle extends React.Component{
    render(){
        // let text = this.props.text.replace( /(<([^>]+)>)/ig, '');
        // text = text.substring(0, 100);
        return (

            <div className="container mt-4 full-article">
            <div className="row">
            <div className="col-md-8">
            {/* <h2 className="primary-color bold home-posts-title mb-4">{this.props.newArticles}</h2> */}
            <article className="mb-4 text-right">
                <div className="row">
                <div className="col-md-12">
                    <img className="w-100" src={this.props.src} />
                    <h4 className="post-cat">{this.props.cat}</h4>
                    <h3>{this.props.title}</h3>
                    <div  dangerouslySetInnerHTML={{__html: this.props.text}} />
                </div>
                </div>
            </article>
            </div>
            <div className="col-md-4 mt-4 search">
               <input name="search" className="d-block w-100 mb-4" type="text" placeholder={this.props.search} />
               <button type="button" className="btn primary-bg text-white d-block w-100">{this.props.search}</button>
            </div>
            </div>
        </div>
        )
    }
}
