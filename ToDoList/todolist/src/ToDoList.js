// import React, { Component } from 'react';
// import axios from 'axios';

// export default class ToDoList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             taskTitle: '',
//             taskDescription: '',
//         };
//     }

//     handleTitleChange = (e) => {
//         this.setState({ taskTitle: e.target.value });
//     };

//     handleDescriptionChange = (e) => {
//         this.setState({ taskDescription: e.target.value });
//     };

//     handleSubmit = async () => {
//         const { taskTitle, taskDescription } = this.state;
//         if (taskTitle && taskDescription) {
//             try {
//                 await axios.post('http://localhost:5000/tasks', {
//                     title: taskTitle,
//                     description: taskDescription,
//                 });
//                 alert('Task submitted successfully!');
//                 this.setState({ taskTitle: '', taskDescription: '' });
//             } catch (error) {
//                 console.error('Error submitting task:', error);
//             }
//         } else {
//             alert('Please fill in both fields.');
//         }
//     };

//     handleViewTasks = () => {
//         window.location.href = '/alltask'; // Redirect to a tasks page
//     };

//     render() {
//         const containerStyle = {
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             height: '100vh',
//             backgroundColor: '#f4f4f4',
//             fontFamily: 'Arial, sans-serif',
//             backgroundAttachment: 'fixed',
//             backgroundImage: 'url("https://via.placeholder.com/1920x1080")',
//             backgroundSize: 'cover',
//             border: '5px solid #007BFF',
//             borderRadius: '10px',
//             padding: '20px',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//         };

//         const headingStyle = {
//             fontSize: '24px',
//             fontWeight: 'bold',
//             marginBottom: '20px',
//             color: '#333',
//             animation: 'fadeIn 2s ease-in-out',
//             textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
//         };

//         const inputStyle = {
//             width: '300px',
//             padding: '10px',
//             margin: '10px 0',
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             fontSize: '16px',
//             animation: 'slideIn 1s ease-in-out',
//             boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
//         };

//         const buttonStyle = {
//             padding: '10px 20px',
//             backgroundColor: '#007BFF',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '5px',
//             fontSize: '16px',
//             cursor: 'pointer',
//             animation: 'bounce 1.5s infinite',
//             boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
//             margin: '10px 0',
//         };

//         const buttonHoverStyle = {
//             ...buttonStyle,
//             backgroundColor: '#0056b3',
//         };

//         const keyframesStyle = `
//             @keyframes fadeIn {
//                 from { opacity: 0; }
//                 to { opacity: 1; }
//             }
//             @keyframes slideIn {
//                 from { transform: translateY(-20px); opacity: 0; }
//                 to { transform: translateY(0); opacity: 1; }
//             }
//             @keyframes bounce {
//                 0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
//                 40% { transform: translateY(-10px); }
//                 60% { transform: translateY(-5px); }
//             }
//         `;

//         return (
//             <div style={containerStyle}>
//                 <style>{keyframesStyle}</style>
//                 <h1 style={headingStyle}>To-Do List</h1>
//                 <input
//                     type="text"
//                     placeholder="Task Title"
//                     value={this.state.taskTitle}
//                     onChange={this.handleTitleChange}
//                     style={inputStyle}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Task Description"
//                     value={this.state.taskDescription}
//                     onChange={this.handleDescriptionChange}
//                     style={inputStyle}
//                 />
//                 <button
//                     onClick={this.handleSubmit}
//                     style={buttonStyle}
//                     onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
//                     onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
//                 >
//                     Submit Task
//                 </button>
//                 <button
//                     onClick={this.handleViewTasks}
//                     style={buttonStyle}
//                     onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
//                     onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
//                 >
//                     View All Tasks
//                 </button>
//             </div>
//         );
//     }
// }






import React, { Component } from 'react';
import axios from 'axios';
import './ToDoList.css'; // ⬅️ Link to external CSS file

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskTitle: '',
      taskDescription: '',
    };
  }

  handleTitleChange = (e) => {
    this.setState({ taskTitle: e.target.value });
  };

  handleDescriptionChange = (e) => {
    this.setState({ taskDescription: e.target.value });
  };

  handleSubmit = async () => {
    const { taskTitle, taskDescription } = this.state;
    if (taskTitle && taskDescription) {
      try {
        await axios.post('http://localhost:5000/tasks', {
          title: taskTitle,
          description: taskDescription,
        });
        alert('Task submitted successfully!');
        this.setState({ taskTitle: '', taskDescription: '' });
      } catch (error) {
        console.error('Error submitting task:', error);
      }
    } else {
      alert('Please fill in both fields.');
    }
  };

  handleViewTasks = () => {
    window.location.href = '/alltask';
  };

  render() {
    const { taskTitle, taskDescription } = this.state;

    return (
      <div className="todo-container">
        <div className="parallax-bg"></div>
        <div className="todo-card">
          <h1 className="todo-heading">📝 Add New Task</h1>
          <input
            type="text"
            placeholder="Task Title"
            value={taskTitle}
            onChange={this.handleTitleChange}
            className="todo-input"
          />
          <input
            type="text"
            placeholder="Task Description"
            value={taskDescription}
            onChange={this.handleDescriptionChange}
            className="todo-input"
          />
          <button className="todo-button submit" onClick={this.handleSubmit}>
            Submit Task
          </button>
          <button className="todo-button view" onClick={this.handleViewTasks}>
            View All Tasks
          </button>
        </div>
      </div>
    );
  }
}


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom'; // import Link from react-router-dom
// import './AllTask.css'; // ⬅️ CSS file we'll define below

// const AllTask = () => {
//     const [tasks, setTasks] = useState([]);
//     const [editTaskId, setEditTaskId] = useState(null);
//     const [editTitle, setEditTitle] = useState('');
//     const [editDescription, setEditDescription] = useState('');

//     useEffect(() => {
//         const fetchTasks = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/tasks');
//                 setTasks(response.data);
//             } catch (error) {
//                 console.error('Error fetching tasks:', error);
//             }
//         };

//         fetchTasks();
//     }, []);

//     const handleComplete = async (id, currentStatus) => {
//         const newStatus = !currentStatus;
//         try {
//             const task = tasks.find((t) => t.id === id);
//             await axios.put(`http://localhost:5000/tasks/${id}`, {
//                 title: task.title,
//                 description: task.description,
//                 completed: newStatus,
//             });
//             setTasks((prevTasks) =>
//                 prevTasks.map((task) =>
//                     task.id === id ? { ...task, completed: newStatus } : task
//                 )
//             );
//         } catch (error) {
//             console.error('Error updating task status:', error);
//         }
//     };

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`http://localhost:5000/tasks/${id}`);
//             setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
//         } catch (error) {
//             console.error('Error deleting task:', error);
//         }
//     };

//     const handleEdit = (id, title, description) => {
//         setEditTaskId(id);
//         setEditTitle(title);
//         setEditDescription(description);
//     };

//     const handleSaveEdit = async () => {
//         if (editTitle.trim() && editDescription.trim()) {
//             const currentTask = tasks.find((task) => task.id === editTaskId);
//             try {
//                 await axios.put(`http://localhost:5000/tasks/${editTaskId}`, {
//                     title: editTitle,
//                     description: editDescription,
//                     completed: currentTask.completed,
//                 });

//                 setTasks((prevTasks) =>
//                     prevTasks.map((task) =>
//                         task.id === editTaskId
//                             ? {
//                                   ...task,
//                                   title: editTitle,
//                                   description: editDescription,
//                               }
//                             : task
//                     )
//                 );

//                 setEditTaskId(null);
//                 setEditTitle('');
//                 setEditDescription('');
//             } catch (error) {
//                 console.error('Error saving edited task:', error);
//             }
//         }
//     };

//     const handleHighlight = (id) => {
//         setTasks((prevTasks) =>
//             prevTasks.map((task) =>
//                 task.id === id ? { ...task, highlighted: !task.highlighted } : task
//             )
//         );
//     };

//     return (
//         <div className="task-container">
//             <div className="parallax-bg"></div>
//             <div className="task-list">
//                 <h1 className="title">🌟 All Tasks</h1>
//                 <ul>
//                     {tasks.map((task) => (
//                         <li
//                             key={task.id}
//                             className={`task-card ${task.highlighted ? 'highlighted' : ''}`}
//                         >
//                             <div className="task-content">
//                                 <strong>{task.title}</strong>: {task.description}
//                                 <div className="task-buttons">
//                                     <button onClick={() => handleComplete(task.id, task.completed)}>
//                                         {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
//                                     </button>
//                                     <button onClick={() => handleDelete(task.id)}>Delete</button>
//                                     <button
//                                         onClick={() => handleEdit(task.id, task.title, task.description)}
//                                     >
//                                         Edit
//                                     </button>
//                                     <button onClick={() => handleHighlight(task.id)}>
//                                         {task.highlighted ? 'Unhighlight' : 'Highlight'}
//                                     </button>
//                                 </div>
//                             </div>
//                             <div className="task-status">
//                                 <span>Status: {task.completed ? '✅ Completed' : '🕒 Pending'}</span>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {editTaskId && (
//                 <div className="edit-form">
//                     <h2>Edit Task</h2>
//                     <input
//                         type="text"
//                         value={editTitle}
//                         onChange={(e) => setEditTitle(e.target.value)}
//                         placeholder="New Title"
//                     />
//                     <input
//                         type="text"
//                         value={editDescription}
//                         onChange={(e) => setEditDescription(e.target.value)}
//                         placeholder="New Description"
//                     />
//                     <button onClick={handleSaveEdit}>Save</button>
//                     <button
//                         onClick={() => {
//                             setEditTaskId(null);
//                             setEditTitle('');
//                             setEditDescription('');
//                         }}
//                     >
//                         Cancel
//                     </button>
//                 </div>
//             )}

//             {/* Button to navigate to the Todolist page */}
//             <div className="nav-button">
//                 <Link to="/todolist">
//                     <button className="go-to-todolist-btn">Go to TodoList</button>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default AllTask;






