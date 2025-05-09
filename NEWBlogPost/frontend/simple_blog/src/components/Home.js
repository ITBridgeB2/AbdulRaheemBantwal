// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Home() {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3001/blogs')
//       .then((res) => {
//         // Ensure the response is an array
//         if (Array.isArray(res.data.blogs)) {
//           setBlogs(res.data.blogs);
//         } else {
//           console.error('Expected an array of blogs');
//         }
//       })
//       .catch((err) => {
//         console.error('Error fetching blogs:', err);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>All Blogs</h1>
//       {blogs && blogs.length > 0 ? (
//         <div>
//           {blogs.map((blog) => (
//             <div key={blog.id}>
//               <h2>{blog.title}</h2>
//               <p>{blog.content}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No blogs available</p>
//       )}
//     </div>
//   );
// }

// export default Home;







// src/components/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/blogs')
      .then((res) => {
        if (Array.isArray(res.data.blogs)) {
          setBlogs(res.data.blogs);
        } else {
          console.error('Expected an array of blogs');
        }
      })
      .catch((err) => {
        console.error('Error fetching blogs:', err);
      });
  }, []);

  return (
    <div style={homeStyle}>
      <h1 style={headingStyle}>All Blogs</h1>
      {blogs && blogs.length > 0 ? (
        <div style={blogsContainerStyle}>
          {blogs.map((blog) => (
            <div key={blog.id} style={blogCardStyle}>
              <h2 style={blogTitleStyle}>{blog.title}</h2>
              <p style={blogContentStyle}>{blog.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No blogs available</p>
      )}
    </div>
  );
}

const homeStyle = {
  padding: '30px',
  maxWidth: '1200px',
  margin: '0 auto',
};

const headingStyle = {
  textAlign: 'center',
  fontSize: '36px',
  color: '#333',
  marginBottom: '20px',
};

const blogsContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '20px',
};

const blogCardStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
};

const blogTitleStyle = {
  fontSize: '24px',
  color: '#4CAF50',
};

const blogContentStyle = {
  fontSize: '16px',
  color: '#555',
};

export default Home;
