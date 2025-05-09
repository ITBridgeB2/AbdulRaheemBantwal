// import React, { useState, useEffect } from "react";
// import UserDetailService from './userDetailService';
// import { useParams } from "react-router-dom";

// export default function UserDetails() {
//   const { id } = useParams(); // Access the 'id' from the URL
//   const [user, setUser] = useState(null); // Store user data
//   const [status, setStatus] = useState(""); // Store approval/rejection status

//   useEffect(() => {
//     // Fetch user details when component mounts or 'id' changes
//     UserDetailService.getUserById(id)
//       .then((response) => {
//         console.log(response.data);  // Log to check if you get user data
//         setUser(response.data);      // Set the user data
//       })

//       .catch((error) => {
//         console.error("Error fetching user details:", error);
//       });
      
//   }, [id]);

//   // Approve button handler
//   const handleApprove = () => {
//     setStatus("Approved");
//   };

//   // Reject button handler
//   const handleReject = () => {
//     setStatus("edit");
//   };

//   return (
//     <div className="container mt-5">
//       {user ? (
//         <div>
//           <h2>User Details</h2>
//           <table className="table table-bordered">
//             <tbody>
//               <tr>
//                 <th>Patient Name</th>
//                 <td>{user.patient_name}</td>
//               </tr>
//               <tr>
//                 <th>Phone Number</th>
//                 <td>{user.patient_number}</td>
//               </tr>
//               <tr>
//                 <th>Date of Birth</th>
//                 <td>{user.dob}</td>
//               </tr>
//               <tr>
//                 <th>Disease</th>
//                 <td>{user.disease_name}</td>
//               </tr>
//               <tr>
//                 <th>Hospital</th>
//                 <td>{user.hospital}</td>
//               </tr>
//             </tbody>
//           </table>

//           {/* Approve/Reject buttons */}
//           <div className="mt-3">
//             <button className="btn btn-success me-2" onClick={handleApprove}>Approve</button>
//             <button className="btn btn-danger" onClick={handleReject}>edit</button>
//           </div>
//           {/* Edit form */}
//           {status === "edit" && (
//             <div className="mt-4">
//               <h3>Edit User Details</h3>
//               <form
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   // Handle form submission logic here
//                   console.log("Updated user details:", user);
//                   setStatus(""); // Reset status after editing
//                 }}
//               >
//                 <div className="mb-3">
//                   <label htmlFor="patientName" className="form-label">Patient Name</label>
//                   <input
//                     type="text"
//                     id="patientName"
//                     className="form-control"
//                     value={user.patient_name}
//                     onChange={(e) => setUser({ ...user, patient_name: e.target.value })}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="patientNumber" className="form-label">Phone Number</label>
//                   <input
//                     type="text"
//                     id="patientNumber"
//                     className="form-control"
//                     value={user.patient_number}
//                     onChange={(e) => setUser({ ...user, patient_number: e.target.value })}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="dob" className="form-label">Date of Birth</label>
//                   <input
//                     type="date"
//                     id="dob"
//                     className="form-control"
//                     value={user.dob}
//                     onChange={(e) => setUser({ ...user, dob: e.target.value })}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="diseaseName" className="form-label">Disease</label>
//                   <input
//                     type="text"
//                     id="diseaseName"
//                     className="form-control"
//                     value={user.disease_name}
//                     onChange={(e) => setUser({ ...user, disease_name: e.target.value })}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="hospital" className="form-label">Hospital</label>
//                   <input
//                     type="text"
//                     id="hospital"
//                     className="form-control"
//                     value={user.hospital}
//                     onChange={(e) => setUser({ ...user, hospital: e.target.value })}
//                   />
//                 </div>
//                 <button type="submit" className="btn btn-primary me-2">Save</button>
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   onClick={() => setStatus("")}
//                 >
//                   Cancel
//                 </button>
//               </form>
//             </div>
//           )}
//           {/* Display status */}
//           {status && (
//             <div className={`mt-4 fw-bold ${status === "Approved" ? "text-success" : "text-danger"}`}>
//               Status: {status}
//             </div>
//           )}
//         </div>
//       ) : (
//         <p>Loading user details...</p>
//       )}
//     </div>
//   );
// }






import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UserDetails() {
  const { id } = useParams(); // Get the user ID from the URL
  const navigate = useNavigate();

  // State to hold patient data
  const [patientDetails, setPatientDetails] = useState({
    patient_name: "",
    patient_number: "",
    dob: "", // Date of birth
    disease_name: "", // disease name from the backend
    hospital: "", // Hospital assigned
  });

  const [isEditing, setIsEditing] = useState(false);

  // Fetch patient data on component mount
  useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/clone/${id}`);
        setPatientDetails(response.data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };
    fetchPatientDetails();
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission (Update patient)
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      // Send updated data to backend
      const response = await axios.put(`http://localhost:8080/clone/${id}`, patientDetails);

      if (response.status === 200) {
        alert("Patient updated successfully");
        
        
        navigate("/admin/users"); // Redirect to patient management page


      }
    } catch (error) {
      console.error("Error updating patient:", error);
      alert("Failed to update patient");
    }
  };

  return (
    <div>
      <h2>Patient Details</h2>
      <div>
        {!isEditing ? (
          <div>
            <p>Patient Name: {patientDetails.patient_name}</p>
            <p>Phone Number: {patientDetails.patient_number}</p>
            <p>Date of Birth: {patientDetails.dob}</p>
            <p>Disease: {patientDetails.disease_name}</p>
            <p>Hospital: {patientDetails.hospital}</p>
            <button onClick={() => setIsEditing(true)} className="btn btn-primary">Edit</button>
          </div>
        ) : (
          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label htmlFor="patient_name">Patient Name:</label>
              <input
                type="text"
                id="patient_name"
                name="patient_name"
                value={patientDetails.patient_name}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="patient_number">Phone Number:</label>
              <input
                type="text"
                id="patient_number"
                name="patient_number"
                value={patientDetails.patient_number}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={patientDetails.dob}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="disease_name">Disease:</label>
              <input
                type="text"
                id="disease_name"
                name="disease_name"
                value={patientDetails.disease_name}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="hospital">Hospital:</label>
              <input
                type="text"
                id="hospital"
                name="hospital"
                value={patientDetails.hospital}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">Save Changes</button>
            <button type="button" onClick={() => setIsEditing(false)} className="btn btn-secondary ml-2">Cancel</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default UserDetails;
