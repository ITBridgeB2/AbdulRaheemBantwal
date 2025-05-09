// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function CreateBlog() {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Sending new blog data to backend
//     axios.post('http://localhost:3001/create-blog', { title, content })
//       .then(() => {
//         alert('Blog created successfully');
//         navigate('/dashboard');  // Redirect to dashboard after successful creation
//       })
//       .catch(() => alert('Error creating blog'));
//   };

//   return (
//     <div
//       style={{
//         padding: '50px',
//         fontFamily: 'Segoe UI, sans-serif',
//         background: 'linear-gradient(to bottom right, #e3f2fd, #e1f5fe)',
//         minHeight: '100vh'
//       }}
//     >
//       <h2
//         style={{
//           textAlign: 'center',
//           marginBottom: '30px',
//           color: '#0d47a1',
//           fontSize: '2.5rem',
//           textShadow: '1px 1px 2px #90caf9'
//         }}
//       >
//         Create New Blog
//       </h2>

//       <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Blog Title"
//           required
//           style={{
//             width: '100%',
//             padding: '10px',
//             marginBottom: '20px',
//             borderRadius: '5px',
//             border: '1px solid #b3e5fc'
//           }}
//         />
//         <textarea
//           rows="6"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           placeholder="Blog Content"
//           required
//           style={{
//             width: '100%',
//             padding: '10px',
//             marginBottom: '20px',
//             borderRadius: '5px',
//             border: '1px solid #b3e5fc'
//           }}
//         />
//         <div style={{ textAlign: 'center' }}>
//           <button
//             type="submit"
//             style={{
//               backgroundColor: '#43a047',
//               color: '#fff',
//               padding: '10px 20px',
//               fontSize: '1rem',
//               borderRadius: '5px',
//               border: 'none',
//               cursor: 'pointer',
//               transition: 'background-color 0.2s ease'
//             }}
//             onMouseOver={(e) => (e.target.style.backgroundColor = '#388e3c')}
//             onMouseOut={(e) => (e.target.style.backgroundColor = '#43a047')}
//           >
//             Create Blog
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
import React, { useState } from 'react';
import axios from 'axios'; // Make sure you have axios installed
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function CreateBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState(1); // This should come from your logged-in user context or state
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3001/post-blog', {
        userId: userId,
        title: title,
        content: content,
      });
      console.log('Blog Created:', response.data);

      // Redirect to Dashboard after successful blog creation
      navigate('/dashboard');  // This will navigate to the /dashboard route
    } catch (error) {
      console.error('Error creating blog:', error.response ? error.response.data : error);
    }
  };

  const containerStyle = {
    padding: '50px',
    fontFamily: 'Segoe UI, sans-serif',
    background: 'linear-gradient(to bottom right, #e3f2fd, #e1f5fe)',
    minHeight: '100vh',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#0d47a1',
    fontSize: '2.5rem',
    textShadow: '1px 1px 2px #90caf9',
  };

  const formStyle = {
    maxWidth: '600px',
    margin: '0 auto',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #b3e5fc',
  };

  const textareaStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #b3e5fc',
    minHeight: '200px',
  };

  const buttonStyle = {
    backgroundColor: '#43a047',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Create Blog</h2>

      <div style={formStyle}>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={textareaStyle}
        />
        <button onClick={handleSubmit} style={buttonStyle}>
          Submit Blog
        </button>
      </div>
    </div>
  );
}

export default CreateBlog;
