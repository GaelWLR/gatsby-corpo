exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query ArticlesPage {
      articles: allContentfulArticle(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  data.articles.edges.forEach(edge => {
    const slug = edge.node.slug;

    actions.createPage({
      path: `/actualites/${slug}`,
      component: require.resolve(`./src/pages/actualites/[slug].js`),
      context: { slug },
    });
  });
};
