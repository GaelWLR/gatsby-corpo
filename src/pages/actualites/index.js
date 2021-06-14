import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import ArticleCard from '../../components/ArticleCard';

export default function News({ data }) {
  const articles = data.articles.edges;

  return (
    <Layout>
      <div className='flex-grow mt-4'>
        <div className='container grid grid-cols-3 gap-2 mx-auto'>
          {articles.map(article => (
            <ArticleCard article={article} key={article.node.id} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ArticlesPage {
    articles: allContentfulArticle(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          id
          title
          slug
          thumbnail {
            fluid(maxWidth: 980) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
