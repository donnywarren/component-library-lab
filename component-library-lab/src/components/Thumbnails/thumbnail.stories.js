import React from 'react';
import { storiesOf } from '@storybook/react';

import Thumbnail from './thumbnail.js';


storiesOf('Thumbnail', module)

  .add('email', () => <Thumbnail label="Primary" test="primary" value="email" />)
  .add('salad', () => <Thumbnail label="Primary" test="primary" value="email" />)
  .add('email', () => <Thumbnail label="Primary" test="primary" value="email" />)
  .add('email', () => <Thumbnail label="Primary" test="primary" value="email" />)

