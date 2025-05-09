import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { createPost, uploadImage } from './api';

export default function CreatePost() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'General',
    image: null,
    imagePreview: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          image: file,
          imagePreview: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      let imagePath = '';
      
      // Upload image if selected
      if (formData.image) {
        const { data } = await uploadImage(formData.image);
        imagePath = data.path;
      }

      // Create post
      await createPost({
        title: formData.title,
        content: formData.content,
        category: formData.category,
        author_id: user.id,
        image_path: imagePath
      });

      navigate('/my-posts');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create post');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="create-post container py-5">
      <div className="glass-card p-4 p-md-5">
        <h1 className="mb-4">Create New Post</h1>
        
        {error && (
          <div className="alert alert-danger mb-4">{error}</div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <label className="form-label">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group mb-4">
            <label className="form-label">Category</label>
            <select
              name="category"
              className="form-control"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="General">General</option>
              <option value="Technology">Technology</option>
              <option value="Travel">Travel</option>
              <option value="Food">Food</option>
              <option value="Lifestyle">Lifestyle</option>
            </select>
          </div>
          
          <div className="form-group mb-4">
            <label className="form-label">Featured Image</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={handleImageChange}
            />
            {formData.imagePreview && (
              <div className="mt-3">
                <img 
                  src={formData.imagePreview} 
                  alt="Preview" 
                  className="img-preview"
                />
              </div>
            )}
          </div>
          
          <div className="form-group mb-4">
            <label className="form-label">Content</label>
            <textarea
              name="content"
              className="form-control"
              rows="10"
              value={formData.content}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <div className="d-flex justify-content-end gap-3">
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => navigate('/my-posts')}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="loading-spinner"></span>
                  Publishing...
                </>
              ) : 'Publish Post'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}