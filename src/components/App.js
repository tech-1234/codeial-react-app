import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Login } from '../pages';
import { Loader, Navbar } from './';
import { useAuth } from '../hooks';

const About = () => {
  return <h1>About</h1>;
};

const UserInfo = () => {
  return <h1>UserInfo</h1>;
};

function App() {
  const auth = useAuth();

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await getPosts();
  //     if (response.success) {
  //       setPosts(response.data.posts);
  //     }
  //     setLoading(false);
  //   };

  //   fetchPosts();
  // }, []);
  if (auth.loading) {
    return <Loader />;
  }
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home posts={[]} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:userId" element={<UserInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
