import { useState, useEffect, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './Post'
import SearchBar from './SearchBar'
function App() {  
  const [searchtext, setSearchtext] = useState('');    
  const [listItems, setlistItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then(response => response.json())
      .then(postsdata => {
        setlistItems(postsdata);
      });
  }, []);
  return (
    <div>
      <h3>Posts Page</h3>
      <SearchBar hookValue={ searchtext } setMethod={ setSearchtext }  />
      <Post listItems={listItems} searchtext={ searchtext} />
    </div>    
  );
}

export default App