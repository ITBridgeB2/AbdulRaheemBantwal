import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from './api';
// import CommentsSection from './CommentsSection';
import "./PostCard.css"

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await getPostById(id);
        setPost(data);
      } catch (err) {
        setError('Failed to load post');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="full-page-loader">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container py-5">
        <div className="alert alert-warning">Post not found</div>
      </div>
    );
  }

  return (
    <div className="post-detail container py-5">
      <article className="glass-card p-4 p-md-5">
        {post.image_path && (
          <div 
            className="post-image mb-4"
            style={{ backgroundImage: `url(${post.image_path})` }}
          ></div>
        )}
        
        <div className="post-meta mb-3">
          <span className="post-category">{post.category}</span>
          <span className="post-date">
            {new Date(post.created_at).toLocaleDateString()}
          </span>
        </div>
        
        <h1 className="post-title mb-3">{post.title}</h1>
        
        <div className="post-author mb-4">
          <span>By {post.author_name}</span>
        </div>
        
        <div className="post-content">
          {post.content.split('\n').map((paragraph, i) => (
            <p key={i} className="mb-3">{paragraph}</p>
          ))}
        </div>
      </article>

      {/* <CommentsSection postId={id} /> */}
    </div>
  );
}