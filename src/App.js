import React, {useState} from 'react';
import './App.css';
import Post from './Post';

function App() {
  const[posts, setPosts] = useState([
    {
      username: "ajax_bhaga",
      caption: "Never Give Up!",
      imageUrl: "https://i.pinimg.com/736x/7e/29/cd/7e29cda50f0f3704ef86c7061612f05b.jpg",
    },
    {
      username: "aj_bhagat_",
      caption: "Sometimes life is too uncertain to have regrets",
      imageUrl: "https://i.pinimg.com/originals/88/db/29/88db29b9c4344ef72011df281fb03936.jpg",
    },
    {
      username: "bhaga_Aj",
      caption: "If you don’t give up, you’ll get through",
      imageUrl: "https://i.pinimg.com/originals/e6/ac/b4/e6acb49919188014d955cb52f1e4572f.jpg",
    }
  ]);
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
        posts.map(post=>(
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }
      
    </div>
  );
}

export default App;
