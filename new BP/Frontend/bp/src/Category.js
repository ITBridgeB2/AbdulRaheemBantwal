import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPostsByCategory } from './api';
import PostCard from './PostCard';

export default function Category() {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await getPostsByCategory(category);
        setPosts(data);
        setError('');
      } catch (err) {
        setError('Failed to load posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [category]);

  if (loading) {
    return (
      <div className="full-page-loader">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="category-page container py-5">
      <h1 className="mb-4 text-capitalize">{category} Posts</h1>
      
      {error && (
        <div className="alert alert-danger mb-4">{error}</div>
      )}
      
      {posts.length === 0 ? (
        <div className="glass-card p-5 text-center">
          <h3>No posts found in this category</h3>
          <p className="mt-3">Be the first to create a post in this category!</p>
        </div>
      ) : (
        <div className="posts-grid">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}