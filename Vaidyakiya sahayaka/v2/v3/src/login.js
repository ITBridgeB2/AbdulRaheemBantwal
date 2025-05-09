// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from "react";
// import userdetailService from "./userDetailService";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//     const [formData, setFormData] = useState({
//         mobileNumber: '',
//         password: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         userdetailService.validateUser(formData.mobileNumber, formData.password)
//             .then(response => {
//                 alert("User Logged in successfully");
//                 navigate('/welcome');
//             })
//             .catch((error) => {
//                 console.log("Invalid" + error);
//                 alert("Invalid credentials");
//             });
//     };

//     return (
//         <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//             <div className="card shadow-lg p-4" style={{ width: '400px' }}>
//                 <h2 className="text-center mb-4">Login</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
//                         <input
//                             type="tel"
//                             id="mobileNumber"
//                             name="mobileNumber"
//                             className="form-control"
//                             placeholder="Enter your mobile number"
//                             onChange={handleChange}
//                             value={formData.mobileNumber}
//                             required
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="password" className="form-label">Password</label>
//                         <input
//                             type="password"
//                             id="password"
//                             name="password"
//                             className="form-control"
//                             placeholder="Enter your password"
//                             onChange={handleChange}
//                             value={formData.password}
//                             required
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-primary w-100">Login</button>
//                 </form>
//                 <div className="text-center mt-3">
//                     <p className="mb-0">Don't have an account? <a href="/register" className="text-primary">Register</a></p>
//                 </div>
//             </div>
//         </div>
//     );
// }




// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from "react";
// import userdetailService from "./userDetailService";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from './AuthContext';  // Import the useAuth hook

// export default function Login() {
//     const [formData, setFormData] = useState({
//         mobileNumber: '',
//         password: ''
//     });

//     const { login } = useAuth(); // Use the login function from AuthContext
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         userdetailService.validateUser(formData.mobileNumber, formData.password)
//             .then(response => {
//                 alert("User Logged in successfully");
//                 login(); // Mark the user as logged in
//                 navigate('/userdashboard'); // Redirect to the User Dashboard
//             })
//             .catch((error) => {
//                 console.log("Invalid" + error);
//                 alert("Invalid credentials");
//             });
//     };

//     return (
//         <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//             <div className="card shadow-lg p-4" style={{ width: '400px' }}>
//                 <h2 className="text-center mb-4">Login</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
//                         <input
//                             type="tel"
//                             id="mobileNumber"
//                             name="mobileNumber"
//                             className="form-control"
//                             placeholder="Enter your mobile number"
//                             onChange={handleChange}
//                             value={formData.mobileNumber}
//                             required
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="password" className="form-label">Password</label>
//                         <input
//                             type="password"
//                             id="password"
//                             name="password"
//                             className="form-control"
//                             placeholder="Enter your password"
//                             onChange={handleChange}
//                             value={formData.password}
//                             required
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-primary w-100">Login</button>
//                 </form>
//                 <div className="text-center mt-3">
//                     <p className="mb-0">Don't have an account? <a href="/register" className="text-primary">Register</a></p>
//                 </div>
//             </div>
//         </div>
//     );
// }









// 0-----



import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import userdetailService from "./userDetailService";
import { useNavigate } from "react-router-dom";
import { useAuth } from './AuthContext';

export default function Login() {
    const [formData, setFormData] = useState({
        mobileNumber: '',
        password: ''
    });

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { mobileNumber, password } = formData;
;
        
        

        // ✅ Admin Login (Hardcoded)
        if (mobileNumber === "admin" && password === "admin") {
            alert("Admin logged in successfully");
            login();
            navigate("/admin");
            return;
        }

        // ✅ Validate against DB `clone` table
        userdetailService.validateUser(mobileNumber, password)
            .then(response => {
                alert("User logged in successfully");
                login();
                navigate('/welcome');
            })
            .catch((error) => {
                console.error("Login failed:", error);
                alert("Invalid credentials");
            });
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow-lg p-4" style={{ width: '400px' }}>
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
                        <input
                            type="tel"
                            id="mobileNumber"
                            name="mobileNumber"
                            className="form-control"
                            placeholder="Enter your mobile number"
                            onChange={handleChange}
                            value={formData.mobileNumber}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter your password"
                            onChange={handleChange}
                            value={formData.password}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100" > Login</button>
                </form>
                <div className="text-center mt-3">
                    <p className="mb-0">Don't have an account? <a href="/register" className="text-primary">Register</a></p>
                </div>
            </div>
        </div>
    );
}
