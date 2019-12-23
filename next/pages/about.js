import React from 'react'
import { css } from '@emotion/core'
import { Grid } from 'react-flexbox-grid'

import Layout from '../components/Layout'
import Organizers from '../components/Organizers'
import Partners from '../components/Partners'
import Block from '../components/Block'
import { DarkBlockHeading } from '../components/BlockHeading'
import { DarkLeading } from '../components/Leading'
import Footer from '../components/Footer'
import Header from '../components/Header'

import svg from '../public/new/a-truly-360-conference.svg';

const About = ({dateString, ticketsEnabled}) => {
  return (
    <Layout
      title={`About page`}
      description={
        'description: Thank you for being part of DEVit. Learn here all about your favorite Web Development Conference.'
      }
    >
      <Header dateString={dateString} ticketsEnabled={ticketsEnabled} />
      <Grid>
        <Block>
          <DarkBlockHeading>What is DEVit?</DarkBlockHeading>
          <DarkLeading>
            Every year we are setting the bar higher and deliver a world-class conference on web
            development.
          </DarkLeading>
          <p>
            DEVit started in 2015 and it takes place every year in Thessaloniki, Greece. It is
            known for its top speaking talent, a mixture of world-class and world-renowned
            developers, highly specialized technology niches and developers who are on the edge
            of technology frontiers.
          </p>
          <p>
            The attendees of the conference are mostly highly trained and motivated web
            developers, representing the cream of the crop in talent South East Europe has to
            offer. DEVit, now in its fourth year, has become the defacto meeting point of all
            seasoned web development professionals.
          </p>
          <p>
            Whether it’s Frontend, UI/UX, Backend, DevOps or Mobile that you care about, join us
            to learn about the most modern practices and techniques.
          </p>
          <p>
            DEVit is a non-profit conference organized by volunteers. All proceeds are used to
            bringing top-tier speakers and organizing advanced workshops on all trending web
            technologies.
          </p>
        </Block>
      </Grid>
      <div
        css={css`
          background-image: linear-gradient(rgba(0, 62, 115, 0.9), rgba(0, 62, 115, 0.9)),
            url(/assets/images/new/about.jpg);
          background-repeat: no-repeat;
          background-size: cover;
          background-position: top;
          position: relative;
          color: white;

          padding-top: 4em;
          padding-bottom: 4em;

          text-align: center;
        `}
      >
        <Grid>
          <img
            css={css`
              max-width: 100%;
            `}
            src={svg}
            alt="DEVit"
          />
          <Organizers />
        </Grid>
      </div>
      <Grid>
        <Block>
          <DarkBlockHeading>Meet the squad</DarkBlockHeading>
          <p>
            DEVit is a collective effort of a number of people, professionals and students,
            technical and not.
          </p>
          <DarkLeading>Our volunteers</DarkLeading>
          <p>
            Without them, DEVit would never have happened. A big thank you to all people that
            offer their time, their knowledge and their energy to help organizing and run DEVit.
            In alphabetical order:
          </p>
          <p>{/* {{ site.data.team.volunteers | map: 'name' | join: ', ' }} */}</p>
        </Block>
      </Grid>
      <Partners partners={[]} weSupport={[]} />
      <Footer />
    </Layout>
  )
}

About.getInitialProps = async function() {
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

export default About
