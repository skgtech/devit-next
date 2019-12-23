import React from 'react'

import Layout from '../components/Layout'
import Block from '../components/Block'
import { DarkBlockHeading } from '../components/BlockHeading'
import { DarkLeading } from '../components/Leading'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Privacy = ({dateString, ticketsEnabled}) => {
  return (
    <Layout title={`Privacy`} description={'Our privacy terms'}>
      <Header dateString={dateString} ticketsEnabled={ticketsEnabled}/>
      <Block>
        <DarkBlockHeading>Privacy statement</DarkBlockHeading>
        <DarkLeading>
          Privacy matters but it can be confusing. This page explains our approach to privacy and
          how it affects you.
        </DarkLeading>
      </Block>
      <h2>Measuring our visitors</h2>
      <p>
        We measure visitors to our website using&nbsp;
        <a href="https://analytics.google.com/analytics/web/">Google Analytics</a>
        and <a href="https://www.facebook.com/business/learn/facebook-ads-pixel">Facebook Pixel</a>.
        These service record what pages you view within our site, how you arrived at our site and
        some basic information about your computer.
      </p>
      <p>
        The information we collect helps us understand what parts of our sites are doing well, how
        people arrive at our site and so on. Like most websites, we use this information to make our
        website better.
      </p>
      <p>
        You can learn more about&nbsp;
        <a
          title="Google Analytics' privacy policy"
          href="http://www.google.com/analytics/learn/privacy.html"
        >
          Google Analytics
        </a>
        &nbsp;or&nbsp;
        <a
          title="How to opt out of Google Analytics"
          href="https://tools.google.com/dlpage/gaoptout"
        >
          opt out if you wish
        </a>
        . Google Analytics data is automatically deleted 26 months after your last visit.
      </p>
      <p>
        Our website may link to external sites that are not operated by us. Please be aware that we
        have no control over the content and practices of these sites, and cannot accept
        responsibility or liability for their respective privacy policies.
      </p>
      <p>
        Your continued use of our website will be regarded as acceptance of our practices around
        privacy and personal information. If you have any questions about how we handle user data
        and personal information, feel free to contact us.
      </p>
      <Footer />
    </Layout>
  )
}

Privacy.getInitialProps = async function() {
  const res = await fetch('http://localhost:1337/versions?enabled=true');
  const data = await res.json();

  let dateString;
  if (data.length) {
    dateString = `${format(new Date(data[0].talksDay), 'd MMM')} - ${format(new Date(data[0].workshopsDay), 'd MMM')}, ${format(new Date(data[0].talksDay), 'yyyy')}`;
  }


  return {
    dateString,
    ticketsEnabled: data.length ? data[0].openTickets : false
  };
};

export default Privacy
