import React, {useState, useEffect} from 'react';
import './App.css';
import Post from './Post';
import db from './firebase';

function App() {
  const[posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot =>{
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    });
  }, []);

  return (
    <div className="app">
      
      <div className="app_header">
          <img className="app_headerImage"
          src="https://v2.droproball.com/wp-content/uploads/2020/04/instagram-text-logo.png"
          alt=''
          />
      </div>
      <h1>Instagram Clone</h1>
      {
        posts.map(({id, post})=>(
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }

    </div>
  );
}

export default App;
