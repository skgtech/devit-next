import React from 'react'
import PropTypes from 'prop-types'

import { Row, Col } from 'react-flexbox-grid'

import Testimonial from './Testimonial'

import hugo from "../../public/new/hugo-342x342.jpg";
import rhita from "../../public/new/rita-jason-683x342.jpg";
import leonie from "../../public/new/leonie-683x342.jpg";

const Testimonials = ({ imageSrcs }) => {
  return (
    <div className="testimonials">
      <Row
        css={{
          backgroundColor: '#00629E',
          margin: 0,
          padding: 0,
        }}
      >
        <Col
          xs={3}
          css={{
            padding: 0,
            margin: 0,
          }}
        >
          <Testimonial
            text="It’s wonderful, lots of great people, great conversations and some really excellent talks!"
            name="Leonie Watson 2017"
            link="/speakers/leonie_watson"
          />
        </Col>
        <Col
          xs={6}
          css={{
            padding: 0,
            margin: 0,
          }}
        >
          <img css={{
            padding: 0,
            margin: 0,
          }} src={rhita} />
        </Col>
        <Col
          xs={3}
          css={{
            padding: 0,
            margin: 0,
          }}
        >
          <Testimonial
            text="There is mobile, there is front end, there is DevOps, databases. Very nice combination of everything."
            name="Rita Zhang 2017"
            link="/speakers/rita_zhang"
          />
        </Col>
      </Row>
      <Row
        css={{
          backgroundColor: '#00629E',
          margin: 0,
        }}
      >
        <Col
          xs={6}
          css={{
            padding: 0,
            margin: 0,
          }}
        >
          <img css={{
            padding: 0,
            margin: 0,
            display: 'block',
            width: '100%'
          }} src={leonie} />
        </Col>
        <Col
          xs={3}
          css={{
            padding: 0,
            margin: 0,
            display: 'block',
            width: '100%'
          }}
        >
          <Testimonial
            text="It’s fantastic as every year, it’s great!"
            name="Hugo Giraudel 2017"
            link="/speakers/hugo_giraudel"
          />
        </Col>
        <Col
          xs={3}
          css={{
            padding: 0,
            margin: 0,
          }}
        >
          <img css={{
            padding: 0,
            margin: 0,
            display: 'block',
            width: '100%'
          }} src={hugo} />
        </Col>
      </Row>
    </div>
  )
}

Testimonials.propTypes = {
  imageSrcs: PropTypes.object,
}

export default Testimonials
