// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import "../components/HomePage.css";

// export default function HomePage() {
//   const [categories, setCategories] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get('http://localhost:5000/categories')
//       .then(res => setCategories(res.data))
//       .catch(() => alert('Failed to load categories'));
//   }, []);

//   return (
//     <div style={{ padding: '30px' }}>
//       <h1 style={{ textAlign: 'center' }}>📚 Book Categories</h1>

//       <div style={{ textAlign: 'center', marginBottom: '20px' }}>
//         <button
//           onClick={() => navigate('/add')}
//           style={{
//             padding: '10px 20px',
//             backgroundColor: '#007bff',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '8px',
//             cursor: 'pointer',
//             fontSize: '16px',
//             boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
//           }}
//         >
//           ➕ Add Book
//         </button>
//       </div>

//       <div
//         style={{
//           display: 'flex',
//           gap: '20px',
//           flexWrap: 'wrap',
//           justifyContent: 'center',
//           marginTop: '20px'
//         }}
//       >
//         {categories.map((cat) => (
//           <div
//             key={cat.genre}
//             onClick={() => navigate(`/category/${cat.genre}`)}
//             style={{
//               cursor: 'pointer',
//               textAlign: 'center',
//               width: '160px'
//             }}
//           >
//             <div
//               style={{
//                 width: '150px',
//                 height: '150px',
//                 backgroundColor: '#f0f0f0',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 border: '2px solid #bbb',
//                 borderRadius: '12px',
//                 fontSize: '18px',
//                 fontWeight: 'bold',
//                 color: '#555',
//                 boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
//               }}
//             >
//               {cat.genre}
//             </div>
//             <h3 style={{ marginTop: '10px' }}>{cat.genre}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }








import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../components/HomePage.css";

export default function HomePage() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/categories')
      .then(res => setCategories(res.data))
      .catch(() => alert('Failed to load categories'));
  }, []);

  return (
    <div className="homepage-container">
      <h1 className="homepage-title">📚 Book Categories</h1>

      <div className="add-button-container">
        <button
          onClick={() => navigate('/add')}
          className="add-button"
        >
          ➕ Add Book
        </button>
      </div>

      <div className="category-grid">
        {categories.map((cat) => (
          <div
            key={cat.genre}
            onClick={() => navigate(`/category/${cat.genre}`)}
            className="category-card"
          >
            <div className="category-icon">
              {cat.genre.charAt(0)} {/* Only first letter */}
            </div>
            <h3 className="category-name">{cat.genre}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
