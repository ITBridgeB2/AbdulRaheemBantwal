// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// export default function BookForm() {
//   const [book, setBook] = useState({ title: '', author: '', genre: '', publication_year: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setBook({ ...book, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post('http://localhost:5000/books', book);
//     navigate('/');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="title" placeholder="Title" onChange={handleChange} required />
//       <input name="author" placeholder="Author" onChange={handleChange} required />
//       <input name="genre" placeholder="Genre" onChange={handleChange} />
//       <input name="publication_year" placeholder="Year" type="number" onChange={handleChange} />
//       <button type="submit">Add Book</button>
//     </form>
//   );
// }










import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../components/BookForm.css"; // Add a CSS file for styling

export default function BookForm() {
  const [book, setBook] = useState({ title: '', author: '', genre: '', publication_year: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset previous errors

    try {
      await axios.post('http://localhost:5000/books', book);
      navigate('/');
    } catch (err) {
      setError('Failed to add book. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="book-form-container">
      <h2>Add New Book</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit} className="book-form">
        <input
          name="title"
          placeholder="Title"
          value={book.title}
          onChange={handleChange}
          required
        />
        <input
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
          required
        />
        <input
          name="genre"
          placeholder="Genre"
          value={book.genre}
          onChange={handleChange}
        />
        <input
          name="publication_year"
          placeholder="Year"
          type="number"
          value={book.publication_year}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Book'}
        </button>
      </form>
    </div>
  );
}
