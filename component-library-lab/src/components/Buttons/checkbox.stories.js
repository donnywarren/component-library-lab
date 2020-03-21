import React from 'react';
import { storiesOf } from '@storybook/react';
import "./checkbox.css"

import Checkbox from './checkbox';


storiesOf('Checkbox', module)
  .add("Checkbox 1", () => (<Checkbox type="checkbox1" checkStyle="checkmark" boxColor="container" />))
  .add("Checkbox 2", () => (<Checkbox type="checkbox2" checkStyle="checkmarkBlue" boxColor="containerBlue" />))
  .add("Checkbox 3", () => (<Checkbox type="checkbox3" checkStyle="checkmark" boxColor="container" label="Don't show this popup again" />));


