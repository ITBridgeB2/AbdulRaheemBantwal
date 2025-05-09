import logo from './logo.svg';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import AddBlog from './AddBlog';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<AddBlog></AddBlog>}></Route>


          
        </Routes>
      
    </div>
  );
}

export default App;
