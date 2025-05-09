import './App.css';
import { Route, Routes } from 'react-router-dom';
import ToDoList from './ToDoList';
import HomeToDoList from './HomeToDoList';
import AllTask from './AllTask';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeToDoList />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/alltask" element={<AllTask />} />
      </Routes>
    </div>
  );
}

export default App;