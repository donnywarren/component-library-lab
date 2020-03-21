import React from 'react';
import { storiesOf } from '@storybook/react';
import "./checkbox.css"

import Checkbox from './checkbox';


storiesOf('Checkbox', module)
  .add("Checkbox 1", () => (<Checkbox type="checkbox1" label="" />))





  // import React from "react";
  // import { storiesOf } from "@storybook/react";
  // import Checkbox from "./Checkbox";
  // import "./Checkbox.css";
  // storiesOf("Checkboxes", module)
  // .add("Checkbox 1", () => (<Checkbox type="checkbox1" label="" />))
//   .add("Checkbox 2", () => (<Checkbox type="checkbox2" label="" />))
//   .add("Checkbox 3", () => (<Checkbox type="checkbox3" label="Don't show this popup again" />));