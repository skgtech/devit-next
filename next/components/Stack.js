import React from 'react'
import PropTypes from 'prop-types'

import { Row, Col } from 'react-flexbox-grid'

const Stack = ({ list }) => {
  return (
    <Row
      center="xs"
      css={{
        paddingTop: '30px',
        paddingBottom: '30px',
        '&:first-child': {
          paddingTop: 0,
        },
        '&:last-child': {
          paddingBottom: 0,
        },
      }}
    >
      {list.length &&
        list.map((item, index) => (
          <Col xs={4} key={index}>
            <a href={item.link} alt={item.name}>
              <img
                height={item.override_height ? item.override_height : '100px'}
                css={{
                  maxHeight: item.override_height ? item.override_height : '100px',
                  maxWidth: '100%',
                }}
                src={item.img}
              />
            </a>
          </Col>
        ))}
    </Row>
  )
}

Stack.propTypes = {
  list: PropTypes.array,
}

export default Stack
