// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const HomeToDoList = () => {
//   const navigate = useNavigate();

//   const handleAddTask = () => {
//     navigate('/todolist');
//   };

//   const handleViewAllTask = () => {
//     navigate('/alltask');
//   };

// return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//         <h1 style={{ fontSize: '2rem', color: '#333' }}>TO DO LIST</h1>
//         <button 
//             onClick={handleAddTask} 
//             style={{ 
//                 margin: '10px', 
//                 padding: '10px 20px', 
//                 fontSize: '1rem', 
//                 cursor: 'pointer', 
//                 backgroundColor: '#4CAF50', 
//                 color: 'white', 
//                 border: 'none', 
//                 borderRadius: '5px' 
//             }}
//         >
//             ADD TASK
//         </button>
//         <button 
//             onClick={handleViewAllTask} 
//             style={{ 
//                 margin: '10px', 
//                 padding: '10px 20px', 
//                 fontSize: '1rem', 
//                 cursor: 'pointer', 
//                 backgroundColor: '#008CBA', 
//                 color: 'white', 
//                 border: 'none', 
//                 borderRadius: '5px' 
//             }}
//         >
//             VIEW ALL TASK
//         </button>
//     </div>
// );
// };

// export default HomeToDoList;





import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeToDoList.css'

const HomeToDoList = () => {
  const navigate = useNavigate();

  const handleAddTask = () => navigate('/todolist');
  const handleViewAllTask = () => navigate('/alltask');

  return (
    <div className="home-container">
      <div className="parallax-home"></div>
      <div className="home-card">
        <h1 className="home-title">📝 TO DO LIST</h1>
        <div className="home-buttons">
          <button className="glow-button green" onClick={handleAddTask}>ADD TASK</button>
          <button className="glow-button blue" onClick={handleViewAllTask}>VIEW ALL TASK</button>
        </div>
      </div>
    </div>
  );
};

export default HomeToDoList;
