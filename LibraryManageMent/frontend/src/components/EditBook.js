// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function EditBook() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [book, setBook] = useState({ title: '', author: '', genre: '', publication_year: '' });

//   useEffect(() => {
//     axios.get(`http://localhost:5000/books/${id}`)
//       .then(res => setBook(res.data))
//       .catch(() => alert('Book not found'));
//   }, [id]);

//   const handleChange = (e) => {
//     setBook({ ...book, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.put(`http://localhost:5000/books/${id}`, book);
//     navigate(`/books/${id}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="title" value={book.title} onChange={handleChange} required />
//       <input name="author" value={book.author} onChange={handleChange} required />
//       <input name="genre" value={book.genre} onChange={handleChange} />
//       <input name="publication_year" value={book.publication_year} onChange={handleChange} />
//       <button type="submit">Update Book</button>
//     </form>
//   );
// }







import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../components/EditBook.css"; // Add a CSS file for styling

export default function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({ title: '', author: '', genre: '', publication_year: '' });

  useEffect(() => {
    axios.get(`http://localhost:5000/books/${id}`)
      .then(res => setBook(res.data))
      .catch(() => alert('Book not found'));
  }, [id]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/books/${id}`, book);
    navigate(`/books/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={book.title} onChange={handleChange} required />
      <input name="author" value={book.author} onChange={handleChange} required />
      <input name="genre" value={book.genre} onChange={handleChange} />
      <input name="publication_year" value={book.publication_year} onChange={handleChange} />
      <button type="submit">Update Book</button>
    </form>
  );
}
