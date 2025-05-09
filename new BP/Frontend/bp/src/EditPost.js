import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { getPostById, updatePost, uploadImage } from './api';

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'General',
    image: null,
    imagePreview: '',
    currentImage: ''
  });
  
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await getPostById(id);
        
        // Verify the current user is the author
        if (data.author_id !== user?.id) {
          navigate('/my-posts');
          return;
        }

        setFormData({
          title: data.title,
          content: data.content,
          category: data.category,
          image: null,
          imagePreview: data.image_path || '',
          currentImage: data.image_path || ''
        });
      } catch (err) {
        setError('Failed to load post');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, user?.id, navigate]);

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
      let imagePath = formData.currentImage;
      
      // Upload new image if selected
      if (formData.image) {
        const { data } = await uploadImage(formData.image);
        imagePath = data.path;
      }

      // Update post
      await updatePost(id, {
        title: formData.title,
        content: formData.content,
        category: formData.category,
        image_path: imagePath || null
      });

      navigate('/my-posts');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update post');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="full-page-loader">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="edit-post container py-5">
      <div className="glass-card p-4 p-md-5">
        <h1 className="mb-4">Edit Post</h1>
        
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
            {(formData.imagePreview || formData.currentImage) && (
              <div className="mt-3">
                <img 
                  src={formData.imagePreview || formData.currentImage} 
                  alt="Current" 
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
                  Updating...
                </>
              ) : 'Update Post'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}