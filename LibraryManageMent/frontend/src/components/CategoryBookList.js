import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../components/CategoryBookList.css"; // Assuming the CSS file for styles

export default function CategoryBookList() {
  const { genre } = useParams();
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/books/category/${genre}`)
      .then(res => setBooks(res.data))
      .catch(err => alert('Failed to fetch books'));
  }, [genre]);

  const deleteBook = async (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      await axios.delete(`http://localhost:5000/books/${id}`);
      setBooks(books.filter(book => book.id !== id));
    }
  };

  return (
    <div className="category-book-list-container">
      <h2>{genre} Books</h2>
      <button className="add-book-button" onClick={() => navigate('/add')}>➕ Add Book</button>
      <ul className="book-list">
        {books.map(b => (
          <li key={b.id} className="book-item">
            <strong>{b.title}</strong>
            <div className="book-actions">
              <Link to={`/books/${b.id}`} className="view-link">View</Link>
              <Link to={`/books/${b.id}/edit`} className="edit-link">Edit</Link>
              <button onClick={() => deleteBook(b.id)} className="delete-button">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
