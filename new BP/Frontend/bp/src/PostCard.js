import { Link } from 'react-router-dom';
import "./PostCard.css"

export default function PostCard({ post, className = '' }) {
  return (
    <div className={`post-card glass-card ${className}`}>
      {post.image_path && (
        <div 
          className="post-image" 
          style={{ backgroundImage: `url(${post.image_path})` }}
        ></div>
      )}
      <div className="post-content">
        <div className="post-meta">
          <span className="post-category">{post.category}</span>
          <span className="post-date">
            {new Date(post.created_at).toLocaleDateString()}
          </span>
        </div>
        <h3 className="post-title">{post.title}</h3>
        <p className="post-excerpt">
          {post.content.substring(0, 150)}...
        </p>
        <div className="post-footer">
          <span className="post-author">By {post.author_name}</span>
          <Link to={`/post/${post.id}`} className="read-more">
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}