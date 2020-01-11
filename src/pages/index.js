import React, { Component } from 'react'
import Helmet from 'react-helmet'
import GitHubButton from 'react-github-btn'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import ProjectListing from '../components/ProjectListing'
import SimpleListing from '../components/SimpleListing'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import projects from '../../data/projects'
import speaking from '../../data/speaking'
import podcasts from '../../data/podcasts'
import quotes from '../../data/quotes'
import tania from '../../content/images/tania-avatar.jpg'

export default class Index extends Component {
   render() {
      const { data } = this.props

      const latestPostEdges = data.latest.edges
      const popularPostEdges = data.popular.edges

      return (
         <Layout>
            <Helmet title={`${config.siteTitle} – Developer & Writer`} />
            <SEO />
            <div className="container">
               <div className="lead">
                  <div className="elevator">
                     <h1>{`Hey, I'm Tania`}</h1>
                     <p>
                        Soy un desarrollador de software de primera línea que trabaja en{' '}
                        <a href="https://github.com/taniarascia" target="_blank" rel="noopener noreferrer">
                           open source</a>{' '}
                        y <Link to="/blog">escribiendo</Link> sobre JavaScript moderno, Node.js, y desarrollo. 💾
              </p>
                     <div className="social-buttons">
                        <GitHubButton
                           href="https://github.com/yonicb"
                           data-size="large"
                           data-show-count="true"
                        >
                           yonicb
                </GitHubButton>
                     </div>
                  </div>
                  <div className="newsletter-section">
                     <img src={tania} className="newsletter-avatar" alt="Tania" />
                     <div>
                        <h3>Obtener actualizaciones</h3>
                        <p>Proyectos de código abierto y tutoriales de desarrollo</p>
                        <a className="button" href="https://taniarascia.substack.com">
                           Suscríbete
                </a>
                     </div>
                  </div>
               </div>
            </div>

            <div className="container front-page">
               <section className="section">
                  <h2>
                     Últimos artículos
              <Link to="/blog" className="view-all">
                        Ver todo
              </Link>
                  </h2>
                  <PostListing simple postEdges={latestPostEdges} />
               </section>

               <section className="section">
                  <h2>
                     Lo más popular
              <Link to="/categories/popular" className="view-all">
                        Ver todo
              </Link>
                  </h2>
                  <PostListing simple postEdges={popularPostEdges} />
               </section>

               <section className="section">
                  <h2>Proyectos de código abierto</h2>
                  <ProjectListing projects={projects} />
               </section>

               {/* <section className="section">
                  <h2>Entrevistas</h2>
                  <SimpleListing simple data={podcasts} />
               </section> */}

               {/* <section className="section">
                  <h2>Charlas</h2>
                  <SimpleListing simple data={speaking} />
               </section> */}

               <section className="section">
                  <h2>{`Other People's Opinions`}</h2>
                  <div className="quotations">
                     {quotes.map(quote => (
                        <blockquote className="quotation" key={quote.name}>
                           <p>{quote.quote}</p>
                           <cite>— {quote.name}</cite>
                        </blockquote>
                     ))}
                  </div>
               </section>
            </div>
         </Layout>
      )
   }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 7
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`