import React from 'react';
// const Timestamp = require('react-timestamp');

const ListItem = (props) => (
  <p>
    You: { props.item.message }
  </p>
)

export default ListItem;