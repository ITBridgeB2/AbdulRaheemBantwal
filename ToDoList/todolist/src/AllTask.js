// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const AllTask = () => {
// //     const [tasks, setTasks] = useState([]);
// //     const [editTaskId, setEditTaskId] = useState(null);
// //     const [editTitle, setEditTitle] = useState('');
// //     const [editDescription, setEditDescription] = useState('');

// //     useEffect(() => {
// //         const fetchTasks = async () => {
// //             try {
// //                 const response = await axios.get('http://localhost:5000/tasks');
// //                 setTasks(response.data);
// //             } catch (error) {
// //                 console.error('Error fetching tasks:', error);
// //             }
// //         };

// //         fetchTasks();
// //     }, []);

// //     const handleComplete = async (id, currentStatus) => {
// //         const newStatus = !currentStatus;
// //         try {
// //             const task = tasks.find((t) => t.id === id);
// //             await axios.put(`http://localhost:5000/tasks/${id}`, {
// //                 title: task.title,
// //                 description: task.description,
// //                 completed: newStatus,
// //             });
// //             setTasks((prevTasks) =>
// //                 prevTasks.map((task) =>
// //                     task.id === id ? { ...task, completed: newStatus } : task
// //                 )
// //             );
// //         } catch (error) {
// //             console.error('Error updating task status:', error);
// //         }
// //     };

// //     const handleDelete = async (id) => {
// //         try {
// //             await axios.delete(`http://localhost:5000/tasks/${id}`);
// //             setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
// //         } catch (error) {
// //             console.error('Error deleting task:', error);
// //         }
// //     };

// //     const handleEdit = (id, title, description) => {
// //         setEditTaskId(id);
// //         setEditTitle(title);
// //         setEditDescription(description);
// //     };

// //     const handleSaveEdit = async () => {
// //         if (editTitle.trim() && editDescription.trim()) {
// //             const currentTask = tasks.find((task) => task.id === editTaskId);
// //             try {
// //                 await axios.put(`http://localhost:5000/tasks/${editTaskId}`, {
// //                     title: editTitle,
// //                     description: editDescription,
// //                     completed: currentTask.completed,
// //                 });

// //                 setTasks((prevTasks) =>
// //                     prevTasks.map((task) =>
// //                         task.id === editTaskId
// //                             ? {
// //                                   ...task,
// //                                   title: editTitle,
// //                                   description: editDescription,
// //                               }
// //                             : task
// //                     )
// //                 );

// //                 setEditTaskId(null);
// //                 setEditTitle('');
// //                 setEditDescription('');
// //             } catch (error) {
// //                 console.error('Error saving edited task:', error);
// //             }
// //         }
// //     };

// //     const handleHighlight = (id) => {
// //         setTasks((prevTasks) =>
// //             prevTasks.map((task) =>
// //                 task.id === id ? { ...task, highlighted: !task.highlighted } : task
// //             )
// //         );
// //     };

// //     return (
// //         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
// //             <div style={{ flex: 1 }}>
// //                 <h1>All Tasks</h1>
// //                 <ul>
// //                     {tasks.map((task) => (
// //                         <li
// //                             key={task.id}
// //                             style={{
// //                                 backgroundColor: task.highlighted ? 'yellow' : 'white',
// //                                 transition: 'background-color 0.3s ease',
// //                                 marginBottom: '10px',
// //                                 padding: '10px',
// //                                 border: '1px solid #ccc',
// //                                 borderRadius: '5px',
// //                                 display: 'flex',
// //                                 justifyContent: 'space-between',
// //                                 alignItems: 'center',
// //                             }}
// //                         >
// //                             <div>
// //                                 <strong>{task.title}</strong>: {task.description}
// //                                 <br />
// //                                 <button onClick={() => handleComplete(task.id, task.completed)}>
// //                                     {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
// //                                 </button>
// //                                 <button onClick={() => handleDelete(task.id)}>Delete</button>
// //                                 <button onClick={() => handleEdit(task.id, task.title, task.description)}>
// //                                     Edit
// //                                 </button>
// //                                 <button onClick={() => handleHighlight(task.id)}>
// //                                     {task.highlighted ? 'Unhighlight' : 'Highlight'}
// //                                 </button>
// //                             </div>
// //                             <div style={{ marginLeft: '20px', textAlign: 'right' }}>
// //                                 <span>Status: {task.completed ? 'Completed' : 'Pending'}</span>
// //                             </div>
// //                         </li>
// //                     ))}
// //                 </ul>
// //             </div>

// //             {editTaskId && (
// //                 <div style={{ flex: 0.3, marginLeft: '20px' }}>
// //                     <h2>Edit Task</h2>
// //                     <input
// //                         type="text"
// //                         value={editTitle}
// //                         onChange={(e) => setEditTitle(e.target.value)}
// //                         placeholder="New Title"
// //                     />
// //                     <input
// //                         type="text"
// //                         value={editDescription}
// //                         onChange={(e) => setEditDescription(e.target.value)}
// //                         placeholder="New Description"
// //                     />
// //                     <button onClick={handleSaveEdit}>Save</button>
// //                     <button
// //                         onClick={() => {
// //                             setEditTaskId(null);
// //                             setEditTitle('');
// //                             setEditDescription('');
// //                         }}
// //                     >
// //                         Cancel
// //                     </button>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default AllTask;











// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
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
//         </div>
//     );
// };

// export default AllTask;


// --------------------------------------------------------------


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; 
// import './AllTask.css'; 

// const AllTask = () => {
//     const [tasks, setTasks] = useState([]);
//     const [editTaskId, setEditTaskId] = useState(null);
//     const [editTitle, setEditTitle] = useState('')

//     const [editDescription, setEditDescription] = useState('');


//     const navigate = useNavigate(); 
    

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
//         if (editTitle.trim() && editDescription.trim())
            
//             {
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




//     const goToAnotherPage = () => {
//         navigate('/todolist')
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

            
//             <button className="go-to-page-btn" onClick={goToAnotherPage}>
//                 ADD TASK
//             </button>
//         </div>
//     );
// };

// export default AllTask;







import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './AllTask.css'; 

const AllTask = () => {
    const [tasks, setTasks] = useState([]);
    const [editTaskId, setEditTaskId] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editDescription, setEditDescription] = useState('');



    const [filterStatus, setFilterStatus] = useState('All'); // ✅ New state for filtering

    const navigate = useNavigate(); 
    
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('http://localhost:5000/tasks');
                setTasks(response.data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, []);

    const handleComplete = async (id, currentStatus) => {
        const newStatus = !currentStatus;
        try {
            const task = tasks.find((t) => t.id === id);
            await axios.put(`http://localhost:5000/tasks/${id}`, {
                title: task.title,
                description: task.description,
                completed: newStatus,
            });
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.id === id ? { ...task, completed: newStatus } : task
                )
            );
        } catch (error) {
            console.error('Error updating task status:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/tasks/${id}`);
            setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const handleEdit = (id, title, description) => {
        setEditTaskId(id);
        setEditTitle(title);
        setEditDescription(description);
    };

    const handleSaveEdit = async () => {
        if (editTitle.trim() && editDescription.trim()) {
            const currentTask = tasks.find((task) => task.id === editTaskId);
            try {
                await axios.put(`http://localhost:5000/tasks/${editTaskId}`, {
                    title: editTitle, 
                    description: editDescription,
                    completed: currentTask.completed,
                });

                setTasks((prevTasks) =>
                    prevTasks.map((task) =>
                        task.id === editTaskId
                            ? { ...task, title: editTitle, description: editDescription }
                            : task
                    )
                );

                setEditTaskId(null);
                setEditTitle('');
                setEditDescription('');
            } catch (error) {
                console.error('Error saving edited task:', error);
            }
        }
    };

    const handleHighlight = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, highlighted: !task.highlighted } : task
            )
        );
    };

    const goToAnotherPage = () => {
        navigate('/todolist');
    };

    // ✅ Filter tasks based on selected status
    const filteredTasks = tasks.filter((task) => {
        if (filterStatus === 'Completed') return task.completed;
        if (filterStatus === 'Pending') return !task.completed;
        return true; // All
    });

    return (
        <div className="task-container">
            <div className="parallax-bg"></div>
            <div className="task-list">
                <h1 className="title">🌟 All Tasks</h1>

                {/* ✅ Status Filter Dropdown */}


                <div className="filter-section">
                    <label htmlFor="statusFilter">Filter by Status: </label>
                    <select
                        id="statusFilter"
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="Completed">Completed</option>
                        <option value="Pending">Pending</option>
                    </select>
                </div>



                <ul>
                    {filteredTasks.map((task) => (
                        <li
                            key={task.id}
                            className={`task-card ${task.highlighted ? 'highlighted' : ''}`}
                        >
                            <div className="task-content">
                                <strong>{task.title}</strong>: {task.description}
                                <div className="task-buttons">
                                    <button onClick={() => handleComplete(task.id, task.completed)}>
                                        {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
                                    </button>
                                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                                    <button
                                        onClick={() => handleEdit(task.id, task.title, task.description)}
                                    >
                                        Edit
                                    </button>
                                    <button onClick={() => handleHighlight(task.id)}>
                                        {task.highlighted ? 'Unhighlight' : 'Highlight'}
                                    </button>
                                </div>
                            </div>
                            <div className="task-status">
                                <span>Status: {task.completed ? '✅ Completed' : '🕒 Pending'}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {editTaskId && (
                <div className="edit-form">
                    <h2>Edit Task</h2>
                    <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        placeholder="New Title"
                    />
                    <input
                        type="text"
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        placeholder="New Description"
                    />
                    <button onClick={handleSaveEdit}>Save</button>
                    <button
                        onClick={() => {
                            setEditTaskId(null);
                            setEditTitle('');
                            setEditDescription('');
                        }}
                    >
                        Cancel
                    </button>
                </div>
            )}

            <button className="go-to-page-btn" onClick={goToAnotherPage}>
                ADD TASK
            </button>
        </div>
    );
};

export default AllTask;

