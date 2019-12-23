import React from 'react'
import { Grid } from 'react-flexbox-grid'

import Layout from '../components/Layout'
import Block from '../components/Block'
import { DarkBlockHeading } from '../components/BlockHeading'
import { DarkLeading } from '../components/Leading'
import Footer from '../components/Footer'
import Header from '../components/Header'

const CodeOfConduct = ({dateString, ticketsEnabled}) => {
  return (
    <Layout title={`Code of conduct`}>
      <Header dateString={dateString} ticketsEnabled={ticketsEnabled} />
      <Grid>
        <Block>
          <DarkBlockHeading>Code of Conduct</DarkBlockHeading>
          <DarkLeading>tl;dr: Be excellent with each other</DarkLeading>
          <p>
            All attendees, speakers, sponsors and volunteers at our conference are required to agree
            with the following code of conduct. Organisers will enforce this code throughout the
            event. We are expecting cooperation from all participants to help ensuring a safe
            environment for everybody.
          </p>

          <p>
            <b>Need Help?</b>
          </p>

          <p>If you are at the event, reach out to any team member wearing a staff t-shirt.</p>

          <p>If you are unable to, we are available to help at any time:</p>

          <ul>
            <li>
              John Economou:
              <a target="_blank" rel="noopener noreferrer" href="http://twitter.com/hsoc">
                @hsoc
              </a>
              , john[at]devitconf[dot]org
            </li>
            <li>
              Kostas Margaritis:
              <a target="_blank" rel="noopener noreferrer" href="http://twitter.com/_margaritis">
                @_margaritis
              </a>
              , kostas[at]devitconf[dot]org
            </li>
            <li>
              DEVit:
              <a target="_blank" rel="noopener noreferrer" href="http://twitter.com/devitconf">
                @devitconf
              </a>
              , report[at]devitconf[dot]org
            </li>
          </ul>

          <p>
            <b>The Quick Version</b>
          </p>

          <p>
            Our conference is dedicated to providing a harassment-free conference experience for
            everyone, regardless of gender, gender identity and expression, age, sexual orientation,
            disability, physical appearance, body size, race, ethnicity, religion (or lack thereof),
            or technology choices. We do not tolerate harassment of conference participants in any
            form. Sexual language and imagery is not appropriate for any conference venue, including
            talks, workshops, parties, Twitter and other online media. Conference participants
            violating these rules may be sanctioned or expelled from the conference
            <em>without a refund</em>
            at the discretion of the conference organisers.
          </p>

          <p>
            <b>The Less Quick Version</b>
          </p>
          <p>
            Harassment includes offensive verbal comments related to gender, age, sexual
            orientation, disability, physical appearance, body size, race, religion, sexual images
            in public spaces, deliberate intimidation, stalking, following, harassing photography or
            recording, sustained disruption of talks or other events, inappropriate physical
            contact, and unwelcome sexual attention.
          </p>

          <p>
            Participants asked to stop any harassing behavior are expected to comply immediately.
          </p>

          <p>
            Sponsors are also subject to the anti-harassment policy. In particular, sponsors should
            not use sexualised images, activities, or other material. Booth staff (including
            volunteers) should not use sexualised clothing/uniforms/costumes, or otherwise create a
            sexualised environment.
          </p>

          <p>
            If a participant engages in harassing behavior, the conference organisers may take any
            action they deem appropriate, including warning the offender or expulsion from the
            conference with no refund.
          </p>

          <p>
            If you are being harassed, notice that someone else is being harassed, or have any other
            concerns, please contact a member of conference staff immediately. Conference staff can
            be identified as they’ll be wearing branded t-shirts.
          </p>

          <p>
            Conference staff will be happy to help participants contact hotel/venue security or
            local law enforcement, provide escorts, or otherwise assist those experiencing
            harassment to feel safe for the duration of the conference. We value your attendance.
          </p>

          <p>
            We expect participants to follow these rules at conference and workshop venues and
            conference-related social events.
          </p>

          <p>
            <small>
              <em>
                Original source and credit:
                <a href="http://2012.jsconf.us/#/about">http://2012.jsconf.us/#/about</a>
                &amp;
                <a href="http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy">
                  The Ada Initiative
                </a>
                Please help by translating or improving:
                <a href="https://github.com/leftlogic/confcodeofconduct.com">
                  http://github.com/leftlogic/confcodeofconduct.com
                </a>
                This work is licensed under a
                <a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US">
                  Creative Commons Attribution 3.0 Unported License
                </a>
              </em>
            </small>
          </p>
        </Block>
      </Grid>
      <Footer />
    </Layout>
  )
}

CodeOfConduct.getInitialProps = async function() {
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

export default CodeOfConduct
