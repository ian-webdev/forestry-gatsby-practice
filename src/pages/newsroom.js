import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from 'gatsby';

export const query = graphql`
query MyQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          text_area
          title
          image
        }
        html
      }
    }
  }
  
`;

const newsroom = (props) => {
    const { title, text_area } = props.data.allMarkdownRemark.nodes[0].frontmatter;
    return (
        <Layout>
            <Seo title="NewsRoom" />
            <h1>{title}</h1>
            <p>{text_area}</p>
            {props.data.allMarkdownRemark.nodes.map(node => (
              <div>
                <div dangerouslySetInnerHTML={{ __html: node.html }}></div><br/>
                
              </div>
            ))}
            {/* <div dangerouslySetInnerHTML={{ __html: props.data.allMarkdownRemark.nodes[0].html }}></div> */}
        </Layout>
    );
};

export default newsroom;