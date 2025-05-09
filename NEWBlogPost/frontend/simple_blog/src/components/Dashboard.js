
// // src/components/Dashboard.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Dashboard() {
//   const [blogs, setBlogs] = useState([]);
//   const [editingBlog, setEditingBlog] = useState(null);
//   const [newTitle, setNewTitle] = useState('');
//   const [newContent, setNewContent] = useState('');

//   // Fetch blogs
//   const fetchBlogs = () => {
//     axios.get('http://localhost:3001/blogs')
//       .then(res => setBlogs(res.data.blogs))
//       .catch(() => alert('Error fetching blogs'));
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   // Delete blog
//   const handleDelete = (id) => {
//     if (!window.confirm('Are you sure you want to delete this blog?')) return;

//     axios.delete(`http://localhost:3001/delete-blog/${id}`)
//       .then(() => {
//         alert('Blog deleted');
//         fetchBlogs();
//       })
//       .catch(() => alert('Error deleting blog'));
//   };

//   // Start editing
//   const handleEdit = (blog) => {
//     setEditingBlog(blog.id);
//     setNewTitle(blog.title);
//     setNewContent(blog.content);
//   };

//   // Save edited blog
//   const handleSave = () => {
//     axios.put(`http://localhost:3001/update-blog/${editingBlog}`, {
//       title: newTitle,
//       content: newContent
//     })
//     .then(() => {
//       alert('Blog updated');
//       setEditingBlog(null);
//       setNewTitle('');
//       setNewContent('');
//       fetchBlogs();
//     })
//     .catch(() => alert('Error updating blog'));
//   };

//   return (
//     <div style={{ padding: '50px' }}>
//       <h2 style={{ textAlign: 'center' }}>Dashboard</h2>

//       <ul style={{ listStyle: 'none', padding: 0 }}>
//         {blogs.map((blog) => (
//           <li key={blog.id} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '15px', borderRadius: '8px' }}>
//             {editingBlog === blog.id ? (
//               <>
//                 <input
//                   type="text"
//                   value={newTitle}
//                   onChange={(e) => setNewTitle(e.target.value)}
//                   placeholder="New Title"
//                 />
//                 <br />
//                 <textarea
//                   rows="4"
//                   value={newContent}
//                   onChange={(e) => setNewContent(e.target.value)}
//                   placeholder="New Content"
//                 />
//                 <br />
//                 <button onClick={handleSave} style={{ marginRight: '10px' }}>Save</button>
//                 <button onClick={() => setEditingBlog(null)}>Cancel</button>
//               </>
//             ) : (
//               <>
//                 <h3>{blog.title}</h3>
//                 <p>{blog.content}</p>
//                 <button onClick={() => handleEdit(blog)} style={{ marginRight: '10px' }}>Edit</button>
//                 <button onClick={() => handleDelete(blog.id)}>Delete</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const navigate = useNavigate(); // For navigation to create blog page

  const fetchBlogs = () => {
    axios.get('http://localhost:3001/blogs')
      .then(res => setBlogs(res.data.blogs))
      .catch(() => alert('Error fetching blogs'));
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;

    axios.delete(`http://localhost:3001/delete-blog/${id}`)
      .then(() => {
        alert('Blog deleted');
        fetchBlogs();
      })
      .catch(() => alert('Error deleting blog'));
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog.id);
    setNewTitle(blog.title);
    setNewContent(blog.content);
  };

  const handleSave = () => {
    axios.put(`http://localhost:3001/update-blog/${editingBlog}`, {
      title: newTitle,
      content: newContent
    })
      .then(() => {
        alert('Blog updated');
        setEditingBlog(null);
        setNewTitle('');
        setNewContent('');
        fetchBlogs();
      })
      .catch(() => alert('Error updating blog'));
  };

  return (
    <div
      style={{
        padding: '50px',
        fontFamily: 'Segoe UI, sans-serif',
        background: 'linear-gradient(to bottom right, #e3f2fd, #e1f5fe)',
        minHeight: '100vh'
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '30px',
          color: '#0d47a1',
          fontSize: '2.5rem',
          textShadow: '1px 1px 2px #90caf9'
        }}
      >
        Blog Dashboard
      </h2>

      {/* Create New Blog Button */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <button
          onClick={() => navigate('/create')}
          style={{
            backgroundColor: '#43a047',
            color: '#fff',
            padding: '10px 20px',
            fontSize: '1rem',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
            transition: 'background-color 0.2s ease'
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#388e3c')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#43a047')}
        >
          + Create New Blog
        </button>
      </div>

      {/* Blog List */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {blogs.map((blog) => (
          <li
            key={blog.id}
            style={{
              border: '1px solid #90caf9',
              backgroundColor: '#ffffff',
              padding: '20px',
              marginBottom: '20px',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            {editingBlog === blog.id ? (
              <>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="New Title"
                  style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '10px',
                    borderRadius: '5px',
                    border: '1px solid #b3e5fc'
                  }}
                />
                <textarea
                  rows="4"
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="New Content"
                  style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '10px',
                    borderRadius: '5px',
                    border: '1px solid #b3e5fc'
                  }}
                />
                <div>
                  <button
                    onClick={handleSave}
                    style={{
                      backgroundColor: '#4caf50',
                      color: '#fff',
                      padding: '8px 16px',
                      borderRadius: '5px',
                      border: 'none',
                      marginRight: '10px',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#388e3c'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#4caf50'}
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingBlog(null)}
                    style={{
                      backgroundColor: '#9e9e9e',
                      color: '#fff',
                      padding: '8px 16px',
                      borderRadius: '5px',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#757575'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#9e9e9e'}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 style={{ color: '#1976d2', marginBottom: '8px' }}>{blog.title}</h3>
                <p style={{ color: '#424242', fontSize: '1.1rem', marginBottom: '12px' }}>{blog.content}</p>
                <button
                  onClick={() => handleEdit(blog)}
                  style={{
                    backgroundColor: '#0288d1',
                    color: '#fff',
                    padding: '8px 16px',
                    borderRadius: '5px',
                    border: 'none',
                    marginRight: '10px',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#0277bd'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#0288d1'}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
                  style={{
                    backgroundColor: '#e53935',
                    color: '#fff',
                    padding: '8px 16px',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#c62828'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#e53935'}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
