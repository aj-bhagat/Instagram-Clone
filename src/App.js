import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="app">
      
      <div className="app_header">
          <img className="app_headerImage"
          src="https://v2.droproball.com/wp-content/uploads/2020/04/instagram-text-logo.png"
          alt=''
          />
      </div>
      <h1>Instagram Clone</h1>
      <Post/>
    </div>
  );
}

export default App;
