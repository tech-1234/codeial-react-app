import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styles from '../styles/home.module.css';
import { Comment, Loader, FriendsList } from '../components';
import { getPosts } from '../api';
import { useAuth } from '../hooks/index';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState([]);
  const auth = useAuth();
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
    <div className={styles.home}>
      <div className={styles.postsList}>
        {posts.map((post) => (
          <div className={styles.postWrapper} key={`post-${post._id}`}>
            <div className={styles.postHeader}>
              <div className={styles.postAvatar}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="user-pic"
                />
                <div>
                  <Link
                    // to={`/user/${post.user._id}`}
                    // state={{ user: post.user }}
                    // className={styles.postAuthor}
                    to={{
                      pathname: `/user/${post.user._id}`,
                      state: {
                        user: post.user,
                      },
                    }}
                    className={styles.postAuthor}
                  >
                    {post.user.name}
                  </Link>
                  <span className={styles.postTime}>a minute ago</span>
                </div>
              </div>
              <div className={styles.postContent}>{post.content}</div>
              <div className={styles.postActions}>
                <div className={styles.postLike}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/889/889140.png"
                    alt="likes-icon"
                  />
                  <span>5</span>
                </div>
                <div className={styles.postCommentsIcon}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2190/2190552.png"
                    alt="comments-icon"
                  />
                  <span>2</span>
                </div>
              </div>
              <div className={styles.postCommentBox}>
                <input placeholder="Start typing a comment" />
              </div>
              <div className={styles.postCommentsList}>
                {post.comments.map((comment) => {
                  <Comment comment={comment} />;
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
      {auth.user && <FriendsList />}
    </div>
  );
};

// Home.propTypes = {
//   posts: PropTypes.array.isRequired,
// };
export default Home;
