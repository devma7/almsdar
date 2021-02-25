import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import SimpleSlider from "../components/slider"
import Articles from "../components/Articles"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import * as constants from '../constants/labels.json'
import * as menu from '../constants/menu.json'

// export default  class Home extends React.Component{



export  default function indexPage( props ) {

  const articles = props.data.allMarkdownRemark.edges
  .map((e=>{
    let src  = '#'
    let text = constants.emptyText
    if(e.node.frontmatter.featured_image)
    src = require('../../content'+e.node.frontmatter.featured_image)
    if(e.node.html)
    text = e.node.html
    return {
      src:src,
      title:e.node.frontmatter.title,
      cat:e.node.frontmatter.categories,
      text:text,
      link:e.node.frontmatter.url,
      readmore:constants.readmore,
    }
  }));
  console.log(articles);

    return (
        <Layout>
          <Header menu={menu.main} logo={constants.logo}></Header>
          <SimpleSlider></SimpleSlider>
          <Articles newArticles={constants.newArticles} search={constants.search} articles={articles}></Articles>
          <Footer></Footer>    
        </Layout>
    )
}

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            url
            date
            featured_image
            categories
          }
          html
        }
      }
    }
  }
`