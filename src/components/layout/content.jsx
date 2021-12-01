
// content.jsx
// file provides view of content for the BitSights application

import React, {  } from 'react';

import DateRange from '../dateInput';
import Insight from '../insight';

const Content = ({id}) => {
  return <section id={id} data-testid={id} >
    <p>BitSights application content</p>
    <DateRange/>
    <Insight/>
  </section>;
};

export default Content;