import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { getUserPosts, deletePost } from './api';
import PostCard from './PostCard';
import "./UserPost.css"

export default function UserPosts() {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user?.id) return;

    const fetchPosts = async () => {
      try {
        const { data } = await getUserPosts(user.id);
        setPosts(data);
        setError('');
      } catch (err) {
        setError('Failed to load your posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [user?.id]);

  const handleDelete = async (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await deletePost(postId);
        setPosts(posts.filter(post => post.id !== postId));
      } catch (err) {
        setError('Failed to delete post');
        console.error(err);
      }
    }
  };

  if (!user) {
    return (
      <div className="container py-5">
        <div className="alert alert-warning">
          Please login to view your posts
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="full-page-loader">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="user-posts container py-5">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h1>My Posts</h1>
        <Link to="/create-post" className="btn btn-primary">
          Create New Post
        </Link>
      </div>
      
      {error && (
        <div className="alert alert-danger mb-4">{error}</div>
      )}
      
      {posts.length === 0 ? (
        <div className="glass-card p-5 text-center">
          <h3 className="mb-3">You haven't created any posts yet</h3>
          <Link to="/create-post" className="btn btn-primary">
            Create Your First Post
          </Link>
        </div>
      ) : (
        <div className="posts-grid">
          {posts.map(post => (
            <div key={post.id} className="post-wrapper">
              <PostCard post={post} />
              <div className="post-actions mt-3">
                <Link 
                  to={`/edit-post/${post.id}`} 
                  className="btn btn-outline btn-sm"
                >
                  Edit
                </Link>
                <button 
                  onClick={() => handleDelete(post.id)}
                  className="btn btn-outline btn-sm danger"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}