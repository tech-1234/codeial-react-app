const Home = () => {
  return (
    <div className="posts-list">
      <div className="post-wrapper">
        <div className="post-header">
          <div className="post-avatar">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="user-pic"
            />
            <div>
              <span className="post-author">Ankit</span>
              <span className="post-time">a minute ago</span>
            </div>
          </div>
          <div className="post-content">Post Content</div>
          <div className="post-actions">
            <div className="post-like">
              <img
                src="https://cdn-icons-png.flaticon.com/512/889/889140.png"
                alt="likes-icon"
              />
              <span>5</span>
            </div>
            <div className="post-comments-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2190/2190552.png"
                alt="comments-icon"
              />
              <span>2</span>
            </div>
          </div>
          <div className="post-comment-box">
            <input placeholer="Start typing a comment" />
          </div>
          <div class="post-comments-list">
            <div className="post-comments-item">
              <div className="post-comment-header">
                <span className="post-comment-author">Bill</span>
                <span className="post-comment-time">a minute ago</span>
                <span className="post-comment-likes">22</span>
              </div>
              <div className="post-comment-content">Random comment</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
