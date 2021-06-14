import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../../components/Layout';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

export default function Article({ data }) {
  const { featuredImage, title, content } = data.article;

  return (
    <Layout>
      <div className='container flex-grow mx-auto mt-2'>
        <div className='text-center'>
          <Img fluid={featuredImage.fluid} objectFit='cover' objectPosition='center' className='h-72' />

          <h2 className='m-4 text-2xl font-bold'>{title}</h2>
        </div>

        <div className='py-4'>{renderRichText(content)}</div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query Article($slug: String) {
    article: contentfulArticle(slug: { eq: $slug }) {
      title
      featuredImage {
        fluid(maxWidth: 980) {
          ...GatsbyContentfulFluid
        }
      }
      content {
        raw
      }
    }
  }
`;
