import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CategoryBookList from './components/CategoryBookList';
import BookForm from './components/BookForm';
import BookDetails from './components/BookDetails';
import EditBook from './components/EditBook';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category/:genre" element={<CategoryBookList />} />
      <Route path="/add" element={<BookForm />} />
      <Route path="/books/:id" element={<BookDetails />} />
      <Route path="/books/:id/edit" element={<EditBook />} />
    </Routes>
  );
}

export default App;
