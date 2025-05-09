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







// // src/components/Dashboard.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Dashboard() {
//   const [blogs, setBlogs] = useState([]);
  
//   useEffect(() => {
//     axios.get('http://localhost:3001/blogs')
//       .then((response) => setBlogs(response.data.blogs))
//       .catch((error) => alert('Error fetching blogs'));
//   }, []);
  
//   return (
//     <div style={{ padding: '50px', textAlign: 'center' }}>
//       <h2>Dashboard</h2>
//       <ul>
//         {blogs.map((blog) => (
//           <li key={blog.id}>
//             {blog.title} - {blog.content}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Dashboard;
