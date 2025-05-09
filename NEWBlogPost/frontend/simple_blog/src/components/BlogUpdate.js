// // src/components/BlogUpdate.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// function BlogUpdate() {
//   const { id } = useParams();
//   const [blog, setBlog] = useState({ title: '', content: '' });
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get(`http://localhost:3001/blogs/${id}`)
//       .then((response) => {
//         setBlog(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching blog details', error);
//       });
//   }, [id]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.put(`http://localhost:3001/blogs/${id}`, blog)
//       .then((res) => {
//         alert('Blog updated successfully');
//         navigate('/dashboard');
//       })
//       .catch((err) => {
//         alert('Error updating blog');
//         console.error(err);
//       });
//   };

//   return (
//     <div className="form-container">
//       <h2>Edit Blog</h2>
//       <form onSubmit={handleSubmit} className="form">
//         <input
//           type="text"
//           placeholder="Title"
//           value={blog.title}
//           onChange={(e) => setBlog({ ...blog, title: e.target.value })}
//           className="form-input"
//         />
//         <textarea
//           placeholder="Content"
//           value={blog.content}
//           onChange={(e) => setBlog({ ...blog, content: e.target.value })}
//           className="form-input"
//         />
//         <button type="submit" className="btn">Update Blog</button>
//       </form>
//     </div>
//   );
// }

// export default BlogUpdate;
    




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function BlogUpdate() {
  const { id } = useParams(); // blog ID from URL
  const [blog, setBlog] = useState({ title: '', content: '' });
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user')); // get logged-in user

  useEffect(() => {
    if (!user) {
      alert('You must be logged in');
      navigate('/login');
      return;
    }

    // Fetch blog by ID to pre-fill form
    axios.get(`http://localhost:3001/get-blog/${id}`)
      .then((response) => {
        const blogData = response.data;

        // ❗Check if current user owns the blog
        if (blogData.user_id !== user.userId) {
          alert('You are not allowed to edit this blog');
          navigate('/dashboard');
        } else {
          setBlog({ title: blogData.title, content: blogData.content });
        }
      })
      .catch((error) => {
        alert('Error fetching blog data');
        console.error(error);
        navigate('/dashboard');
      });
  }, [id, navigate, user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:3001/update-blog/${id}`, {
      title: blog.title,
      content: blog.content,
      userId: user.userId // ✅ Send userId for ownership check
    })
      .then(() => {
        alert('Blog updated successfully');
        navigate('/dashboard');
      })
      .catch((err) => {
        alert(err.response?.data?.message || 'Error updating blog');
        console.error(err);
      });
  };

  return (
    <div className="form-container">
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Title"
          value={blog.title}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          className="form-input"
          required
        />
        <textarea
          placeholder="Content"
          value={blog.content}
          onChange={(e) => setBlog({ ...blog, content: e.target.value })}
          className="form-input"
          required
        />
        <button type="submit" className="btn">Update Blog</button>
      </form>
    </div>
  );
}

export default BlogUpdate;
