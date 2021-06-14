import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function HeaderNavLink({ className, href, title }) {
  if (href.includes('https://')) {
    return (
      <a href={href} target='_blank' rel='noreferrer' className={`px-4 py-6 ${className}`}>
        {title}
      </a>
    );
  } else {
    return (
      <Link to={href} className={`px-4 py-6 ${className}`}>
        {title}
      </Link>
    );
  }
}

HeaderNavLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

export default HeaderNavLink;
