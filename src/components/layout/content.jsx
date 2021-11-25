
// content.jsx
// file provides view of content for the BitSights application

import React, {  } from 'react';

const Content = ({id}) => {
  return <section id={id} data-testid={id} >
    <p>BitSights application content</p>
  </section>;
};

export default Content;