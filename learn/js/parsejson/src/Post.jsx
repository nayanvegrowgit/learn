import { useState, useEffect } from 'react';

import './Post.css'
import SearchBar from './SearchBar';

function Post({ listItems , searchtext}) {
    const filtered = listItems.filter((item) =>
      item.title.toLowerCase().includes(searchtext));   
  console.log(filtered);
  return (
    <ul>{(filtered.map((po) => <li key={po.id}>{po.title}</li>))}</ul>
  );
}
export default Post