import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from '../components/layout';
import blogStyles from './blog.module.scss';
import Head from '../components/head';


const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: {
          fields: publishedDate,
          order: DESC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const posts = data.allContentfulBlogPost.edges.map((edge) => {
    return (
      <li className={blogStyles.post}>
        <Link to={`/blog/${edge.node.slug}`}>
          <h2>{edge.node.title}</h2>
          <p>{edge.node.publishedDate}</p>
        </Link>
      </li>
    )
  });

  return (
    <div>
      <Layout>
        <Head title="Blog" />
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>{posts}</ol>
      </Layout>
    </div>
  )
}

export default BlogPage;