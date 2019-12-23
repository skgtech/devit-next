import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'

import { DarkBlockHeading } from '../BlockHeading'
import BlockCTA from '../BlockCta'

import TicketsLogo from '../../public/new/tickets.svg'

const GetTickets = ({ ticketsEnabled }) => {
  return (
    <div
      css={{
        backgroundColor: '#f5f8fa',
        paddingTop: '50px',
        paddingBottom: '50px',
        color: '#57585A',
      }}
    >
      <Grid>
        <Row>
          <Col xs="6">
            <img
              css={{
                width: '80%',
              }}
              src={TicketsLogo}
              alt="Early birds tickets"
            />
          </Col>
          <Col xs="6">
            <DarkBlockHeading>Get your tickets now!</DarkBlockHeading>
            {ticketsEnabled ?
              <>
                <p className="dark">
                  Whether it’s Frontend, Backend, DevOps or Mobile that you care about, join us to learn
                  about the most modern practices and techniques. Secure your ticket now, while there is
                  still availability.
                </p>
                <BlockCTA to="/tickets">Buy tickets</BlockCTA>
              </>
              : <p className="dark">Tickets are soon to be announced. Subscribe to our mailing list to be the first to hear when they are open.</p>
            }
          </Col>
        </Row>
      </Grid>
    </div>)
}

GetTickets.propTypes = {
  enabled: PropTypes.bool,
}

export default GetTickets
