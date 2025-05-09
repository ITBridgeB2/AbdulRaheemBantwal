// // src/components/BlogForm.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';

// function BlogForm() {
//   const [form, setForm] = useState({ title: '', content: '' });
//   const userId = localStorage.getItem('userId');
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     if (id) {
//       axios.get(`http://localhost:3001/blog/${id}`)
//         .then((res) => setForm(res.data))
//         .catch((err) => alert('Failed to load blog'));
//     }
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (id) {
//         await axios.put(`http://localhost:3001/blog/${id}`, form);
//         alert('Blog updated!');
//       } else {
//         await axios.post('http://localhost:3001/post-blog', { ...form, userId });
//         alert('Blog created!');
//       }
//       navigate('/dashboard');
//     } catch (err) {
//       alert('Error saving blog');
//     }
//   };

//   const formStyle = {
//     maxWidth: '600px',
//     margin: '0 auto',
//     padding: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     backgroundColor: '#f9f9f9',
//   };

//   const inputStyle = {
//     width: '100%',
//     padding: '12px',
//     margin: '10px 0',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//     fontSize: '16px',
//   };

//   const buttonStyle = {
//     width: '100%',
//     padding: '12px',
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '16px',
//   };

//   return (
//     <div style={{ padding: '50px', textAlign: 'center' }}>
//       <h2>{id ? 'Edit Blog' : 'Create Blog'}</h2>
//       <form onSubmit={handleSubmit} style={formStyle}>
//         <input
//           type="text"
//           placeholder="Title"
//           value={form.title}
//           onChange={(e) => setForm({ ...form, title: e.target.value })}
//           style={inputStyle}
//         />
//         <textarea
//           placeholder="Content"
//           value={form.content}
//           onChange={(e) => setForm({ ...form, content: e.target.value })}
//           style={{ ...inputStyle, height: '200px' }}
//         />
//         <button type="submit" style={buttonStyle}>Save</button>
//       </form>
//     </div>
//   );
// }

// export default BlogForm;







// src/components/BlogForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function BlogForm() {
  const [form, setForm] = useState({ title: '', content: '' });
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/blog/${id}`)
        .then((res) => setForm(res.data))
        .catch(() => alert('Failed to load blog'));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`http://localhost:3001/blog/${id}`, form);
        alert('Blog updated!');
      } else {
        await axios.post('http://localhost:3001/post-blog', { ...form, userId });
        alert('Blog created!');
      }
      navigate('/dashboard');
    } catch {
      alert('Error saving blog');
    }
  };

  const formStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '30px',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease-in-out',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '16px',
    transition: 'border 0.3s ease',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'transform 0.2s, background-color 0.3s',
  };

  const containerStyle = {
    padding: '50px',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #f0f9ff 0%, #cbebff 100%)',
    minHeight: '100vh',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ marginBottom: '20px' }}>{id ? 'Edit Blog' : 'Create Blog'}</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          style={inputStyle}
        />
        <textarea
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          style={{ ...inputStyle, height: '200px', resize: 'vertical' }}
        />
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.transform = 'scale(1.03)')}
          onMouseOut={(e) => (e.target.style.transform = 'scale(1.0)')}
        >
          Save 
        </button>
      </form>
    </div>
  );
}

export default BlogForm;
