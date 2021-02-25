import React from "react"
import * as  constants from "./../constants/constants.json"


export default  class Header extends React.Component{
    render(){
        return (
            <header className="container">
                <nav className="navbar navbar-expand-lg p-0">
                <a className="navbar-brand primary-color" href={constants.baseurl}>{this.props.logo}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Menu items={this.props.menu}></Menu>
                <div className="search-toggle">
                <i className="searching-icon fa fa-search"></i>
                </div>
                </nav>
            </header>
        )
    }
}

class Menu extends React.Component{
    render(){
        let items = this.props.items;
        let nav = items.map((e,i)=>  <a key={i} className="nav-link" href="#">{e}</a> )
        return(
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                {nav}
            </div>
          </div>
        )
    }
}