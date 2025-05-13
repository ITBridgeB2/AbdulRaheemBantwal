// import React, { useEffect, useState } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function BookDetails() {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get(`http://localhost:5000/books/${id}`)
//       .then(res => setBook(res.data))
//       .catch(() => alert('Book not found'));
//   }, [id]);

//   const handleDelete = async () => {
//     await axios.delete(`http://localhost:5000/books/${id}`);
//     navigate('/');
//   };

//   if (!book) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>{book.title}</h2>
//       <p><strong>Author:</strong> {book.author}</p>
//       <p><strong>Genre:</strong> {book.genre}</p>
//       <p><strong>Year:</strong> {book.publication_year}</p>
//       <Link to={`/books/${id}/edit`}><button>Edit</button></Link>
//       <button onClick={handleDelete}>Delete</button>
//     </div>
//   );
// }









import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../components/BookDetails.css"; // Add a CSS file for styling

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/books/${id}`)
      .then(res => {
        setBook(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Book not found');
        setLoading(false);
      });
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/books/${id}`);
      navigate('/');
    } catch (err) {
      alert('Failed to delete book');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="book-details-container">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Year:</strong> {book.publication_year}</p>
      <div className="buttons">
        <Link to={`/books/${id}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
