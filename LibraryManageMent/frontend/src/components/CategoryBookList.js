// import React, { useEffect, useState } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import "../components/CategoryBookList.css"; // Assuming the CSS file for styles

// export default function CategoryBookList() {
//   const { genre } = useParams();
//   const [books, setBooks] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get(`http://localhost:5000/books/category/${genre}`)
//       .then(res => setBooks(res.data))
//       .catch(err => alert('Failed to fetch books'));
//   }, [genre]);

//   const deleteBook = async (id) => {
//     if (window.confirm('Are you sure you want to delete this book?')) {
//       await axios.delete(`http://localhost:5000/books/${id}`);
//       setBooks(books.filter(book => book.id !== id));
//     }
//   };

//   return (
//     <div className="category-book-list-container">
//       <h2>{genre} Books</h2>
//       <button className="add-book-button" onClick={() => navigate('/add')}>➕ Add Book</button>
//       <ul className="book-list">
//         {books.map(b => (
//           <li key={b.id} className="book-item">
//             <strong>{b.title}</strong>
//             <div className="book-actions">
//               <Link to={`/books/${b.id}`} className="view-link">View</Link>
//               <Link to={`/books/${b.id}/edit`} className="edit-link">Edit</Link>
//               <button onClick={() => deleteBook(b.id)} className="delete-button">Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../components/CategoryBookList.css"; // Assuming the CSS file for styles

export default function CategoryBookList() {
  const { genre } = useParams();
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/books/category/${genre}`)
      .then(res => setBooks(res.data))
      .catch(() => alert('Failed to load books'));
  }, [genre]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:5000/books/${id}`);
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div className="category-book-list-container">
      <h2>{genre} Books</h2>

      {/* Search Bar */}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search books"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <button className="add-book-button" onClick={() => navigate('/add')}>Add Book</button>

      <div className="book-grid">
        {filteredBooks.map(b => (
          <div className="book-card" key={b.id}>
            <div className="book-card-header">
              <h3 className="book-title">{b.title}</h3>
              <p className="book-author">{b.author}</p>
            </div>
            <div className="book-card-body">
              <p className="book-genre">{b.genre}</p>
              <p className="book-publication">{b.publication_year}</p>
            </div>
            <div className="book-card-footer">
              <Link to={`/books/${b.id}`} className="view-link">View</Link>
              <Link to={`/books/${b.id}/edit`} className="edit-link">Edit</Link>
              <button className="delete-button" onClick={() => deleteBook(b.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
