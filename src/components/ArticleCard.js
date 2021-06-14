import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

function ArticleCard({ article }) {
  const { title, slug, thumbnail } = article.node;

  return (
    <Link to={`/actualites/${slug}`}>
      <div className='flex flex-col border rounded-lg'>
        <Img fluid={thumbnail.fluid} objectFit='cover' objectPosition='center' className='h-48' />
        <div className='p-2'>
          <span className='text-2xl font-bold'>{title}</span>
        </div>
      </div>
    </Link>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.shape({
    node: PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      thumbnail: PropTypes.any.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ArticleCard;
