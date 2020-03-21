import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from './form.js';


storiesOf('Form', module)

  .add('email', () => <Form label="Primary" test="primary" value="email" />)
  .add('salad', () => <Form label="Primary" test="primary" value="email" />)
  .add('email', () => <Form label="Primary" test="primary" value="email" />)
  .add('email', () => <Form label="Primary" test="primary" value="email" />)

