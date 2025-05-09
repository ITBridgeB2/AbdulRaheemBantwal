
import "./Home.css"


import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from './api';
import PostCard from './PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [featuredPost, setFeaturedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await getAllPosts();
        setPosts(data);
        
        if (data.length > 0) {
          setFeaturedPost(data[0]);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="full-page-loader">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="home-page">
      {/* Hero Section with Parallax Effect */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title slide-in-left">Welcome to BlogSphere</h1>
          <p className="hero-subtitle slide-in-right">Discover, Create, Share</p>
          <Link to="/create-post" className="btn btn-primary hero-cta fade-in delay-1">
            Start Writing
          </Link>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="featured-section container fade-in delay-2">
          <div className="section-header">
            <h2>Featured Post</h2>
            <div className="section-divider"></div>
          </div>
          <div className="featured-post glass-card">
            {featuredPost.image_path && (
              <div 
                className="featured-image" 
                style={{ backgroundImage: `url(${featuredPost.image_path})` }}
              ></div>
            )}
            <div className="featured-content">
              <div className="post-meta">
                <span className="post-category">{featuredPost.category}</span>
                <span className="post-date">
                  {new Date(featuredPost.created_at).toLocaleDateString()}
                </span>
              </div>
              <h3 className="post-title">{featuredPost.title}</h3>
              <p className="post-excerpt">
                {featuredPost.content.substring(0, 200)}...
              </p>
              <Link to={`/post/${featuredPost.id}`} className="btn btn-outline read-more">
                Read More
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="recent-posts container fade-in delay-3">
        <div className="section-header">
          <h2>Recent Posts</h2>
          <div className="section-divider"></div>
        </div>
        <div className="posts-grid">
          {posts.slice(1).map((post, index) => (
            <PostCard 
              key={post.id} 
              post={post} 
              className={`slide-in-${index % 2 === 0 ? 'left' : 'right'}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}