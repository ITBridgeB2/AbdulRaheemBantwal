// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function AdminDashboard() {
//   const navigate = useNavigate();

//   const handleCardClick = (path) => {
//     navigate(path);
//   };

//   const cardStyle = {
//     height: '200px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     cursor: 'pointer',
//     fontSize: '1.5rem',
//     fontWeight: 'bold',
//     color: '#fff',
//     borderRadius: '10px',
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4 text-primary">Admin Dashboard</h2>
//       <div className="row g-4">
//         <div className="col-md-6">
//           <div
//             className="bg-primary shadow"
//             style={cardStyle}
//             onClick={() => handleCardClick('/admin/users')}
//           >
//             Users
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div
//             className="bg-success shadow"
//             style={cardStyle}
//             onClick={() => handleCardClick('/admin/reports')}
//           >
//             Reports
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div
//             className="bg-warning shadow"
//             style={cardStyle}
//             onClick={() => handleCardClick('/admin/requests')}
//           >
//             Requests
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div
//             className="bg-danger shadow"
//             style={cardStyle}
//             onClick={() => handleCardClick('/admin/hospitals')}
//           >
//             Hospitals
//           </div>
//         </div>
//       </div>
//     </div>
//   );


// }




import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css'; // Make sure to import the CSS file

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="admin-dashboard-container">
      <h2 className="admin-dashboard-header">Admin Dashboard</h2>
      <div className="card-container">
        <div className="card" onClick={() => handleCardClick('/admin/users')}>
          <h3 className="card-title">Users</h3>
          <p className="card-description">Manage and view all registered users.</p>
        </div>
        
{/*         
        <div className="card" onClick={() => handleCardClick('/admin/reports')}>
          <h3 className="card-title">Reports</h3>
          <p className="card-description">View and manage reports for the system.</p>
        </div> */}


        {/* <div className="card" onClick={() => handleCardClick('/admin/requests')}>
          <h3 className="card-title">Requests</h3>
          <p className="card-description">Manage user requests and approvals.</p>
        </div>
        <div className="card" onClick={() => handleCardClick('/admin/hospitals')}>
          <h3 className="card-title">Hospitals</h3>
          <p className="card-description">View and manage hospital details.</p> */}
        </div>
      </div>
    // </div>
  );
}
