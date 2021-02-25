import React, { Component } from "react";
import Slider from "react-slick";
import { useStaticQuery, graphql } from "gatsby"
import * as constants from './../constants/labels.json'
// export default class SimpleSlider extends Component {
  export  default function SliderBlock() {
    const settings = {
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        responsive:[
          {
            breakpoint: 988,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              autoplay: true,
            }
          }
        ]
    };
    
    const data = useStaticQuery(graphql `query ListQuerySlider {
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
    }`)
    // let images = this.props.images.map((img,i)=>
    //      <Blockslide  src={img.src}> /</Blockslide>
    //  )
   
  
    const images = getSliderImages(data)
      return (<div>
        { <Slider {...settings}>
          {images}
        </Slider> }
        </div> )
      

    
  // }
}

function getSliderImages(data){
  console.log(data);
  return data.allMarkdownRemark.edges
  .map(((e,i)=> {
    let  frontmatter = e.node.frontmatter
    let src =  require('./.././../content'+frontmatter.featured_image);
    let cat  = frontmatter.categories
    let title  = frontmatter.title
    let html  = e.node.html
    return <SingleImage cat={cat} title={title} key={i} src={src} html={html} ></SingleImage>
  }));
}
class SingleImage extends Component {
  render(){
    // $(".slider-img p").hide()
    let text = this.props.html.replace( /(<([^>]+)>)/ig, '');
    text = text.substring(0, 100);
        return (
            <div className="slider-img">
                <img className="w-100 sliderimg" src={this.props.src}  alt=""/>
                <div className="float-box">
                <h4 className="post-cat">{this.props.cat}</h4>
                   <h3>{this.props.title}</h3>
                   <p>{text}</p>
                </div>
            </div>
        )
    }
}


// export const ListQuerySlider = graphql`
//   query ListQuerySlider {
//     allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             title
//             url
//             date
//             featured_image
//             categories
//           }
//           html
//         }
//       }
//     }
//   }
// `