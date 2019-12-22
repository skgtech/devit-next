import React from 'react'
import { storiesOf } from '@storybook/react'

import Menu from './Menu'

storiesOf(`Menu block`, module).add(`default`, () => (
  <Menu date={''} tickets={{ enabled: true, url: '' }} />
))
