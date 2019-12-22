import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch';

import Hero from '../components/Hero'
import GetTickets from '../components/GetTickets'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
// import Speakers from '../components/Speakers'
import Venues from '../components/Venues'
// import CallForPapers from '../components/CallForPapers'
// import CallForSponsors from '../components/CallForSponsors'
import Plan from '../components/Plan'
import Sponsors from '../components/Sponsors'
// import Partners from '../components/Partners'
import Footer from '../components/Footer'
import Subscribe from '../components/Subscribe'
import Layout from '../components/Layout'

const LandingPageTemplate = ({ sponsors }) => {
  return (
    <Layout>
      <Hero />
      <GetTickets />
      <About />
      <Testimonials />
      {/* <Speakers speakers={data.speakers.edges.map(({ node }) => node)} />
      <CallForPapers />
      <CallForSponsors /> */}
      <Venues />
      <Plan />
      <Sponsors sponsors={sponsors}/>
      {/* <Partners /> */}
      <Subscribe />
      <Footer />
    </Layout>
  )
}

LandingPageTemplate.propTypes = {
  data: PropTypes.object,
}

//     sponsors: allSponsor(filter: { year: { eq: $year } }) {
//       edges {
//         node {
//           name
//           url
//           override_height
//           type
//           img {
//             publicURL
//             childImageSharp {
//               sizes(maxWidth: 500) {
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

LandingPageTemplate.getInitialProps = async function() {
  const res = await fetch('http://localhost:1337/sponsors?featured=true');
  const data = await res.json();

  return {
    sponsors: data.map(sponsor => ({
      name: sponsor.name,
      link: sponsor.url,
      img: `http://localhost:1337${sponsor.image.url}`,
      type: sponsor.type
    }))
  };
};

export default LandingPageTemplate
