import React from 'react'
import { css } from '@emotion/core'

import Menu from './Menu'

import svg from '../public/header/screen.jpg';

const Header = ({date, ticketsEnabled}) => {
  return (
    <header
      css={css`
        background-image: linear-gradient(rgba(0, 62, 115, 0.9), rgba(0, 62, 115, 0.9)),
          url(${svg});
        background-size: cover;
        background-position: center top;
        background-repeat: no-repeat;
        min-height: 300px;
        height: auto;
        padding-top: 40px;

        @media (max-width: $screen-sm-min) {
          height: auto;
          min-height: auto;
          padding-top: 0;
        }
      `}
    >
      <Menu date={date} ticketsEnabled={ticketsEnabled} />
    </header>
  )
}

export default Header
