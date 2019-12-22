import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

import Hero from '../components/Hero'
// import PhotoAlbum from '../components/PhotoAlbum'
import Speakers from '../components/Speakers'
import Footer from '../components/Footer'
import Subscribe from '../components/Subscribe'
import Layout from '../components/Layout'

const PreviousPageTemplate = ({ speakers }) => {
  return (
    <Layout>
      <Hero />
      <Speakers speakers={speakers} />
      {/* <PhotoAlbum images={data.allAlbumPhoto.edges.map(({ node }) => node)} /> */}
      <Subscribe />
      <Footer />
    </Layout>
  )
}

PreviousPageTemplate.propTypes = {
  data: PropTypes.object,
}

PreviousPageTemplate.getInitialProps = async function({query}) {
  // const router = useRouter();
  const year = query.year;

  const res = await fetch(`http://localhost:1337/speakers?versions.year=${year}`);
  const data = await res.json();

  return {
    speakers: data.map(speaker => ({
      ...speaker,
      img: `http://localhost:1337${speaker.image.url}`,
    }))
  };
};

export default PreviousPageTemplate

// export const pageQuery = graphql`
//   query($year: Int!) {
//     allAlbumPhoto(filter: { year: { eq: $year } }) {
//       edges {
//         node {
//           size
//           img {
//             childImageSharp {
//               sizes(maxWidth: 342) {
//                 ...GatsbyImageSharpSizes_withWebp_tracedSVG
//               }
//             }
//           }
//         }
//       }
//     }
//     speakers: allSpeaker(sort: { fields: [last_name] }, filter: { year: { eq: $year } }) {
//       edges {
//         node {
//           first_name
//           last_name
//           url
//           img {
//             childImageSharp {
//               fixed(width: 280, height: 280) {
//                 ...GatsbyImageSharpFixed
//               }
//             }
//           }
//           tags
//           social {
//             twitter
//             homepage
//             medium
//             github
//             linkedin
//           }
//           tagline
//           year
//         }
//       }
//     }
//   }
// `
