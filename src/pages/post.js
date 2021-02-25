import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import SimpleSlider from "../components/slider"
import Footer from "../components/Footer"
import {FullArticle} from "../components/articles"
import * as constants from '../constants/labels.json'
import * as menu from '../constants/menu.json'

export default function Post({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const src = require('../../content'+frontmatter.featured_image)
  return (<Layout>
    <Header menu={menu.main} logo={constants.logo}></Header>
    <SimpleSlider></SimpleSlider>
    <FullArticle  
            src={src} 
            cat={frontmatter.categories} 
            title={frontmatter.title} 
            text={html}
            search={constants.search}
            html={html}
            >
      </FullArticle> 
    <Footer></Footer>    
  </Layout> )
}

export const pageQuery = graphql`
  query($pagePath: String) {
    markdownRemark(frontmatter: { url: { eq: $pagePath } }) {
      html
      frontmatter {
        title
        url
        date
        featured_image
        categories

      }
    }
  }
`

  // <div className="blog-post">
    //   <h1>{frontmatter.title}</h1>
    //   <h2>{frontmatter.date}</h2>
    //   <div
    //     className="blog-post-content"
    //     dangerouslySetInnerHTML={{ __html: html }}
    //   />
    // </div>