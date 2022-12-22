import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getPosts } from '../api';
import { Home, Login } from '../pages';
import { Loader, Navbar } from './';

const About = () => {
  return <h1>About</h1>;
};

const UserInfo = () => {
  return <h1>UserInfo</h1>;
};

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      if (response.success) {
        setPosts(response.data.posts);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:userId" element={<UserInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
